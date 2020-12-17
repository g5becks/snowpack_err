/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  inner: boolean
  position: string
  top: boolean
  topIos: boolean
  topMd: boolean
  topAurora: boolean
  bottom: boolean
  bottomMd: boolean
  bottomAurora: boolean
  bottomIos: boolean
  tabbar: boolean
  labels: boolean
  scrollable: boolean
  noShadow: boolean
  noHairline: boolean
  hidden: boolean
}>

type Events = {
  toolbarHide: undefined
  toolbarShow: undefined
}

type Slots = {
  default: any
  beforeInner: any
  afterInner: any
}

export declare class Toolbar extends SvelteComponentTyped<Props, Events, Slots> {
  public hide(animate: boolean): void
  public show(animate: boolean): void
}
