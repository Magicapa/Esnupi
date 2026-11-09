import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { LockScreen } from '../components/LockScreen';
import { VideoReveal } from '../components/VideoReveal';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  const [unlocked, setUnlocked] = useState(false);
  const VALID_PASSWORDS = ['rofeycalima', 'rofecalima'];

  if (!unlocked) {
    return (
      <LockScreen 
        correctPassword={VALID_PASSWORDS} 
        onUnlock={() => setUnlocked(true)} 
      />
    );
  }

  return <VideoReveal />;
}