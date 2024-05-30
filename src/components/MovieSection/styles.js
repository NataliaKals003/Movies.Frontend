import styled from "styled-components";


export const Container = styled.section`
    margin-top: 24px;
    border-radius: 16px;
    padding: 32px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    >h2 {
        margin-bottom: 8px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        font-weight: bold;
    }

    > p {
        margin-top: 15px;
        font-size: 16px;
        text-align: justify;
        color:  ${({ theme }) => theme.COLORS.GRAY};
    }
`;

