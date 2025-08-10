import { Outlet } from "react-router-dom"
import UserProvider from "../contexts/user/UserProvider"

export const LoggedLayout = () => {
  return (
    <UserProvider>
        <Outlet />
    </UserProvider>
  )
}
