import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-body antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
