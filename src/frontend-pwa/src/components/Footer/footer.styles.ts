import styled from '@emotion/styled';
import typography from '../../typography';

export const FooterWrapper = styled.footer`
  ${typography.toString()}
  background-color: #036;
  border-top: 2px solid #fcba19;
  padding: 0 65px;
  color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 65px;
  bottom: 0;
  position: fixed;
  width: 100%;
  left: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 46px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  color: #fff;
  list-style: none;
  align-items: center;
  height: 100%;
`;

export const ListItemLink = styled.a`
  font-size: 0.813em;
  font-weight: normal;  /* 400 */
  color: #fff;
  border-right: 1px solid #4b5e7e;
  padding-left: 5px;
  padding-right: 5px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;
