import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeEditBankAccountModal,
  updateBankAccount,
  updateEditBankAccountField
} from '../../../store/bankAccounts'

const EditBankAccountModal = () => {
  const dispatch = useDispatch()
  const bankAccount = useSelector(
    state => state.entities.bankAccounts.editBankAccount
  )

  const openModal = useSelector(
    state => state.entities.bankAccounts.modal.openEditBankAccount
  )
  const banks = useSelector(state => state.entities.bankAccounts.banks)

  async function handleEditUser (event) {
    event.preventDefault()

    dispatch(updateBankAccount(bankAccount))
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeEditBankAccountModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleEditUser}>
        <button
          type={'button'}
          onClick={() => dispatch(closeEditBankAccountModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Editar Conta Bancária</h2>

        <input
          className='fix_input'
          placeholder={'Nome da Conta'}
          value={bankAccount.accountName}
          onChange={event =>
            dispatch(
              updateEditBankAccountField({ accountName: event.target.value })
            )
          }
          required
        />

        <div className='input_control'>
          <input
            placeholder={'Número Agência'}
            value={bankAccount.agency}
            onChange={event =>
              dispatch(
                updateEditBankAccountField({ agency: event.target.value })
              )
            }
            required
          />

          <input
            placeholder={'Digito da Agência'}
            value={bankAccount.agencyDigit}
            onChange={event =>
              dispatch(
                updateEditBankAccountField({ agencyDigit: event.target.value })
              )
            }
            required
          />
        </div>

        <div className='input_control'>
          <input
            placeholder={'Número da Conta'}
            value={bankAccount.accountNumber}
            onChange={event =>
              dispatch(
                updateEditBankAccountField({
                  accountNumber: event.target.value
                })
              )
            }
            required
          />

          <input
            placeholder={'Digito da Conta'}
            value={bankAccount.accountDigit}
            onChange={event =>
              dispatch(
                updateEditBankAccountField({
                  accountDigit: event.target.value
                })
              )
            }
            required
          />
        </div>

        <div className='input_control'>
          <select
            name='bank'
            defaultValue={bankAccount.bank}
            onChange={event =>
              dispatch(updateEditBankAccountField({ bank: event.target.value }))
            }
            required
          >
            {banks.map(bank => (
              <option key={bank['@id']} value={bank['@id']}>
                {bank.name}
              </option>
            ))}
          </select>

          <select
            name='accountType'
            defaultValue={bankAccount.accountType}
            onChange={event =>
              dispatch(
                updateEditBankAccountField({ accountType: event.target.value })
              )
            }
            required
          >
            <option value={'CORRENTE'}>Conta Corrente</option>
            <option value={'POUPANCA'}>Conta Poupança</option>
          </select>
        </div>

        <button type={'submit'} className={'default'}>
          Atualizar
        </button>
      </Container>
    </Modal>
  )
}

export default EditBankAccountModal
