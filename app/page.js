"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Menu,
  MessageCircle,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, accessible websites and web applications engineered to turn your next big idea into a reliable digital product.",
    icon: Code2,
    details: ["Custom websites", "E-commerce platforms", "Web applications"],
  },
  {
    number: "02",
    title: "Mobile App",
    description:
      "Intuitive iOS and Android experiences that bring your services closer to customers, wherever they are.",
    icon: Smartphone,
    details: ["iOS & Android apps", "Product strategy", "Ongoing support"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Thoughtful, user-first design that makes complex journeys feel effortless and gives your brand a distinct voice.",
    icon: Layers3,
    details: ["Product discovery", "UX research", "Interface design"],
  },
];

const selectedWork = [
  {
    number: "01",
    title: "Web Development",
    description:
      "A clear, fast company website designed to help a growing brand reach and convert new customers.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile App",
    description:
      "A friendly mobile experience that makes it easier for customers to manage everyday tasks on the go.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "A thoughtful product interface that turns a complex workflow into a simple, confident journey.",
    icon: Layers3,
  },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "45+", label: "Happy partners" },
  { value: "8+", label: "Years of making" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "200d4527-7284-41ea-9276-c759cf41d75a");
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out! Your message has been sent.",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            aria-label="Nusantara Tech home"
            onClick={closeMenu}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm transition group-hover:bg-ocean-500">
              <Sparkles size={20} strokeWidth={2.2} />
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-navy-900">
              nusantara<span className="text-ocean-500">.</span>
              <span className="ml-1 font-semibold text-slate-500">tech</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition hover:text-ocean-500"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-ocean-500"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-navy-900 transition hover:bg-slate-50 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-ocean-500"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-bold text-white"
                onClick={closeMenu}
              >
                Let&apos;s talk <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden bg-navy-950 text-white"
      >
        <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:56px_56px] opacity-40" />
        <div className="absolute -right-36 top-[-8rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-ocean-500/20 blur-[100px]" />
        <div className="absolute -bottom-72 left-[12%] -z-10 h-[36rem] w-[36rem] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-blue-100 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              YOUR PARTNER IN DIGITAL GROWTH
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              We make digital work{" "}
              <span className="text-ocean-400">for you.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We build thoughtful websites, mobile apps, and digital
              experiences that help ambitious businesses move forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-ocean-500 px-7 text-sm font-bold text-white shadow-lg shadow-ocean-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Get Started <ArrowRight size={17} />
              </a>
              <a
                href="#about"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Learn More <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden="true">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-950 bg-blue-200 text-xs font-bold text-navy-900">
                  A
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-950 bg-sky-300 text-xs font-bold text-navy-900">
                  R
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-950 bg-indigo-200 text-xs font-bold text-navy-900">
                  D
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy-950 bg-white text-xs font-bold text-navy-900">
                  +
                </span>
              </div>
              <p className="text-sm text-slate-300">
                A team that feels like <span className="font-semibold text-white">your team.</span>
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-ocean-500/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#10233f]/90 p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    The big picture
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Your next chapter
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-500/15 text-ocean-400">
                  <ArrowUpRight size={21} />
                </span>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Digital momentum</p>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white">
                      Moving forward
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                    +32.8%
                  </span>
                </div>
                <div className="mt-7 flex h-36 items-end gap-2" aria-label="Illustrative growth chart">
                  {[34, 48, 41, 64, 54, 74, 65, 92, 78, 100, 87, 112].map(
                    (height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className={`flex-1 rounded-t-md ${
                          index === 11
                            ? "bg-ocean-400"
                            : "bg-gradient-to-t from-ocean-500/35 to-ocean-400/70"
                        }`}
                        style={{ height: `${height}px` }}
                      />
                    ),
                  )}
                </div>
                <div className="mt-3 flex justify-between text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Now</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">Built around</p>
                  <p className="mt-2 text-sm font-bold text-white">Your people</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs text-slate-400">Made for</p>
                  <p className="mt-2 text-sm font-bold text-white">What&apos;s next</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white p-4 text-navy-900 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Check size={19} />
              </span>
              <div>
                <p className="text-xs text-slate-500">Good ideas, made real</p>
                <p className="text-sm font-bold">One step at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-500">
                A little about us
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-5xl">
                Good technology starts with good people.
              </h2>
            </div>
            <div className="max-w-2xl lg:pb-1">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Nusantara Tech is an independent digital agency partnering with
                teams to solve real challenges through technology. From the
                first sketch to the final launch, we bring strategy, design,
                and engineering together to create work that makes a difference.
              </p>
              <a
                href="#services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition hover:text-ocean-500"
              >
                Explore what we do <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-soft sm:p-8"
              >
                <p className="text-4xl font-extrabold tracking-[-0.04em] text-navy-900 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-slate-50 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-500">
                What we do
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-5xl">
                Digital services, built around you.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-600">
              The right mix of creative thinking and technical know-how to help
              your business thrive.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-100 text-ocean-500 transition group-hover:bg-navy-900 group-hover:text-white">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
                      >
                        <Check size={16} className="text-ocean-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-navy-900 transition group-hover:text-ocean-500"
                  >
                    Tell us about it <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="selected-work" className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-500">
                A few recent favorites
              </p>
              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-5xl">
                Selected Work
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-600">
              A glimpse at the thoughtful digital experiences we love creating.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {selectedWork.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.number}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-100 text-ocean-500 transition group-hover:bg-navy-900 group-hover:text-white">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-bold tracking-widest text-slate-300">
                      {project.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-tight text-navy-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-12 text-white sm:px-12 sm:py-14 lg:px-16">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-ocean-500/20 blur-[80px]" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-400">
                  Ready when you are
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Let&apos;s build something meaningful together.
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-navy-900 transition hover:bg-blue-50"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-100 bg-slate-50 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ocean-500">
              Get in touch
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-navy-900 sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
              Tell us what you&apos;re working on. We&apos;d love to hear your
              ideas and find out how we can help.
            </p>
            <div className="mt-9 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-100 text-ocean-500">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-900">A real conversation</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  No pressure, no jargon. Just a friendly chat about your goals.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-navy-900"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-navy-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-navy-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-ocean-500 focus:ring-4 focus:ring-ocean-500/10"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-sm font-bold text-white transition hover:bg-ocean-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>
              {formStatus && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm font-semibold ${
                    formStatus.type === "success"
                      ? "text-emerald-700"
                      : "text-red-600"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-navy-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a href="#home" className="flex w-fit items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-ocean-400">
              <Sparkles size={18} />
            </span>
            <span className="text-sm font-extrabold tracking-tight">
              nusantara<span className="text-ocean-400">.</span>
              <span className="ml-1 font-semibold text-slate-400">tech</span>
            </span>
          </a>
         <p className="text-sm text-slate-400">
         © {new Date().getFullYear()} Nusantara Tech. Developed by Silvia Anggreny Kahali.
         </p>

          <div className="flex items-center gap-5">
            {navigation.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
