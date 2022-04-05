import React from "react"

export default function BlogPost({blog}) {
    return (
        <div className="flex justify-center">
            <div className="py-4 px-2 block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <h4 className="text-2xl">{blog.title}</h4>
                <p className="py-2">{blog.content}</p>
                <button type="button" className="bg-blue-600 text-gray-100 rounded-md py-1 px-1 hover:bg-blue-500">Button!</button>
            </div>
        </div>
    )
}