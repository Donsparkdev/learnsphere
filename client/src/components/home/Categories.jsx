import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

const categories = [
  "💻 Web Development",
  "📱 Mobile Development",
  "🎨 UI/UX Design",
  "🤖 Artificial Intelligence",
  "📊 Data Science",
  "🛡️ CyberSecurity",
  "💼 Business",  
  "☁️ Cloud Computing",
];

function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Browse Categories"
          subtitle="Choose from our most popular learning paths."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;
