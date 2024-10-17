import { useEffect, useState } from 'react';
import { GithubProps } from '../../interfaces/GithubProps';
import { 
  ProjectsContainer, ProjectTitle, ProjectGrid, ProjectCard, ProjectInfo, 
  ProjectName, ProjectDescription, TagsContainer, Tag, FooterLinks, 
  LinksWrapper, CardURL, CardRepository
} from './style';

function Projects() {
  const [repos, setRepos] = useState<GithubProps[]>([]);
  
  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/AugustoDevelop/repos',{
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
      });
      const data: GithubProps[] = await response.json();
      const projectsWithLanguages = await Promise.all(data.map(async (repo) => {
        return {
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description,
          homepage: repo.homepage,
          git_tags_url: repo.git_tags_url,
          topics: repo.topics,
          html_url: repo.html_url,
          topic: repo.topics || []
        };
      }));
      setRepos(projectsWithLanguages);
    } catch (error) {
      console.error('Erro ao buscar os repositórios:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectsContainer>
      <ProjectTitle>Projetos</ProjectTitle>
      <ProjectGrid>
        {repos.map(repo => (
          <ProjectCard key={repo.id}>
            <ProjectInfo>
              <ProjectName>{repo.name}</ProjectName>
              <ProjectDescription>{repo.description || 'Sem descrição'}</ProjectDescription>
              <TagsContainer>
                {(repo.topics && repo.topics.length > 0) ? (
                  repo.topics.map((topic, index) => (
                    <Tag key={index} type={topic}>{topic}</Tag>
                  ))
                ) : (
                  <Tag type="info">Sem tags</Tag>
                )}
              </TagsContainer>
            </ProjectInfo>
            <FooterLinks>
              <LinksWrapper>
                <CardURL href={repo.homepage ?? '#'} target="_blank" rel="noopener noreferrer">Visualizar</CardURL>
                <CardRepository href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub</CardRepository>
              </LinksWrapper>
            </FooterLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
}

export default Projects;