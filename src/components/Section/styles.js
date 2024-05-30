import styled from "styled-components";

export const Container = styled.section`
    margin: 30px 0;

    >h2 {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 24px;
    }
`;
