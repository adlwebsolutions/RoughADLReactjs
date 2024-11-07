import React, { createContext, useContext, useState } from "react";

// Rename context to `PostDataContext` for clarity
const PostDataContext = createContext(null);

const Context = ({ children }) => {
  const [posts, setPosts] = useState({ name: "arun", age: 29 });

  const values = {
    posts,
    setPosts,
  };

  return (
    <PostDataContext.Provider value={values}>
      {children}
    </PostDataContext.Provider>
  );
};

// Custom hook for using the context in other components
export const usePostData = () => useContext(PostDataContext);

export default Context;
