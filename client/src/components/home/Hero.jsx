import Button from "../common/Button";
import Container from "../layout/Container";

function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Learn Without Limits
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn from industry experts and advance your career with
            world-class online courses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="text"
              placeholder="Search for courses..."
              className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button>Search</Button>
          </div>

          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
            <span>📚 500+ Courses</span>
            <span>👨‍🎓 20k+ Students</span>
            <span>⭐ 4.9 Rating</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
