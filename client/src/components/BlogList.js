import React from "react";
import BlogPost from "./BlogPost";

export default function BlogList({blogs}) {

    const blogList = blogs.map((blog) => (
        <div key={blog.id} className="pb-5">
            <BlogPost blog={blog} />
        </div>
    ))
    return (
        <div>{blogList}</div>
    )
}