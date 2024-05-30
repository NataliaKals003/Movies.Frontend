import styled from "styled-components";
import { FaStar, FaRegStar } from 'react-icons/fa';
import isPropValid from '@emotion/is-prop-valid';

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledStar = styled(FaStar).withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'filled',
})`
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 2px;
    size: ${({ size }) => size || '20px'};
`;

export const EmptyStar = styled(FaRegStar)`
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 2px;
    size: ${({ size }) => size || '20px'};
`;
