import { AiOutlineHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path); // Extract paths from the current URL

  return (
    <div className="breadcrumb flex items-center md:mx-16 text-xl font-semibold text-gray-500 ml-3">
      <div>
        <Link to="/">
          <AiOutlineHome /> {/* Always render the home icon */}
        </Link>
      </div>
      <div className="flex items-center">
        {paths.map((path, index) => (
          index === 0 && ( // Check if it's the first segment
            <span className='mx-4' key={path}>
              {' '}
              <span className='text-blue-900 font-semibold'>{'>'}</span>{' '}
              <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
            </span>
          )
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
