import { createContext, useState } from "react";

export const SearchExContext = createContext();

const ContextProvider = ({ children }) => {
  const [excercise, setExsercise] = useState([]);

  const [bodyParts, setBodyParts] = useState([])

  const [bodypart, setbodypart] = useState("all")
  return (
    <SearchExContext.Provider value={{ excercise, setExsercise, setBodyParts, bodyParts,setbodypart,bodypart }}>
      {children}
    </SearchExContext.Provider>
  );
};

export default ContextProvider;
