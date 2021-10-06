import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonModal,
  useIonRouter,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { search, pin, analytics } from "ionicons/icons";
import { useRecoilState } from "recoil";
import { searchModalState } from "./State";
import SearchModal from "./components/SearchModal";
import Activity from "./pages/Activity";
import Search from "./pages/Search";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const Tabs: React.FC = () => {
  const [present, dismiss] = useIonModal(SearchModal, {});
  const [searchModal, setSearchModal] = useRecoilState(searchModalState);
  const router = useIonRouter();
  const path = router.routeInfo.pathname;

  React.useEffect(() => {
    if (searchModal) {
      present({
        cssClass: "searchmodal",
        onDidDismiss: () => {
          setSearchModal(false);
          if (path === "/search") {
            router.push(router.routeInfo.lastPathname || "/");
          }
        },
      });
    } else {
      dismiss();
    }
  }, [searchModal]);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/activity">
          <Activity />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/pinned">
          <Tab3 />
        </Route>
        <Route path="/" exact>
          <Redirect to="/activity" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="activity" href="/activity">
          <IonIcon icon={analytics} />
          <IonLabel>Activity</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="pinned" href="/pinned">
          <IonIcon icon={pin} />
          <IonLabel>Pinned</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Tabs />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
