# 🔐 Sistema de Login Seguro con Next.js

Este proyecto implementa un sistema de autenticación seguro utilizando **Next.js 15**, **TypeScript** y **JSON Web Tokens (JWT)**.  
Incluye protección de rutas, manejo de sesiones y una interfaz moderna y responsive.

---

## 🚀 Características

- ✅ Autenticación segura con **JWT**
- 🔒 Protección de rutas con **middleware**
- 🌐 Arquitectura basada en **API Routes**
- 💾 Persistencia de sesión con **cookies HTTP-only**
- 🔐 Encriptación de contraseñas con **bcrypt**
- 🔄 Manejo de estado global con **Context API**
- 🛡️ Middleware personalizado para control de acceso

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 15.4.6** – Framework React para producción
- **React 19.1.0** – Biblioteca de interfaces de usuario
- **TypeScript** – Tipado estático para JavaScript
- **bcryptjs** – Hash de contraseñas
- **jose** – Implementación de JWT
- **TailwindCSS** – Framework CSS utilitario
- **ESLint** – Linter de código

---

## 📂 Estructura del Proyecto

```bash
src/
├── app/                    # Rutas y páginas
│   ├── api/                 # Endpoints de API
│   │   └── auth/            # Endpoints de autenticación
│   ├── dashboard/           # Página protegida (dashboard)
│   └── login/               # Página de login
├── components/              # Componentes reutilizables
├── contexts/                # Contextos globales (AuthContext)
└── lib/                     # Utilidades y funciones auxiliares
