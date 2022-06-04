import styled from "styled-components";

export const Card = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
    margin-bottom: 2rem;
    background: var(--shape);
    border-radius: 0.25rem;
    padding: 1rem;
    border-left: 0.25rem solid var(--blue);
    display: flex;
    justify-content: space-between;
    
    div:first-child{
        display: flex;
        flex-direction: column;
        align-items: start;

        .account_type{
            background: var(--yellow);
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .account_name {
            margin-top: 1rem;
            margin-left: 1rem;
            font-size: 1.3rem;
            font-weight: 600;
        }

        .account_info {
            margin-top: 0.25rem;
            margin-left: 1rem;
        }
    }

    div:last-child{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: start;
        button {
            all: unset;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 5rem;

            .edit_account, .delete_account{
                color: var(--text-body);
                &:hover{
                    filter: brightness(0.2);
                }
            }
        }
    }
`