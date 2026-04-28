import { cn } from '@/lib/utils';
import React from 'react';

/**
 * Magic UI AnimatedGradientText
 * A pill badge with animated gradient background — perfect for section eyebrow labels.
 * Pure CSS, using the gradient-x keyframe defined in globals.css.
 */
export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative flex max-w-fit items-center justify-center rounded-full border border-white/20 bg-white/40 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm',
        'transition-shadow duration-500 ease-out hover:shadow-md',
        className,
      )}
    >
      {/* Animated gradient border glow */}
      <span
        className={cn(
          'absolute inset-0 block rounded-full opacity-30',
          'animate-gradient-x bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0284c7]',
          'blur-xl group-hover:opacity-50 transition-opacity duration-500',
        )}
        aria-hidden="true"
      />
      {/* Badge content */}
      <span className="relative z-10 flex items-center gap-1.5">
        {/* Gradient text inner */}
        <span
          className={cn(
            'inline animate-gradient-x bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent',
          )}
        >
          {children}
        </span>
      </span>
    </div>
  );
}

/**
 * Dark variant — for use on dark backgrounds (testimonials, hero)
 */
export function AnimatedGradientTextDark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative flex max-w-fit items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-sm',
        className,
      )}
    >
      <span
        className="inline animate-gradient-x bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent font-bold uppercase tracking-[0.3em] text-xs"
      >
        {children}
      </span>
    </div>
  );
}
