import { cn } from '@/lib/utils';
import React from 'react';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  delay?: number;
}

/**
 * Magic UI BorderBeam — animated glowing border beam that rotates around a card.
 * Use inside a `relative overflow-hidden rounded-*` parent.
 */
export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  colorFrom = '#0284c7',
  colorTo = '#38bdf8',
  borderWidth = 1.5,
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--border-width': borderWidth,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit]',
        // Creates the animated sweep using offset-path + offset-distance
        // Fallback: gradient border that slowly rotates via the border-beam keyframe
        '[border:calc(var(--border-width)*1px)_solid_transparent]',
        '[background:linear-gradient(white,white)_padding-box,conic-gradient(from_calc(130deg),transparent_0deg,var(--color-from)_80deg,var(--color-to)_100deg,transparent_120deg)_border-box]',
        className,
        // Animating border rotation via a CSS animation wrapper
        'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
      )}
      aria-hidden="true"
    />
  );
}

/**
 * Always-visible variant (no hover required) — used on hero/featured cards
 */
export function BorderBeamAlways({
  className,
  colorFrom = '#0284c7',
  colorTo = '#38bdf8',
  borderWidth = 1.5,
}: Omit<BorderBeamProps, 'size' | 'duration' | 'delay'>) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit]',
        '[border:calc(var(--border-width,1.5)*1px)_solid_transparent]',
        '[background:linear-gradient(white,white)_padding-box,conic-gradient(from_calc(130deg),transparent_0deg,var(--color-from)_80deg,var(--color-to)_100deg,transparent_120deg)_border-box]',
        'animate-spin-slow',
        className,
      )}
      style={{ '--color-from': colorFrom, '--color-to': colorTo, '--border-width': borderWidth } as React.CSSProperties}
      aria-hidden="true"
    />
  );
}
