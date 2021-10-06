import React from "react";
import { IonGrid, IonRow } from "@ionic/react";
import Avatar from "./Avatar";
import UserModal from "./Usermodal";

const Container: React.FC = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <IonGrid className="ion-padding ion-margin-bottom">
      <IonRow className="ion-justify-content-end p-3">
        <Avatar
          src={
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
          }
          alt={"ok"}
          onClick={() => setShowModal(true)}
        />
      </IonRow>
      {props.children}
      <UserModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </IonGrid>
  );
};

export default Container;
