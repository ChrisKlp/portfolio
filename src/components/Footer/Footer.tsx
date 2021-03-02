import Container from '../Container/Container';
import SocialIcons from '../SocialIcons/SocialIcons';
import styled from 'styled-components';
import media from '../../global/mediaQueries';

const StyledContainer = styled(Container)`
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  @media (${media.md}) {
    padding: 9rem 0;
  }

  @media (${media.xl}) {
    padding: 15rem 0 10rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 1.6rem;
  line-height: 125%;
  color: ${({ theme }) => theme.secondary};

  @media (${media.xl}) {
    order: -1;
  }
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <StyledContainer>
        <SocialIcons />
        <Copyright>Copyright 2021 © CrisKlp</Copyright>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
