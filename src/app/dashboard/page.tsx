'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bienvenido, {user?.name}!</p>
            <p>Email: {user?.email}</p>

            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px'
            }}>
                <h2>Estadísticas de Trading</h2>
                <p>Aquí irán tus estadísticas...</p>
            </div>
        </div>
    );
}