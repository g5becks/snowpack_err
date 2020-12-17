import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  tab: boolean
  tabActive: boolean
  hideBarsOnScroll: boolean
  hideNavbarOnScroll: boolean
  hideToolbarOnScroll: boolean
  ptr: boolean
  ptrDistance: number
  ptrPreloader: boolean
  ptrBottom: boolean
  ptrMouseWheel: boolean
  infinite: boolean
  infiniteTop: boolean
  infiniteBottom: boolean
  infiniteDistance: boolean
  infinitePreloader: boolean
  messagesContent: boolean
  loginScreen: boolean
}>

type Events = {
  ptrPullStart: undefined
  ptrPullMove: undefined
  ptrPullEnd: undefined
  ptrRefresh: boolean
  ptrDone: undefined
  infinite: undefined
  tabShow: undefined
  tabHide: undefined
}

export class PageContent extends SvelteComponentTyped<Props, Events> {}
