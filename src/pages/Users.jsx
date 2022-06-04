import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeaderUser from '../components/HeaderUser'
import User from '../components/User'

const Users = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.entities.bankAccounts.currentUser)

  useEffect(() => {
    if (user['@id'] === undefined) navigate('/')
  }, [])

  return (
    <>
      <HeaderUser />
      <User />
    </>
  )
}

export default Users
