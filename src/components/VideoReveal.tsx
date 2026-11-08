import { useState } from 'react';

export function VideoReveal() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-8 flex flex-col items-center">
        
        {/* Contenedor del Vídeo vertical con el spinner de carga */}
        <div className="relative aspect-9/16 w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center">
          
          {/* Icono de carga (Spinner) que se muestra mientras el vídeo no esté listo */}
          {!isVideoLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 z-10 space-y-3">
              <div className="w-8 h-8 border-2 border-neutral-600 border-t-neutral-100 rounded-full animate-spin" />
              <span className="text-xs text-neutral-400 font-light tracking-wider">Cargando recuerdo...</span>
            </div>
          )}

          <video
            src="/video.mp4"
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
          />
        </div>

        {/* Texto de la nota */}
        <div className="space-y-4 text-center max-w-lg mx-auto">
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-light">
            He hecho este vídeo porque hay cosas que se quedan grabadas sin pedir permiso. Sé que las relaciones no son solo momentos bonitos y que las cosas cayeron por su propio peso, pero al ver esto solo me sale agradecer lo que fuimos.
          </p>
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-light">
            Si alguna vez te apetece sentarte a hablar de cero, sin inercias ni mochilas del pasado, escríbeme. La puerta sigue abierta.
          </p>
        </div>

      </div>
    </main>
  );
}

