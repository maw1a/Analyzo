import React from "react";
import { IonPage, useIonRouter } from "@ionic/react";
import { useSetRecoilState } from "recoil";
import { searchModalState } from "../State";
import "./Search.css";

const Search: React.FC = () => {
  const router = useIonRouter();
  const path = router.routeInfo.pathname;
  const setSearchModal = useSetRecoilState(searchModalState);

  React.useEffect(() => {
    path === "/search" && setSearchModal(true);
  }, [path]);

  return <IonPage></IonPage>;
};

export default Search;
