import styled from 'styled-components';
import logo from '../../assets/design/logo-crisklp.svg';
import Container from '../Container/Container';
import media from '../../global/mediaQueries';
import SocialIcons from '../SocialIcons/SocialIcons';

const Wrapper = styled.header`
  padding-top: 4.5rem;

  @media (${media.md}) {
    padding-top: 6.5rem;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  width: 6.5rem;
  height: 6.5rem;

  img {
    width: 100%;
  }

  @media (${media.md}) {
    width: 8.7rem;
    height: 8.7rem;
  }
`;
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Logo href="/">
          <img src={logo} alt="Logo CrisKLP" />
        </Logo>
        <SocialIcons header={true} />
      </StyledContainer>
    </Wrapper>
  );
};

export default Header;
