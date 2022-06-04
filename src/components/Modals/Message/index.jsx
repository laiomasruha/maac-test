import { Container } from './styles'

export const Message = props => (
  <Container className={props.type}>
    <div>
      <span>{props.icon}</span>
      <h2>{props.title}</h2>
    </div>
    {props.message}
  </Container>
)
