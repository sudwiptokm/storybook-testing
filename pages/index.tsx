import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { B2, b2SizeEnum } from "../Components/b2";
import Input from "../Components/SimpleInput";
import Checkboxes from "../Components/Checkboxes";
import BreadCrums from "../Components/BreadCrumbs";

const pages = [
  { name: "Projects", href: "projects", current: false },
  { name: "Project Nero", href: "#", current: true },
];

const Home: NextPage = () => {
  return (
    <>
      <p className="bg-red-700 text-white">Hi there</p>
      <Checkboxes name="test" id="test" label="test" description="test" />
      <BreadCrums items={pages} />
    </>
  );
};

export default Home;
