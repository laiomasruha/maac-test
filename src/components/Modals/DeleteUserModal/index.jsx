import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeleteUserModal, removeUser } from '../../../store/users'

const DeleteUserModal = () => {
  const dispatch = useDispatch()
  const openModal = useSelector(
    state => state.entities.users.modal.openDeleteUser
  )
  const deleteId = useSelector(state => state.entities.users.deleteId)

  async function handleDeleteUser (event) {
    event.preventDefault()

    dispatch(removeUser({ id: deleteId }))
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeDeleteUserModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleDeleteUser}>
        <button
          type={'button'}
          onClick={() => dispatch(closeDeleteUserModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Excluir Usuário</h2>

        <span>
          Você tem certeza que deseja excluir este usuário e todas as suas
          contas bancárias? <br />
          <strong>Esta ação não pode ser desfeita!</strong>
        </span>

        <button type={'submit'} className={'delete'}>
          Excluir
        </button>
      </Container>
    </Modal>
  )
}

export default DeleteUserModal
