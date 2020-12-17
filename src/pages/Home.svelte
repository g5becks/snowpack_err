<script lang="ts">
  import {
    Page,
    Navbar,
    // eslint-disable-next-line no-unused-vars
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
  } from 'framework7-svelte'
</script>

<style>
  .title {
    display: flex;
  }

  .header_img {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar sliding={false}>
    <div class="title"><img class="header_img" src="/assets/img/logo.png" alt="Poppn.com Logo" /></div>
  </Navbar>

  <!-- Page content -->

  <BlockTitle>Navigation</BlockTitle>
  <List>
    <ListItem link="/about/" title="About" />
    <ListItem link="/form/" title="Form" />
  </List>

  <BlockTitle>Modals</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Col>
    </Row>
  </Block>

  <BlockTitle>Panels</BlockTitle>
  <Block strong>
    <Row>
      <Col width="50">
        <Button fill raised panelOpen="left">Left Panel</Button>
      </Col>
      <Col width="50">
        <Button fill raised panelOpen="right">Right Panel</Button>
      </Col>
    </Row>
  </Block>

  <List>
    <ListItem title="Dynamic (Component) Route" link="/dynamic-route/blog/45/post/125/?foo=bar#about" />
    <ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/" />
    <ListItem title="Request Data & Load" link="/request-and-load/user/123456/" />
  </List>
</Page>
