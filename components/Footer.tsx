import React from 'react';
import Link from 'next/link';

import { useThemeState } from '../theme/ThemeContext';
import Text from '../components/common/Text';
import SocialLinks from './common/SocialLinks';
import { ScriptifiedLogo } from './icons/icons';
import { siteConfig } from './Layout';

const scriptifiedSocialLinks = {
  github: 'https://github.com/scriptified/scriptified',
  twitter: 'https://twitter.com/scriptified_dev',
  email: 'mailto:hello@scriptified.dev',
  rss: 'https://buttondown.email/scriptified/rss',
};

const Footer = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <>
      <div className={`bg-${theme}-800 h-2`} />

      <footer
        className={`flex mt-auto justify-between px-16 lg:px-32 py-5 bg-gradient-to-b from-${theme}-100 to-${theme}-300 flex-col lg:flex-row`}
      >
        <div className="flex items-center flex-shrink-0 lg:mr-6 flex-col lg:flex-row">
          <Link href="/">
            <a aria-current="page" className="hover:no-underline flex items-center pb-3 lg:pb-0">
              <ScriptifiedLogo color={`text-${theme}-900`} additionalStyles="w-6 h-6" />
              <span
                className={`font-sniglet font-bold text-2xl tracking-tight text-${theme}-900 pl-2 lg:pr-3 lg:border-r lg:border-${theme}-900 lg:mr-3`}
              >
                {siteConfig.name}
              </span>
            </a>
          </Link>
          <Text inline color={`text-${theme}-900`} additionalStyles="text-sm font-semibold pb-3 lg:pb-0 text-pom">
            &#169; {new Date().getFullYear()}. All rights reserved.
          </Text>
        </div>

        <div className="flex items-center flex-col lg:flex-row">
          <ul className="flex px-8 items-center justify-center m-0 flex-wrap ">
            <li className="p-0">
              <Link href="/">
                <a className="hover:underline text-pom p-2 inline-flex items-center">
                  <Text inline additionalStyles={`text-${theme}-900`}>
                    Subscribe
                  </Text>
                </a>
              </Link>
            </li>
            <li className="p-0">
              <Link href="/issues">
                <a className="hover:underline text-pom p-2 inline-flex items-center">
                  <Text inline additionalStyles={`text-${theme}-900`}>
                    View Issues
                  </Text>
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-2 lg:mt-0">
            <SocialLinks links={scriptifiedSocialLinks} logoColor={`text-${theme}-800`} additionalStyles="space-x-4" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
