import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeEditUserModal,
  updateEditUserField,
  updateUser
} from '../../../store/users'

const EditUserModal = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.entities.users.editUser)
  const openModal = useSelector(
    state => state.entities.users.modal.openEditUser
  )

  async function handleEditUser (event) {
    event.preventDefault()

    dispatch(updateUser(user))
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeEditUserModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleEditUser}>
        <button
          type={'button'}
          onClick={() => dispatch(closeEditUserModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Editar Usuário</h2>

        <input
          placeholder={'Nome'}
          value={user.name ?? ''}
          onChange={event =>
            dispatch(updateEditUserField({ name: event.target.value }))
          }
        />

        <input
          placeholder={'CPF'}
          value={user.cpf ?? ''}
          onChange={event =>
            dispatch(updateEditUserField({ cpf: event.target.value }))
          }
        />

        <input
          type={'email'}
          placeholder={'Email'}
          value={user.email ?? ''}
          onChange={event =>
            dispatch(updateEditUserField({ email: event.target.value }))
          }
        />

        <button type={'submit'} className={'default'}>
          Atualizar
        </button>
      </Container>
    </Modal>
  )
}

export default EditUserModal
