import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navbar } from '@/components/Navbar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div style={{ minHeight: '100vh' }}>
                <Navbar />
                <main style={{ padding: '1rem' }}>
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    );
}