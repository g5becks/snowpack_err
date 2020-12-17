<script lang="ts">
  import * as firebaseui from 'firebaseui'
  import { Navbar, Page } from 'framework7-svelte'

  let title = ''
</script>

<Page name="profile">
  <Navbar {title} />
</Page>
