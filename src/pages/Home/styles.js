import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 90px auto;
    grid-template-areas:
        "header"
        "moviesHeader"
        "content";
        overflow-y: hidden;
    position: relative;
`;

export const MoviesHeader = styled.div`
    grid-area: moviesHeader;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 123px;
    margin-top: 50px;
    position: fixed;
    width: 100%;
    top: 105px; 
    z-index: 10; 

    > h1 {
        font-size: 32px;
        font-weight: 400;
    }
`;

export const Content = styled.div`
    grid-area: content;
    width: calc(100% - 100px); 
    height: 100%;
    padding: 0 123px;
    margin-top: 40px;
    padding-bottom: 90px;
    overflow-y: scroll;
    overflow-x: hidden;  

    &::-webkit-scrollbar {
        width: 8px;
        height: 10px !important; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }
`;
