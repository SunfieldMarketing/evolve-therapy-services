import { cn } from '@/lib/utils';
import React from 'react';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  as?: any;
}

export function ShimmerButton({
  shimmerColor = 'rgba(255,255,255,0.4)',
  shimmerSize = '0.05em',
  shimmerDuration = '3s',
  borderRadius = '100px',
  background = 'rgba(2, 132, 199, 1)',
  className,
  children,
  as: Component = 'button',
  ...props
}: ShimmerButtonProps) {
  return (
    <Component
      style={
        {
          '--spread': '90deg',
          '--shimmer-color': shimmerColor,
          '--radius': borderRadius,
          '--speed': shimmerDuration,
          '--cut': shimmerSize,
          '--bg': background,
        } as React.CSSProperties
      }
      className={cn(
        'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white',
        '[border-radius:var(--radius)] [background:var(--bg)]',
        'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px hover:-translate-y-px',
        className,
      )}
      {...props}
    >
      {/* Shimmer sweep layer */}
      <div
        className={cn(
          'absolute inset-0 overflow-hidden [border-radius:var(--radius)]',
          'before:absolute before:top-1/2 before:-left-full before:h-[var(--cut)] before:w-full',
          'before:animate-shimmer-slide before:[--direction:linear]',
          'before:[background:linear-gradient(to_right,transparent,var(--shimmer-color),transparent)]',
          'before:[animation-duration:var(--speed)]',
        )}
        aria-hidden="true"
      />
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}) {
  return (
    <span
      style={{ '--shimmer-width': `${shimmerWidth}px` } as React.CSSProperties}
      className={cn(
        'mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70',
        'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
        'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80',
        className,
      )}
    >
      {children}
    </span>
  );
}
