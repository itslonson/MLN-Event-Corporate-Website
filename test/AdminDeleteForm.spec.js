import {
  mount
} from '@vue/test-utils';
import AdminDeleteForm from "@/components/Admin/AdminDeleteForm.vue";

describe('AdminDeleteForm', () => {
  test('является компонентом Vue', () => {
    const wrapper = mount(AdminDeleteForm)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
