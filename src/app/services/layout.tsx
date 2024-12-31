import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function ServicesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Announcement />
        <Navbar />
        {children}
        <Footer />
      </>
    )
  }