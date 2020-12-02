/* Refer - https://nextjs.org/docs/advanced-features/custom-document
Adding this file for adding lang attribute in html tag */

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { siteTitle } from '../components/Layout';

const CONFIG = {
  name: siteTitle,
  description: '',
  domain: 'https://scriptified.dev',
  twitterProfile: '@scriptified_dev',
};

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={CONFIG.name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={CONFIG.name} />
          <meta name="description" content={CONFIG.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />
          {/* TIP: set viewport head meta tag in _app.js if you need it, otherwise it will show a warning */}
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

          <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png"></link>
          <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={CONFIG.domain} />
          <meta name="twitter:title" content={CONFIG.name} />
          <meta name="twitter:description" content={CONFIG.description} />
          <meta name="twitter:creator" content={CONFIG.twitterProfile} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={CONFIG.name} />
          <meta property="og:description" content={CONFIG.description} />
          <meta property="og:site_name" content={CONFIG.name} />
          <meta property="og:url" content={CONFIG.domain} />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;