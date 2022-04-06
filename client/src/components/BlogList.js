import React from "react";
import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import AddBlogButton from "./AddBlogButton";

export default function BlogList() {

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

    const blogList = blogs.map((blog) => (
        <div key={blog.id} className="pb-5">
            <BlogPost blog={blog} />
        </div>
    ))
    return (
        <div>
            <AddBlogButton />
            {blogList}
        </div>
    )
}