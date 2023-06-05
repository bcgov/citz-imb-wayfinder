/**
 * @summary Styles for ListItems component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TableHeader = styled.th`
 ${typography.toString()}
  background-color: #f2f2f2;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeaderWrapper = styled.div`
  padding: 10px 20px;
`;

export const Container = styled.div`
  height: 300px;
  overflow: auto;
  border-radius: 15px;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;
