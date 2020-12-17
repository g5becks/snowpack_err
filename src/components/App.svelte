<script lang="ts">
  import { onMount } from 'svelte'

  import {
    f7,
    f7ready,
    App,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    BlockFooter,
  } from 'framework7-svelte'

  import routes from '../routes'

  // Framework7 Parameters
  let f7params = {
    name: 'Poppn', // App name
    theme: 'auto', // Automatic theme detection

    // App root data
    data: function () {
      return {
        // Demo products for Catalog section
        products: [
          {
            id: '1',
            title: 'Apple iPhone 8',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
          },
          {
            id: '2',
            title: 'Apple iPhone 8 Plus',
            description:
              'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
          },
          {
            id: '3',
            title: 'Apple iPhone X',
            description:
              'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
          },
        ],
      }
    },

    // App routes
    routes: routes,
  }
  // Login screen demo data
  let username = ''
  let password = ''

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close()
    })
  }
  onMount(() => {
    f7ready(() => {
      // Call F7 APIs here
    })
  })
</script>

<App params={f7params}>
  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar labels bottom>
      <Link
        tabLink="#view-home"
        tabLinkActive
        iconIos="f7:house_fill"
        iconAurora="f7:house_fill"
        iconMd="material:home"
        text="Home" />
      <Link
        tabLink="#view-catalog"
        iconIos="f7:square_list_fill"
        iconAurora="f7:square_list_fill"
        iconMd="material:view_list"
        text="Catalog" />
      <Link
        tabLink="#view-settings"
        iconIos="f7:person_circle"
        iconAurora="f7:person_circle"
        iconMd="material:account_circle"
        text="Settings" />
    </Toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive url="/" />

    <!-- Catalog View -->
    <View id="view-catalog" name="catalog" tab url="/catalog/" />

    <!-- Settings View -->
    <View id="view-settings" name="settings" tab url="/settings/" />
  </Views>

  <!-- Popup -->
  <Popup id="my-popup">
    <View>
      <Page>
        <Navbar title="Popup">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>
        <Block>
          <p>Popup content goes here.</p>
        </Block>
      </Page>
    </View>
  </Popup>

  <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput type="text" name="username" placeholder="Your username" bind:value={username} />
          <ListInput type="password" name="password" placeholder="Your password" bind:value={password} />
        </List>
        <List>
          <ListButton title="Sign In" on:click={() => alertLoginData()} />
        </List>
        <BlockFooter>Some text about login information.<br />Click "Sign In" to close Login Screen</BlockFooter>
      </Page>
    </View>
  </LoginScreen>
</App>
