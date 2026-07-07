import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

interface Post {
  id: number
  title: string
  body: string
}

export default function PostList() {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
  )

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{
            padding: '6px 14px',
            background: page === 1 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          ← Anterior
        </button>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Página {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          style={{
            padding: '6px 14px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          Siguiente →
        </button>
      </div>

      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Cargando...</p>}
      {error && <p style={{ fontSize: 13, color: '#e00' }}>Error: {error}</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {(data ?? []).map((post) => (
          <div
            key={post.id}
            style={{
              padding: 12,
              background: '#f9fafb',
              borderRadius: 6,
            }}
          >
            <strong style={{ fontSize: 14, display: 'block', marginBottom: 4 }}>
              {post.id}. {post.title}
            </strong>
            <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
