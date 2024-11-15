interface Props {
  title: string;
  description?: string;
}

export default function ProductsHeader({
  title,
  description = "Explore your natural products",
}: Props) {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          Mill as you wish
        </button>
      </div>
    </div>
  );
}
