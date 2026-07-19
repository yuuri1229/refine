type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-600 py-14 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold tracking-wide text-primary-50">{eyebrow}</p>
        <h1 className="mt-2 text-2xl font-black sm:text-3xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-50">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
