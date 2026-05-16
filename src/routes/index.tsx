import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Code2,
  Cpu,
  Sparkles,
  Github,
  Instagram,
  Mail,
  ArrowUpRight,
  Sun,
  Moon,
  Lightbulb,
  Calculator,
  KeyRound,
  Clock,
  Gamepad2,
  DoorOpen,
  TrafficCone,
  Grid3x3,
  ShieldCheck,
  Siren,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const projects: Project[] = [
  { title: "AI Paw Protector", category: "Projeto de Vida", description: "Solução inteligente focada em proteção animal usando visão computacional.", icon: ShieldCheck, accent: "from-sky-400/30 to-blue-600/10" },
  { title: "SOStatus", category: "App Web", description: "Plataforma de emergência e suporte para alunos da STATUS.", icon: Siren, accent: "from-rose-400/30 to-red-600/10" },
  { title: "Micro:bit", category: "Hardware", description: "Projetos educacionais e automação com placa Micro:bit.", icon: Cpu, accent: "from-emerald-400/30 to-teal-600/10" },
  { title: "Semáforo Arduino", category: "Eletrônica", description: "Simulação de semáforo controlado por Arduino com lógica em tempo real.", icon: TrafficCone, accent: "from-amber-400/30 to-orange-600/10" },
  { title: "Jogo da Velha STATUS", category: "Web Game", description: "Clássico jogo da velha com IA e identidade visual da STATUS.", icon: Grid3x3, accent: "from-indigo-400/30 to-blue-600/10" },
  { title: "Relógio HTML", category: "Front-end", description: "Relógio digital responsivo construído em HTML, CSS e JavaScript.", icon: Clock, accent: "from-cyan-400/30 to-sky-600/10" },
  { title: "Retorno da Luz", category: "Micro:bit", description: "Acionamento automático de lâmpada via sensores Micro:bit.", icon: Lightbulb, accent: "from-yellow-400/30 to-amber-600/10" },
  { title: "Aviso de Porta", category: "IoT", description: "Sistema de alerta sonoro e visual quando uma porta é aberta.", icon: DoorOpen, accent: "from-fuchsia-400/30 to-purple-600/10" },
  { title: "Jogo HTML/CSS/JS", category: "Web Game", description: "Mini-jogo interativo desenvolvido com tecnologias web puras.", icon: Gamepad2, accent: "from-violet-400/30 to-indigo-600/10" },
  { title: "Calculadora", category: "Front-end", description: "Calculadora moderna com layout responsivo e teclado físico.", icon: Calculator, accent: "from-slate-400/30 to-slate-600/10" },
  { title: "Gerador de Senhas", category: "Utilitário", description: "Gerador seguro de senhas com critérios personalizáveis.", icon: KeyRound, accent: "from-green-400/30 to-emerald-600/10" },
  { title: "Calculadora IMC", category: "Saúde", description: "Cálculo de Índice de Massa Corporal com feedback visual.", icon: Scale, accent: "from-teal-400/30 to-cyan-600/10" },
];

const specialties = [
  { icon: Code2, title: "Web Sites", desc: "Portfólios, jogos, calculadoras e ferramentas em HTML, CSS e JavaScript com foco em performance e UX." },
  { icon: Sparkles, title: "Projeto de Vida", desc: "IA que monta looks de roupa a partir de imagens enviadas pelo usuário — visão computacional aplicada." },
  { icon: Cpu, title: "Hardware & IoT", desc: "Projetos com Arduino e Micro:bit: semáforos, sensores, alertas e automações educacionais." },
];

function Index() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <Navbar dark={dark} setDark={setDark} scrolled={scrolled} />

      <main>
        <Hero />
        <Specialties />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ---------- NAVBAR ---------- */
