import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    message:
      "LearnSphere helped me land my first developer job. The courses were practical and easy to follow.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "UI/UX Designer",
    message:
      "The instructors explain concepts clearly. I highly recommend LearnSphere to anyone learning tech.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Data Analyst",
    message:
      "Amazing platform with excellent content. I improved my skills and got promoted.",
  },
];

function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="What Our Students Say"
          subtitle="Success stories from learners around the world."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <p className="text-gray-600 italic">
                "{item.message}"
              </p>

              <div className="mt-6">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
