import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: end;

    button{
        all: unset;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        background: #dddddd;
        cursor: pointer;
        color: #000000;
        margin: 0 0.25rem;

        &:hover{
            filter: brightness(0.9);
        }
    }

    a{
        text-decoration: none;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        background: #dddddd;
        cursor: pointer;
        color: #000000;
        margin: 0 0.25rem;

        &:hover{
            filter: brightness(0.9);
        }
    }
`