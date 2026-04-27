'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamically import to avoid SSR issues with D3
const InteractiveMap = dynamic(() => import('./InteractiveMapInner'), { ssr: false, loading: () => (
  <div className="flex items-center justify-center h-96 bg-slate-100 rounded-3xl">
    <div className="text-slate-400 font-medium">Loading map…</div>
  </div>
)});

export default InteractiveMap;
