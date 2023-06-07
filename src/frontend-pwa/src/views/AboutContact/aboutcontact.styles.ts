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
  justify-content: center;
  flex-direction: column;
  height: auto;
  padding: 10pt;
  width: 100%;
  max-width: 600pt;
  overflow: contain;
`;
export const StyledP = styled.p`
  ${typography.toString()}
  text-align: left;
`;

export const StyledHeaderTwo = styled.h2`
  ${typography.toString()}
  width: 100%;
  text-align: left;
  margin: 0.5em;
`;

export const StyledAddress = styled.address`
  ${typography.toString()}
  margin-top: 2em;
`;
export const Link = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
