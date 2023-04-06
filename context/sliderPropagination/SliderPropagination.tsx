"use client";

import { createContext, useState ,useRef} from "react";

type Proagination = {
  children: React.ReactNode;
};

export const StopPropagination = createContext({});

const SliderPropagination = ({ children }: Proagination) => {
  const dropdownRef = useRef<any>(null);
  const swiperRef = useRef<any>(null);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const [isOpenCollapse2, setIsOpenCollapse2] = useState(false);
  const [isOpenCollapse3, setIsOpenCollapse3] = useState(false);


  return (
    <StopPropagination.Provider
      value={{ isOpenCollapse,setIsOpenCollapse,isOpenCollapse2, setIsOpenCollapse2,showDropdown,isOpenCollapse3, setIsOpenCollapse3, setShowDropdown,isFocused3, setIsFocused3,isFocused, setIsFocused,isFocused2, setIsFocused2,openDrawer,setOpenDrawer}}
    >
      {children}
    </StopPropagination.Provider>
  );
};

export default SliderPropagination;
