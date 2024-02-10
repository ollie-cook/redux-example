'use client'

import { inconsolata }  from '@/app/fonts'
import { useColour } from "../store/store";
import { useDispatch } from "react-redux";
import { setColour } from "@/app/store/store";

export default function Controls() {
  const colour = useColour();
  const dispatch = useDispatch();

  const shuffleBackground = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16);
      color += random.toString(16);
    }

    //setBgColour(color)
    dispatch(setColour(color));
  }

  return (
    <div className="relative w-5/6 h-32 bg-teal-500 rounded-md flex flex-col gap-4 justify-center items-center px-2 md:w-48 md:h-96">
      <button 
        className="p-2 bg-teal-800 rounded-md text-white hover:bg-teal-900"
        onClick={shuffleBackground}
      >
        Shuffle Background Colour
      </button>
      <div className="h-8 aspect-square" style={{backgroundColor: colour}}>

      </div>
      <p className={`absolute bottom-1 left-2 ${inconsolata.className}`}>Client Component</p>
    </div>
  )
}