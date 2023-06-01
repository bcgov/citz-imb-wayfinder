import styled from '@emotion/styled';
import typography from '../../typography';

export const TableData = styled.td`
 ${typography.toString()}
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const TableDataWrapper = styled.div`
  padding: 10px 20px;
`;
