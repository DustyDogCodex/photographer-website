import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
        <div className="text-white pt-20">
            <h1 className="text-3xl">Awe Inspiring</h1>
            
            {/* parallax wrapper */}
            <Hero />
        </div>
    </main>
  )
}
