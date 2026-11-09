import { useState } from 'react';

interface LockScreenProps {
  onUnlock: () => void;
  correctPassword: string | string[];
}

export function LockScreen({ onUnlock, correctPassword }: LockScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = password.trim().toLowerCase();

    const isMatch = Array.isArray(correctPassword)
      ? correctPassword.some(p => p.toLowerCase() === cleanInput)
      : cleanInput === correctPassword.toLowerCase();

    if (isMatch) {
      onUnlock();
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-6 selection:bg-neutral-800">
      <div className="w-full max-w-md space-y-6 text-center">
        
        {/* Contenedor de la imagen con tamaño generoso pero estético */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="w-280px h-280px rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
            <img 
              src="./Sudoku.jpg" 
              alt="Sudoku verification" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-neutral-100 font-light tracking-wide">
            Imagen para que sepas que tiene que ver contigo
          </p>
        </div>

        {/* Títulos y descripción organizados */}
        <div className="space-y-2 pt-1">
          <h1 className="text-2xl font-light tracking-wide text-neutral-100">
            Acceso Privado 🔒
          </h1>
          <p className="text-sm text-neutral-400 font-light leading-relaxed px-4">
            La contraseña es aquella a lo que nos recuerda esta canción (ponlo todo junto).
          </p>
        </div>

        {/* Reproductor de audio */}
        <div className="py-2">
          <audio controls className="w-full opacity-80 hover:opacity-100 transition-opacity h-10 accent-neutral-100">
            <source src="./Bleed.mp3" type="audio/mpeg" />
            Tu navegador no soporta el reproductor de audio.
          </audio>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce la contraseña..."
              className="w-full px-4 py-3.5 bg-neutral-900/90 border border-neutral-800 rounded-xl focus:outline-none focus:border-neutral-600 text-center text-sm tracking-wide transition-all text-neutral-100 placeholder:text-neutral-600 shadow-inner"
            />
          </div>
          
          {error && (
            <p className="text-xs text-red-400 font-light tracking-wide">
              Contraseña incorrecta. Piénsalo bien.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 bg-neutral-100 text-neutral-950 font-medium rounded-xl hover:bg-neutral-200 active:scale-[0.99] transition-all text-sm tracking-wider uppercase cursor-pointer shadow-sm"
          >
            Desbloquear
          </button>
        </form>
      </div>
    </main>
  );
}