import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import media from '../../global/mediaQueries';
import { GET_REPOSITORIES } from '../../graphql/queries';
import { getRepositories } from '../../graphql/__generated__/getRepositories';
import Loader from './ProjectCardSkeleton';
import ProjectCard from './ProjectCard';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 4rem;

  @media (${media.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  }
`;

const Info = styled.p`
  display: grid;
  place-items: center;
  color: hsl(0, 0%, 100%);
  font-size: 1.8rem;
`;

const Projects: React.FC = () => {
  const { data, loading, error } = useQuery<getRepositories>(GET_REPOSITORIES, {
    pollInterval: 500,
  });

  const { filtredData } = useContext(Context);

  let loadingProjects: React.ReactNode[] = [];

  for (let i = 0; i < 10; i++) {
    loadingProjects.push(<Loader key={i} />);
  }

  if (loading) {
    return <Wrapper>{loadingProjects}</Wrapper>;
  }

  if (error) {
    return <Info>Ooops. Something went wrong.</Info>;
  }

  if (!filtredData!(data).length) {
    return <Info>There's no projects to show</Info>;
  }

  return (
    <Wrapper key={filtredData!(data)}>
      {filtredData!(data)?.map((repo, index) => (
        <ProjectCard key={repo?.id} data={repo} index={index} />
      ))}
    </Wrapper>
  );
};

export default Projects;
