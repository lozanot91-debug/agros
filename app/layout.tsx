import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGROS - Gestión de Acopio",
  description: "Plataforma integral de gestión agrícola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-white">
        <div className="min-h-screen flex flex-col">
          <header className="bg-slate-900 border-b border-emerald-600 p-4">
            <h1 className="text-3xl font-bold text-emerald-500">AGROS</h1>
            <p className="text-slate-400 text-sm">Plataforma de Gestión de Acopio</p>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
