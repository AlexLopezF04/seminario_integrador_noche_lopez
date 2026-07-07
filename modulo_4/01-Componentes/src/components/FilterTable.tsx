import { useState, useCallback, useMemo } from 'react'

interface Row {
  id: number
  name: string
  role: string
  department: string
}

const data: Row[] = [
  { id: 1, name: 'Ana García',      role: 'Developer',  department: 'Ingeniería' },
  { id: 2, name: 'Carlos López',    role: 'Designer',   department: 'Diseño' },
  { id: 3, name: 'María Pérez',     role: 'Developer',  department: 'Ingeniería' },
  { id: 4, name: 'Pedro Ruiz',      role: 'QA',         department: 'Ingeniería' },
  { id: 5, name: 'Laura Sánchez',   role: 'Designer',   department: 'Diseño' },
  { id: 6, name: 'Diego Martínez',  role: 'Developer',  department: 'Producto' },
  { id: 7, name: 'Sofía Ramírez',   role: 'Manager',    department: 'Producto' },
  { id: 8, name: 'Jorge Torres',    role: 'QA',         department: 'Ingeniería' },
]

export default function FilterTable() {
  const [nameFilter, setNameFilter] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [deptFilter, setDeptFilter] = useState('')

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setNameFilter(e.target.value),
    []
  )
  const handleRoleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setRoleFilter(e.target.value),
    []
  )
  const handleDeptChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setDeptFilter(e.target.value),
    []
  )

  const filtered = useMemo(() => {
    return data.filter((row) => {
      if (nameFilter && !row.name.toLowerCase().includes(nameFilter.toLowerCase())) return false
      if (roleFilter && row.role !== roleFilter) return false
      if (deptFilter && row.department !== deptFilter) return false
      return true
    })
  }, [nameFilter, roleFilter, deptFilter])

  const roles = [...new Set(data.map((r) => r.role))]
  const depts = [...new Set(data.map((r) => r.department))]

  const selectStyle: React.CSSProperties = {
    padding: '6px 10px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 13,
    flex: 1,
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <input
          placeholder="Filtrar por nombre"
          value={nameFilter}
          onChange={handleNameChange}
          style={{
            ...selectStyle,
            flex: 1,
            minWidth: 140,
          }}
        />
        <select value={roleFilter} onChange={handleRoleChange} style={selectStyle}>
          <option value="">Todos los roles</option>
          {roles.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={deptFilter} onChange={handleDeptChange} style={selectStyle}>
          <option value="">Todos los deptos</option>
          {depts.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 8 }}>
        {filtered.length} registro{filtered.length !== 1 ? 's' : ''}
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Rol</th>
            <th style={thStyle}>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.role}</td>
              <td style={tdStyle}>{row.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const thStyle: React.CSSProperties = {
  padding: '8px 12px',
  fontWeight: 600,
  borderBottom: '2px solid #d1d5db',
}

const tdStyle: React.CSSProperties = {
  padding: '8px 12px',
}
