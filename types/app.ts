import { SvelteComponentTyped } from 'svelte'
import type { Framework7Params } from 'framework7/components/app/app-class'
import type { Router } from 'framework7/modules/router/router'

type Props = {
  params: Framework7Params
  id?: string
  routes?: Router.RouteParameters[]
}

export class App extends SvelteComponentTyped<Props> {}
