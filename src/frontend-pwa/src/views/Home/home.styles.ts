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
    min-height: 100svh;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const GreetingWrapper = styled.p`
    display: flex;
    width: 100%;
    margin: -2em 0 0.5em 0;
    font-size: 14pt;
    min-height: 2em;
    color: #036;
    justify-content: center;
    font-style: italic;
`;

export const ButtonWrapper = styled.div`
    padding: 5px;
`;
