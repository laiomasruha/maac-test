import styled from "styled-components";

export const Center = styled.div`
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
    margin-bottom: 2rem;
    
    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        tbody {
            tr {
                width: 100%;
                &:hover {
                    .nostyle {
                        color: var(--shape);
                    }
                }
            }
        }

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

            &:last-child{
                text-align: right;
            }
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            font-weight: 400;
            color: var(--text-body);

            &:first-child {
                display: flex;
                flex-direction: column;
                color: var(--text-title);
                border-top-left-radius: 0.25rem;
                border-bottom-left-radius: 0.25rem;

                span{
                    &:nth-child(1){
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    
                    &:nth-child(2),&:nth-child(3){
                        font-size: 0.9rem;
                    }
                }
            }

            &:last-child {
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                text-align: right;
            }

            .nostyle {
                text-decoration: none;
            }

            .go_to_user, .edit_user, .delete_user{
                padding: 0.5rem;
                cursor: pointer;
                color: var(--text-body);
                border-radius: 0.25rem;

                &:hover {
                    filter: brightness(0.2);
                }
            }
        }
    }
`