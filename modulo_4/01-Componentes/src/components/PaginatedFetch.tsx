import { useState, useCallback, useEffect } from 'react'

interface Post {
  id: number
  title: string
}

export default function PaginatedFetch() {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPage = useCallback(async (pageNum: number) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=5`
      )
      const data: Post[] = await res.json()
      setPosts(data)
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPage(page)
  }, [page, fetchPage])

  const handlePrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1))
  }, [])

  const handleNext = useCallback(() => {
    setPage((p) => p + 1)
  }, [])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          style={{
            padding: '8px 16px',
            background: page === 1 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
          }}
        >
          ← Anterior
        </button>
        <span style={{ fontSize: 14, fontWeight: 600 }}>Página {page}</span>
        <button
          onClick={handleNext}
          disabled={posts.length < 5}
          style={{
            padding: '8px 16px',
            background: posts.length < 5 ? '#d1d5db' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: posts.length < 5 ? 'not-allowed' : 'pointer',
            fontWeight: 600,
          }}
        >
          Siguiente →
        </button>
      </div>

      {loading && <p style={{ fontSize: 13, color: '#6b7280' }}>Cargando...</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              padding: '10px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            {post.id}. {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
