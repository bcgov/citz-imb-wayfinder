import styled from '@emotion/styled';
import typography from '../../typography';

// type SearchProps = {
//   variant: string,
//   size: string,
//   disabled: boolean,
// }

export const WrapperDiv = styled.div`
    max-width: 1000px;
    margin: 10 px auto; 
    width:100%100%; 
    position: relative;
    display: inline-block;
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  max-width: 800px;
  width: 100%;
  padding: 10px 50px 10px 5px;
  border-radius: 14px;
  font-size: 20px;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  &:focus {
    outline: white 2px;
}
`;

export const StyledIconButton = styled.button`
  position: absolute;
  height: 100%;
  width: 15%;
  right: 0px;
  top: 2px;
  padding: 0px;
  font-size: 10px;
  background-color: #fbfbfb00;
`;
