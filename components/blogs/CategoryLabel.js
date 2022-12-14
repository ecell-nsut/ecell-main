import Link from 'next/link';

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red',
  };

  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blogs/blog/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  );
};

export default CategoryLabel;
