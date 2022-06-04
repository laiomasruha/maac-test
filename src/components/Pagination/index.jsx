import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Pagination = props => {
  return (
    <Container>
      {props.pagination['hydra:first'] ? (
        <a href={props.pagination['hydra:first']}>Primeira</a>
      ) : (
        ''
      )}
      {props.pagination['hydra:previous'] ? (
        <a href={props.pagination['hydra:previous']}>Anterior</a>
      ) : (
        ''
      )}
      <button disabled>{props.page ?? 1}</button>
      {props.pagination['hydra:next'] ? (
        <a href={props.pagination['hydra:next']}>Próxima</a>
      ) : (
        ''
      )}
      {props.pagination['hydra:last'] ? (
        <a href={props.pagination['hydra:last']}>Última</a>
      ) : (
        ''
      )}
    </Container>
  )
}
