'use client';

/**
 * useTina — Static passthrough for public visitors.
 *
 * On the public site we always use the static JSON data already imported
 * at build-time. The real useTina (from tinacms/dist/react) is only needed
 * inside /admin where the visual editor runs.
 *
 * This eliminates ALL infinite render loops caused by TinaCMS context
 * being unavailable / unstable on public pages.
 */
export function useTina<T extends object>(props: {
  query: string;
  variables: any;
  data: T;
}): { data: T } {
  // Always return the static data — no CMS context needed on public pages.
  return { data: props.data };
}

export { tinaField } from 'tinacms/dist/react';
