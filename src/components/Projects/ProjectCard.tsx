import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import defaultImage from '../../assets/projects/default.jpg';
import Context from '../../context/Context';
import { getRepositories_user_repositories_nodes } from '../../graphql/__generated__/getRepositories';
import Button from '../Button/Button';
import CardTag from './CardTag';

const Wrapper = styled.div<{ index: number }>`
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 24rem auto;
  animation: ${({ index }) => `showIn 0.4s ${index * 100}ms both ease-in-out`};

  @keyframes showIn {
    0% {
      transform: translateY(2rem);
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const ImageWrapper = styled.a`
  width: 100%;
  height: 24rem;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${ImageWrapper}:hover > & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.6rem 2.2rem;
  background-color: ${({ theme }) => theme.cardBg};
`;

const Title = styled.h4`
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: hsl(0, 0%, 100%);
`;

const TagWrapper = styled.ul`
  flex-grow: 1;
  margin-bottom: 3.5rem;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

type ProjectCardProps = {
  data: getRepositories_user_repositories_nodes | null;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ data, index }) => {
  const { addFilter } = useContext(Context);
  const [src, setSrc] = useState('');

  useEffect(() => {
    try {
      const link = require(`../../assets/projects/${data?.name}.jpg`).default;
      setSrc(link);
    } catch (err) {
      setSrc(defaultImage);
    }
  }, [data]);

  return (
    <Wrapper key={index} index={index + 1}>
      <ImageWrapper href={data?.homepageUrl} target="_blank">
        <Img src={src} alt={`${data?.name}`} />
      </ImageWrapper>
      <Content>
        <Title>{data?.description}</Title>
        <TagWrapper>
          {data?.repositoryTopics.nodes?.map(topic => (
            <li key={topic?.topic.name}>
              <CardTag onClick={() => addFilter!(topic?.topic.name!)}>
                {topic?.topic.name}
              </CardTag>
            </li>
          ))}
        </TagWrapper>
        <LinkWrapper>
          <Button href={data?.homepageUrl}>Live</Button>
          <Button href={data?.url}>Github</Button>
        </LinkWrapper>
      </Content>
    </Wrapper>
  );
};

export default ProjectCard;
