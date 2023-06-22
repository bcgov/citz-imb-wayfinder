/**
 * @summary Styles for ListItems component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../../typography';
import mq from '../../../constants/mq';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 8px;
  height: auto;
  @media (max-width: ${mq.tablet}) {
    font-size: 14px;
  }
`;

export const TableHeader = styled.th`
 ${typography.toString()}
  background-color: #f2f2f2;
  text-align: left;
  position: sticky;
  top: 0;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  &:nth-of-type(odd) {
    background-color #FFF;
  }
`;

export const TableHeaderWrapper = styled.div`
  padding: 10px 20px;
`;

export const Container = styled.div`
  height: 300px;
  overflow: auto;
  width: 100%;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
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
  @media (min-width: ${mq.tablet}){
      border-radius: 8pt;
  }
`;
