import Button from "../common/Button";

function CourseCard({
  title,
  instructor,
  rating,
  students,
  price,
  image,
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {instructor}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm">
          <span>⭐ {rating}</span>
          <span>{students} students</span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${price}
          </span>

          <Button>Enroll</Button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
