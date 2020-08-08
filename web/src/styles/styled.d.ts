import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primaryLighterColor: string;
      primaryLightColor: string;
      primaryColor: string;
      primaryDarkColor: string;
      primaryDarkerColor: string;
      secondaryColor: string;
      secondaryDarkColor: string;
      white: string;
      textPrimary: string;
      textTitle: string;
      textComplement: string;
      textBase: string;
      lineWhite: string;
      inputBackgroundColor: string;
      boxFooter: string;
      error: string;
    };

    font: {
      archivo: string;
      poppins: string;
    };
  }
}
