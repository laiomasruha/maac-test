import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteUserModal } from '../../../store/users'
import {
  closeDeleteBankAccountModal,
  removeBankAccount
} from '../../../store/bankAccounts'

const DeleteBankAccountModal = () => {
  const dispatch = useDispatch()
  const openModal = useSelector(
    state => state.entities.bankAccounts.modal.openDeleteBankAccount
  )
  const deleteId = useSelector(state => state.entities.bankAccounts.deleteId)

  async function handleDeleteUser (event) {
    event.preventDefault()

    dispatch(removeBankAccount({ id: deleteId }))
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeDeleteBankAccountModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleDeleteUser}>
        <button
          type={'button'}
          onClick={() => dispatch(closeDeleteBankAccountModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Excluir Conta Bancária</h2>

        <span>
          Você tem certeza que deseja excluir esta conta bancária? <br />
          <strong>Esta ação não pode ser desfeita!</strong>
        </span>

        <button type={'submit'} className={'delete'}>
          Excluir
        </button>
      </Container>
    </Modal>
  )
}

export default DeleteBankAccountModal
