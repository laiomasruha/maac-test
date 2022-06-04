import Modal from 'react-modal'
import { Container } from './styles'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeNewUserModal, addUser } from '../../../store/users'

const NewUserModal = () => {
  const dispatch = useDispatch()
  const openModal = useSelector(state => state.entities.users.modal.openNewUser)

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')

  async function handleCreateNewUser (event) {
    event.preventDefault()

    dispatch(
      addUser({
        name,
        cpf,
        email
      })
    )
    setName('')
    setCpf('')
    setEmail('')

    dispatch(closeNewUserModal())
  }

  return (
    <Modal
      ariaHideApp={false}
      isOpen={openModal}
      onRequestClose={() => dispatch(closeNewUserModal())}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      <Container onSubmit={handleCreateNewUser}>
        <button
          type={'button'}
          onClick={() => dispatch(closeNewUserModal())}
          className={'react-modal-close'}
        >
          <MdClose size={20} />
        </button>

        <h2>Cadastrar Usuário</h2>

        <input
          placeholder={'Nome'}
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />

        <input
          placeholder={'CPF'}
          value={cpf}
          onChange={event => setCpf(event.target.value)}
          required
        />

        <input
          type={'email'}
          placeholder={'Email'}
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />

        <button type={'submit'} className={'default'}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}

export default NewUserModal
