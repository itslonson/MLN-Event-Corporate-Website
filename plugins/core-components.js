import Vue from 'vue';

import PostList from '@/components/Posts/PostList';
import RequestList from '@/components/Requests/RequestList';
import RequestPostForm from '@/components/Form/RequestPostForm';
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import AdminPostForm from "@/components/Admin/AdminPostForm";
import AdminDeleteForm from "@/components/Admin/AdminDeleteForm";

Vue.component('PostList', PostList)
Vue.component('RequestList', RequestList);
Vue.component('RequestPostForm', RequestPostForm);
Vue.component('AppControlInput', AppControlInput)
Vue.component('AppButton', AppButton)
Vue.component('AdminPostForm', AdminPostForm)
Vue.component('AdminDeleteForm', AdminDeleteForm)
