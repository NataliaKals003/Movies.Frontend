import styled from "styled-components";
import BackgroundImg from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 134px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left; 

    > Button {
        margin-top: 8px;
        align-self: center;
    }

    >a {
        margin-top: 24px;
        align-self: center; 
        text-align: center;

        > button {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        > svg {
            margin-right: 6px;
        }
    }

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }


`;


export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
`;