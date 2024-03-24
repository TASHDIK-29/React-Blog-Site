import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils/storage";
import BlogCard from "../components/BlogCard";
import EmptyBookmarks from "../components/EmptyBookmarks";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect( () =>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[])

    const handelDelete = (id) =>{
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }

    if(blogs.length < 1) return <EmptyBookmarks massage={'No Bookmarks Found'} address={'/blogs'} lable={'Go to Blogs'}></EmptyBookmarks>
    return (
        <div className="grid justify-center grid-cols-1 py-7 px-5 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard deletable={true} handelDelete={handelDelete} key={blog.id} blog={blog}></BlogCard>)
            }

        </div>
    );
};

export default Bookmarks;