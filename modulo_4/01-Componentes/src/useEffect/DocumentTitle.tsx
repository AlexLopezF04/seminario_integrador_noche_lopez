import { useState, useEffect } from 'react'

interface Props {
  initialTitle?: string
}

export default function DocumentTitle({ initialTitle = 'Mi App con React 19' }: Props) {
  const [title, setTitle] = useState(initialTitle)
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `${title} — ${count} visitas`

    return () => {
      document.title = 'React App'
    }
  }, [title, count])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe un título..."
        style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', fontSize: 14 }}
      />
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        El título de la pestaña se actualiza automáticamente.
      </p>
      <p style={{ margin: 0, fontSize: 14 }}>
        <strong>{count}</strong> visitas a esta página
      </p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '8px 16px',
          background: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Incrementar visitas
      </button>
    </div>
  )
}
