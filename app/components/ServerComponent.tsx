import { inconsolata }  from '@/app/fonts'

export default function ServerComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-500 relative flex flex-col items-center justify-center gap-8 p-8 w-11/12 mt-56 mb-32 sm:mt-0 sm:mb-0 lg:w-2/3 md:flex-row h-[36rem]">
      {children}
      <p className={`absolute bottom-1 left-2 text-white ${inconsolata.className}`}>Server Component</p>
    </div>
  )
}
