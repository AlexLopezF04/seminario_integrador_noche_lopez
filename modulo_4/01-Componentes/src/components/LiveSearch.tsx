import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'

interface Post {
  id: number
  title: string
}

export default function LiveSearch() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  const url = debouncedQuery
    ? `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(debouncedQuery)}`
    : null

  const { data, loading } = useFetch<Post[]>(url)

  return (
    <div style={{ maxWidth: 420 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar posts (debounce 400ms)..."
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          marginBottom: 16,
        }}
      />
      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Buscando...</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {(data ?? []).map((post) => (
          <div
            key={post.id}
            style={{
              padding: '10px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
