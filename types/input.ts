import type { CalendarParams, ColorPickerParams, InputEvents, InputSlots, TextEditorParams } from './list-input'
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  id: string
  outline: boolean
  type:
    | 'textarea'
    | 'select'
    | 'datepicker'
    | 'colorpicker'
    | 'texteditor'
    | 'email'
    | 'search'
    | 'tel'
    | 'url'
    | 'number'
    | 'range'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | 'date'
    | 'color'
  resizable: boolean
  inputStyle: Record<string, unknown>
  clearButton: boolean
  validate: boolean
  validateOnBlur: boolean
  onValidate: (value?: unknown) => boolean
  errorMessage: string
  errorMessageForce: boolean
  info: string
  placeholder: string
  inputId: string
  value: string
  inputmode: string
  size: string | number
  pattern: string
  accept: string | number
  autocomplete: string
  autofocus: boolean
  autosave: string
  checked: boolean
  disabled: boolean
  max: string | number
  min: string | number
  step: string | number
  maxlength: string | number
  minlength: number | string
  multiple: boolean
  readOnly: boolean
  required: boolean
  tabindex: string | number
  noStoreData: boolean
  ignoreStoreData: boolean
  wrap: boolean
  calenderParams: CalendarParams
  colorPickerParams: ColorPickerParams
  textEditorParams: TextEditorParams
  name: string
}>

export class Input extends SvelteComponentTyped<Props, InputEvents, InputSlots> {}
