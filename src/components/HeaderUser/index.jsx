import { Container, Content } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { openNewBankAccountModal } from '../../store/bankAccounts'

const HeaderUser = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.entities.bankAccounts.currentUser)

  return (
    <Container>
      <Content>
        <div>
          <div>
            <Link to={'/'} className={'nostyle'}>
              <MdArrowBackIosNew size={25} />
            </Link>
          </div>
          <h1>{user.name}</h1>
        </div>
        <button
          type='button'
          onClick={() => dispatch(openNewBankAccountModal())}
        >
          Nova Conta Bancária
        </button>
      </Content>
    </Container>
  )
}

export default HeaderUser
