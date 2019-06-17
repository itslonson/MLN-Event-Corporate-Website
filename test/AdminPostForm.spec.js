import {
  mount
} from '@vue/test-utils';
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";


describe('AdminPostForm', () => {
  test('является компонентом Vue', () => {
    const wrapper = mount(AdminPostForm)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
