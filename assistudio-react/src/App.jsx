import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
  Star,
  MapPin,
  Clock3,
  Phone,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

function Instagram({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/assistudio";
const WHATSAPP_NUMBER = "56942212182";
const WHATSAPP_MESSAGE =
  "Hola Assistudio 💕 Quiero reservar una hora / consultar por un servicio.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// Fotos reales del salón Assistudio
// Componente de imagen con carga elegante
function HairImage({ src, alt, className = "", style = {} }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#f5ece6] to-[#e0cfc5] ${className}`} style={style}>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="eager"
        />
      )}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-zinc-300 border-t-zinc-600 animate-spin" />
        </div>
      )}
    </div>
  );
}

const services = [
  {
    title: "Babylights & Balayage",
    desc: "Iluminación natural y dimensión con técnicas de color a mano alzada. Disponible para melena, media espalda, cabello largo y extra largo.",
    image: "/foto trabajo salón.jpeg",
  },
  {
    title: "Color",
    desc: "Retoque de crecimiento, color global, baños de color e iluminación de raíz para un resultado vibrante y duradero.",
    image: "/foto trabajo salón (2).jpeg",
  },
  {
    title: "Cortes",
    desc: "Corte personalizado para cabello liso, ondulado o rizado. Forma y movimiento con estilo.",
    image: "/4.jpeg",
  },
  {
    title: "Olaplex Paso 1 y 2",
    desc: "Tratamiento reconstructor profesional que repara desde el interior. Para todo tipo de largo.",
    image: "/2.jpeg",
  },
  {
    title: "Masaje & Tratamientos",
    desc: "Plex, Magic Rouse, Esteem Repair y Botox capilar. Cuidado profundo para un cabello saludable.",
    image: "/6.jpeg",
  },
  {
    title: "Tratamientos de Lujo",
    desc: "Olaplex 4 en 1, Monocanal hidratante, Monocanal gloss, Olaprotein y tratamiento único Olaplex. Cabello soñado.",
    image: "/olaplex-productos.png",
  },
];

const gallery = [
  "/1.jpeg",
  "/3.jpeg",
  "/5.jpeg",
  "/7.jpeg",
  "/9.jpeg",
  "/10.jpeg",
];

const testimonials = [
  {
    name: "Camila",
    text: "La atención fue hermosa y el resultado superó mis expectativas. Todo se siente premium.",
  },
  {
    name: "Valentina",
    text: "Mi lugar favorito. Me encantó el detalle, la dedicación y cómo quedó mi look.",
  },
  {
    name: "Fernanda",
    text: "Se nota el cuidado en cada detalle. Volvería mil veces.",
  },
];

