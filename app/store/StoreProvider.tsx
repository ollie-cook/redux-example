'use client'

import { useRef } from "react";
import { Provider } from 'react-redux'
import { createStore, setColour } from "./store";

export default function StoreProvider({
  colour,
  children
}: {
  colour: string;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
	if (!storeRef.current) {
		storeRef.current = createStore();
		storeRef.current.dispatch(setColour(colour));
	}

  return <Provider store={storeRef.current}>{children}</Provider>
}