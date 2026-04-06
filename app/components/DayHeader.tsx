import { Calendar } from "lucide-react";

interface DayHeaderProps {
  day: number;
  date?: string;
  subtitle?: string;
}

export function DayHeader({ day, date, subtitle }: DayHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-3">
      {/* Calendar icon */}
      <div className="relative shrink-0">
        <div className="w-11 h-12 rounded-lg bg-white border-2 border-accent-red/30 shadow-sm flex flex-col items-center overflow-hidden">
          <div className="w-full bg-accent-red text-white text-[9px] font-bold text-center py-0.5 font-heading">
            DAY
          </div>
          <span className="text-accent-red font-heading font-bold text-lg leading-tight mt-0.5">
            {day}
          </span>
        </div>
      </div>
      {/* Title */}
      <div>
        <h2 className="font-heading text-xl font-bold text-accent-red leading-tight">
          DAY {day}
        </h2>
        {date && (
          <p className="text-sm text-text-muted mt-0.5">{date}</p>
        )}
        {subtitle && (
          <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
