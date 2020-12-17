import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  mediaList: boolean
  sortable: boolean
  sortableTapHold: boolean
  simpleList: boolean
}>

export class ListGroup extends SvelteComponentTyped<Props> {}
