'use client';

import { useTina as useTinaOriginal } from 'tinacms/dist/react';
import { useMemo } from 'react';

/**
 * useTina Safe Wrapper
 * 
 * Prevents site-wide crashes if the TinaProvider is missing or if TinaCloud is unreachable.
 * Guaranteed to return at least the static data provided in the props.
 */
export function useTina<T extends object>(props: {
  query: string;
  variables: any;
  data: T;
}) {
  // If we are in a browser, check if Tina is actually initialized
  const isBrowser = typeof window !== 'undefined';
  
  try {
    // Attempt to use the real Tina hook
    // If it's missing context, it will throw an error
    return useTinaOriginal(props);
  } catch (e) {
    // If it fails, fall back to static data gracefully
    return {
      data: props.data,
      isClient: isBrowser
    };
  }
}

export { tinaField } from 'tinacms/dist/react';
