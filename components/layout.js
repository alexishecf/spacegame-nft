import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-indigo-200 min-h-screen">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}