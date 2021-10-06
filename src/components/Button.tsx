import { IonIcon, IonRippleEffect, IonRow } from "@ionic/react";
import "./Button.css";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  icon?: string;
  iconStyle?: string;
  iconSize?: string | number;
  ripple?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={[
        "ion-activatable btn",
        props.className || "",
        props.children ? "text-btn" : "icon-btn border-radius-50",
      ].join(" ")}
    >
      <IonRow>
        {props.icon && (
          <IonIcon
            icon={props.icon}
            style={{
              fontSize: props.iconSize || "1.5rem",
            }}
            className={[
              props.icon && props.children ? "ion-margin-end" : "",
              props.iconStyle || "",
            ].join(" ")}
          />
        )}
        {props.children}
      </IonRow>
      {props.ripple !== false && <IonRippleEffect></IonRippleEffect>}
    </button>
  );
};

export default Button;
