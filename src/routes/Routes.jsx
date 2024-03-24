import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";





export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/blogs",
          element: <Blogs />,
          loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                // Default Path ==> index : true //
                index : true ,
                element: <Content/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                // This is a children of a Dynamic route. Thats why no need of "/" //
                path: "author",
                element: <Author/>,
                loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />
        },
      ]
    },
    
  ]);