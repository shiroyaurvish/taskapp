import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import AuthorDetail from "./Components/AuthorDetail";
import Authors from "./Components/Authors";
import PostDetail from "./Components/PostDetail";
import TopPosts from "./Components/TopPosts";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path: "/",
        element: <Authors/>,
      },
      {
        path:"/authors/:id",
        element: <AuthorDetail />,
      },
      {
        path:"/authors/posts/:id",
        element: <PostDetail/>
      },
      {
        path:"/mostlikedposts",
        element: <TopPosts type="likes" />
      },
      {
        path:"/mostcommentedposts",
        element: <TopPosts type="comments" />
      },
    ]
  }
]) 
function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
