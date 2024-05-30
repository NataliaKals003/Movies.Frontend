import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    border-radius: 10px;
    padding-right: 16px;

    > button { 
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

    > input {
        flex: 1;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;

