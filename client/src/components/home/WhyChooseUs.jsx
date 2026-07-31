import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

function WhyChooseUs() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from experienced professionals in every field.",
    },
    {
      title: "Learn Anywhere",
      description: "Access your courses on desktop, tablet, or mobile.",
    },
    {
      title: "Lifetime Access",
      description: "Keep learning at your own pace forever.",
    },
    {
      title: "Certificates",
      description: "Earn certificates after completing your courses.",
    },
  ];

  return (
    <section className="py-20">
	<Container>
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
  title="Why Choose LearnSphere"
  />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
	</Container>
    </section>
  );
}

export default WhyChooseUs;
