import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  raised: boolean
  raisedIos: boolean
  raisedMd: boolean
  raisedAurora: boolean
  round: boolean
  roundIos: boolean
  roundMd: boolean
  roundAurora: boolean
  strong: boolean
  strongIos: boolean
  strongMd: boolean
  strongAurora: boolean
  tag: string
}>

export class Segmented extends SvelteComponentTyped<Props> {}
