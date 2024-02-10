'use client'

import { inconsolata }  from '@/app/fonts'
import { useColour } from "../store/store";

export default function Output() {
  const colour = useColour();

  return (
    <div 
      className="relative w-5/6 aspect-square bg-red-300 rounded-md md:w-[32rem]"
      style={{backgroundColor: colour}}
    >
      <p className={`absolute bottom-1 left-2 ${inconsolata.className}`}>Client Component</p>
    </div>
  )
}