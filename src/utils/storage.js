import toast from "react-hot-toast";

const getBlogs = () =>{
    let blogs = [] ;

    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs);
    }

    return blogs ;
}

// Save 
const saveBlog = blog =>{
    let blogs = getBlogs();

    const isExist = blogs.find(b => b.id === blog.id)
    if(isExist){
        return toast.error('Already Bookmarked');
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Successfully Bookmarked');
}

// Delete
const deleteBlog = id =>{
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Successfully Removed from Bookmarks');
}

export {getBlogs, saveBlog, deleteBlog }