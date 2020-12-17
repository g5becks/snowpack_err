import { SvelteComponentTyped } from 'svelte'

type Events = {
  loginScreenOpen: string
  loginScreenOpened: string
  loginScreenClose: string
  loginScreenClosed: string
}

export declare class LoginScreen extends SvelteComponentTyped<{ opened?: boolean }, Events> {
  public open(animate: boolean): void
  public close(animate: boolean): void
}

export class LoginScreenTitle extends SvelteComponentTyped {}
