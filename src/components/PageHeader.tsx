import Wave from "@/components/Wave";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-primary-500 pt-14 text-white">
      <div className="mx-auto max-w-4xl px-4 pb-10 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-[0.2em] text-primary-50">{eyebrow}</p>
        <h1 className="font-display mt-3 text-2xl font-bold sm:text-3xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-50">
            {description}
          </p>
        )}
      </div>
      <Wave className="text-paper" />
    </div>
  );
}
