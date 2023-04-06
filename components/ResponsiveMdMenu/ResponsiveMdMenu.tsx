import Link from "next/link";
import React, { useContext } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import CollapsibleMenu from "../CollapseMenu/CollapseMenu";
import CollapseMenu2 from "../CollapseMenu/CollapseMenu2";
import CollapseMenu3 from "../CollapseMenu/CollapseMenu3";
import { StopPropagination } from "@/context/sliderPropagination/SliderPropagination";

const ResponsiveMdMenu = () => {
  const { setOpenDrawer }: any = useContext(StopPropagination);

  return (
    <>
      <li>
        <Link
          className="uppercase text-white text-2xl hover:font-bold ease-linear transition-all  duration-100"
          href={"/"}
          onClick={() => setOpenDrawer(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="uppercase text-white text-2xl hover:font-bold ease-linear transition-all  duration-100"
          href={"/about"}
          onClick={() => setOpenDrawer(false)}
        >
          About us
        </Link>
      </li>
      <li>
        <CollapsibleMenu />
      </li>
      <li>
        <CollapseMenu2 />
      </li>
      <li>
        <CollapseMenu3 />
      </li>
      <li>
        <Link
          className="uppercase text-white text-2xl hover:font-bold ease-linear transition-all  duration-100"
          href={"/contact"}
          onClick={() => setOpenDrawer(false)}
        >
          contact
        </Link>
      </li>
    </>
  );
};

export default ResponsiveMdMenu;
