import React from "react";
import {
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRippleEffect,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import {
  close,
  chevronUp,
  chevronDown,
  timeOutline,
  bookOutline,
  attachOutline,
  settingsOutline,
  helpCircleOutline,
} from "ionicons/icons";
import Button from "./Button";
import Avatar from "./Avatar";
import AnalyzooWhite from "../assets/Analyzoo-white.svg";
import "./Usermodal.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ItemProps {
  icon: string;
  label: string;
  href: string;
}

const UserProfile: React.FC = (props) => {
  const [userOpen, setUserOpen] = React.useState(false);
  return (
    <IonRow
      className="ion-justify-content-between ion-activatable ripple ion-padding-horizontal p-4"
      onClick={() => setUserOpen(!userOpen)}
    >
      <div>
        <IonRow className="ion-justify-content-start">
          <Avatar
            src={
              "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
            }
            alt={"user"}
          />
          <div className="ion-margin-start">
            <IonText className="text">Ahmed Mawia</IonText>
            <br />
            <IonText className="subtext">amawia15@gmail.com</IonText>
          </div>
        </IonRow>
      </div>
      <IonRow className="ion-justify-content-center ion-align-items-center">
        <Button
          icon={userOpen ? chevronDown : chevronUp}
          iconSize="16px"
          className="border-1 p-1"
          onClick={() => setUserOpen(!userOpen)}
          ripple={false}
        ></Button>
      </IonRow>
      <IonRippleEffect></IonRippleEffect>
    </IonRow>
  );
};

const UserModal: React.FC<ModalProps> = (props) => {
  const router = useIonRouter();

  const ListItem: React.FC<ItemProps> = ({ icon, label, href }) => (
    <IonItem
      className="ion-activatable ripple"
      button
      onClick={() => {
        router.push(href);
        props.onClose();
      }}
    >
      <IonIcon icon={icon} className="m-4 ion-margin-end" />
      <IonLabel>{label}</IonLabel>
      <IonRippleEffect></IonRippleEffect>
    </IonItem>
  );

  return (
    <IonModal
      isOpen={props.isOpen}
      backdropDismiss={true}
      showBackdrop={true}
      cssClass="usermodal"
      onDidDismiss={props.onClose}
    >
      <IonGrid className="ion-no-padding seperator">
        <IonRow className="ion-justify-content-between logo p-3">
          <Button onClick={props.onClose} icon={close} iconSize="24px"></Button>
          <IonImg src={AnalyzooWhite} alt="Analyzoo" />
          <div />
        </IonRow>
        <UserProfile />
        <IonRow className="ion-justify-content-center m-3">
          <Button className="border-1 border-radius ion-margin-bottom">
            <IonText className="p-1">Manage your Account</IonText>
          </Button>
        </IonRow>
      </IonGrid>
      <IonList className="bg-transparent seperator nav-list" lines="none">
        <ListItem icon={timeOutline} label="Search history" href="/history" />
        <ListItem icon={bookOutline} label="Recents" href="/recents" />
        <ListItem icon={attachOutline} label="Pinned" href="/pinned" />
      </IonList>
      <IonList className="bg-transparent seperator nav-list" lines="none">
        <ListItem icon={settingsOutline} label="Settings" href="/settings" />
        <ListItem
          icon={helpCircleOutline}
          label="Help & feedback"
          href="/help"
        />
      </IonList>
      <IonGrid className="ion-no-padding">
        <IonRow className="ion-justify-content-center white m-2">
          <Button className="white subtext p-3 border-radius-8 bg-transparent">
            Privacy Policy
          </Button>
          <span className="p-3">•</span>
          <Button className="white subtext p-3 border-radius-8 bg-transparent">
            Terms of Service
          </Button>
        </IonRow>
      </IonGrid>
    </IonModal>
  );
};

export default UserModal;
