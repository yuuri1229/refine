import { iconMap } from "./icon-map";

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export default function Icon({ name, className = "", filled = false }: IconProps) {
  const codepoint = iconMap[name];

  if (codepoint === undefined && process.env.NODE_ENV !== "production") {
    console.warn(
      `Icon "${name}" is not in icon-map.ts. Add its codepoint and regenerate the subset font.`,
    );
  }

  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontVariationSettings: `"FILL" ${filled ? 1 : 0}, "wght" 400, "GRAD" 0, "opsz" 24`,
      }}
      aria-hidden="true"
    >
      {codepoint !== undefined ? String.fromCodePoint(codepoint) : ""}
    </span>
  );
}
