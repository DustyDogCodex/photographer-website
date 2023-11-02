import Hero from "@/components/Hero"
import About from "../components/About"
import CardGrid from "../components/CardGrid"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between bg-black">
        <div className="parallax-wrapper text-white w-full">
            <Hero />
            <CardGrid />
            <About />
            <Footer />
        </div>
    </main>
  )
}
