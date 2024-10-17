import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ProjectTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 5%;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: green;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 15px;
  margin-bottom: 20px;
  height: 20rem;
  `;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProjectInfo = styled.div`
  flex-grow: 1;
`;

export const ProjectName = styled.h2`
  font-size: 1rem;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
`;

export const ProjectLanguages = styled.h2`
  font-size: 1rem;
`;

export const LanguagesContainer = styled.div`
  margin-top: 10px;
`;

export const LanguageTag = styled.span`
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
`;

export const LanguagesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const LanguageItem = styled.li`
  font-size: 0.9rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto; 
  a {
    margin-right: 20px;
  }
`;

export const Tag = styled.span<{ type: string }>`
  font-size: 12px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'typescript':
        return 'blue';
      case 'html5':
        return 'orange';
      case 'styled-components':
        return '#f5d68c';
      case 'storybook':
        return '#D5ACB3';
      case 'react':
        return '#97DCF3';
      case 'nextjs':
          return 'black';
      default:
        return '#e0e0e0';
    }
  }};
  color:  ${(props) => {
    switch (props.type) {
      case 'typescript':
        return 'white';
      case 'html5':
        return 'black';
      case 'styled-components':
        return 'black';
      case 'storybook':
        return 'black';
      case 'react':
        return 'black';
      case 'nextjs':
          return 'white';
      default:
        return 'black';
    }
  }};
  border-radius: 7px;
  padding: 5px;
  margin-right: 5px;
  margin-top: 8px;
`;

export const LinksWrapper = styled.div` 
`;

export const CardURL = styled.a`
  position: relative;
  color: ${props => props.theme.fontColorLinksPortfolio};
  font-size: 14px;
  font-weight: 500;
  margin-right: 1em; 
  padding: .5em .8em;
  background-color: ${props => props.theme.backgroundURLPortfolio};
  border-radius: 13px;
  background-clip: padding-box;
  border: solid 1px transparent;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    transition: .5s;
  }

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${props => props.theme.imgURLPortfolio});
    background-size: cover;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin: -.05em .4em -.05em 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; 
    border-radius: inherit; 
    background: ${props => props.theme.borderURLPortfolio};
  }

`;

export const CardRepository = styled.a`
  position: relative;
  color: ${props => props.theme.fontColorLinksPortfolio};
  font-size: 14px;
  font-weight: 500;
  margin-right: .5em; 
  padding: .5em .8em;
  background-color: ${props => props.theme.backgroundRepositoryPortfolio};
  border-radius: 13px;
  background-clip: padding-box;
  border: solid 1px transparent;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    transition: .5s;
  }

  &::before {
    display: inline-block;
    content: "";
    background-image: url(${props => props.theme.imgRepositoryPortfolio});
    background-size: cover;
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    margin: -.05em .4em -.05em 0;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -1px; 
    border-radius: inherit; 
    background: ${props => props.theme.borderRepositoryPortfolio};
  }
`;

export const Card = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: pink;
  min-width: 340px;
  max-width: 340px;
  margin: 2rem auto;
  height: 460px;
  box-shadow: 5px 3px 20px gray;
  z-index: -2;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none; 
       -moz-user-select: none; 
        -ms-user-select: none;
            user-select: none;

  &:hover {
    width: 350px;
    max-width: 350px;
    height: 500px;
    margin: 0 auto;
  }
`;