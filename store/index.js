import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({

    state: {
      loadedPosts: [],
      loadedRequests: [],
      token: null
    },

    mutations: {

      setPosts(state, posts) {
        state.loadedPosts = posts;
      },

      setRequests(state, requests) {
        state.loadedRequests = requests;
      },

      addPost(state, post) {
        state.loadedPosts.push(post)
      },

      addRequest(state, requests) {
        state.loadedRequests.push(requests)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },

      editRequest(state, requestedPost) {
        const postIndex = state.requestedPost.findIndex(post => post.id === requestedPost.id);
        state.loadedRequests[postIndex] = requestedPost;
      },

      updatePosts(state) {
        let newArray = []
        axios.get(process.env.fbURL + "/posts.json")
          .then(res => {
            for (const key in res.data) {
              newArray.push({
                ...res.data[key],
                id: key
              })
            }
          })
        state.loadedPosts = newArray;
      },

      setToken(state, token) {
        state.token = token
      },

      clearToken(state) {
        state.token = null;
      }
    },

    actions: {

      nuxtServerInit(vuexContext, context) {
        return axios.get(process.env.fbURL + "/posts.json")
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({
                ...res.data[key],
                id: key
              })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },

      getRequests(vuexContext) {
        return axios.get(process.env.fbURL + "/requests.json?auth=" + vuexContext.state.token)
          .then(res => {
            const requestsArray = []
            for (const key in res.data) {
              requestsArray.push({
                ...res.data[key],
                id: key
              })
            }
            vuexContext.commit('setRequests', requestsArray)
          })
          .catch(e => context.error(e))
      },

      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post(process.env.fbURL + "/posts.json?auth=" + vuexContext.state.token, createdPost)
          .then(result => {
            vuexContext.commit('addPost', {
              ...createdPost,
              id: result.data.name
            })
          })
          .catch(e => console.log(e))
      },

      addRequest(vuexContext, request) {
        const createdRequest = {
          ...request,
        }
        return axios.post(process.env.fbURL + "/requests.json", createdRequest)
          .then(result => {
            vuexContext.commit('addRequest', {
              ...createdRequest,
              id: result.data.name
            })
          })
          .catch(e => console.log(e))
      },

      editPost(vuexContext, editedPost) {
        return axios.put(process.env.fbURL + "/posts/" +
            editedPost.id + ".json?auth=" + vuexContext.state.token, editedPost)
          .then(result => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },

      deletePost(vuexContext, deletedPost) {
        return axios.delete(process.env.fbURL + "/posts/" +
            deletedPost.id + ".json?auth=" + vuexContext.state.token, deletedPost)
          .then(result => {
            vuexContext.commit('updatePosts');
          })
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      authenticateUser(vuexContext, authData) {
        return this.$axios
          .$post(
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
            process.env.fbAPIKey, {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          )
          .then(result => {
            vuexContext.commit('setToken', result.idToken);
            localStorage.setItem("token", result.idToken);
            localStorage.setItem("tokenExpiration",
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000);
            Cookie.set('jwt', result.idToken);
            Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
          })
          .catch(e => console.log(e));
      },

      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
          if (!jwtCookie) {
            return;
          }

          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch('logout');
          return;
        }
        vuexContext.commit("setToken", token);
      },

      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },

    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      loadedRequests(state) {
        return state.loadedRequests;
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  });
};

export default createStore
