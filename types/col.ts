import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  tag: string
  width: number | string
  xsmall: number
  small: number
  medium: number
  large: number
  xlarge: number
  resizable: boolean
  resizableAbsolute: boolean
  resizableFixed: boolean
  resizableHandler: boolean
}>

type Events = {
  click: undefined
  gridResize: undefined
}

export class Col extends SvelteComponentTyped<Props, Events> {}
