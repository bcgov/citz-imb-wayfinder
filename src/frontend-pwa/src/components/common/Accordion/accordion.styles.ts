/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';

type AccordionProps = {
  open: boolean;
}

export const AccordionItem = styled.div<AccordionProps>`
  background-color: #ffffff;
  border-bottom: ${(props) => (props.open ? 'none' : '1px solid #88888847')};
  border-top: 1px solid #88888847;
  min-height: 50px;
  width: 100%;
  display: flex;
`;

export const AccordionTitle = styled.h2`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  text-wrap: auto;
  width: 100%;
  color: #000000CC;
  margin: 0;
  align-items: center;
`;

export const AccordionContent = styled.div<AccordionProps>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  background-color: #ffffff;
  padding: 5pt;
  width: 100%;
`;

export const StyledButton = styled.button`
  width: 35pt;
  margin: 0 0 0 10pt;
  padding: 0;
  background-color: #ffffff;
  border: none;
`;

export const Image = styled.img`
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
