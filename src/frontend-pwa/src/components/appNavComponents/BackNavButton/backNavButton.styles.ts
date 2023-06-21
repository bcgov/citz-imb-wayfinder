/**
 * @summary Styles for reusable BackNavButton component
 * @author Dallas Richmond
 */
import styled from '@emotion/styled';

export const StyledBackButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0px;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    right: 0;
    &:focus {
        outline: none;
    }
    &:hover {
        transform: scale(0.9);
    }
`;

export const StyledIcon = styled.img`
    width: 30px;
    height: 30px;
`;
