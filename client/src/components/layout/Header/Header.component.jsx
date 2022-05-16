import React from 'react'
import { GetAllUsers } from '../../../services/UsersService.service';

function Header() {
  const GetUsers = () => {
    GetAllUsers()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div>Header.component
      <button onClick={GetUsers}>click</button>
    </div>
  )
}

export default Header;