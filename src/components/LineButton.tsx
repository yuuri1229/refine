import Icon from "./Icon";
import { siteConfig } from "@/data/site";

type LineButtonProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeClasses: Record<NonNullable<LineButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

export default function LineButton({
  className = "",
  size = "md",
  label = "LINEで無料相談する",
}: LineButtonProps) {
  return (
    <a
      href={siteConfig.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line font-bold text-white transition-all hover:brightness-105 active:scale-[0.98] ${sizeClasses[size]} ${className}`}
    >
      <Icon name="chat" />
      {label}
    </a>
  );
}
