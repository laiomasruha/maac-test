import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { loadUsers } from '../../store/users'
import { Pagination } from '../Pagination'
import { UsersTableItem } from '../UsersTableItem'
import { Container, Center } from './styles'
import { SpinnerCircular } from 'spinners-react'

const UsersTable = () => {
  const location = useLocation()
  const [urlParams] = useSearchParams({})
  const page = urlParams.get('page')
  const dispatch = useDispatch()
  const loading = useSelector(state => state.entities.users.loading)
  const users = useSelector(state => state.entities.users.list)
  const pagination = useSelector(state => state.entities.users.pagination)

  useEffect(() => {
    const pathQuery = location.pathname === '/' ? '/users' : location.pathname
    const searchQuery =
      location.search === '' ? '?page=1&itemsPerPage=5' : location.search
    const currentPage = pathQuery + searchQuery

    dispatch(loadUsers(currentPage))
  }, [])

  return loading ? (
    <Container>
      <Center>
        <SpinnerCircular color={'#2C5282'} thickness={'200'} size={'80'} />
      </Center>
    </Container>
  ) : (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => {
            return <UsersTableItem key={user.id} user={user} />
          })}
        </tbody>
      </table>
      <Pagination page={page} pagination={pagination} />
    </Container>
  )
}

export default UsersTable
