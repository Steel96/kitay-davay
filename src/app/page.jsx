import styles from "./page.module.css";
import Header from "../../components/header";
import Main from "../../components/main";
import Prices from "../../components/prices";
import Stages from "../../components/stagesWork";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Prices />
      <Stages />
    </>
  );
}
