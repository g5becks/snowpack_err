import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  title: string
  text: string
  tabLink: string | boolean
  target: string
  tooltip: string
  tooltipTrigger: string
  href: string
  view: string
  external: boolean
  back: boolean
  force: boolean
  reloadCurrent: boolean
  reloadPrevious: boolean
  reloadAll: boolean
  reloadDetail: boolean
  animate: boolean
  transition: boolean
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

export class ListButton extends SvelteComponentTyped<Props, { click?: string }> {}
