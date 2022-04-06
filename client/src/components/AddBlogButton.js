import React from "react";
import { Link } from "react-router-dom";

export default function AddBlogButton() {

    return (
        <div className="flex justify-center pb-2 pl-80">
            <Link 
                className="border-2 border-black rounded-md py-1 px-1 hover:border-slate-400 hover:text-slate-400"
                to="/new"
            >
                add.
            </Link>
        </div>
    )

}

