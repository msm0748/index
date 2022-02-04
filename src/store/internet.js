import { createContext, useState } from "react";

export const InternetContext = createContext();

export default function InternetStore(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [fullSize, setFullSize] = useState(false);

  const internet = [
    {
      iconTop: 200,
      iconLeft: 200,
      title: "네이버 영화",
      url: "http://ezportfolio.cafe24.com/ez210927/msm/projectA",
      isOpen,
      setIsOpen,
      fullSize,
      setFullSize,
    },
    {
      iconTop: 400,
      iconLeft: 400,
      title: "네이버 영화",
      url: "http://ezportfolio.cafe24.com/ez210927/msm/projectA",
      isOpen,
      setIsOpen,
      fullSize,
      setFullSize,
    },
  ];

  return (
    <InternetContext.Provider value={internet}>
      {props.children}
    </InternetContext.Provider>
  );
}
