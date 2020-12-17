export type SmartSelectParams = Partial<{
  el: HTMLElement
  view: Record<string, string>
  valueEl: HTMLElement
  setValueText: boolean
  formatValueText: (values: string[]) => void
  openIn: string
  popupPush: boolean
  popupSwipeToClose: boolean
  sheetPush: boolean
  sheetSwipeToClose: boolean
  pageTitle: string
  pageBackLinkText: string
  popupBackLinkText: string
  popupTabletFullscreen: boolean
  sheetCloseLinkText: string
  searchBar: boolean | Record<string, string>
  searchbarPlaceholder: string
  searchbarDisableText: string
  appendSearchbarNotFound: boolean | string | HTMLElement
  closeOnSelect: boolean
  virtualList: boolean
  virtualListHeight: number | (() => number)
  scrollToSelectedItem: boolean
  formColorTheme: string
  navbarColorTheme: string
  routableModals: boolean
  url: string
  cssCLass: string
  renderSearchbar: () => string
  renderItem: (item: unknown, index: number) => string
  renderItems: (items: unknown[]) => string
  renderPage: (items: unknown[]) => string
  renderPopup: (items: unknown[]) => string
  renderSheet: (items: unknown[]) => string
  renderPopover: (items: unknown) => string
}>
