import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      backgroundHeader: string;
      switchColor: string;
    };
    text: {
      header: string;
      title: string;
      subTitle: string;
    };

    backgroundURLPortfolio : string;
    borderURLPortfolio : string;
    backgroundRepositoryPortfolio : string;
    borderRepositoryPortfolio: string;
    fontColorLinksPortfolio: string;
    imgRepositoryPortfolio: SVGAElement;
    imgURLPortfolio: SVGAElement;
  }
}