'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>
                    Dashboard
                </Link>
                <Link href="/trades" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>
                    Trades
                </Link>
                <Link href="/calendario" style={{ color: 'white', textDecoration: 'none', marginRight: '1rem' }}>
                    Calendario
                </Link>
            </div>

            <div>
                <span style={{ marginRight: '1rem' }}>
                    Hola, {user?.name}
                </span>
                <button
                    onClick={logout}
                    style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
}