/* eslint-disable react/jsx-no-useless-fragment */
/**
 * @summary A reusable accordion component
 * @author  Dallas Richmond
 */
import { useState } from 'react';
import nextArrow from '/next-arrow.svg';

import {
  AccordionWrapper,
  AccordionItem,
  AccordionContent,
  AccordionTitle,
  StyledButton,
  Image,
} from './accordion.styles';

type AccordionProps = {
  content: any;
  text: string;
}

export default function Accordion({
  content,
  text,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <AccordionWrapper>
      <AccordionItem onClick={toggle}>
        <AccordionTitle>
          {text}
        </AccordionTitle>
        <StyledButton>
          <Image
            src={nextArrow}
            alt={text}
            style={{
              transform: `rotate(${open ? 90 : 0}deg)`,
              transition: 'all 0.25s',
            }}
          />
        </StyledButton>
      </AccordionItem>
      {open && <AccordionContent>{content}</AccordionContent>}
    </AccordionWrapper>
  );
}
