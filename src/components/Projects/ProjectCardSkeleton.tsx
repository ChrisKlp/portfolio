import styled from 'styled-components';

const Skeleton = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #333647 0%, #5f6377 50%, #333647 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const Wrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 24rem auto;
`;

const Image = styled.div`
  width: 100%;
  height: 24rem;
  
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.6rem 2.2rem;
`;

const Title = styled.div`
  height: 2.7rem;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 3rem;
  overflow: hidden;
`;

const TagWrapper = styled.ul`
  flex-grow: 1;
  margin: 1.5rem 0 3.5rem;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const Tag = styled.li`
  width: 8rem;
  height: 2.6rem;
  border-radius: 3rem;
  overflow: hidden;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Button = styled.div`
  width: 11rem;
  height: 3.7rem;
  border-radius: 3rem;
  overflow: hidden;
`;

const ProjectCard: React.FC = () => {
  return (
    <Wrapper>
      <Image>
        <Skeleton />
      </Image>
      <Content>
        <Title>
          <Skeleton />
        </Title>
        <Title>
          <Skeleton />
        </Title>
        <TagWrapper>
          <Tag>
            <Skeleton />
          </Tag>
          <Tag>
            <Skeleton />
          </Tag>
          <Tag>
            <Skeleton />
          </Tag>
          <Tag>
            <Skeleton />
          </Tag>
          <Tag>
            <Skeleton />
          </Tag>
        </TagWrapper>
        <LinkWrapper>
          <Button>
            <Skeleton />
          </Button>
          <Button>
            <Skeleton />
          </Button>
        </LinkWrapper>
      </Content>
    </Wrapper>
  );
};

export default ProjectCard;
