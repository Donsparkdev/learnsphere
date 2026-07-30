function Categories() {
  const categories = [
    "Web Development",
    "Mobile Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "UI/UX Design",
    "Business",
    "Cloud Computing",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Browse Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border px-6 py-3 transition hover:bg-blue-600 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
