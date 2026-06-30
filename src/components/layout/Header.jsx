export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100">
          <span className="text-2xl" role="img" aria-label="wave">
            👋
          </span>
          Eudys Mora
        </span>
      </div>
    </header>
  )
}
