import { atom } from 'recoil'

const sidebarState = atom({
  key: 'sidebarActive',
  default: false,
})

export default sidebarState