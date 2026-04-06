import { ReactNode } from "react";

interface PillHeaderProps {
  children: ReactNode;
  className?: string;
}

export function PillHeader({ children, className = "" }: PillHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1
        className="pill-header bg-accent-blue text-white text-xl md:text-2xl font-heading shadow-md"
      >
        {children}
      </h1>
    </div>
  );
}
