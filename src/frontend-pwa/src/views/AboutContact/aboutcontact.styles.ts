/**
 * Style Components for the About+Contact Section
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const AboutContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  width: 100%;
  padding: 50pt 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  height: auto;
  padding: 10pt;
  width: 100%;
  max-width: 600pt;
`;
export const StyledP = styled.p`
  ${typography.toString()}
  text-align: left;
  width: 100%;
  font-size: 12pt;
`;

export const StyledHeaderTwo = styled.h2`
  ${typography.toString()}
  width: 100%;
  text-align: left;
  margin: 0.5em 0;
`;

export const StyledAddress = styled.address`
  ${typography.toString()}
  margin-top: 2em;
`;
export const Link = styled.a`
  ${typography.toString()}
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledUl = styled.ul`
  ${typography.toString()}
  width: 100%;
  margin: 0;
  padding-left: 3em;
  margin-bottom: 0;
`;
export const StyledLi = styled.li`
  padding: 0;
  margin: 0;
  font-size: 12pt;
`;
