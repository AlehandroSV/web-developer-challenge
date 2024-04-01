import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      background: string;
      inputBackgroud: string;

      text: {
        primary: string;
        secondary: string;
        muted: string;
      };
    };
  }
}
