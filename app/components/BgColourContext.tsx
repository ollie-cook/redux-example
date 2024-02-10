'use client'

import { createContext, useState, useContext } from 'react';

const useBgColourState = () => {
  return useState<string>('#a8ddd 9');
}

export const BgColourContext = createContext<ReturnType<typeof useBgColourState> | null>(null);

export const useBgColour = () => {
  const bgColour = useContext(BgColourContext)
  if (bgColour === null) {
    throw new Error('useBgColour must be used within a BgColourProvider')
  }
  return bgColour
}

const BgColourProvider = ({ children }: { children: React.ReactNode }) => {
  const [bgColour, setBgColour] = useBgColourState()

  return (
    <BgColourContext.Provider value={[bgColour, setBgColour]}>
      {children}
    </BgColourContext.Provider>
  )
}

export default BgColourProvider;