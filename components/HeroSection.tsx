import { Fragment } from 'react';
import Tilt from 'react-parallax-tilt';
import { useThemeState } from '../theme/ThemeContext';
import SubscribeCard from './common/SubscribeCard';
import Text from './common/Text';
import { ScriptifiedLogo } from './icons/icons';

const HeroSection = (): JSX.Element => {
  const theme = useThemeState();
  return (
    <Fragment>
      <Tilt
        tiltReverse
        transitionEasing="cubic-bezier(.03,.98,.52,.99)"
        className="flex flex-col items-center justify-center mt-6 relative z-10"
      >
        <div className="flex justify-center">
          <ScriptifiedLogo color={`text-${theme}-100`} additionalStyles="w-1/3 h-1/3" />
        </div>
        <Text type="h1" color={`text-${theme}-100`} additionalStyles="text-6xl">
          Scriptified
        </Text>
        <Text type="h1" color={`text-${theme}-200`} additionalStyles="mb-10 sm:mb-12 lg:mb-16 text-center">
          Your Goto JavaScript Newsletter
        </Text>
      </Tilt>
      <div className="w-5/6 sm:mx-8 lg:w-2/4 mb-2 relative z-10">
        <SubscribeCard homePage />
      </div>
    </Fragment>
  );
};

export default HeroSection;
