const Navbar = () => {
  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg flex items-center ">
      <nav className="container p-4">
        <h1 className="text-2xl font-bold text-gray-800">Blog App</h1>
      </nav>
      <div className="container">
        <ul className="flex space-x-8  items-center justify-center ">
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer">
            Home
          </li>
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer">
            Create
          </li>
          <li className="text-gray-800 hover:text-blue-600 cursor-pointer">
            View Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
