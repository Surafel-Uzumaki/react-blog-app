const Bloglist = ({ blogs, tittle }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        <h1>{tittle}</h1>
        Blog Posts
      </h1>
      <div className="space-y-6">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">
                Written by:{" "}
                <span className="text-blue-600 font-medium">{blog.author}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bloglist;
