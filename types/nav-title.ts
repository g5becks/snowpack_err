import { SvelteComponentTyped } from "svelte"

type Props = Partial<{
  title: string
  subtitle: string
  sliding: boolean
}>

export class NavTitle extends SvelteComponentTyped<Props> {}
