import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    border-radius: 0.5rem;

    &.danger{
        background: var(--red);
        color: #ffffff;
    }

    &.warning{
        background: var(--yellow);
        color: #000000;
    }

    &.success{
        background: var(--green);
        color: #ffffff;
    }

    &.default{
        background: var(--blue);
        color: #ffffff;
    }

    div{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        span{
            margin-top: 0.25rem;
            margin-right: 1rem;
        }
        
        h2{
            font-size: 2rem;
        }
    }
`