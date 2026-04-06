import { ReactNode } from "react";

interface TimelineItemProps {
  time: string;
  title: string;
  children?: ReactNode;
  isLast?: boolean;
}

export function TimelineItem({ time, title, children, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-6">
      {/* Vertical line */}
      {!isLast && <div className="timeline-line" />}
      {/* Dot */}
      <div className="timeline-dot top-1" />
      {/* Content */}
      <div>
        <span className="inline-block bg-accent-red/10 text-accent-red font-heading font-bold text-sm px-2.5 py-0.5 rounded-full mb-1">
          {time}
        </span>
        <h3 className="font-heading font-bold text-base text-text-dark mt-1">
          {title}
        </h3>
        {children && (
          <div className="mt-2 text-sm text-text-muted leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
