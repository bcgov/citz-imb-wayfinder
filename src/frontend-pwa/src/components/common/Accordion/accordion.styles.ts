/**
 * @summary Styling for the Settings view
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';

export const AccordionWrapper = styled.div`
  height: auto;
  width: 100%;
`;

export const AccordionItem = styled.div`
  height: 30pt;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffffff;
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

export const AccordionContent = styled.div`
  background-color: #ffffff;
  overflow: hidden;
  padding: 5pt;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
