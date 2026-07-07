import { useReducer } from 'react'

interface FormState {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type Action =
  | { type: 'set_field'; field: keyof FormState; value: string }
  | { type: 'reset' }

const initialState: FormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'set_field':
      return { ...state, [action.field]: action.value }
    case 'reset':
      return initialState
  }
}

export default function RegistrationForm() {
  const [form, dispatch] = useReducer(reducer, initialState)

  const passwordsMatch = form.password === form.confirmPassword
  const isFormValid = form.name && form.email && form.password && passwordsMatch

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isFormValid) return
    alert(`Registrado: ${form.name} (${form.email})`)
    dispatch({ type: 'reset' })
  }

  const inputStyle: React.CSSProperties = {
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: 6,
    fontSize: 14,
    width: '100%',
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input
        placeholder="Nombre"
        value={form.name}
        onChange={(e) => dispatch({ type: 'set_field', field: 'name', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => dispatch({ type: 'set_field', field: 'email', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Contraseña"
        type="password"
        value={form.password}
        onChange={(e) => dispatch({ type: 'set_field', field: 'password', value: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Confirmar contraseña"
        type="password"
        value={form.confirmPassword}
        onChange={(e) => dispatch({ type: 'set_field', field: 'confirmPassword', value: e.target.value })}
        style={{ ...inputStyle, borderColor: form.confirmPassword && !passwordsMatch ? '#e00' : '#d1d5db' }}
      />
      {form.confirmPassword && !passwordsMatch && (
        <span style={{ color: '#e00', fontSize: 12 }}>Las contraseñas no coinciden</span>
      )}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            padding: '8px 20px',
            background: isFormValid ? '#6366f1' : '#d1d5db',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Registrar
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'reset' })}
          style={{
            padding: '8px 20px',
            background: '#6b7280',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  )
}
