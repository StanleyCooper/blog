import React from "react";
import BlogPost from "./BlogPost";

export default function BlogList({blogs}) {

    const blogList = blogs.map((blog) => (
        <div key={blog.id}>
            <BlogPost blog={blog} />
        </div>
    ))
    return (
        <div>{blogList}</div>
    )
}