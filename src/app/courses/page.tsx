import CourseCard from "../../components/CourseCard";

const courses = [
  {
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of HTML, CSS, and JavaScript to build modern websites.",
    image: "/courses/web-fundamentals.jpg",
    level: "Beginner",
    duration: "8 weeks",
    price: "$99",
    href: "/courses/web-fundamentals",
  },
  {
    title: "Advanced React Development",
    description:
      "Master React.js and build complex web applications with modern tools and practices.",
    image: "/courses/react-advanced.jpg",
    level: "Advanced",
    duration: "10 weeks",
    price: "$199",
    href: "/courses/react-advanced",
  },
  {
    title: "Full Stack Development",
    description:
      "Build complete web applications with modern frontend and backend technologies.",
    image: "/courses/full-stack.jpg",
    level: "Intermediate",
    duration: "12 weeks",
    price: "$299",
    href: "/courses/full-stack",
  },
  {
    title: "Node.js Backend Development",
    description:
      "Learn to build scalable backend services with Node.js and Express.",
    image: "/courses/nodejs.jpg",
    level: "Intermediate",
    duration: "8 weeks",
    price: "$199",
    href: "/courses/nodejs",
  },
  {
    title: "Modern JavaScript",
    description:
      "Master modern JavaScript features and best practices for web development.",
    image: "/courses/javascript.jpg",
    level: "Beginner",
    duration: "6 weeks",
    price: "$149",
    href: "/courses/javascript",
  },
  {
    title: "Web Security Fundamentals",
    description: "Learn essential security practices for web applications.",
    image: "/courses/security.jpg",
    level: "Advanced",
    duration: "6 weeks",
    price: "$249",
    href: "/courses/security",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Courses
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our comprehensive web development courses and start your
              journey today
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.href} {...course} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
