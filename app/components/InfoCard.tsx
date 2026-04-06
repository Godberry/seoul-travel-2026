import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "info" | "warning";
}

export function InfoCard({
  title,
  icon,
  children,
  variant = "info",
}: InfoCardProps) {
  const borderColor =
    variant === "warning" ? "border-l-accent-orange" : "border-l-accent-blue";

  return (
    <div
      className={`bg-white/80 rounded-xl border-l-4 ${borderColor} p-4 shadow-sm`}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon ||
          (variant === "warning" ? (
            <AlertTriangle className="w-4 h-4 text-accent-orange" />
          ) : null)}
        <h3 className="font-heading font-bold text-base text-text-dark">
          {title}
        </h3>
      </div>
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  );
}
