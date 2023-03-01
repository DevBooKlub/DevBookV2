import { useEffect } from 'react'
import { createContext, useState, useMemo } from 'react'

const ctx = createContext(null)

function userContext({ children }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log('user has changed', user)
  }, [user])
  const values = useMemo(() => ({ user, setUser }), [user])

  return <ctx.Provider value={values}>{children}</ctx.Provider>
}

export { userContext as AuthContextProvider, ctx as AuthContext }
