import React from "react";
import { IonSearchbar } from "@ionic/react";
import { backspace } from "ionicons/icons";
import AnalyzooSmWhite from "../assets/Analyzoo-sm-white.svg";
import "./Search.css";

const Search: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <IonSearchbar
        animated={true}
        showClearButton="focus"
        searchIcon={AnalyzooSmWhite}
        className="searchbar"
        clearIcon={backspace}
        {...props}
      />
    </React.Fragment>
  );
};

export default Search;
