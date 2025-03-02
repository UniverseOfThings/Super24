import Image from "next/image"
import { ArrowRight, Brain, Globe, Code, Zap, Building, DollarSign, ChevronDown, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">SUPER24</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#mission" className="text-sm font-medium hover:text-primary">
              Mission
            </a>
            <a href="#program" className="text-sm font-medium hover:text-primary">
              Program
            </a>
            <a href="#partners" className="text-sm font-medium hover:text-primary">
              Partners
            </a>
            <a href="#media" className="text-sm font-medium hover:text-primary">
              Media
            </a>
            <a href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </a>
          </nav>
          <div>
            <a
              href="https://forms.gle/tPA3RFLBMpYcyv5PA"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-blue-700 hover:to-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Apply Now 🚀
            </a>
            <button className="md:hidden">
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-8 md:py-12">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Neural network background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
              Shaping Ethical AI from Bharat for the World
            </div>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2">
              Join 24 Visionaries Revolutionizing Ethical AI
            </h1>
            <p className="max-w-xl text-base text-muted-foreground mb-4">
              A 6-month intensive program to build world-class AI solutions from India.
            </p>

            {/* Square centerpiece image */}
            <div className="relative w-full max-w-sm mx-auto mb-6">
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="SUPER24 Program Centerpiece"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <a
              href="https://forms.gle/tPA3RFLBMpYcyv5PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-orange-500 px-5 py-2 text-base font-medium text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Apply Now 🚀
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nurturing Ethical AI Leaders</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Building the next generation of AI innovators with a focus on ethics and real-world impact.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empower Young Talent</h3>
                <p className="text-muted-foreground">
                  Nurturing 24 exceptional individuals aged 18-25 to lead AI innovation.
                </p>
              </div>
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-orange-100 p-3 w-12 h-12 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ethics & Innovation</h3>
                <p className="text-muted-foreground">Building responsible AI with global impact.</p>
              </div>
              <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-World Solutions</h3>
                <p className="text-muted-foreground">Creating domain-specific AI applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Highlights Section */}
        <section id="program" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Unleash Your Potential</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Transform your career and make a global impact with our comprehensive program.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 bg-blue-600 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Immersive 6-Month Program</h3>
                  <p className="text-muted-foreground">24/7 learning experience in cutting-edge AI.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 bg-orange-500 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
                    <Building className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Build a ₹1,000 Crore Company</h3>
                  <p className="text-muted-foreground">Turn your ideas into a billion-dollar enterprise.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 bg-blue-600 opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity"></div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Earn ₹2-5 Crore Annually</h3>
                  <p className="text-muted-foreground">Land top AI roles with life-changing income.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industry Leaders Backing Us</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Supported by innovative companies at the forefront of AI technology.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <a
                href="https://deepsightlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=200"
                    alt="DeepSight AI Labs logo"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">DeepSight AI Labs</h3>
                <p className="text-muted-foreground">
                  Award-winning AI & computer vision company (Intel, AWS clients).
                </p>
              </a>
              <a
                href="https://www.sybill.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=200"
                    alt="Sybill AI logo"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Sybill AI</h3>
                <p className="text-muted-foreground">Series A ($11M) AI sales assistant trusted by 500+ companies.</p>
              </a>
              <a
                href="https://hanooman.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border bg-background p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=80&width=200"
                    alt="Hanooman AI logo"
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Hanooman AI</h3>
                <p className="text-muted-foreground">
                  India's first multilingual Gen AI platform supporting 98 languages.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">As Featured In</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Our mission has been recognized by leading publications.
              </p>
            </div>
            <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=60&width=240"
                  alt="The New Indian Express logo"
                  width={240}
                  height={60}
                  className="object-contain"
                />
              </div>
              <blockquote className="mb-6 text-xl font-medium text-center italic">
                "SUPER24 is not just an AI program; it's a movement to shape the future of ethical AI in India and
                beyond."
              </blockquote>
              <div className="text-center">
                <a
                  href="https://www.newindianexpress.com/amp/story/magazine/2025/Feb/01/the-new-collar-revolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read the full article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Meet the Minds Behind SUPER24</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Led by industry experts with a passion for AI innovation and education.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sanyam Chhoriya"
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sanyam Chhoriya</h3>
                <p className="text-blue-600 font-medium mb-3">Founder</p>
                <p className="text-muted-foreground">
                  Ex-Product @ Source.One, built Let's Grow Together (7,000+ members).
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Sunil Shah"
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sunil Shah</h3>
                <p className="text-blue-600 font-medium mb-3">Advisor</p>
                <p className="text-muted-foreground">20+ years as an entrepreneur, Founder @ K Software Solutions.</p>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-background p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Prateek Karnal"
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Prateek Karnal</h3>
                <p className="text-blue-600 font-medium mb-3">Advisor</p>
                <p className="text-muted-foreground">Ex-SWE @ Databricks, 2x ICPC World Finalist.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Shape the Future?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-100">
              Apply now to join an elite team building AI-native solutions.
            </p>
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium">
                Spots Limited—Act Now!
              </div>
            </div>
            <a
              href="https://forms.gle/tPA3RFLBMpYcyv5PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-700 shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
                SUPER24
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Made with passion in Bharat for the world.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>General Enquiries: 9307783836</span>
            </div>
            <a
              href="mailto:super24@our-universe.ai"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              <span>Support: super24@our-universe.ai</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

