import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  backLink: boolean | string
  backLinkUrl: string
  backLinkForce: boolean
  backLinkShowText: boolean
  sliding: boolean
}>

type Events = {
  backClick: undefined
  clickBack: undefined
}

export class NavLeft extends SvelteComponentTyped<Props, Events> {}
