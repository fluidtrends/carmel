import Login from '~/components/login'

export default () => (
  <div className="w-full h-full mt-32 flex flex-col items-center justify-center">
    <Login />
    <a href={'/signup'} className="flex flex-row">
      <button className="p-4 bg-primary-background m-4">
          Or create an account
      </button>
    </a>
  </div>
)
