import { useState } from 'react';
import GreetingWrapper from './greeting.style';

export default function Greeting() {
  const greetings = [
    'Welcome, what are you looking to do?',
    'Let\'s get started',
    'What are you looking for today?',
    'Connecting citizens to services',
    'Are you looking to report an event?',
    'We hope you are having a good day',
    'Let\'s connect you with the services you need',
    'We are so happy you are here',
    'Jump in and find what you need',
    'How can we help you?',
  ];
  const [greet] = useState(greetings[Date.now() % greetings.length]);
  return (
    <GreetingWrapper>
      {greet}
    </GreetingWrapper>
  );
}
