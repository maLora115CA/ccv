import React from "react";

interface CvSectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export default function CvSection({
  title,
  icon: Icon,
  children,
}: CvSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        {/* Iconito con fondo */}
        <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <Icon className="text-emerald-500" size={20} />
        </div>

        {/* Título de la sección */}
        <h2 className="text-sm font-black text-emerald-100 uppercase tracking-[0.3em] flex-1">
          {title}
        </h2>

        {/* Línea decorativa */}
        <div className="h-[1px] bg-zinc-800 flex-grow max-w-[100px]"></div>
      </div>
      {children}
    </section>
  );
}