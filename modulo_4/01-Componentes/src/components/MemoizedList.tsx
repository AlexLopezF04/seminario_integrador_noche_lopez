import { useState, useCallback, memo } from 'react'

interface ListItemProps {
  item: string
  onRemove: (item: string) => void
}

const ListItem = memo(function ListItem({ item, onRemove }: ListItemProps) {
  return (
    <div
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
      <span>{item}</span>
      <button
        onClick={() => onRemove(item)}
        style={{
          padding: '4px 10px',
          background: '#e00',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        Quitar
      </button>
    </div>
  )
})

const initialItems = ['Manzana', 'Banana', 'Naranja', 'Uva']

export default function MemoizedList() {
  const [items, setItems] = useState(initialItems)
  const [newItem, setNewItem] = useState('')

  const handleRemove = useCallback((item: string) => {
    setItems((prev) => prev.filter((i) => i !== item))
  }, [])

  function handleAdd() {
    if (!newItem.trim()) return
    setItems((prev) => [...prev, newItem.trim()])
    setNewItem('')
  }

  return (
    <div style={{ maxWidth: 380 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Nuevo item"
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            fontSize: 14,
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 20px',
            background: '#22c55e',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Agregar
        </button>
      </div>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {items.length} item{items.length !== 1 ? 's' : ''}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {items.map((item, idx) => (
          <ListItem key={`${item}-${idx}`} item={item} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  )
}
