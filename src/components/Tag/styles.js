import styled from "styled-components";

export const Container = styled.button`

    font-size: 12px;
    padding: 5px 16px;
    border-radius: 8px;
    margin-right: 6px;
    margin-top: 16px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

`;

