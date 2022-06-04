import { Container, Content } from './styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openNewUserModal } from '../../store/users'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Content>
        <Link to={'/'} className={'nostyle'}>
          <h1>Usuários</h1>
        </Link>
        <button type='button' onClick={() => dispatch(openNewUserModal())}>
          Novo Usuário
        </button>
      </Content>
    </Container>
  )
}

export default Header
