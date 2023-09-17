import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Route, Router } from '@vaadin/router';

@customElement('lit-site')
export class Site extends LitElement {
  render() {
    return html`
      <site-nav></site-nav>
      <slot></slot>
    `;
  }
}

const routes: Route[] = [
  {
    path: '/',
    component: 'lit-site',
    children: [
      {
        path: '/',
        component: 'page-home',
        action: async () => {
          await import('./home/home');
        },
      },
      {
        path: 'who',
        component: 'page-who',
        action: async () => {
          await import('./who/who');
        },
      },
      {
        path: 'music',
        component: 'page-music',
        action: async () => {
          await import('./music/music');
        },
      },
      {
        path: 'work',
        component: 'page-work',
        action: async () => {
          await import('./work/work');
        },
      },
      {
        path: 'etc',
        component: 'page-etc',
        action: async () => {
          await import('./etc/etc');
        },
      },
    ],
  },
];

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);