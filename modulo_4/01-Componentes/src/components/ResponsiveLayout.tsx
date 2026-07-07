import { useMediaQuery } from '../hooks/useMediaQuery'
import { useWindowSize } from '../hooks/useWindowSize'

export default function ResponsiveLayout() {
  const { width } = useWindowSize()
  const isMobile = useMediaQuery('(max-width: 480px)')
  const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 768px)')
  const isDesktop = useMediaQuery('(min-width: 769px)')

  let deviceLabel = 'Desktop'
  let deviceColor = '#6366f1'
  if (isMobile) { deviceLabel = 'Móvil'; deviceColor = '#22c55e' }
  else if (isTablet) { deviceLabel = 'Tablet'; deviceColor = '#f59e0b' }

  return (
    <div style={{ maxWidth: 500 }}>
      <div
        style={{
          padding: 20,
          background: '#f9fafb',
          borderRadius: 8,
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>Ancho de ventana</div>
        <div style={{ fontSize: 36, fontWeight: 700 }}>{width}px</div>
      </div>

      <div
        style={{
          padding: 20,
          background: deviceColor,
          color: '#fff',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Dispositivo detectado</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{deviceLabel}</div>
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 8 }}>
          {isMobile && 'max-width: 480px'}
          {isTablet && '481px – 768px'}
          {isDesktop && 'min-width: 769px'}
        </div>
      </div>
    </div>
  )
}
