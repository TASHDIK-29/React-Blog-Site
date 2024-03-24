import { useLoaderData } from "react-router-dom";
import backupImage from "./../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, tags, body_html, url } = blog;


    return (
        <div className="w-full mx-auto group p-2 border-2  border-opacity-30 hover:no-underline focus:no-underline space-y-4">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || backupImage} />
           <div>
           {
                tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>)
            }
           </div>
            <div className="space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>

               <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;