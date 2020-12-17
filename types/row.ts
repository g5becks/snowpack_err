import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  noGap: boolean
  tag: string
  resizable: boolean
  resizableAbsolute: boolean
  resizableFixed: boolean
  resizableHandler: boolean
}>

type Events = {
  click: undefined
  gridResize: undefined
}

export class Row extends SvelteComponentTyped<Props, Events> {}
