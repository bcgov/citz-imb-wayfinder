/**
 * @summary Returns a random greeting wrapped in a custom 'p' tag
 *          Uses Date.now to remove fights with SSR Math.Random()
 * @author LocalNewsTV
 */
import { useState } from 'react';
import GreetingWrapper from './greeting.style';
import { greetingContent } from '../../../content/content';
import useAppService from '../../../services/app/useAppService';

export default function Greeting() {
  const { state } = useAppService();
  const { lang } = state.settings;
  const [greet] = useState(greetingContent[lang][Date.now() % greetingContent[lang].length]);
  return (
    <GreetingWrapper>
      {greet}
    </GreetingWrapper>
  );
}
