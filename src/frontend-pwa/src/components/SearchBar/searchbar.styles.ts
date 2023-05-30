import styled from '@emotion/styled';
import typography from '../../typography';

export const WrapperDiv = styled.div`
    max-width: 1000px;
    margin: auto; 
    width: 320px; 
    height: 80%;
    position: relative;
    display: inline-block;
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  max-width: 800px;
  width: 80%;
  padding: 2px 50px 2px 5px;
  border-radius: 10px;
  font-size: 15px;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  &:focus {
    outline: white 2px;
}
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  height: 25px;
  width: 25px;
  right: 58px;
  top: 3px;
  padding: 0px;
  font-size: 10px;
  background-color: #fbfbfb00;
`;

export const StyledClearButton = styled.button`
  position: absolute;
  height: 27px;
  width: 27px;
  right: 35px;
  top: 2px;
  padding: 0px;
  font-size: 10px;
  background-color: #fbfbfb00;
`;
