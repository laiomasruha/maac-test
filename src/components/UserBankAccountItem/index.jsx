import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {
  openDeleteBankAccountModal,
  openEditBankAccountModal
} from '../../store/bankAccounts'
import { Card } from './styles'

const UserBankAccountItem = props => {
  const dispatch = useDispatch()

  return (
    <Card>
      <div>
        <span className={'account_type'}>
          {props.bankAccount.accountType === 'CORRENTE'
            ? 'Conta Corrente'
            : 'Conta Poupança'}
        </span>
        <span className={'account_name'}>{props.bankAccount.accountName}</span>
        <span className={'account_info'}>
          <strong>Banco: </strong>
          {props.bank[0].number} - {props.bank[0].name}
        </span>
        <span className={'account_info'}>
          <strong>Agência: </strong>
          {props.bankAccount.agency}-{props.bankAccount.agencyDigit}
        </span>
        <span className={'account_info'}>
          <strong>Conta: </strong>
          {props.bankAccount.accountNumber}-{props.bankAccount.accountDigit}
        </span>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(
              openEditBankAccountModal({ bankAccount: props.bankAccount })
            )
          }
        >
          <FaEdit className={'edit_account'} />
        </button>

        <button
          onClick={() =>
            dispatch(openDeleteBankAccountModal({ id: props.bankAccount.id }))
          }
        >
          <FaTrashAlt className={'delete_account'} />
        </button>
      </div>
    </Card>
  )
}

export default UserBankAccountItem
