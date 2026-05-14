'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Force cast the dynamic component to any to bypass the broken type checking
const Player = dynamic(() => import('react-player'), { ssr: false }) as any;

interface BackgroundVideoProps {
  url: string;
  poster?: string;
}

export default function BackgroundVideo({ url, poster }: BackgroundVideoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-secondary" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-secondary pointer-events-none">
      <Player
        url={url}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1.5)',
          objectFit: 'cover',
        }}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              iv_load_policy: 3,
              controls: 0,
              showinfo: 0
            }
          },
          vimeo: {
            playerOptions: {
              background: true,
              autoplay: true,
              loop: true,
              muted: true,
              controls: false
            }
          }
        }}
      />
      {/* Fallback Poster */}
      {!url && poster && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
    </div>
  );
}
