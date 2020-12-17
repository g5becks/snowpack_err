/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvelteComponentTyped } from 'svelte'

type DateRange = Date[] | ((date: Date) => boolean) | { from: Date; to: Date } | { date: Date }
type RangeClasses = { cssClass: string; range: DateRange }[]
type DateTimeFormatOpts = {
  localeMatcher?: string
  weekday?: string
  era?: string
  year?: string
  month?: string
  day?: string
  hour?: string
  minute?: string
  second?: string
  timeZoneName?: string
  formatMatcher?: string
  hour12?: boolean
  timeZone?: string
}

export type CalendarParams = Partial<{
  locale: string
  value: Date[]
  disabled: DateRange
  events: DateRange
  rangeClasses: RangeClasses
  formatValue: (date: Date) => string
  monthNames: string[] | 'auto'
  monthNamesShort: string[] | 'auto'
  dayNames: string[] | 'auto'
  dayNamesShort: string[] | 'auto'
  firstDay: 0 | 1 | 2 | 3 | 4 | 5 | 6
  weekendDays: [0, 5, 6] | [0, 6]
  dateFormat: string | DateTimeFormatOpts
  multiple: boolean
  rangePicker: boolean
  rangePickerMinDays: number
  rangePickerMaxDays: number
  direction: 'horizontal' | 'vertical'
  minDate: Date
  maxDate: Date
  touchMove: boolean
  animate: boolean
  closeOnSelect: boolean
  weekHeader: boolean
  monthSelector: boolean
  monthPicker: boolean
  yearSelector: boolean
  yearPicker: boolean
  yearPickerMin: number
  yearPickerMax: number
  timePicker: boolean
  timePickerFormat: DateTimeFormatOpts
  timePickerPlaceholder: string
  containerEl: string | HTMLElement
  openIn: string
  sheetPush: boolean
  sheetSwipeToClose: boolean
  inputEl: string | HTMLElement
  scrollToInput: boolean
  inputReadOnly: boolean
  cssClass: string
  closeByOutsideClick: boolean
  toolbar: boolean
  toolbarCloseText: string
  header: boolean
  headerPlaceholder: string
  routableModals: string
  url: string
  view: Record<string, unknown>
  backdrop: boolean
  closeByBackdropClick: boolean
  renderWeekHeader: () => string
  renderMonths: (date?: Date) => string
  renderMonth: (date?: Date, offset?: number) => string
  renderMonthSelector: () => string
  renderYearSelector: () => string
  renderHeader: () => string
  renderToolbar: () => string
  render: () => string
}>

type ColorPickerValue = Partial<{
  value: Partial<{
    hex: string
    rgb: [number, number, number]
    hsl: [number, number, number]
    hsb: [number, number, number]
    alpha: number
    hue: number
    rgba: [number, number, number, number]
    hsla: [number, number, number, number]
  }>
}>

export type ColorPickerParams = Partial<{
  value: ColorPickerValue
  modules: (
    | 'wheel'
    | 'sb-spectrum'
    | 'hue-slider'
    | 'hs-spectrum'
    | 'brightness-slider'
    | 'rgb-sliders'
    | 'hsb-sliders'
    | 'alpha-slider'
    | 'rgb-bars'
    | 'palette'
    | 'hex'
    | 'current-color'
    | 'initial-current-colors'
  )[]
  palette: string[] | string[][]
  groupedModules: boolean
  centerModules: boolean
  sliderLabel: boolean
  sliderValueEditable: boolean
  barLabel: boolean
  barValue: boolean
  barValueEditable: boolean
  hexLabel: boolean
  hexValueEditable: boolean
  redLabelText: string
  greenLabelText: string
  blueLabelText: string
  hueLabelText: string
  saturationLabelText: string
  brightnessLabelText: string
  hexLabelText: string
  alphaLabelText: string
  formatValue: (value: ColorPickerValue) => string
  containerEl: string | HTMLElement
  openIn: string
  openInPhone: string
  popupPush: boolean
  popupSwipeToClose: boolean
  sheetPush: boolean
  sheetSwipeToClose: boolean
  inputEl: string | HTMLElement
  targetEl: string | HTMLElement
  targetElSetBackgroundColor: boolean
  scrollToInput: boolean
  inputReadOnly: boolean
  cssClass: string
  closeByOutsideClick: boolean
  toolbarSheet: boolean
  toolbarPopover: boolean
  toolbarCloseText: string
  navbarPopup: boolean
  navbarCloseText: string
  navbarTitleText: string
  navbarBacklinkText: string
  routableModals: boolean
  url: string
  view: Record<string, unknown>
  backdrop: boolean
  closeByBackdropClick: boolean
  renderToolbar: () => string
  renderNavbar: (date: Date) => string
  render: () => string
}>

export type TextEditorParams = Partial<{
  el: HTMLElement | string
  value: string
  placeholder: string
  mode: 'toolbar' | 'popover' | 'keyboard-toolbar'
  buttons: string[] | string[][]
  dividers: boolean
  imageUrlText: string
  linkUrlText: string
  clearFormattingOnPaste: boolean
  customButtons: Record<string, unknown>
}>
type Props = Partial<{
  id: string
  media: string
  label: string
  inlineLabel: boolean
  floatingLabel: boolean
  outline: boolean
  input: boolean
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
}>

export type InputEvents = {
  focus: Event
  blur: Event
  input: Event
  change: Event
  inputClear: Event
  textareaResize: Event
  inputEmpty: Event
  inputNotEmpty: Event
  calendarChange: Date[]
  colorPickerChange: unknown[]
  textEditorChange: string
}

const errorMessage = 'error-message'
const rootStart = 'root-start'
const rootEnd = 'root-end'
const contentStart = 'contents-start'
const contentEnd = 'content-end'
const innerStart = 'inner-start'
const innerEnd = 'inner-end'

export type InputSlots = {
  default: any
  info: any
  [errorMessage]: any
  label: any
  input: any
  [rootStart]: any
  root: any
  [rootEnd]: any
  [contentStart]: any
  content: any
  [contentEnd]: any
  [innerStart]: any
  [innerEnd]: any
  inner: any
  media: any
}

export class ListInput extends SvelteComponentTyped<Props, InputEvents, InputSlots> {}
