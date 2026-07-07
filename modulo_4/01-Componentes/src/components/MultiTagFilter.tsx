import { useState, useMemo } from 'react'

interface Item {
  id: number
  name: string
  tags: string[]
}

const allTags = ['react', 'typescript', 'css', 'node', 'testing', 'database']

const items: Item[] = [
  { id: 1, name: 'Componentes con props',              tags: ['react', 'typescript'] },
  { id: 2, name: 'Estado con useState',                 tags: ['react', 'typescript'] },
  { id: 3, name: 'Efectos secundarios',                 tags: ['react'] },
  { id: 4, name: 'Estilos con CSS Modules',             tags: ['css', 'react'] },
  { id: 5, name: 'API REST con Node',                   tags: ['node', 'typescript'] },
  { id: 6, name: 'Pruebas con Vitest',                  tags: ['testing', 'typescript'] },
  { id: 7, name: 'Consultas SQL',                       tags: ['database'] },
  { id: 8, name: 'Pruebas de integración',              tags: ['testing', 'node'] },
  { id: 9, name: 'Flexbox y Grid',                      tags: ['css'] },
  { id: 10, name: 'MongoDB con Mongoose',               tags: ['database', 'node'] },
]

export default function MultiTagFilter() {
  const [selected, setSelected] = useState<string[]>([])

  function toggleTag(tag: string) {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filtered = useMemo(() => {
    if (selected.length === 0) return items
    return items.filter((item) => selected.every((tag) => item.tags.includes(tag)))
  }, [selected])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
        {allTags.map((tag) => {
          const active = selected.includes(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding: '6px 14px',
                background: active ? '#6366f1' : '#f3f4f6',
                color: active ? '#fff' : '#374151',
                border: active ? '2px solid #6366f1' : '2px solid #d1d5db',
                borderRadius: 20,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {tag}
            </button>
          )
        })}
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} item{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 12px',
              background: '#f9fafb',
              borderRadius: 6,
              fontSize: 14,
            }}
          >
            <span>{item.name}</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {item.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '2px 8px',
                    background: '#e0e7ff',
                    color: '#4338ca',
                    borderRadius: 10,
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
