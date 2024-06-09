import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 90px auto;
    grid-template-areas:
        "header"
        "moviesHeader"
        "search"
        "content";
        overflow-y: hidden;
   
`;

export const MoviesHeader = styled.div`
    padding: 0 123px;
    margin-bottom: 40px; 
    grid-area: moviesHeader;
    
    .wrap-header{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 20PX;
        width: 100%;
        top: 105px; 
        z-index: 10; 

        > h1 {
            font-size: 32px;
            font-weight: 400;
        }
    }
`;

export const Search = styled.div`
    grid-area: serach;
    width: 30%;
`;

export const Content = styled.div`
    height: 100%;
    width: calc(100% - 100px); 
    padding: 0 123px;
    margin-top: 100px;
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
