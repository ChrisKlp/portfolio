import styled from 'styled-components';
import media from '../../global/mediaQueries';
import circleBg from '../../assets/design/circle-bg.svg';
import illustration from '../../assets/design/main-illustration.svg';

const CircleBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-position: calc(100% + 5.9rem) 4.5rem;
  background-size: 37.5rem;
  z-index: -1;

  @media (${media.md}) {
    background-position: calc(100% + 13.5rem) 6.5rem;
    background-size: 68rem;
  }

  @media (${media.lg}) {
    background-position: center 10rem;
    background-size: 96rem;
  }
`;

const Illustration = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  background-position: 5rem 10rem;
  background-size: 65rem;
  z-index: -1;
  display: none;

  @media (${media.lg}) {
    display: block;
    background-size: 60rem;
  }

  @media (${media.xl}) {
    background-position: 5rem 10rem;
    background-size: 80rem;
  }
`;

const Wrapper = styled.section`
  padding: 5rem 0;

  @media (${media.md}) {
    padding: 10rem 0;
  }

  @media (${media.xl}) {
    padding: 15rem 0 23rem;
  }
`;

const Heading = styled.h1`
  margin-bottom: 1.4rem;
  font-weight: 600;
  font-size: 4.2rem;
  line-height: 115%;
  color: hsl(0, 0%, 100%);

  @media (${media.md}) {
    margin-bottom: 3.8rem;
    font-size: 7rem;
    line-height: 115%;
  }

  @media (${media.xl}) {
    margin-bottom: 2.4rem;
    font-size: 9.6rem;
    line-height: 115%;
  }
`;

const Subheading = styled.p`
  font-size: 1.8rem;
  line-height: 125%;
  color: ${({ theme }) => theme.secondary};

  @media (${media.md}) {
    font-size: 2.4rem;
    line-height: 125%;
    width: 53rem;
  }
`;

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <Wrapper>
      <CircleBg />
      <Illustration />
      <Heading>
        Hello, I’m
        <br /> Chris Klepadlo.
      </Heading>
      <Subheading>
        Graphic Designer and Front-end Developer, based in Bialystok.
      </Subheading>
    </Wrapper>
  );
};

export default Intro;
