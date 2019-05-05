import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
      state: {
        loadedPosts: []
      },
      mutations: {
        setPosts(state, posts) {
          state.loadedPosts = posts;
        }
      },
      actions: {
        nuxtServerInit(vuexContext, context) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              vuexContext.commit("setPosts", [
                { 
                    id: '1', 
                    title: 'First Test Post', 
                    previewText: 'First preview text test', 
                    thumbnail: 'https://static1.squarespace.com/static/5aadc54285ede1bd72181a3a/t/5aadccec0e2e725448d54c7c/1521339652089/shutterstock_538256848.jpg?format=1500w'
                  },
                  {
                    id: '2', 
                    title: 'Second Test Post', 
                    previewText: 'Second preview text test', 
                    thumbnail: 'https://azialand.ru/wp-content/uploads/2013/11/331331897.jpg'
                  } 
              ]);
              resolve();
            }, 1000);
          });
        },
        setPosts(vuexContext, posts) {
          vuexContext.commit("setPosts", posts);
        }
      },
      getters: {
        loadedPosts(state) {
          return state.loadedPosts;
        }
      }
    });
  };

export default createStore