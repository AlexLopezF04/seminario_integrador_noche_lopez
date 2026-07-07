import { useToggle } from '../hooks/useToggle'

export default function ModalDemo() {
  const { value: isOpen, setTrue: open, setFalse: close } = useToggle(false)

  return (
    <div>
      <button
        onClick={open}
        style={{
          padding: '8px 20px',
          background: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Abrir modal
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              padding: 24,
              borderRadius: 12,
              minWidth: 300,
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            }}
          >
            <h3 style={{ margin: '0 0 12px' }}>Modal con useToggle</h3>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: '#6b7280' }}>
              Este modal se abre y cierra usando el hook personalizado useToggle.
            </p>
            <button
              onClick={close}
              style={{
                padding: '8px 20px',
                background: '#e00',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
