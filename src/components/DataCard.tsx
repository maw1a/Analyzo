import React from "react";
import {
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import "./DataCard.css";

interface DataCardProps {
  subtitle: string;
  title: string;
  src: string;
  alt: string;
}

const Card: React.FC<DataCardProps> = (props) => {
  return (
    <IonCard className="datacard">
      {props.src && <IonImg src={props.src} alt={props.alt} />}
      <IonCardHeader>
        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{props.children}</IonCardContent>
    </IonCard>
  );
};

export default Card;
