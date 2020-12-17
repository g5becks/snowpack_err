<script lang="ts">
  import { f7ready, f7, Page, Navbar, List, ListItem } from 'framework7-svelte'

  type Product = {
    id: string
    title: string
    description: string
  }
  let products: Product[] = []

  f7ready(() => {
    products = f7.data.products
  })
</script>

<Page name="catalog">
  <Navbar title="Catalog" />
  <List>
    {#each products as product, index (product.id)}
      <ListItem title={product.title} link={`/product/${product.id}/`} />
    {/each}
  </List>
</Page>
