import { SvelteComponentTyped } from 'svelte'
import type { Component } from 'framework7'
type Props = Partial<{
  tabletFullscreen: boolean
  opened: boolean
  backdrop: boolean
  backdropEl: string | Record<string, string>
  closeByBackdropClick: boolean
  animate: boolean
  swipeToClose: boolean | string
  swipeHandler: HTMLElement | string
  push: boolean
}>

type Events = {
  popupOpen: Component
  popupOpened: Component
  popupClose: Component
  popupClosed: Component
  popupSwipeStart: Component
  popupSwipeMove: Component
  popupSwipeEnd: Component
  popupSwipeClose: Component
}

export declare class Popup extends SvelteComponentTyped<Props, Events> {
  public open(animate: boolean): void
  public close(animate: boolean): void
}
