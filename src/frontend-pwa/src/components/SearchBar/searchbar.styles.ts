import styled from '@emotion/styled';
import typography from '../../typography';

export const WrapperDiv = styled.div`
    max-width: 800px;
    margin: 100px auto; 
    width:100%100%; 
    position:relative;
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  max-width: 800px;
  width:80%;
  padding:10px;
  border-radius: 14px;
  font-size: 20px;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  &:focus {
    outline: white 2px;
}
`;

export const StyledIconButton = styled.button`
  position: absolute;
  right: 2px;
  top: 5px;
  padding: 0px;
  font-size: 20px;
`;
