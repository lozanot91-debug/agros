# AGROS - Plataforma de Gestión Integral de Acopio

Plataforma centralizada para gestionar presupuestos, ejecuciones y resultados de campañas agrícolas con distribución automática de márgenes entre socios.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Backend**: Next.js API Routes
- **Base de Datos**: PostgreSQL (Supabase)
- **Hosting**: Vercel
- **Estilos**: Tailwind CSS (dark mode, emerald accents)

## 🚀 Inicio Rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
agros/
├── app/
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   └── api/               # API Routes (próximamente)
├── lib/                   # Funciones auxiliares
├── components/            # Componentes React
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Fases de Desarrollo

### Fase 1: Core MVP (En Progreso)
- [ ] CRUD Campañas
- [ ] CRUD Presupuesto Base
- [ ] Dashboard simple

### Fase 2: Importación (Próximo)
- [ ] Parser de Excel
- [ ] Ejecución

### Fase 3: Polish (Futuro)
- [ ] Reportes PDF
- [ ] Contratos

## 📞 Creado para Tomás
Agrónomo, Tandil, Buenos Aires - 2025
