import { useState, useCallback, useEffect } from 'react'

interface Post {
  id: number
  title: string
}

export default function SearchWithFetch() {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = useCallback(async (search: string) => {
    setLoading(true)
    try {
      const url = search
        ? `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(search)}`
        : 'https://jsonplaceholder.typicode.com/posts?_limit=10'
      const res = await fetch(url)
      const data: Post[] = await res.json()
      setPosts(data)
    } catch {
      setPosts([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => fetchPosts(query), 300)
    return () => clearTimeout(timer)
  }, [query, fetchPosts])

  return (
    <div style={{ maxWidth: 420 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar posts..."
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
          marginBottom: 16,
        }}
      />
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
            {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}
