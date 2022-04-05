import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";

export default function App() {

  const [blogs, setBlogs] = useState([]);

  // Load blogs
  useEffect(() => {
    document.title = 'blog.';
    const abortController = new AbortController();
    async function loadBlogs() {
      try {
        const response = await fetch(
          `http://localhost:5000/blogs`,
          { signal: abortController.signal }
        );
        const blogsFromAPI = await response.json();
        setBlogs(blogsFromAPI.data);
      } catch(error) {
        if (error.name === "AbortError") {

        } else {
          throw error;
        }
      }
    }
    loadBlogs();
    return () => {
      document.title = "";
      abortController.abort();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">  
        <h1 className="text-8xl font-bold pt-4 pb-10">
          blog.
        </h1>
      <BlogList blogs={blogs} />
    </div>
  )
}
