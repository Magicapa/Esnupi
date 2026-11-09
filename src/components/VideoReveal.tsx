import { useState, useEffect } from 'react';

export function VideoReveal() {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const BOT_TOKEN = '9122319242:AAFqVzdDYLhqitMNhm4Q40D1aLgfWqi3WXw';
    const CHAT_ID = '6444533029';
    const message = '🎉 ¡Alguien acaba de introducir la contraseña correcta y ha entrado a la web!';

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    }).catch((err) => console.error('Error al notificar:', err));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 text-neutral-200">
      <div className="w-full max-w-md space-y-6 text-center flex flex-col items-center">
        <h1 className="text-xl font-light text-neutral-100">¡Acceso concedido!</h1>
        
        {/* Contenedor vertical para el vídeo */}
        <div className="w-[380px] h-[640px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
          <video 
            controls 
            onEnded={() => setVideoEnded(true)}
            className="w-full h-full object-cover"
          >
            <source src="./video.mp4" type="video/mp4" />
            Tu navegador no soporta el vídeo.
          </video>
        </div>

        {/* Bloque de texto con animación de aparición suave */}
        <div 
          className={`w-full transition-all duration-700 ease-out transform ${
            videoEnded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {videoEnded && (
            <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-2 shadow-xl">
<p className="text-neutral-100 font-light tracking-wide text-sm leading-relaxed">
                Cuando hablo de nuestra relación, cuando veo una pareja, cuando recuerdo Tenerife, cuando estoy dando un paseo con Calima, cuando me lo paso bien y no estás, cuando lo paso mal y no estás... Este es el tipo de recuerdos que me vienen a la cabeza.
              </p>
              
              <p className="text-neutral-100 font-light tracking-wide text-sm leading-relaxed">
                Soy buen conocedor de lo bien que maquilla la mente todos aquellos momentos, de cómo hace una recopilación donde una vez fui feliz contigo, junto a una canción bonita que me hayas enseñado. Por eso, por mucho que todo eso me ponga nostálgico, lo que realmente me duele es vivir mi día a día y darme cuenta de que alguien como tú es difícil de conocer.
              </p>

              <p className="text-neutral-100 font-light tracking-wide text-sm leading-relaxed">
                No he querido interferir en tu vida; por eso he decidido hacer esta página con este vídeo, el cual no te voy a mandar de forma directa.
              </p>

              <p className="text-neutral-100 font-light tracking-wide text-sm leading-relaxed">
                Si el vídeo te ha gustado y te apetece que hablemos, escríbeme. Así sabré que no soy el único con ganas de sentarse a charlar de lo que sea.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}