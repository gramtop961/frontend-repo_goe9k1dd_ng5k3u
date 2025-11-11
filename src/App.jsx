import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { GraduationCap, Users, ShieldCheck, Brain, BarChart2, CheckCircle2, Sparkles, ArrowRight, PlayCircle } from 'lucide-react'

const gradients = {
  dark: 'from-[#0B0F1A] via-[#0A0A1A] to-[#0B0F1A]',
  primary: 'from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20',
}

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
})

function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-black/30">
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-lg font-semibold tracking-wide">EduVerify</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#tests" className="text-white/80 hover:text-white transition-colors">Tests</a>
              <a href="#ai" className="text-white/80 hover:text-white transition-colors">AI Detection</a>
              <a href="#analytics" className="text-white/80 hover:text-white transition-colors">Analytics</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#demo" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white/90 hover:text-white transition-colors">
                <PlayCircle className="h-4 w-4" /> Demo
              </a>
              <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-violet-900/30 hover:opacity-95 transition">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className={`relative min-h-[110vh] w-full overflow-hidden bg-gradient-to-b ${gradients.dark}`}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.15),transparent_50%)]" />

      <div className="relative z-10 pt-40 md:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeIn(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs md:text-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            Cyber-classrooms for the future
          </motion.div>

          <motion.h1 {...fadeIn(0.1)} className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Connect Students & Teachers in a Smart, Verified Classroom
          </motion.h1>

          <motion.p {...fadeIn(0.2)} className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
            Live collaboration, secure assessments, AI authenticity checks and internal plagiarism detection — all in one modern learning hub.
          </motion.p>

          <motion.div {...fadeIn(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-violet-900/30 hover:opacity-95 transition">
              Launch Your Classroom <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 transition">
              Watch Demo <PlayCircle className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div {...fadeIn(0.35)} className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/70">
            {[
              { icon: Users, label: '1:1 & Group Classes' },
              { icon: ShieldCheck, label: 'Verified Submissions' },
              { icon: Brain, label: 'AI-Use Detection' },
              { icon: BarChart2, label: 'Actionable Insights' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 backdrop-blur">
                <f.icon className="h-4 w-4 text-violet-300" />
                <span className="text-sm">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B0F1A] to-transparent" />
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc, bullets, glow = 'violet' }) {
  const glowClass = glow === 'fuchsia' ? 'from-fuchsia-500/20' : glow === 'indigo' ? 'from-indigo-500/20' : 'from-violet-500/20'
  return (
    <motion.div {...fadeIn(0.05)} className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 md:p-7 overflow-hidden`}>
      <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${glowClass} via-transparent to-transparent opacity-40`} />
      <div className="relative z-10">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center shadow-lg shadow-violet-900/20">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/70 text-sm md:text-base">{desc}</p>
        {bullets && (
          <ul className="mt-4 space-y-2 text-white/80 text-sm">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" /> {b}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-[#0B0F1A] py-20 md:py-28">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,_rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 {...fadeIn(0)} className="text-3xl md:text-5xl font-bold text-white">
          A Classroom that Verifies Learning
        </motion.h2>
        <motion.p {...fadeIn(0.1)} className="mt-3 max-w-2xl text-white/70">
          Built for modern education: verified assessments, transparent progress, and AI-assisted insights that enhance—not replace—learning.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Users}
            title="Live, Verified Classrooms"
            desc="Create sessions, invite students, manage attendance, and keep everything secure and organized."
            bullets={[
              'Role-based access for teachers and students',
              'Secure file submissions',
              'Comments and feedback loops',
            ]}
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Internal Plagiarism Check"
            desc="Catch similarities across your own cohort with internal corpus matching."
            bullets={[
              'Cross-class & lifetime duplicates',
              'Granular similarity highlights',
              'Citation guidance for students',
            ]}
            glow="indigo"
          />
          <FeatureCard
            icon={Brain}
            title="AI Use Detection"
            desc="Detect signatures of AI-generated content while minimizing false positives."
            bullets={[
              'Multi-signal scoring (style, perplexity, drift)',
              'Explainable markers for review',
              'Privacy-first, on-region processing',
            ]}
            glow="fuchsia"
          />
        </div>
      </div>
    </section>
  )
}

function Tests() {
  return (
    <section id="tests" className="relative bg-gradient-to-b from-[#0B0F1A] to-[#0A0D18] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeIn(0)} className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Two Powerful Test Modes</h2>
            <p className="mt-3 max-w-2xl text-white/70">Choose between flexible assignments and secure proctored exams—both with deep analysis for teachers.</p>
          </div>
          <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
            Try it now <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div {...fadeIn(0.05)} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-60" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Proctored Exam</h3>
              </div>
              <p className="mt-3 text-white/80">Lockdown mode, tab-switch detection, identity verification, and timed sections.</p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Camera & mic optional policies</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Randomized question pools</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Live proctor dashboard</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.1)} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-violet-500/10 opacity-60" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 grid place-items-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Open Assignment</h3>
              </div>
              <p className="mt-3 text-white/80">Flexible uploads for essays, code, slides or media with internal plagiarism checks.</p>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Template-based rubrics</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Similarity clusters across cohort</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Versioned submissions & feedback</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AISection() {
  return (
    <section id="ai" className="relative bg-[#0A0D18] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeIn(0)}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">AI Detection, Done Right</h2>
            <p className="mt-3 text-white/70 max-w-xl">Balanced detection that explains its reasoning, highlights risky segments, and gives teachers review controls to avoid over-flagging genuine work.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[{ title: 'Explainable signals', icon: Brain }, { title: 'Calibrated scoring', icon: BarChart2 }, { title: 'Privacy-first', icon: ShieldCheck }, { title: 'Human-in-the-loop', icon: Users }].map((it, i) => (
                <motion.div key={i} {...fadeIn(0.05 * i)} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center">
                    <it.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/90">{it.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn(0.15)} className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] p-6">
              <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-transparent" />
              <div className="relative">
                <div className="text-white/90 font-mono text-sm">Sample Essay Snippet</div>
                <div className="mt-3 space-y-3 text-sm leading-relaxed">
                  <p className="text-white/80">The exploration of celestial bodies has catalyzed unprecedented advancements in human knowledge...</p>
                  <p className="bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/30 text-amber-100 p-3 rounded-lg">Potential AI-style segment: high predictability, low variance.</p>
                  <p className="text-white/80">However, intrinsic uncertainty drives innovation as hypotheses compete for empirical validation...</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-white/80">Perplexity Drift: <span className="text-white">+12%</span></div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-white/80">Burstiness: <span className="text-white">-7%</span></div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-white/80">Style Match: <span className="text-white">89%</span></div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-white/80">Confidence: <span className="text-white">Medium</span></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Analytics() {
  return (
    <section id="analytics" className="relative bg-gradient-to-b from-[#0A0D18] via-[#0A0A17] to-[#0B0F1A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeIn(0)} className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Deep Analysis for Teachers</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/70">Track cohorts, spot plagiarism clusters, and understand performance trends with clarity.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{ title: 'Cohort Overview', value: '32 Students', color: 'from-violet-500/20' }, { title: 'Flags & Similarities', value: '6 Alerts', color: 'from-fuchsia-500/20' }, { title: 'Average Score', value: '86%', color: 'from-indigo-500/20' }].map((c, i) => (
            <motion.div key={i} {...fadeIn(0.05 * i)} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${c.color} via-transparent to-transparent opacity-50`} />
              <div className="relative">
                <div className="text-white/70 text-sm">{c.title}</div>
                <div className="mt-2 text-3xl font-semibold text-white">{c.value}</div>
                <div className="mt-4 h-24 rounded-lg bg-white/5 border border-white/10" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeIn(0.2)} className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center">
                <BarChart2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">Plagiarism Network Graph</div>
                <div className="text-white/70 text-sm">Visualize clusters of similar work within and across classes.</div>
              </div>
            </div>
            <a href="#get-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/90 hover:bg-white/10 transition">
              Explore <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 h-56 rounded-xl bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_60%)] border border-white/10" />
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative bg-[#0B0F1A] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80">EduVerify © {new Date().getFullYear()}</span>
          </div>
          <div className="text-white/60 text-sm">Built for authentic learning • Privacy-first • Teacher-approved</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Tests />
      <AISection />
      <Analytics />
      <Footer />
    </div>
  )
}
