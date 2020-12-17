declare module 'framework7-svelte' {
  import Framework7 from 'framework7'

  // IMPORT_COMPONENTS

  export interface Framework7Theme {
    ios: boolean
    md: boolean
    aurora: boolean
  }

  export interface Framework7Plugin {
    /** Module Name */
    name: string
    /** Install callback
  It will be executed right after component is installed
  Context of this callback points to Class where it was installed */
    install: () => void
    /** Create callback
  It will be executed in the very beginning of class initilization (when we create new instance of the class) */
    create(instance: Framework7): () => void
    /** Object with default class/plugin parameters */
    params?: {
      [plugin_name: string]: {
        [param: string]: unknown
      }
    }
    /** proto object extends Class prototype */
    proto?: {
      [name: string]: unknown
    }
    /** Extend Class with static props and methods, e.g. Class.myMethod */
    static?: {
      [name: string]: unknown
    }
    /** Initialized instance Props & Methods */
    instance?: {
      [name: string]: unknown
    }
    /** Event handlers */
    on?: {
      [event: string]: (...params: unknown[]) => void
    }
    /** Handle clicks - prop name means CSS selector of element to add click handler */
    clicks?: {
      [selector: string]: ($clickedEl: HTMLElement, data: unknown) => void
    }
  }

  /** Object with boolean properties with information about currently used theme (iOS, MD or Aurora) */
  export const theme: Framework7Theme

  /** Main Framework7's initialized instance. It allows you to use unknown of Framework7 APIs */
  export const f7: Framework7

  /** Callback function that will be executed when Framework7 fully initialized. Useful to use in components when you need to access Framework7 API and to be sure it is ready. So it is safe to put all Framework7 related logic into this callback. As an argument it receives initialized Framework7 instance */
  export const f7ready: (callback: (f7: Framework7) => void) => void

  export const Framework7Svelte: Framework7Plugin
  export default Framework7Svelte
  export { App } from './app.ts'
  export { Button } from './button'
  export { Range } from './range'
  export { Segmented } from './segmented'
  export { Toggle } from './toggle'
  export { Row } from './row'
  export { Col } from './col'
  export { Page } from './page'
  export { PageContent } from './page-content'
  export { Input } from './input'
  export { Navbar } from './navbar'
  export { NavTitle } from './nav-title.ts'
  export { NavRight } from './nav-right.ts'
  export { NavLeft } from './nav-left.ts'
  export { View } from './view.ts'
  export { Views } from './views'
  export { Popup } from './popup.ts'
  export { Toolbar } from './toolbar'
  export { Link } from './link'
  export { List } from './list'
  export { ListInput } from './list-input'
  export { ListItem, ListItemRow, ListItemCell } from './listitem'
  export { ListButton } from './list-button'
  export { ListGroup } from './list-group'
  export { LoginScreen, LoginScreenTitle } from './login-screen'
  export { Block, BlockHeader, BlockFooter } from './block'
  export { BlockTitle } from './blocktitle'
}

/* Use this file to declare unknown custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.module.styl' {
  const classes: { [key: string]: string }
  export default classes
}

/* CSS */
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.less'
declare module '*.styl'

/* IMAGES */
declare module '*.svg' {
  const ref: string
  export default ref
}
declare module '*.bmp' {
  const ref: string
  export default ref
}
declare module '*.gif' {
  const ref: string
  export default ref
}
declare module '*.jpg' {
  const ref: string
  export default ref
}
declare module '*.jpeg' {
  const ref: string
  export default ref
}
declare module '*.png' {
  const ref: string
  export default ref
}

/* CUSTOM: ADD YOUR OWN HERE */
