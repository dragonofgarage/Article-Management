import React from "react";
import LoginStore from "./login.Store";

class RootStore {
  //consists of module
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const StoresContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoresContext)