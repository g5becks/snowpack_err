import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  inset: boolean
  xsmallInset: boolean
  smallInset: boolean
  mediumInset: boolean
  largeInset: boolean
  xlargeInset: boolean
  strong: boolean
  accordionList: boolean
  tabs: boolean
  tab: boolean
  tabActive: boolean
  noHairlines: boolean
  noHairlinesMd: boolean
  noHairlinesIos: boolean
}>

export class Block extends SvelteComponentTyped<Props> {}
export class BlockHeader extends SvelteComponentTyped {}
export class BlockFooter extends SvelteComponentTyped {}
