/**
 * @summary Styles for reusable Header component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';
import typography from '../../../typography';
import mq from '../../../constants/mq';

export const HeaderWrapper = styled.header`
    background-color: #036;
    border-bottom: 2px solid #fcba19;
    padding: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    top: 0;
    position: fixed;
    width: 100%;
    left: 0;
    @media (min-width: ${mq.tablet}) {
        justify-content: flex-start;
        padding: 2em;
    }
    z-index: 2000;
`;

export const Heading = styled.h2`
    ${typography.toString()}
    color: rgb(255, 255, 255);
    font-size: 16pt;
    font-weight: 500;
    min-width: 150px;
    display: contents;
    text-decoration: none;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
`;
export const BannerRight = styled.div`
    min-width: 35pt;
    display: flex;
    padding: 0 0.5em;
    margin: 0;
    @media (min-width: ${mq.tablet}){
        margin: 0 0 0 auto;
    }
`;

export const BannerLeft = styled.div`
    min-width: 35pt;
    display: flex;
    padding: 0 0.5em;
    margin: 0;
`;
export const Image = styled.img`
    width: 175px;
    top: 10px;
    position: relative;
    height: 100%;
    padding-right: 10px;
    @media (max-width: ${mq.tablet}) {
        width: 100px;
        padding-right: 5px;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
`;
