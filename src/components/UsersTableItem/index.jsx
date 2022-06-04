import { FaTrashAlt, FaEdit, FaEye } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { openDeleteUserModal, openEditUserModal } from '../../store/users'
import { setCurrentUser } from '../../store/bankAccounts'

export function UsersTableItem (props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGoToUser = () => {
    dispatch(setCurrentUser({ user: props.user }))
    navigate(`/users/${props.user.id}`)
  }

  return (
    <tr>
      <td>
        <span>{props.user.name}</span>
        <span>{props.user.cpf}</span>
        <span>{props.user.email}</span>
      </td>
      <td>
        <FaEye className={'go_to_user'} onClick={handleGoToUser} />
        <FaEdit
          className={'edit_user'}
          onClick={() => dispatch(openEditUserModal({ user: props.user }))}
        />
        <FaTrashAlt
          className={'delete_user'}
          onClick={() => dispatch(openDeleteUserModal({ id: props.user.id }))}
        />
      </td>
    </tr>
  )
}
