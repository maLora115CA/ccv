// Al final esto se reutiliza un montón en la sección de habilidades.
export default function SkillTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-1 bg-zinc-900/50 text-emerald-100/70 rounded border border-zinc-800 text-[11px] font-bold hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default">
      {name}
    </span>
  );
}