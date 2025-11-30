import Header from "../components/header";
import Main from "../components/main";
import Prices from "../components/prices";
import Stages from "../components/stagesWork";
import Benefit from "../components/benefit";
import Advantages from "../components/advantages";
import Calculator from "../components/calculator";
import StillThinking from "@/components/stillThinking";
import Reviews from "@/components/reviews";
import Consultation from "@/components/consultation";
import ContactsMain from "@/components/contactsMain";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Prices />
      <Stages />
      <Benefit />
      <Advantages />
      <Calculator />
      <StillThinking />
      <Reviews />
      <Consultation />
      <ContactsMain />
    </>
  );
}