function Navbar({ dark, setDark, scrolled }: { dark: boolean; setDark: (v: boolean) => void; scrolled: boolean }) {
  const links = [
    { href: "#inicio", label: "Início" },
    { href: "#especialidades", label: "Especialidades" },
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex w-[min(1200px,94%)] items-center justify-between rounded-2xl border border-border/60 glass px-4 py-2.5 shadow-card">
        <a href="#inicio" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] text-primary-foreground font-bold shadow-glow">
            NL
          </div>
          <span className="font-display text-sm font-semibold tracking-wide">Natanael Lins</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Alternar tema"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Contato <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="inicio" className="relative pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs text-muted-foreground glass">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Veja projetos e trabalhos<br />
              feitos por mim na{" "}
              <span className="text-gradient">STATUS.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Meu portfólio reflete minha paixão e habilidade técnica. De aplicativos web a soluções de
              automação, cada projeto é uma conquista que mostra meu crescimento profissional e criatividade.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Entre em contato
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Ver projetos
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "12+", v: "Projetos" },
                { k: "3+", v: "Anos código" },
                { k: "STATUS", v: "Formação" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl font-bold text-foreground md:text-3xl">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:0.2s]">
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/30 via-transparent to-[oklch(0.78_0.18_200)]/20 blur-3xl" />
            <div className="relative animate-float">
              <CodeMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">portfolio.tsx</span>
      </div>
      <pre className="overflow-hidden p-5 font-mono text-[12.5px] leading-relaxed">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-sky-400">dev</span> = {"{"}
          {"\n  "}
          <span className="text-emerald-400">name</span>:{" "}
          <span className="text-amber-300">"Natanael Lins"</span>,{"\n  "}
          <span className="text-emerald-400">role</span>:{" "}
          <span className="text-amber-300">"Front-end Dev"</span>,{"\n  "}
          <span className="text-emerald-400">stack</span>: [
          <span className="text-amber-300">"HTML"</span>,{" "}
          <span className="text-amber-300">"CSS"</span>,{"\n           "}
          <span className="text-amber-300">"JS"</span>,{" "}
          <span className="text-amber-300">"Arduino"</span>],{"\n  "}
          <span className="text-emerald-400">focus</span>:{" "}
          <span className="text-amber-300">"UI · IoT · IA"</span>,{"\n  "}
          <span className="text-emerald-400">status</span>:{" "}
          <span className="text-sky-400">"available"</span>,{"\n"}
          {"};"}
          {"\n\n"}
          <span className="text-purple-400">export default</span>{" "}
          <span className="text-sky-400">dev</span>;
        </code>
      </pre>
    </div>
  );
}

/* ---------- SPECIALTIES ---------- */
function Specialties() {
  return (
    <section id="especialidades" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,94%)]">
        <SectionHeading eyebrow="O que eu faço" title={<>Minhas <span className="text-gradient">Especialidades.</span></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {specialties.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/10 group-hover:opacity-100" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-[oklch(0.78_0.18_200)]/10 ring-1 ring-primary/30">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-[oklch(0.78_0.18_200)]/20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-secondary to-card">
                <div className="text-center">
                  <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] text-4xl font-bold text-primary-foreground shadow-glow animate-pulse-ring">
                    NL
                  </div>
                  <p className="mt-6 font-display text-lg font-semibold">Natanael Lins</p>
                  <p className="text-sm text-muted-foreground">Curso Informática 23/26</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Sobre mim</p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Muito prazer,<br />
              <span className="text-gradient">sou Natanael Lins.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sou do curso de Informática 23/26 da <span className="font-semibold text-foreground">STATUS</span>. Nesse curso desenvolvi
              habilidades que me permitiram explorar diferentes áreas da informática, desde o
              desenvolvimento de software até a manutenção de hardware.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["HTML", "CSS", "JavaScript", "Arduino", "Micro:bit", "UI Design"].map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/natanael.rc"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <Instagram className="h-4 w-4" />
                Converse comigo no Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-[80%] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto w-[min(1200px,94%)]">
        <SectionHeading eyebrow="Trabalhos selecionados" title={<><span className="text-gradient">Pro</span>jetos.</>} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl border border-border bg-card/70 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <p.icon className="h-9 w-9 text-primary" />
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto w-[min(900px,94%)]">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[oklch(0.78_0.18_200)]/20 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Contato</p>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Vamos construir algo<br />
              <span className="text-gradient">memorável juntos.</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Tem um projeto em mente, uma dúvida ou só quer trocar uma ideia sobre código?
              Me chama — respondo rapidinho.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3500);
              }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <Input id="name" label="Seu nome" placeholder="Como posso te chamar?" />
              <Input id="email" type="email" label="Seu e-mail" placeholder="voce@email.com" />
              <div className="sm:col-span-2">
                <label htmlFor="msg" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="msg"
                  required
                  rows={5}
                  placeholder="Conta um pouco sobre o projeto..."
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-brand"
                />
              </div>
              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>natanael@status.dev</span>
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[oklch(0.78_0.18_200)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  {sent ? "Mensagem enviada ✓" : "Enviar mensagem"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ id, label, type = "text", placeholder }: { id: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-brand"
      />
    </div>
  );
}

/* ---------- SHARED ---------- */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Natanael Lins — Construído com cuidado.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-foreground" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://instagram.com/natanael.rc" target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-foreground" aria-label="Instagram">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#contato" className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-foreground" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
