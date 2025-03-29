export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'gray',
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Starter',
    description: 'Nuxt Starter for managing your Nuxt projects',
    headline: 'Nuxt Starter',
  },
  header: {
    title: 'Nuxt Starter',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/kmilogp8496/nuxt-starter',
      'target': '_blank',
      'aria-label': 'GitHub',
    }],
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/kmilogp8496/nuxt-starter',
      'target': '_blank',
      'aria-label': 'GitHub',
    }],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/kmilogp8496/nuxt-starter/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/kmilogp8496/nuxt-starter',
        target: '_blank',
      }, {
        icon: 'i-lucide-book-open',
        label: 'Nuxt Starter docs',
        to: '/docs/getting-started/setup',
      }],
    },
  },
})
