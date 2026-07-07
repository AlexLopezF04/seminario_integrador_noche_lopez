import { useAuth } from '../contexts/AuthContext'

export default function UserBadge() {
  const { username, logout } = useAuth()

  return (
    <div
      style={{
        padding: '12px 16px',
        background: '#f0fdf4',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <span>
        Usuario: <strong>{username ?? 'Invitado'}</strong>
      </span>
      {username && (
        <button
          onClick={logout}
          style={{
            padding: '4px 12px',
            background: '#e00',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Cerrar sesión
        </button>
      )}
    </div>
  )
}
