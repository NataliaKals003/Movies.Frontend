import styled from "styled-components";
import { ButtonText } from '../../components/ButtonText';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
        "header"
        "content";
        overflow-y: hidden;
        position: relative;

    >main {
        grid-area: content;
        overflow-y: auto;
        width: calc(100% - 100px); 
        margin-top: 85px;
        padding: 0 123px;
        padding-bottom: 93px;

        
    &::-webkit-scrollbar {
        width: 8px;
        height: 10px !important; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }
    }

    .tags {
        background: ${({ theme }) => theme.COLORS.BLACK};
        border-radius: 10px;
        padding: 16px;
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    margin: 38px auto;

    .input-wrap {
        display: flex;
        flex-direction: row;
        gap: 40px;
        margin-bottom: 40px;
    }

    .button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;

        button:nth-of-type(1) {
            background: ${({ theme }) => theme.COLORS.BLACK};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const MoviesHeader = styled.div`
    grid-area: "moviesHeader";
    margin-top: 40px;
    top: 105px; 
    z-index: 10; 

    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 40px;
    }

`;

export const StyledButtonText = styled(ButtonText)`
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    svg {
        margin-right: 8px;
    }
`;


