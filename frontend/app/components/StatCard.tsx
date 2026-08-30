interface StatCardProps {
  title: string;
  value: string;
  description?: string;
}

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </h3>

      {description && (
        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}