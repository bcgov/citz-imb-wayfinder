/**
 * @summary Returns a random greeting wrapped in a custom 'p' tag
 *          Uses Date.now to remove fights with SSR Math.Random()
 * @author LocalNewsTV
 */
import { useState } from 'react';
import GreetingWrapper from './greeting.style';
import { greetingContent } from '../../../content/content';

export default function Greeting() {
  const [greet] = useState(greetingContent.eng[Date.now() % greetingContent.eng.length]);
  return (
    <GreetingWrapper>
      {greet}
    </GreetingWrapper>
  );
}
