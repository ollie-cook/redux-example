import ServerComponent from './components/ServerComponent'
import Controls from './components/Controls'
import Output from './components/Output'
import { inconsolata }  from './fonts'
import StoreProvider from "./store/StoreProvider";

export default function Home() {
  const colour = "#a1a1aa"

  return ( 
    <main className="relative min-h-screen flex flex-col items-center pt-4 bg-zinc-400">
      <div className=" w-11/12 lg:w-[50rem]">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Redux with React Context Example</h1>
        <p className={`text-sm text-center mt-2 ${inconsolata.className}`}>I used Redux with React Context and Next.js to create this very simple example. It renders two client components from within a server component, and uses Redux and React Context to give both client components access to a shared state, i.e. the background colour.</p>
      </div>
      <StoreProvider colour={colour}>
        <ServerComponent>
          <Controls />
          <Output />
        </ServerComponent>
      </StoreProvider>
      <div className="absolute bottom-12 sm:left-1/2 md:bottom-1 sm:-translate-x-1/2 text-center text-sm">
        <p>View the source code <a href="https://github.com/ollie-cook/react-context-example" target="_blank" className="underline">here</a>.</p>
        <p>I used the <a href="https://redux.js.org/usage/" target="_blank" className="underline">docs</a> and <a href="https://www.pronextjs.dev/tutorials/state-management" target="_blank" className="underline">this</a> tutorial by Jack Herrington.</p>
      </div>  
    </main>
  );
}
