'use client';

import { useTina as useTinaReal } from 'tinacms/dist/react';

/**
 * useTina — Hook for TinaCMS visual editing.
 *
 * In production/public mode, it returns the static data.
 * In edit mode (inside /admin), it connects to the TinaCMS context
 * to enable live previews and hover-to-edit.
 */
export function useTina<T extends object>(props: {
  query: string;
  variables: any;
  data: T;
}): { data: T } {
  return useTinaReal(props);
}

export { tinaField } from 'tinacms/dist/react';
