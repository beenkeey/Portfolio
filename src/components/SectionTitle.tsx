type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-12">
      <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-indigo-300 uppercase">{eyebrow}</p>
      <h2 className="text-2xl leading-tight font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">{subtitle}</p> : null}
    </div>
  );
}
