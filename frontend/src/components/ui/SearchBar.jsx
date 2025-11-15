export default function SearchBar() {
  return (
    <form action="/search" className="w-full">
      <div className="flex items-center border-2 border-[var(--color-ffdd84)] rounded-2xl px-3 py-2">
        {/* Иконка */}
        <svg
          className="w-6 h-6 text-[var(--color-282626)] mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {/* Поле ввода */}
        <input
          type="text"
          placeholder="Найти товары..."
          className="flex-1 bg-transparent outline-none text-[var(--color-282626)]"
        />
      </div>
    </form>
  );
}
