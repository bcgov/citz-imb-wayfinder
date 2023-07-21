/**
 * @desc   Emotion stylesheets for the What's New View for Wayfinder
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../constants/mq';

export const ViewContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100svh;
  width: 100%;
  padding: 50pt 0; 
  @media (min-width: ${mq.mobile}){
    justify-content: center;
  }
`;

export const ContentContainer = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 10pt;
  max-width: ${mq.desktop};
`;

export const UpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column
`;

export const UpdateHeader = styled.h3`
  text-align: left;
`;
export const SectionHeader = styled.h2`
  font-size: 2.074em;
  margin-bottom: 1em;
`;

export const List = styled.ul`
  max-height: calc(100svh - 195pt);
  overflow-y: auto;
  list-style-position: inside;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
    background: none;
    border-radius: 3pt;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background: none;
  }
`;

export const ListItem = styled.li`

`;
