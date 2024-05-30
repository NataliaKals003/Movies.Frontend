import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;

