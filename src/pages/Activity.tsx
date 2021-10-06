import React from "react";
import {
  IonContent,
  IonPage,
  IonRow,
  IonImg,
  IonFab,
  IonFabButton,
  IonIcon,
  useIonModal,
} from "@ionic/react";
import { arrowUp } from "ionicons/icons";
import { useSetRecoilState } from "recoil";
import Container from "../components/Container";
import Search from "../components/Search";
import DataCard from "../components/DataCard";
import { searchModalState } from "../State";
import AnalyzooWhite from "../assets/Analyzoo-white.svg";
import GetStated1 from "../assets/Get-started-1.jpeg";
import GetStated2 from "../assets/Get-started-2.jpeg";
import GetStated3 from "../assets/Get-started-3.jpeg";
import "./Activity.css";

const Activity: React.FC = () => {
  const ContentRef = React.useRef<HTMLIonContentElement>(null);
  const FabRef = React.useRef<HTMLIonFabButtonElement>(null);
  const setSearchModal = useSetRecoilState(searchModalState);

  return (
    <IonPage>
      <IonContent
        fullscreen
        ref={ContentRef}
        scrollEvents={true}
        onIonScroll={(e) => {
          if (FabRef.current) {
            if (e.detail.scrollTop > 0) {
              FabRef.current.style.transform = "translateY(0)";
            } else {
              FabRef.current.style.transform = "translateY(125%)";
            }
          }
        }}
      >
        <Container>
          <IonRow className="ion-justify-content-center ion-margin-bottom">
            <IonImg src={AnalyzooWhite} alt="Analyzoo" style={{ height: 42 }} />
          </IonRow>
          <Search
            onFocus={(e: React.FocusEvent<HTMLIonSearchbarElement>) => {
              setSearchModal(true);
              e.target.blur();
            }}
          />
          <DataCard
            title="Get to know Analyzoo"
            subtitle="Get Started"
            src={GetStated1}
            alt="Get started 1"
          >
            Get to know what you can do with Analyzoo. Find out more about your
            daily products. Analyze your surroundings and see what they are made
            of.
          </DataCard>
          <DataCard
            title="Get to know Analyzoo"
            subtitle="Get Started"
            src={GetStated3}
            alt="Get started 3"
          >
            Get to know what you can do with Analyzoo. Find out more about your
            daily products. Analyze your surroundings and see what they are made
            of.
          </DataCard>
          <DataCard
            title="Get to know Analyzoo"
            subtitle="Get Started"
            src={GetStated2}
            alt="Get started 2"
          >
            Get to know what you can do with Analyzoo. Find out more about your
            daily products. Analyze your surroundings and see what they are made
            of.
          </DataCard>
        </Container>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton
            className="fab"
            style={{ transform: "translateY(125%)" }}
            ref={FabRef}
            onClick={() => {
              ContentRef.current?.scrollToTop(500);
            }}
          >
            <IonIcon icon={arrowUp} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Activity;
