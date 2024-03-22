'use client'

import { LogoutAction } from './actions'

interface ILogoutProps {
  i18n: {
    signout: string
  }
}

const Logout = ({ i18n }: ILogoutProps) => {
  const handlerLogout = async () => {
    await LogoutAction()
  }
  return (
    <div
      className="cursor-pointer inline-flex underline-offset-4 hover:underline"
      onClick={handlerLogout}
    >
      {i18n.signout}
    </div>
  )
}

export default Logout
