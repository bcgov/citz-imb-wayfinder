import styled from '@emotion/styled';
import typography from '../../typography';
import mq from '../../constants/mq';

export const ViewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentContainer = styled.div`
display: flex;
padding: 50pt 0pt;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: center;
max-width: 1250px;
overflow: hidden;
@media (min-width: ${mq.tablet}) {
  flex-direction: row-reverse;
  padding: inherit 10pt;
}
`;
