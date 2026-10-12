export function ProjectVisual({ title, subtitle, tech }: { title: string; subtitle: string; tech: string[] }) {
  return (
    <div className="flow-project-visual" aria-hidden>
      <strong>{title}</strong>
      <p>{subtitle}</p>
      <div>{tech.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
    </div>
  );
}
