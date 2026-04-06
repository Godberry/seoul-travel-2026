type TapeColor = "mint" | "pink" | "blue" | "yellow" | "lavender";

const colorMap: Record<TapeColor, string> = {
  mint: "bg-tape-mint",
  pink: "bg-tape-pink",
  blue: "bg-tape-blue",
  yellow: "bg-tape-yellow",
  lavender: "bg-tape-lavender",
};

type TapePosition = "top-left" | "top-right" | "top-center";

const positionMap: Record<TapePosition, string> = {
  "top-left": "-top-2.5 -left-3 -rotate-12",
  "top-right": "-top-2.5 -right-3 rotate-12",
  "top-center": "-top-2.5 left-1/2 -translate-x-1/2 rotate-1",
};

interface WashiTapeProps {
  color?: TapeColor;
  position?: TapePosition;
  width?: string;
}

export function WashiTape({
  color = "mint",
  position = "top-center",
  width = "w-16",
}: WashiTapeProps) {
  return (
    <div
      className={`washi-tape ${colorMap[color]} ${positionMap[position]} ${width}`}
      aria-hidden="true"
    />
  );
}
