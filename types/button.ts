import type { SmartSelectParams } from './smart-select-params'
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  type: 'submit' | 'button' | 'reset'
  round: boolean
  roundIos: boolean
  roundMd: boolean
  roundAurora: boolean
  large: boolean
  largeIos: boolean
  largeMd: boolean
  largeAurora: boolean
  small: boolean
  smallIos: boolean
  smallMd: boolean
  smallAurora: boolean
  fill: boolean
  fillIos: boolean
  fillMd: boolean
  fillAurora: boolean
  raised: boolean
  raisedIos: boolean
  raisedMd: boolean
  raisedAurora: boolean
  outline: boolean
  outlineIos: boolean
  outlineMd: boolean
  outlineAurora: boolean
  tabLink: string | boolean
  tabLinkActive: boolean
  active: boolean
  text: string
  badge: string | number
  iconOnly: boolean
  tooltip: string
  tooltipTrigger: string
  smartSelect: boolean
  smartSelectParams: SmartSelectParams
  iconSize: string | number
  iconColor: string
  icon: string
  iconF7: string
  iconMaterial: string
  iconIos: string
  iconMd: string
  iconAurora: string
  iconBadge: string | number
  href: string | boolean
  target: string
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
  panelClose: string | boolean
  panelToggle: string | boolean
  actionsOpen: string | boolean
  actionsClose: string | boolean
  popupOpen: string | boolean
  popupClose: string | boolean
  popoverOpen: string | boolean
  popoverClose: string | boolean
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

export class Button extends SvelteComponentTyped<Props, { click: undefined }> {}
