import React from "react";
import {
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonItem,
  IonRippleEffect,
} from "@ionic/react";
import Search from "./Search";

const SearchModal: React.FC = (props) => {
  return (
    <IonGrid className="m-3">
      <IonRow>
        <Search />
      </IonRow>
    </IonGrid>
  );
};

export default SearchModal;
