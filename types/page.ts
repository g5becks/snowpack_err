import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  name: string
  stacked: boolean
  messagesContent: boolean
  pageContent: boolean
  tabs: boolean
  loginScreen: boolean
  noSwipeback: boolean
  withSubnavbar: boolean
  noNavbar: boolean
  noToolbar: boolean
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
}>

type Events = {
  pageMounted: Page
  pageInit: Page
  pageReinit: Page
  pageBeforeIn: Page
  pageBeforeOut: Page
  pageAfterOut: Page
  pageAfterIn: Page
  pageBeforeRemove: Page
  pageBeforeUnmount: Page
  pageTabShow: undefined
  pageTabHide: undefined
  ptrPullStart: undefined
  ptrPullMove: undefined
  ptrPullEnd: undefined
  ptrRefresh: boolean
  ptrDone: undefined
  infinite: undefined
}

type Slots = {
  default: any
  fixed: any
}

export class Page extends SvelteComponentTyped<Props, Events, Slots> {}
