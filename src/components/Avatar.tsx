import { IonAvatar, IonImg, IonRippleEffect } from "@ionic/react";
import "./Avatar.css";

interface AvatarProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <IonAvatar
      className={[
        "avatar",
        props.onClick && "ion-activatable",
        props.className ?? "",
      ].join(" ")}
      onClick={props.onClick}
    >
      <img src={props.src} alt={props.alt} />
      {props.onClick && <IonRippleEffect></IonRippleEffect>}
    </IonAvatar>
  );
};

export default Avatar;
