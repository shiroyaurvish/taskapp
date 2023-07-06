import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import AuthorDetail from "./Components/AuthorDetail";
import Authors from "./Components/Authors";
import PostDetail from "./Components/PostDetail";
import MostLikedPosts from "./Components/MostLikedPosts";
import MostCommentedPosts from "./Components/MostCommentedPosts";

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
        element: <MostLikedPosts/>
      },
      {
        path:"/mostcommentedposts",
        element: <MostCommentedPosts/>
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
