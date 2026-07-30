function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">

      <h1 className="text-6xl font-extrabold leading-tight">
        Learn <span className="text-blue-600">Without Limits</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Join thousands of learners mastering web development,
        AI, cybersecurity, business and more.
      </p>

      <div className="mt-10 flex justify-center gap-5">
        <button className="rounded-lg bg-blue-600 px-8 py-4 text-white">
          Explore Courses
        </button>

        <button className="rounded-lg border px-8 py-4">
          Become an Instructor
        </button>
      </div>

    </section>
  );
}

export default Hero;
