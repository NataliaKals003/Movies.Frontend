import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
    display: flex;
    justify-content: space-between;
    padding: 0 123px;
`;

export const Brand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 

    >h1 {
        font-size: 30px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    

    > div {
        display: flex;
        flex-direction: column;
        align-items: self-end;
        margin-right: 16px;
        line-height: 24px;
        width: max-content;

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        
        button {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
    
    > a {
        > img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border-width: 1px;
            border-style: solid;
            border-color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;

