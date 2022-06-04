import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBankAccounts } from '../../store/bankAccounts'
import UserBankAccountItem from '../UserBankAccountItem'
import { Container, Content, Title, Center } from './styles'
import { SpinnerCircular } from 'spinners-react'
import { Message } from '../Modals/Message'
import { FaInfoCircle } from 'react-icons/fa'

const User = () => {
  const dispatch = useDispatch()
  const bankAccounts = useSelector(state => state.entities.bankAccounts.list)
  const banks = useSelector(state => state.entities.bankAccounts.banks)
  const loading = useSelector(state => state.entities.bankAccounts.loading)

  useEffect(() => {
    dispatch(loadBankAccounts())
  }, [])

  return loading ? (
    <Container>
      <Center>
        <SpinnerCircular color={'#2C5282'} thickness={'200'} size={'80'} />
      </Center>
    </Container>
  ) : (
    <Container>
      <Title>
        <h1>Contas Bancárias</h1>
      </Title>

      <Content>
        {bankAccounts.length > 0 ? (
          bankAccounts.map(bankAccount => (
            <UserBankAccountItem
              key={bankAccount['@id']}
              bank={banks.filter(bank => bank['@id'] === bankAccount.bank)}
              bankAccount={bankAccount}
            />
          ))
        ) : (
          <Container>
            <Message
              type={'warning'}
              title={'Opss'}
              icon={<FaInfoCircle size={24} />}
              message={'Não existem contas bancarias cadastradas'}
            />
          </Container>
        )}
      </Content>
    </Container>
  )
}

export default User
