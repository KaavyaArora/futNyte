import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AllPosts from "./pages/AllPosts/AllPosts";
import MyPosts from "./pages/MyPosts/MyPosts";
import CreatePost from "./pages/CreatePost/CreatePost";
import About from "./pages/About/About";


const Layout = () => {                         //Step3
  return( 
  <div className="app bg-[#111]" >
    <Navbar/>
    <Outlet/>        
    <Footer/>
  </div>
  )
}


 const router = createBrowserRouter([                   //Step2
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/posts",
        element: <Posts/>,
      },

      {
        path: "/allposts",
        element: <AllPosts />,
      },
    
      {
        path: "/myposts",
        element: <MyPosts/>,
      },
      {
        path: "/createpost",
        element: <CreatePost/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} /> 
  );
}

export default App;
