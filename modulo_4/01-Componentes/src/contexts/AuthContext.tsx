import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextType {
  username: string | null
  login: (name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)

  const login = (name: string) => setUsername(name)
  const logout = () => setUsername(null)

  return <AuthContext value={{ username, login, logout }}>{children}</AuthContext>
}
