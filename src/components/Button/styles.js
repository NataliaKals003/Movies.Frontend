import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    &:disabled {
        opacity: 0.5;
        cursor: pointer;
    }

    > svg {
        margin-right: 8px;
    }
`;