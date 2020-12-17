/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvelteComponentTyped } from 'svelte'

type Props = Partial<{
  ul: boolean
  inset: boolean
  xsmallInset: boolean
  smallInset: boolean
  mediumInset: boolean
  largeInset: boolean
  xlargeInset: boolean
  mediaList: boolean
  linksList: boolean
  simpleList: boolean
  sortable: boolean
  sortableOpposite: boolean
  sortableTapHold: boolean
  sortableEnabled: boolean
  sortableMoveElements: boolean
  accordion: boolean
  accordionOpposite: boolean
  contactsList: boolean
  form: boolean
  formStoreData: boolean
  inlineLabels: boolean
  noChevron: boolean
  chevronCenter: boolean
  noHairlines: boolean
  noHairlinesMd: boolean
  noHairlinesIos: boolean
  noHairlinesBetween: boolean
  noHairlinesBetweenMd: boolean
  noHairlinesBetweenIos: boolean
  tab: boolean
  tabActive: boolean
  virtualList: boolean
  virtualListParams: Partial<{
    el: HTMLElement | string
    ul: HTMLElement | string
    createUI: boolean
    items: (HTMLElement | string)[]
    rowsBefore: number
    rowsAfter: number
    cols: number
    height: number | ((item: unknown) => number)
    itemTemplate: string | (() => string)
    renderItem: (item: unknown) => string
    renderExternal: (params?: {
      fromIndex?: number
      toIndex?: number
      listHeight?: number
      topPosition?: number
      items?: unknown
    }) => unknown
    emptyTemplate: string
    dynamicHeightBufferSize: number
    cache: number
    updatableScroll: boolean
    setListHeight: boolean
    showFilteredItemsOnly: boolean
    scrollableParentEl: HTMLElement | string
    searchByItem: (query: string, item: unknown, index: number) => boolean
    searchAll: (query: string, items: unknown[]) => unknown[]
  }>
}>

type Events = {
  tabShow: undefined
  tabHide: undefined
  submit: Event
  sortableEnable: undefined
  sortableDisable: undefined
  sortableSort: { from: number; to: number }
  virtualItemBeforeInsert: unknown
  virtualItemsBeforeInsert: unknown
  virtualItemsAfterInsert: unknown
  virtualBeforeClear: unknown
}

const beforeList = 'before-list'
const afterList = 'after-list'

type Slots = {
  [beforeList]: any
  [afterList]: any
  list: any
}

export class List extends SvelteComponentTyped<Props, Events, Slots> {}
