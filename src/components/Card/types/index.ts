import { CSSProperties } from "react";

export type CardBackgroudType = {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
};

export type CardImageType = {
  url: string;
};

export type CardMessageType = {
  text: string;
};

export type CardAuthorType = {
  name: string;
};
