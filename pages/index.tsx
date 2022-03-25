import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SelectMenu from "../Components/SelectMenu";
import { B2, b2SizeEnum } from "../Components/b2";
import Input from "../Components/SimpleInput";
import Checkboxes from "../Components/Checkboxes";

const Home: NextPage = () => {
  return (
    <>
      <p>Hi there</p>
      <Checkboxes name="test" id="test" label="test" description="test" />
    </>
  );
};

export default Home;
