import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import Container from '../Container/Container';
import closeIcon from '../../assets/icons/close-icon.svg';
import Button from '../Button/Button';
import FilterList from './FilterList';
import circleBg from '../../assets/design/circle-bg.svg';

const Wrapper = styled.div`
  position: fixed;
  padding: 5.6rem 0;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  background-image: url(${circleBg});
  background-repeat: no-repeat;
  background-position: calc(100% + 5.9rem) 4.5rem;
  background-size: 37.5rem;
  overflow-y: scroll;
  z-index: 9999;
`;

const StyledContainer = styled(Container)`
  display: grid;
  align-items: center;
  gap: 8rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: ${({ theme }) => theme.secondary};
`;

const CloseButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Icon = styled(SVG)`
  transition: fill 0.2s;

  ${CloseButton}:hover > & {
    fill: ${({ theme }) => theme.primary};
  }
`;

const AcceptButton = styled(Button)`
  margin: 0 auto;
`;

type MobileFiltersProps = {
  handleModal: () => void;
};

const MobileFilters: React.FC<MobileFiltersProps> = ({ handleModal }) => {
  return (
    <Wrapper>
      <StyledContainer>
        <Header>
          <Heading>Filter by</Heading>
          <CloseButton aria-label="Close Button" onClick={handleModal}>
            <Icon src={closeIcon} />
          </CloseButton>
        </Header>
        <FilterList />
        <AcceptButton accept={+true} onClick={handleModal}>
          Accept
        </AcceptButton>
      </StyledContainer>
    </Wrapper>
  );
};

export default MobileFilters;
