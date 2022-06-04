import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeNewBankAccountModal,
  addBankAccount,
  loadBanks
} from '../../../store/bankAccounts'

const NewBankAccountModal = () => {
  const dispatch = useDispatch()
  const openModal = useSelector(
    state => state.entities.bankAccounts.modal.openNewBankAccount
  )
  const user = useSelector(
    state => state.entities.bankAccounts.currentUser['@id']
  )
  const banks = useSelector(state => state.entities.bankAccounts.banks)

  const [accountName, setAccountName] = useState('')
  const [agency, setAgency] = useState('')
  const [agencyDigit, setAgencyDigit] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountDigit, setAccountDigit] = useState('')
  const [accountType, setAccountType] = useState('')
  const [bank, setBank] = useState('')
  const [message, setMessage] = useState('teste')

  useEffect(() => {
    dispatch(loadBanks())
  }, [])

  async function handleNewBankAccount (event) {
    event.preventDefault()

    const bankAccountData = {
      accountName,
      agency,
      agencyDigit,
      accountNumber,
      accountDigit,
      accountType,
      user,
      bank
    }

    dispatch(addBankAccount(bankAccountData))

    setAccountName('')
    setAgency('')
    setAgencyDigit('')
    setAccountNumber('')
    setAccountDigit('')
    setAccountType('')
    setBank('')
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeNewBankAccountModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleNewBankAccount}>
        <button
          type={'button'}
          onClick={() => dispatch(closeNewBankAccountModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Cadastrar Conta Bancária</h2>

        <input
          className={'fix_input'}
          placeholder={'Nome da Conta'}
          value={accountName}
          onChange={event => setAccountName(event.target.value)}
          required
        />

        <div className='input_control'>
          <input
            placeholder={'Número Agência'}
            value={agency}
            onChange={event => setAgency(event.target.value)}
            required
          />

          <input
            placeholder={'Digito da Agência'}
            value={agencyDigit}
            onChange={event => setAgencyDigit(event.target.value)}
            required
          />
        </div>

        <div className='input_control'>
          <input
            placeholder={'Número da Conta'}
            value={accountNumber}
            onChange={event => setAccountNumber(event.target.value)}
            required
          />

          <input
            placeholder={'Digito da Conta'}
            value={accountDigit}
            onChange={event => setAccountDigit(event.target.value)}
            required
          />
        </div>

        <div className='input_control'>
          <select name='bank' onChange={e => setBank(e.target.value)} required>
            <option value={''}>Selecione um banco</option>
            {banks.map(bank => (
              <option key={bank['@id']} value={bank['@id']}>
                {bank.name}
              </option>
            ))}
          </select>

          <select
            name='accountType'
            onChange={e => setAccountType(e.target.value)}
            required
          >
            <option value={''}>Selecione uma conta</option>
            <option value={'CORRENTE'}>Conta Corrente</option>
            <option value={'POUPANCA'}>Conta Poupança</option>
          </select>
        </div>
        <button type={'submit'} className={'default'}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewBankAccountModal
