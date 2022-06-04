import styled from "styled-components";

export const Center = styled.div`
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    padding: 1rem;
`

export const Title = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 2rem 0 1rem 0;
        color: var(--text-body);
    }
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    
    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        h1 {
            color: var(--text-body);
        }

        button {
            background: var(--blue);
            color: #ffffff;
        }
    }
`

export const Card = styled.div`
padding: 1rem;
    background: var(--shape);
    border-radius: 0.5rem;
    border-left: 0.5rem solid var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: var(--text-body);
    }

    div {
        span {
            display: block;

            &:first-child {
                font-size: 1.3rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
        }
    }

`