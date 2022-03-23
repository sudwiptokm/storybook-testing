import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SelectMenu from "../Components/SelectMenu";
import { B2, b2SizeEnum } from "../Components/b2";

const Home: NextPage = () => {
  return (
    <>
      <B2 size={b2SizeEnum.L} />
      <B2 size={b2SizeEnum.M} />
      <B2 size={b2SizeEnum.S} />
    </>
  );
};

export default Home;
