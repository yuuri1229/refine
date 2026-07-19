type WaveProps = {
  className?: string;
  fill?: string;
  flip?: boolean;
};

export default function Wave({ className = "", fill = "currentColor", flip = false }: WaveProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-16 w-full sm:h-20 ${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
        fill={fill}
      />
    </svg>
  );
}
