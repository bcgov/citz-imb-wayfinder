/**
 * @summary Styles for ListItem component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const TableData = styled.td`
 ${typography.toString()}
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
width: 100%;
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
  &:nth-of-type(odd) {
    background-color: #FFF;
  }
`;

export const TableDataWrapper = styled.div`
  padding: 10px 20px;
  min-width: 100%;
`;
