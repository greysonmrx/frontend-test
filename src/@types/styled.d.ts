import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      blue: string;
      yellow: string;
      pink: string;
      green: string;
      red: string;
      main: {
        color: string;
        tints: {
          [100]: string;
          [200]: string;
          [300]: string;
          [400]: string;
          [500]: string;
          [600]: string;
          [700]: string;
          [800]: string;
          [900]: string;
        };
        shaders: {
          [100]: string;
          [200]: string;
          [300]: string;
          [400]: string;
          [500]: string;
          [600]: string;
          [700]: string;
          [800]: string;
          [900]: string;
        };
      };
      grey: {
        color: string;
        tints: {
          [100]: string;
          [200]: string;
          [300]: string;
          [400]: string;
          [500]: string;
          [600]: string;
          [700]: string;
          [800]: string;
          [900]: string;
        };
        shaders: {
          [100]: string;
          [200]: string;
          [300]: string;
          [400]: string;
          [500]: string;
          [600]: string;
          [700]: string;
          [800]: string;
          [900]: string;
        };
      };
    };
  }
}
