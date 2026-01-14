function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <About />
      <Pipeline />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-sage/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <HelixLogo className="w-10 h-10 transition-transform group-hover:rotate-12" />
          <span className="font-serif text-2xl font-semibold text-teal">
            Helix Meridian
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Pipeline", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-charcoal-light hover:text-teal transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 bg-teal text-cream rounded-full font-medium hover:bg-teal-light transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Organic background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] opacity-30">
          <DNABackground />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-cream-dark/50 to-transparent" />
        {/* Cellular dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-sage) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
          opacity: 0.15
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="animate-fade-in-up text-honey font-semibold tracking-wide uppercase text-sm mb-4">
            Precision Gene Therapy
          </p>
          <h1 className="animate-fade-in-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal leading-tight mb-6">
            Rewriting the
            <span className="text-teal block">Code of Life</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-charcoal-light max-w-xl mb-8 leading-relaxed">
            At Helix Meridian, we're pioneering next-generation gene therapies
            that target diseases at their genetic root. Our proprietary delivery
            platform enables precise, lasting therapeutic interventions.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <a
              href="#pipeline"
              className="px-8 py-3 bg-teal text-cream rounded-full font-semibold hover:bg-teal-light transition-all hover:shadow-lg hover:shadow-teal/20"
            >
              Explore Our Pipeline
            </a>
            <a
              href="#about"
              className="px-8 py-3 border-2 border-teal text-teal rounded-full font-semibold hover:bg-teal hover:text-cream transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="animate-scale-in delay-400 relative hidden lg:block">
          <div className="relative w-full aspect-square">
            <DNAHelix />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    {
      icon: <MoleculeIcon />,
      title: "Scientific Rigor",
      description: "Every decision is grounded in peer-reviewed science and validated through rigorous experimentation."
    },
    {
      icon: <HeartIcon />,
      title: "Patient First",
      description: "We exist to serve patients with rare genetic diseases who have no other therapeutic options."
    },
    {
      icon: <LeafIcon />,
      title: "Sustainable Innovation",
      description: "Building therapies that are accessible, manufacturable, and designed for long-term impact."
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-honey font-semibold tracking-wide uppercase text-sm mb-4">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Transforming Genetic Medicine
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-6">
              Founded in 2023, Helix Meridian emerged from groundbreaking research
              at leading academic institutions. Our team of world-class scientists
              and clinicians is united by a singular vision: to cure genetic diseases
              that were once considered untreatable.
            </p>
            <p className="text-charcoal-light text-lg leading-relaxed">
              Our proprietary <span className="text-teal font-semibold">MeridianVector™</span> platform
              enables targeted gene delivery with unprecedented precision, minimizing
              off-target effects while maximizing therapeutic efficacy.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal/10 to-sage/20 overflow-hidden border border-sage/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <CellularPattern />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="font-serif text-6xl font-bold text-teal mb-2">15+</div>
                  <div className="text-charcoal-light font-medium">Patent Applications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-cream p-8 rounded-2xl border border-sage/20 hover:border-honey/50 transition-all hover:shadow-lg group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-honey/20 transition-colors">
                {value.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                {value.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const programs = [
    {
      id: "HM-101",
      name: "Retinal Dystrophy",
      phase: "Phase II",
      progress: 65,
      description: "AAV-based gene therapy for inherited retinal disorders affecting photoreceptor function."
    },
    {
      id: "HM-202",
      name: "Spinal Muscular Atrophy",
      phase: "Phase I",
      progress: 40,
      description: "Next-generation SMN1 gene replacement with improved CNS penetration."
    },
    {
      id: "HM-303",
      name: "Hemophilia B",
      phase: "Preclinical",
      progress: 20,
      description: "Novel Factor IX gene therapy with sustained expression profile."
    },
    {
      id: "HM-404",
      name: "Duchenne MD",
      phase: "Discovery",
      progress: 10,
      description: "Micro-dystrophin gene transfer using MeridianVector™ technology."
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-honey font-semibold tracking-wide uppercase text-sm mb-4">
            Research & Development
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-6">
            Our Therapeutic Pipeline
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            We're advancing a diverse portfolio of gene therapy programs targeting
            rare genetic diseases with significant unmet medical need.
          </p>
        </div>

        <div className="space-y-6">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="bg-cream-dark rounded-2xl p-6 md:p-8 border border-sage/20 hover:border-teal/30 transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-teal/10 text-teal text-sm font-semibold rounded-full">
                      {program.id}
                    </span>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      program.phase === "Phase II" ? "bg-honey/20 text-honey" :
                      program.phase === "Phase I" ? "bg-sage/30 text-teal-dark" :
                      "bg-charcoal/10 text-charcoal-light"
                    }`}>
                      {program.phase}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                    {program.name}
                  </h3>
                  <p className="text-charcoal-light">
                    {program.description}
                  </p>
                </div>
                <div className="md:w-64">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-charcoal-light">Progress</span>
                    <span className="text-teal font-semibold">{program.progress}%</span>
                  </div>
                  <div className="h-3 bg-sage/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-teal/30"
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former CSO at Genetix Therapeutics. PhD in Molecular Biology from MIT.",
      initials: "SC"
    },
    {
      name: "Dr. Marcus Webb",
      role: "Chief Scientific Officer",
      bio: "Pioneer in AAV vector engineering with 50+ publications in gene therapy.",
      initials: "MW"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "VP of Clinical Development",
      bio: "15 years experience leading gene therapy clinical trials across phases.",
      initials: "ER"
    },
    {
      name: "James Park",
      role: "Chief Business Officer",
      bio: "Previously led BD at major biotech. MBA from Wharton.",
      initials: "JP"
    }
  ];

  return (
    <section id="team" className="py-24 bg-teal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-honey font-semibold tracking-wide uppercase text-sm mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-6">
            Meet Our Team
          </h2>
          <p className="text-sage-light text-lg max-w-2xl mx-auto">
            Our leadership team brings together decades of experience in gene therapy
            research, clinical development, and biotechnology commercialization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-teal-light/30 backdrop-blur-sm rounded-2xl p-6 border border-sage/20 hover:border-honey/50 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-honey to-honey-light flex items-center justify-center mb-4 mx-auto">
                <span className="font-serif text-2xl font-bold text-teal-dark">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream text-center mb-1">
                {member.name}
              </h3>
              <p className="text-honey text-sm text-center mb-3">
                {member.role}
              </p>
              <p className="text-sage-light text-sm text-center leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-honey font-semibold tracking-wide uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              Whether you're a patient advocate, potential partner, or investor
              interested in our mission, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Headquarters</h4>
                  <p className="text-charcoal-light">
                    400 Innovation Drive, Suite 200<br />
                    Cambridge, MA 02142
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <EmailIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                  <p className="text-charcoal-light">
                    info@helixmeridian.bio<br />
                    partnerships@helixmeridian.bio
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream-dark rounded-2xl p-8 border border-sage/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-cream focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-cream focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-cream focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-cream focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Partnership Opportunities</option>
                  <option>Investor Relations</option>
                  <option>Patient Advocacy</option>
                  <option>Media Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-sage/30 bg-cream focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your interest in Helix Meridian..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-teal text-cream rounded-xl font-semibold hover:bg-teal-light transition-all hover:shadow-lg hover:shadow-teal/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <HelixLogo className="w-10 h-10" light />
              <span className="font-serif text-2xl font-semibold text-cream">
                Helix Meridian
              </span>
            </div>
            <p className="text-sage-light leading-relaxed max-w-md">
              Pioneering gene therapies that transform lives. We're committed to
              making genetic medicine accessible to patients who need it most.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Pipeline", "Team", "Careers", "News"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sage-light hover:text-honey transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Publications", "Patents", "Press Kit", "Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sage-light hover:text-honey transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sage-light text-sm">
            &copy; 2024 Helix Meridian Therapeutics. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "ResearchGate"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sage-light hover:text-honey transition-colors text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// SVG Components
function HelixLogo({ className, light }: { className?: string; light?: boolean }) {
  const primaryColor = light ? "#faf6f0" : "#1e4d4d";
  const secondaryColor = "#c9a227";
  const accentColor = "#7d9d7d";

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8C20 8 28 16 32 32C36 48 44 56 44 56" stroke={primaryColor} strokeWidth="4" strokeLinecap="round"/>
      <path d="M44 8C44 8 36 16 32 32C28 48 20 56 20 56" stroke={secondaryColor} strokeWidth="4" strokeLinecap="round"/>
      <circle cx="20" cy="8" r="4" fill={primaryColor}/>
      <circle cx="44" cy="8" r="4" fill={secondaryColor}/>
      <circle cx="32" cy="32" r="5" fill={accentColor}/>
      <circle cx="20" cy="56" r="4" fill={secondaryColor}/>
      <circle cx="44" cy="56" r="4" fill={primaryColor}/>
    </svg>
  );
}

function DNABackground() {
  return (
    <svg viewBox="0 0 400 400" fill="none" className="w-full h-full animate-float">
      <defs>
        <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e4d4d" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#7d9d7d" stopOpacity="0.1"/>
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <g key={i} transform={`translate(0, ${i * 50})`}>
          <ellipse cx="200" cy="25" rx="150" ry="20" fill="none" stroke="url(#dnaGrad)" strokeWidth="2"/>
          <circle cx={200 + Math.sin(i * 0.8) * 140} cy="25" r="8" fill="#c9a227" fillOpacity="0.4"/>
          <circle cx={200 - Math.sin(i * 0.8) * 140} cy="25" r="8" fill="#1e4d4d" fillOpacity="0.4"/>
        </g>
      ))}
    </svg>
  );
}

function DNAHelix() {
  return (
    <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="helixGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e4d4d"/>
          <stop offset="100%" stopColor="#2a6363"/>
        </linearGradient>
        <linearGradient id="helixGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a227"/>
          <stop offset="100%" stopColor="#dbb842"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central glow */}
      <circle cx="150" cy="150" r="80" fill="#7d9d7d" fillOpacity="0.1" className="animate-pulse-glow"/>
      <circle cx="150" cy="150" r="60" fill="#1e4d4d" fillOpacity="0.1" className="animate-pulse-glow"/>

      {/* DNA strands */}
      <g className="animate-float" filter="url(#glow)">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          const y = 30 + i * 26;
          const offset = Math.sin(i * 0.7) * 50;
          return (
            <g key={i}>
              <line
                x1={100 + offset} y1={y}
                x2={200 - offset} y2={y}
                stroke="#7d9d7d" strokeWidth="2" strokeOpacity="0.5"
              />
              <circle cx={100 + offset} cy={y} r="10" fill="url(#helixGrad1)"/>
              <circle cx={200 - offset} cy={y} r="10" fill="url(#helixGrad2)"/>
              <circle cx={100 + offset} cy={y} r="4" fill="#faf6f0" fillOpacity="0.6"/>
              <circle cx={200 - offset} cy={y} r="4" fill="#faf6f0" fillOpacity="0.6"/>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function CellularPattern() {
  return (
    <svg viewBox="0 0 200 150" fill="none" className="w-full h-full opacity-30">
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          cx={30 + (i % 4) * 50}
          cy={30 + Math.floor(i / 4) * 45}
          r={15 + Math.random() * 10}
          fill="none"
          stroke="#1e4d4d"
          strokeWidth="1"
          strokeOpacity={0.3 + Math.random() * 0.3}
        />
      ))}
    </svg>
  );
}

function MoleculeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-teal">
      <circle cx="12" cy="12" r="3"/>
      <circle cx="19" cy="5" r="2"/>
      <circle cx="5" cy="5" r="2"/>
      <circle cx="19" cy="19" r="2"/>
      <circle cx="5" cy="19" r="2"/>
      <line x1="14" y1="10" x2="17" y2="7"/>
      <line x1="10" y1="10" x2="7" y2="7"/>
      <line x1="14" y1="14" x2="17" y2="17"/>
      <line x1="10" y1="14" x2="7" y2="17"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-teal">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-teal">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-teal">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-teal">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

export default App;
