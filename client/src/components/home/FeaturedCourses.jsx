import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import CourseCard from "../course/CourseCard";

import reactImg from "../../assets/react-course.jpg";
import nodeImg from "../../assets/node-course.jpg";
import uiImg from "../../assets/uiux-course.jpg";

function FeaturedCourses() {
  const courses = [
    {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    rating: 4.8,
    students: 1200,
    price: 49,
    image: reactImg,
  },
  {
    id: 2,
    title: "Node.js & Express",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 980,
    price: 59,
    image: nodeImg,
  },
  {
    id: 3,
    title: "UI/UX Design",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: 860,
    price: 39,
    image: uiImg,
  },
];

  return (
    <section className="py-20">
	<Container>
      <SectionTitle
  title="Featured Courses"
  subtitle="Discover our most popular courses."/>

      <div className="grid gap-8 md:grid-cols-3">
  {courses.map((course) => (
    <CourseCard
      key={course.id}
      {...course}
    />
  ))}
</div>
	</Container>
    </section>
  );
}

export default FeaturedCourses;
