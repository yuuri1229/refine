import Icon from "./Icon";
import { siteConfig } from "@/data/site";

type LineButtonProps = {
  className?: string;
  size?: "md" | "lg";
  label?: string;
};

export default function LineButton({
  className = "",
  size = "md",
  label = "LINEで無料相談する",
}: LineButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base";

  return (
    <a
      href={siteConfig.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line font-bold text-white shadow-sm transition-transform hover:scale-[1.03] hover:brightness-105 active:scale-95 ${sizeClasses} ${className}`}
    >
      <Icon name="chat" />
      {label}
    </a>
  );
}
