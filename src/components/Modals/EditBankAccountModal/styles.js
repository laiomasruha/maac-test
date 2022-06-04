import styled from "styled-components";

export const Container = styled.form`

    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    button[type="submit"] {
        width: 100%;
        height: 4rem;
        margin-top: 1rem;
        font-weight: 600;
    }

    .input_control {
        display: flex;
        flex-direction: row;
        margin-top: 1rem;

        input, select {
            margin: 0;

            &:first-child{
                margin-right: 0.5rem;
            }

            &:last-child{
                margin-left: 0.5rem;
            }
        }
    }

    .fix_input{
        width: -webkit-fill-available;
    }
`