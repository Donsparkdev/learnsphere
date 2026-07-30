function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      review:
        "LearnSphere completely transformed my career. The courses are practical and engaging.",
    },
    {
      name: "Michael Lee",
      role: "Student",
      review:
        "The instructors explain concepts clearly, and I love learning at my own pace.",
    },
    {
      name: "Sophia Brown",
      role: "UI Designer",
      review:
        "A fantastic platform with excellent course quality and a beautiful learning experience.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        What Our Students Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border p-6 shadow transition hover:shadow-lg"
          >
            <p className="text-gray-600 italic">"{item.review}"</p>

            <div className="mt-6">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
