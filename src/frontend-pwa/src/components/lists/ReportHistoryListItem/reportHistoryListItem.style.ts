/**
 * @summary Styles for ListItem component
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';

export const TableData = styled.td`
  padding: 7.5pt 15pt !important;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

export const DeleteIcon = styled.img`
  margin: 0;
  height: 24pt;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

export const TableDataWrapper = styled.div`
  padding: 10px 20px;
`;
