import '~/main.css';
import '~/transitions.css';

import aos from './aos';

const VueScrollTo = require('vue-scrollto');

const SCROLL_OFFSET = 10;

export default function main(Vue, { head }) {
  Vue.directive('aos', aos);
  Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: -150,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
  });

  const files = require.context('./', true, /\.vue$/i);

  files.keys().forEach((key) => {
    const path = key
      .split('/')
      .splice(1)
      .slice(0, -1)
      .map((part, index) => {
        if (index > 0 || part.substr(-1) !== 's') {
          return part;
        }

        return part.charAt(0).toUpperCase() + part.substr(1, part.length - 2);
      });

    const filename = key.split('/').pop().split('.')[0];

    if (filename !== 'index') {
      path.push(filename);
    }

    Vue.component(
      path
        .join('')
        .replace(/[[\]:]+/g, '-')
        .replace(/(^-+|-+$)/g, ''),
      files(key).default,
    );
  });

  head.link.push({
    rel: 'stylesheet',
    href: '/ie.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap',
  });
  head.meta.push(
    {
      name: 'og:url',
      content: process.env.FRONTEND_URI,
    },
    {
      name: 'og:image',
      content: `${process.env.FRONTEND_URI}/ogmeta2.png`,
    },
    {
      name: 'twitter:image',
      content: `${process.env.FRONTEND_URI}/ogmeta2.png`,
    },
    {
      name: 'og:site_name',
      content: 'SwiftTech',
    },
    {
      name: 'og:description',
      content: `NFT automation, Alpha Community, Portfolio Managment
`,
    },
    {
      name: 'twitter:card',
      content: `NFT automation, Alpha Community, Portfolio Managment
`,
    },
  );

  if (process.isClient) {
    const el = document.scrollingElement || document.documentElement;
    let ticking = false;

    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (el.scrollTop >= SCROLL_OFFSET) {
            el.classList.add('scrolled');
          } else {
            el.classList.remove('scrolled');
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}
