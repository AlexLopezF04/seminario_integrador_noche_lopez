import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function LoginForm() {
  const [name, setName] = useState('')
  const { username, login, logout } = useAuth()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim()) {
      login(name.trim())
      setName('')
    }
  }

  if (username) {
    return (
      <div style={{ padding: '12px 16px', background: '#f0fdf4', borderRadius: 8 }}>
        <p style={{ margin: '0 0 8px' }}>
          Sesión iniciada como <strong>{username}</strong>
        </p>
        <button
          onClick={logout}
          style={{
            padding: '6px 16px',
            background: '#e00',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Cerrar sesión
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de usuario"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          flex: 1,
        }}
      />
      <button
        type="submit"
        disabled={!name.trim()}
        style={{
          padding: '8px 20px',
          background: name.trim() ? '#6366f1' : '#d1d5db',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: name.trim() ? 'pointer' : 'not-allowed',
          fontWeight: 600,
        }}
      >
        Ingresar
      </button>
    </form>
  )
}
