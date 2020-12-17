/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  title: string
  subtitle: string
  backlink: string
  backlinkUrl: string
  backlinkForce: boolean
  backLinkShowText: boolean
  sliding: boolean
  noShadow: boolean
  noHairline: boolean
  hidden: boolean
  innerClass: string
  large: boolean
  transparent: boolean
  titleLarge: string
}>

type Events = {
  backClick: undefined
  clickBack: undefined
  navbarHide: undefined
  navbarCollapse: undefined
  navbarExpand: undefined
}

const beforeInner = 'before-inner'
const afterInner = 'after-inner'
const titleLarge = 'title-large'

type Slots = {
  default: any
  [beforeInner]: any
  [afterInner]: any
  left: any
  right: any
  title: any
  [titleLarge]: any
}

export declare class Navbar extends SvelteComponentTyped<Props, Events, Slots> {
  public hide(animate: boolean): void
  public show(animate: boolean): void
  public size(): void
}
