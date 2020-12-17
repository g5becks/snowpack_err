<script lang="ts">
  import { Page, Navbar, Block, List, ListItem } from 'framework7-svelte'
  import type { Router } from 'framework7/modules/router/router'
  export let f7route: Router.Route

  type User = {
    firstName: string
    lastName: string
    about: string
    links: { url: string; title: string }[]
  }
  const ctx = f7route?.context as { user: User }
  const user: User = ctx.user
</script>

<Page>
  <Navbar title={`${user.firstName} ${user.lastName}`} backLink="Back" />
  <Block strong>{user.about}</Block>
  <List>
    {#each user.links as link}
      <ListItem link={link.url} title={link.title} external target="_blank" />
    {/each}
  </List>
</Page>
