"use client";

import { useState, useEffect } from "react";

interface ChecklistItemProps {
  id: string;
  label: string;
}

export function ChecklistItem({ id, label }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`checklist-${id}`);
    if (stored === "true") setChecked(true);
  }, [id]);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    localStorage.setItem(`checklist-${id}`, String(next));
  };

  return (
    <label
      className="flex items-start gap-3 py-1.5 cursor-pointer group"
      htmlFor={`check-${id}`}
    >
      <input
        type="checkbox"
        id={`check-${id}`}
        checked={checked}
        onChange={toggle}
        className="scrapbook-checkbox mt-0.5"
      />
      <span
        className={`text-sm leading-relaxed transition-colors duration-200 ${
          checked
            ? "line-through text-text-muted/60"
            : "text-text-dark group-hover:text-accent-blue"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
