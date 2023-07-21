/**
 * Styling for Home.tsx view
 * @author Dallas Richmond, LocalNewsTV
 */
import styled from '@emotion/styled';

export const ViewContainer = styled.div`
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100svh;
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    height: 100%;
    padding-top: 0;
    justify-content: center;
    display: flex;
    box-content: content-box;
    align-items: center;
    flex-direction: column;
    object-fit: scale-down;
    @media (max-height: 570px ){
        padding: 60pt 0;
    }
`;

export const ButtonWrapper = styled.div`
    padding: 5px;
`;
