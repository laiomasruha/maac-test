import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;

    h1 {
        color: var(--background);
    }

    button {
        font-size: 1rem;
        color: #ffffff;
        background: var(--dark-blue);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        &.del {
            background: var(--red);
        }
    }

    .nostyle {
        text-decoration: none;
        color: #ffffff;
    }

    div {
        display: flex;
        align-items: center;

        h1 {
            font-size: 1.5rem;
            color: #ffffff;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            color: #ffffff;
            padding: 0.5rem 1rem 0 0;
        }
    }
`