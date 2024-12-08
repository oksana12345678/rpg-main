import { useRef } from 'react';

export function useStableArray<T>(array?: T[]) {
  const ref = useRef<T[]>([]);

  return array ?? ref.current;
}
