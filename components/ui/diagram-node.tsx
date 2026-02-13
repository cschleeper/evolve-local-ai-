export function DiagramNode({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
      {label}
    </span>
  );
}
