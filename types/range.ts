import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  init: boolean
  value: number | string | (number | string)[]
  min: number | string
  max: number | string
  step: number | string
  label: boolean
  dual: boolean
  vertical: boolean
  verticalReversed: boolean
  draggableBar: boolean
  formatLabel: (value: string) => string
  scale: boolean
  scaleSteps: boolean
  scaleSubSteps: number
  formatScaleLabel: (value: number) => number
  limitKnobPosition: boolean
  disabled: boolean
  id: string
  input: boolean
  inputId: string
  name: string
}>

type Events = {
  rangeChanged: number | string | (number | string)[]
  rangeChange: number | string | (number | string)[]
}

export declare class Range extends SvelteComponentTyped<Props, Events> {
  public setValue(value: number | string | (number | string)[]): void
  public getValue(): number | string | (number | string)[]
}
