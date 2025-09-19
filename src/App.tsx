import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-8">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">ScribeForge</h1>
        <p className="mt-3 text-neutral-300">
          Offline-first Pathfinder 2e character builder & digital sheet.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <NavLink to="/builder" className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
            Open Builder
          </NavLink>
          <NavLink to="/sheet" className="px-4 py-2 rounded-lg bg-neutral-200 text-neutral-900 hover:bg-neutral-300 transition">
            Open Sheet
          </NavLink>
        </div>
      </div>
    </div>
  );
}

function Builder() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8">
      <h2 className="text-2xl font-bold">Builder</h2>
      <p className="opacity-70">Timeline view will go here.</p>
      <NavLink to="/" className="inline-block mt-4 underline">Back</NavLink>
    </div>
  );
}

function Sheet() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8">
      <h2 className="text-2xl font-bold">Character Sheet</h2>
      <p className="opacity-70">Play-focused sheet will go here.</p>
      <NavLink to="/" className="inline-block mt-4 underline">Back</NavLink>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/builder" element={<Builder/>}/>
        <Route path="/sheet" element={<Sheet/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
