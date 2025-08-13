import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production'
);

export interface User {
    id: string;
    email: string;
    name: string;
}

// Mock users database - en producción usar base de datos real
const MOCK_USERS = [
    {
        id: '1',
        email: 'admin@test.com',
        name: 'Admin User',
        password: '$2b$10$FMloMghrngHaVPB.26NmxOFVG6kLOtdHzdXxG9ZcN0GqvOckvAtfW' // password: "123456"
    }
];

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

export async function createToken(user: User): Promise<string> {
    return new SignJWT({ user })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<User | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload.user as User;
    } catch {
        return null;
    }
}

export async function authenticateUser(email: string, password: string): Promise<User | null> {
    const user = MOCK_USERS.find(u => u.email === email);
    if (!user) return null;

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) return null;

    return {
        id: user.id,
        email: user.email,
        name: user.name
    };
}

export function getTokenFromRequest(request: Request): string | null {
    const authHeader = request.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }
    return null;
}