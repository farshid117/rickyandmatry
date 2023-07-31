import { createContext } from "react";

const RickyContext = createContext({
  value: 0,
  setValue: () => {},
  mobileOpen: false,
  setMobileOpen: () => {},

  mode: "",
  setMode: "",
  handleChangeMode: () => {},

  handleChange: () => {},
  handleDrawerToggle: () => {},
  tabProps: () => {},

  mounting: false,
  setMounting:()=>{},
  infos: [],
  loading: false,
  mountingCarousel:false,
  setMountingCarousel:()=>{}
});
export default RickyContext;
