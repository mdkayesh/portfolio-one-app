import { onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "./BlogReducer";
import { blogRef } from "./Firebase";

const Context = createContext();

const initialValue = {
  blogData: [],
  filteredBlogData: [],
  btnName: "",
  singleBlog: [],
  dateData: {},
};

const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialValue);

  useEffect(() => {
    const q = query(blogRef, orderBy("date", "desc"));

    onSnapshot(q, (snapshot) => {
      const getData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch({ type: "GET_BLOG_DATA", payload: getData });
      dispatch({ type: "GET_FILTERED_DATA" });
    });

    return () => {};
  }, []);

  // filtered the blog data

  const filtered = (btnName) => {
    dispatch({ type: "FILTERED", payload: btnName });
  };

  const getSingleBlog = (blogId) => {
    dispatch({ type: "GET_SINGLE_BLOG", payload: blogId });
  };

  return (
    <Context.Provider value={{ ...state, filtered, getSingleBlog }}>
      {children}
    </Context.Provider>
  );
};

// create custom hook

export const UseBlogContext = () => {
  return useContext(Context);
};

export default BlogProvider;