const faqs = [
  {
    q: "¿Cómo puedo reservar una hora?",
    a: "Puedes reservar directamente por WhatsApp o escribirnos al Instagram oficial @assistudio.",
  },
  {
    q: "¿Puedo consultar por disponibilidad?",
    a: "Sí, puedes escribirnos y te ayudaremos a encontrar el horario ideal.",
  },
  {
    q: "¿Puedo pedir información de servicios antes de reservar?",
    a: "Claro. Podemos orientarte según el resultado que buscas y recomendarte la mejor opción.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs tracking-[0.28em] uppercase text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

function CTAButtons({ center = false }) {
  return (
    <div
      className={`mt-8 flex flex-col sm:flex-row gap-4 ${
        center ? "justify-center" : ""
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 outline outline-2 outline-white/30 outline-offset-2 transition hover:scale-[1.02] hover:bg-zinc-800"
      >
        <MessageCircle size={18} />
        Reservar por WhatsApp
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-zinc-900 outline outline-2 outline-zinc-200 outline-offset-2 transition hover:scale-[1.02] hover:border-zinc-400"
      >
        <Instagram size={18} />
        Ver Instagram
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#f8f3ef] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* WhatsApp Floating */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-2xl transition hover:scale-105"
      >
        <MessageCircle size={18} />
        Agenda tu hora
      </a>

      {/* Navbar */}
      <header className="fixed top-0 z-40 w-full border-b border-white/20 bg-white/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-lg font-semibold tracking-[0.18em] uppercase">
            Assistudio
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-700">
            <a href="#servicios" className="hover:text-zinc-900">Servicios</a>
            <a href="#galeria" className="hover:text-zinc-900">Galería</a>
            <a href="#testimonios" className="hover:text-zinc-900">Opiniones</a>
            <a href="#contacto" className="hover:text-zinc-900">Contacto</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-white transition hover:bg-zinc-800"
          >
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden pt-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              `url('/foto del cabello rubio ondulado.png')`,
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-[#f8f3ef]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Belleza, estilo y confianza
              <span className="block text-[#f1ddd0]">en cada detalle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/90"
            >
              En <span className="font-medium">Assistudio</span> realzamos tu
              esencia con una experiencia beauty moderna, femenina y premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CTAButtons />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <SectionTitle
            eyebrow="Sobre Assistudio"
            title=""
            subtitle={null}
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 max-w-xl"
          >
            <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
              Soy <span className="font-semibold text-zinc-900">Pamela Assis</span>, Estilista Profesional titulada de AIEP con más de 10 años de trayectoria perfeccionando mi técnica.
            </p>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              Mi carrera se ha construido sobre la base del aprendizaje constante, especializándome junto a grandes referentes del estilismo en Chile y el extranjero. Mi enfoque combina la precisión técnica con una visión personalizada para cada clienta, garantizando resultados que no solo se ven bien, sino que cuidan la salud de tu cabello.
            </p>
            <p className="text-sm font-medium text-zinc-800 tracking-wide italic">
              Experiencia, técnica y pasión en cada servicio.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-white/50 blur-2xl" />
            <HairImage
              src="/foto de pamela.webp"
              alt="Pamela Assis - Assistudio"
              className="relative h-[520px] w-full rounded-[2rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-24 md:py-32 bg-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Servicios"
            title="Cuidado, estilo y resultados con sello premium."
            subtitle="Cada servicio está pensado para realzar tu belleza natural con productos y técnicas de primer nivel."
            center
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-xl shadow-zinc-900/5"
              >
                <HairImage
                  src={service.image}
                  alt={service.title}
                  className="h-72 w-full transition duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {service.desc}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-900"
                  >
                    Consultar por WhatsApp <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <SectionTitle
              eyebrow="Por qué elegirnos"
              title="Un espacio pensado para que te sientas increíble."
              subtitle="Diseño, detalle, atención y una experiencia cuidada para que cada visita se sienta especial."
            />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5"
            >
              {[
                "Atención personalizada y cercana",
                "Estética femenina, moderna y cuidada",
                "Resultados visualmente impecables",
                "Experiencia premium enfocada en detalle",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white/70 p-5 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5" size={22} />
                  <p className="text-zinc-700">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-24 md:py-32 bg-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Galería"
            title="Inspiración visual con esencia Instagram."
            subtitle="Resultados reales que hablan por sí solos. Síguenos en @assistudio para más inspiración."
            center
          />

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 auto-rows-[220px]">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className={`overflow-hidden rounded-[1.8rem] ${
                  i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <HairImage
                  src={img}
                  alt={`Galería Assistudio ${i + 1}`}
                  className="h-full w-full transition duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:scale-[1.02]"
            >
              <Instagram size={18} />
              Ver más en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Resultados"
            title="Transformación que se nota."
            subtitle="El proceso completo: desde el diagnóstico hasta un resultado que te hará brillar."
            center
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-[2rem] bg-white shadow-xl overflow-hidden">
              <HairImage
                src="/2.jpeg"
                alt="Cabello natural"
                className="h-[500px] w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Morena Iluminada · Resultado Soñado</h3>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white shadow-xl overflow-hidden">
              <HairImage
                src="/foto trabajo salón.jpeg"
                alt="Resultado final"
                className="h-[500px] w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Babylights · Resultado Soñado</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonios" className="py-24 md:py-32 bg-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Opiniones"
            title="Lo que dicen quienes ya vivieron la experiencia."
            subtitle="La confianza de nuestras clientas es nuestro mejor resultado."
            center
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-zinc-900 text-zinc-900" />
                  ))}
                </div>
                <p className="text-zinc-700 leading-relaxed">"{t.text}"</p>
                <p className="mt-6 font-medium text-zinc-900">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-[2.5rem] bg-zinc-900 px-8 py-16 md:px-16 text-center text-white shadow-2xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">
              Reserva tu hora
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Vive la experiencia Assistudio
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/75 text-lg leading-relaxed">
              Agenda tu próxima cita y descubre una experiencia de belleza pensada
              para que te sientas segura, cuidada y espectacular.
            </p>
            <CTAButtons center />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white/60">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Información rápida para resolver dudas antes de reservar."
            center
          />
          <div className="mt-14 space-y-5">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-[1.6rem] border border-zinc-200 bg-white p-6"
              >
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <SectionTitle
              eyebrow="Contacto"
              title="Conversemos y agenda tu próxima cita."
              subtitle="Encuéntranos en Paine. Reservas con hora previa por WhatsApp o Instagram."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-zinc-600">Victoria González 135, Paine</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock3 size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-zinc-600">Lunes a Sábado · Atención con reserva previa según agenda</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1" />
                  <div>
                    <p className="font-medium">Contacto</p>
                    <p className="text-zinc-600">+56 9 4221 2182</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white outline outline-2 outline-white/30 outline-offset-2 transition hover:bg-zinc-800"
                  >
                    <MessageCircle size={18} />
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400"
                  >
                    <Instagram size={18} />
                    Ir a Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.18em] uppercase">
              Assistudio
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Belleza con detalle, estilo y esencia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <a href="#servicios" className="hover:text-zinc-900">Servicios</a>
            <a href="#galeria" className="hover:text-zinc-900">Galería</a>
            <a href="#testimonios" className="hover:text-zinc-900">Opiniones</a>
            <a href="#contacto" className="hover:text-zinc-900">Contacto</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-zinc-900">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
