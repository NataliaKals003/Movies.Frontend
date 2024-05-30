import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
    width: calc(100% - 100px); 
    /* height: 100%; */
    padding: 0 123px;
    margin-top: 40px;
    margin-bottom: 40px;
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
    }
`;

export const Content = styled.div`
   
    > a {
        > button:first-child {
            display: flex;
            align-items: center;
            align-self: start;
            margin-bottom: 24px;

            svg {
                margin-right: 3px;
            }
        }
    }

    .HeaderMovie {
        display: flex;
        flex-direction: row;
        align-items: center;

        > h1 {
            margin-right: 20px;
        }
    }

    > p {
        margin-top: 40px;
        text-align: justify;
    }
`;



export const Profile = styled.div`
    display: flex; 
    align-items: center;
    margin-top: 24px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        margin-right: 8px;
        border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > a {
        font-size: 16px;
        cursor: pointer;
    }

    > svg {
        margin: 0 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;