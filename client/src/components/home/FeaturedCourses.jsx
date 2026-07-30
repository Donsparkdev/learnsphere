function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
    },
    {
      id: 2,
      title: "Node.js & Express",
      instructor: "Jane Smith",
    },
    {
      id: 3,
      title: "UI/UX Design",
      instructor: "Sarah Johnson",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Courses
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-xl border p-6 shadow transition hover:shadow-lg"
          >
            <div className="mb-4 h-40 rounded-lg bg-gray-200"></div>

            <h3 className="text-xl font-semibold">
              {course.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {course.instructor}
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white">
              View Course
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCourses;
