import Login from '~/components/auth/login'
import { NavLink } from '@remix-run/react'

export default ({ auth }: any) => (
  <div className="w-full h-full mt-32 flex flex-col items-center justify-center">
    <Login auth={auth} />
    <NavLink to={'/signup'} className="flex flex-row">
      <button className="p-4 bg-primary-background m-4">
          Or create an account
      </button>
    </NavLink>
  </div>
)
