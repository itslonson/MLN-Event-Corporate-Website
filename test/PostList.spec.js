import {
  mount
} from '@vue/test-utils';
import PostList from "@/components/Posts/PostList.vue";
describe('PostList', () => {
  test('является компонентом Vue', () => {
    const wrapper = mount(PostList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
