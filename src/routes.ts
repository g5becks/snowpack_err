import {
  AboutPage,
  CatalogPage,
  DynamicPage,
  FormPage,
  HomePage,
  NotFoundPage,
  ProductPage,
  ProfilePage,
  RequestPage,
  SettingsPage,
} from './pages'

import type { Router } from 'framework7/modules/router/router'

const routes: Router.RouteParameters[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicPage,
  },
  {
    path: '/profile/',
    component: ProfilePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    // eslint-disable-next-line no-unused-vars
    async: function (
      routeTo: Router.Route,
      routeFrom: Router.Route,
      resolve: (...data: unknown[]) => void,
      reject: (...data: unknown[]) => void
    ): void {
      // Router instance
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const router = (this as unknown) as Router.Router

      // App instance
      const app = router.app

      // Show Preloader
      app.preloader.show()

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        const user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ],
        }
        // Hide Preloader
        app.preloader.hide()

        // Resolve route to load page
        resolve(
          {
            component: RequestPage,
          },
          {
            context: {
              user: user,
            },
          }
        )
        reject({
          data: {
            component: NotFoundPage,
          },
        })
      }, 1000)
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
]

export default routes
