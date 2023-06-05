/**
 * @summary Styles for reusable Header component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../typography';

export const HeaderWrapper = styled.header`
    background-color: #036;
    border-bottom: 2px solid #fcba19;
    padding: 0 65px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    top: 0;
    position: fixed;
    width: 100%;
    left: 0;
    @media (max-width: 768px) {
        justify-content: space-evenly;
        padding: 0px;
    }
`;

export const Heading = styled.h2`
    ${typography.toString()}
    color: rgb(255, 255, 255);
    font-weight: 500;
    min-width: 150px;
    display: contents;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
`;

export const Image = styled.a`
    width: 175px;
    top: 10px;
    position: relative;
    height: 100%;
    padding-right: 10px;
    @media (max-width: 768px) {
        width: 100px;
        padding-right: 5px;
    }
`;
