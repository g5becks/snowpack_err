<script lang="ts">
  import { f7, Page, Navbar, BlockTitle, Block } from 'framework7-svelte'
  import type { Router } from 'framework7/modules/router/router'
  export let f7route: Router.Route

  const productId: string | undefined = f7route?.params?.id

  type Product = {
    id: string
    title: string
    description: string
  }

  let currentProduct: Product

  f7.data.products.forEach(function (product: Product) {
    if (product.id === productId) {
      currentProduct = product
    }
  })
</script>

<Page name="product">
  <Navbar title={currentProduct.title} backLink="Back" />
  <BlockTitle>About {currentProduct.title}</BlockTitle>
  <Block strong>{currentProduct.description}</Block>
</Page>
