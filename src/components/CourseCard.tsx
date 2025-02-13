interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  price: string;
  href: string;
}

export default function CourseCard({
  title,
  description,
  image,
  level,
  duration,
  price,
  href,
}: CourseCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {level}
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              {duration}
            </span>
          </div>
          <a href={href} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-600">{price}</div>
          <div className="ml-4">
            <a
              href={href}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
