import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-900 rounded-lg border border-emerald-600 p-8 mb-8">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Bienvenido a AGROS
        </h2>
        <p className="text-slate-300 mb-6">
          Plataforma integral para gestionar campañas agrícolas, presupuestos y resultados.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <Link href="/campanas">
            <div className="bg-emerald-900 hover:bg-emerald-800 rounded p-4 cursor-pointer transition">
              <h3 className="text-emerald-400 font-bold mb-2">📋 Campañas</h3>
              <p className="text-sm text-slate-300">Gestionar campañas agrícolas</p>
            </div>
          </Link>

          <Link href="/configuracion">
            <div className="bg-emerald-900 hover:bg-emerald-800 rounded p-4 cursor-pointer transition">
              <h3 className="text-emerald-400 font-bold mb-2">⚙️ Configuración</h3>
              <p className="text-sm text-slate-300">Campos, socios, rubros, cultivos</p>
            </div>
          </Link>

          <Link href="/presupuesto">
            <div className="bg-emerald-900 hover:bg-emerald-800 rounded p-4 cursor-pointer transition">
              <h3 className="text-emerald-400 font-bold mb-2">💰 Presupuesto</h3>
              <p className="text-sm text-slate-300">Presupuesto base y por campo</p>
            </div>
          </Link>

          <Link href="/ejecucion">
            <div className="bg-emerald-900 hover:bg-emerald-800 rounded p-4 cursor-pointer transition">
              <h3 className="text-emerald-400 font-bold mb-2">✅ Ejecución</h3>
              <p className="text-sm text-slate-300">Retiros, aplicaciones, cosecha</p>
            </div>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-blue-900 rounded border border-blue-600">
          <p className="text-blue-300 text-sm">
            <strong>ℹ️ Estado:</strong> Plataforma en desarrollo. Funcionalidades siendo agregadas.
          </p>
        </div>
      </div>
    </div>
  );
}
