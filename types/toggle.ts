import { SvelteComponentTyped } from 'svelte'

export type Props = Partial<{
  init: boolean
  name: string
  value: string | number
  checked: boolean
  disabled: boolean
  readOnly: boolean
}>

type Events = {
  change: Event
  toggleChange: boolean
}

export declare class Toggle extends SvelteComponentTyped<Props, Events> {
  public toggle(): void
}
