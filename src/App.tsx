import {
  Mail,
  Linkedin,
  MapPin,
  Code2,
  GraduationCap,
  Briefcase,
  ChevronRight,
} from "lucide-react";

import cvData from "./data/cvData";
import CvSection from "./components/CvSection";
import SkillTag from "./components/SkillTag";

export default function App() {
  return (
    // fondo, color de texto y estilo de selección
    <div className="min-h-screen bg-[#0d1110] text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Contenedor */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Header / presentación */}
        <header className="mb-20">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Disponible para proyectos
            </span>
          </div>

          {/* Nombre en 2 colores */}
          <h1 className="text-5xl md:text-7xl font-black text-zinc-100 tracking-tighter mb-4">
            {cvData.name.split(" ")[0]}{" "}
            <span className="text-emerald-500">{cvData.name.split(" ")[1]}</span>
          </h1>

          {/*descripción corta */}
          <p className="text-lg md:text-2xl text-zinc-500 font-medium mb-8 max-w-2xl leading-relaxed">
            {cvData.role}. Especializado en construir soluciones digitales
            eficientes.
          </p>

          {/* Links de contacto */}
          <div className="flex flex-wrap gap-6 text-sm font-bold text-zinc-400">
            {/* Abre el correo (mailto) */}
            <a
              href={`mailto:${cvData.email}`}
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Mail size={16} className="text-emerald-800" /> {cvData.email}
            </a>

            {/* Abre LinkedIn */}
            <a
              href={`https://${cvData.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={16} className="text-emerald-800" /> LinkedIn
            </a>

            {/* ubicación */}
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-emerald-800" /> {cvData.location}
            </div>
          </div>
        </header>

        {/* Layout*/}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Columna izquierda */}
          <div className="md:col-span-8">
            <CvSection title="Experiencia" icon={Briefcase}>
              <div className="space-y-16">
                {/* experiencias */}
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Encabezado: empresa + periodo */}
                    <div className="mb-3 flex justify-between items-center">
                      <h3 className="text-xl font-black text-zinc-100 group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </h3>
                      <span className="text-[10px] font-black text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>

                    {/* Puesto */}
                    <p className="text-emerald-600 font-bold mb-4 text-sm uppercase tracking-wide">
                      {exp.role}
                    </p>

                    {/* Lista de actividades */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-zinc-500 text-sm leading-relaxed flex items-start gap-3"
                        >
                          {/* Flechita */}
                          <span className="text-emerald-900 mt-1.5 opacity-50">
                            <ChevronRight size={12} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CvSection>

            <CvSection title="Educación" icon={GraduationCap}>
              <div className="grid grid-cols-1 gap-6">
                {/* Render de escuelas */}
                {cvData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl"
                  >
                    <h3 className="font-black text-zinc-100 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-emerald-700 font-bold text-sm mb-2">
                      {edu.degree}
                    </p>

                    {/* Detalle breve */}
                    <p className="text-xs text-zinc-600 leading-relaxed font-medium">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </CvSection>
          </div>

          {/* skills */}
          <div className="md:col-span-4 space-y-12">
            <CvSection title="Habilidades" icon={Code2}>
              <div className="space-y-8">
                {/* Bloque: tecnologías */}
                <div>
                  <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">
                    Tecnologías
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ...cvData.skills.mobile,
                      ...cvData.skills.frontend,
                      ...cvData.skills.backend,
                    ].map((s) => (
                      <SkillTag key={s} name={s} />
                    ))}
                  </div>
                </div>

                {/* Bloque: herramientas */}
                <div>
                  <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">
                    Herramientas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[...cvData.skills.database, ...cvData.skills.tools].map(
                      (s) => (
                        <SkillTag key={s} name={s} />
                      )
                    )}
                  </div>
                </div>
              </div>
            </CvSection>

            {/* mailto con estilo botón */}
            <div className="p-8 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl text-center">
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed text-balance">
                ¿Buscas un desarrollador para tu próximo proyecto?
              </p>

              {/* Botón que abre correo directo */}
              <a
                href={`mailto:${cvData.email}`}
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-emerald-950 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Footer simple */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-zinc-700 uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} {cvData.name}
          </p>
          <div className="flex gap-4">
            <span>React + Tailwind</span>
          </div>
        </footer>
      </div>
    </div>
  );
}