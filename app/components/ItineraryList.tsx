interface ItineraryListProps {
  items: string[];
}

export function ItineraryList({ items }: ItineraryListProps) {
  return (
    <ul className="space-y-1.5 text-sm text-text-dark">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-accent-orange font-bold mt-0.5 shrink-0">→</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
