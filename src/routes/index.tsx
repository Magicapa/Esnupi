import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { LockScreen } from '../components/LockScreen';
import { VideoReveal } from '../components/VideoReveal';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const [unlocked, setUnlocked] = useState(false);
  const CORRECT_PASSWORD = 'rofeycalima'; // Cámbiala por la clave real

  if (!unlocked) {
    return (
      <LockScreen 
        correctPassword={CORRECT_PASSWORD} 
        onUnlock={() => setUnlocked(true)} 
      />
    );
  }

  return <VideoReveal />;
}