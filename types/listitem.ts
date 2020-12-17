/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SmartSelectParams } from './smart-select-params'
import type { DefaultColors } from './colors'
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  title: string
  subtitle: string
  text: string
  header: string
  footer: string
  media: string
  after: string
  badge: string | number
  badgeColor: DefaultColors
  mediaItem: boolean
  divider: boolean
  groupTitle: boolean
  target: boolean
  noChevron: boolean
  chevronCenter: boolean
  tooltip: string
  tooltipTrigger: string
  swipeout: boolean
  swipeoutOpened: boolean
  accordionItem: boolean
  accordionItemOpened: boolean
  sortable: boolean
  virtualListIndex: number
  smartSelect: boolean
  smartSelectParams: SmartSelectParams
  checkbox: boolean
  radio: boolean
  radioIcon: string
  checked: boolean
  indeterminate: boolean
  name: string
  value: string | number
  readonly: boolean
  disabled: boolean
  required: boolean
  link: boolean | string
  tabLink: boolean | string
  tabLinkActive: boolean
  href: string | boolean
  view: string
  external: boolean
  back: boolean
  force: boolean
  reloadCurrent: boolean
  reloadPrevious: boolean
  reloadAll: boolean
  reloadDetail: boolean
  animate: boolean
  transition: string
  ignoreCache: boolean
  routeTabId: string
  routeProps: Record<string, unknown>
  preventRouter: boolean
  panelOpen: string | boolean
  panelCLose: string | boolean
  panelToggle: string | boolean
  actionsOpen: string | boolean
  actionsClose: string | boolean
  popupOpen: string | boolean
  popupClose: boolean | string
  popoverOpen: string | boolean
  popoverClose: boolean | string
  sheetOpen: string | boolean
  sheetClose: string | boolean
  loginScreenOpen: string | boolean
  loginScreenClose: string | boolean
  sortableEnable: string | boolean
  sortableDisable: string | boolean
  sortableToggle: string | boolean
  searchbarEnable: string | boolean
  searchbarDisable: string | boolean
  searchbarToggle: string | boolean
  searchbarClear: string | boolean
  cardOpen: string | boolean
  cardClose: string | boolean
  cardPreventOpen: boolean
  menuClose: boolean
}>

type Events = {
  click: string
  change: string
  swipeout: string
  swipeoutOpen: string
  swipeoutOpened: string
  swipeoutClose: string
  swipeoutClosed: string
  swipeoutDelete: string
  swipeoutDeleted: string
  accordionBeforeOpen: string
  accordionOpen: string
  accordionOpened: string
  accordionBeforeClose: string
  accordionClose: string
  accordionClosed: string
}

const rootStart = 'root-start'
const rootEnd = 'root-end'
const contentStart = 'content-start'
const contentEnd = 'content-end'
const innerStart = 'inner-start'
const innerEnd = 'inner-end'
const beforeTitle = 'before-title'
const afterTitle = 'after-title'
const afterStart = 'after-start'
const afterEnd = 'after-end'

type Slots = {
  [rootStart]: any
  root: any
  [rootEnd]: any
  content: any
  [contentEnd]: any
  [innerStart]: any
  [contentStart]: any
  default: any
  inner: any
  [innerEnd]: any
  media: any
  [beforeTitle]: any
  title: any
  [afterTitle]: any
  subtitle: any
  text: any
  header: any
  footer: any
  [afterStart]: any
  [afterEnd]: any
  after: any
}

export class ListItem extends SvelteComponentTyped<Props, Events, Slots> {}
export class ListItemRow extends SvelteComponentTyped {}
export class ListItemCell extends SvelteComponentTyped {}
