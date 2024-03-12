'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext({ hello: 'word' });

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState({ hello: 'word' });
  return <AppContext.Provider value={init}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
