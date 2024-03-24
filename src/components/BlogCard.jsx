import { Link } from "react-router-dom";
import backupImage from "./../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable ,handelDelete }) => {
    const { cover_image, title, description, id, published_at } = blog;
    return (


        <div className="max-w-sm mx-auto group transition border-2 border-primary hover:scale-105 hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline flex relative">
            
                <Link to={`/blog/${id}`} >
                    <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || backupImage} />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                        <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                        <p>{description}</p>
                    </div>
                </Link>
                {
                    deletable && <div onClick={() => handelDelete(id)} className="absolute rounded-full bg-primary cursor-pointer -top-5 -right-5 p-3"><MdDeleteForever size={20} className="text-secondary"/></div>
                }
            
        </div>

    );
};

export default BlogCard;