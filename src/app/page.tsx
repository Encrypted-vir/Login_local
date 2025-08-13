import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Trading Journal</h1>
      <p>Sistema de trading seguro</p>

      <div style={{ marginTop: '2rem' }}>
        <Link
          href="/login"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '4px',
            marginRight: '1rem'
          }}
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/dashboard"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}