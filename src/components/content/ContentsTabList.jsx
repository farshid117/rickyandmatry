import { useContext } from "react";

import { Home, About, Ricky, Gallery, Contact } from "../../pages";
import { TabPanel } from "../";
import PortfolioContext from "../../context/RickyContext";

import "./ContentsTabList.css";

const ContentsTabList = () => {
  const { value } = useContext(PortfolioContext);
  return (
    <>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Ricky />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Gallery />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Contact />
      </TabPanel>
     
    </>
  );
};

export default ContentsTabList;
