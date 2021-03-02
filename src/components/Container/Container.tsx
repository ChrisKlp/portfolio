import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
