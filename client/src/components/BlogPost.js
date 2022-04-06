import React from "react"

export default function BlogPost({blog}) {
    return (
        <div className="flex justify-center">
            <div className="py-4 px-2 block border-2 border-black bg-white max-w-sm text-center">
                <h4 className="text-2xl">{blog.title}</h4>
                <p className="py-2">{blog.content}</p>
                <button type="button" className="border-2 border-black rounded-md py-1 px-1 hover:border-slate-400 hover:text-slate-400">Button!</button>
            </div>
        </div>
    )
}