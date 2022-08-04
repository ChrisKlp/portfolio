import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';
import facebookIcon from '../../assets/icons/facebook-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import linkedinIcon from '../../assets/icons/linkedin-icon.svg';
import mailIcon from '../../assets/icons/mail-icon.svg';
import media from '../../global/mediaQueries';

const Wrapper = styled.ul<{ header?: boolean }>`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${({ header }) =>
    header &&
    css`
      li {
        display: none;

        &:nth-child(3) {
          display: block;
        }
      }

      @media (${media.sm}) {
        li {
          display: block;
        }
      }
    `};
`;

const Icon = styled.a`
  display: block;
  width: 3.2rem;
`;

const IconSVG = styled(SVG)`
  transition: fill 0.2s;

  ${Icon}:hover > & {
    fill: ${({ theme }) => theme.primary};
  }
`;

type SocialIconsProps = {
  header?: boolean;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ header }) => {
  return (
    <Wrapper header={header}>
      <li>
        <Icon href="https://www.facebook.com/krzyklepadlo" target="_blank">
          <IconSVG src={facebookIcon} description="Facebook profile" />
        </Icon>
      </li>
      <li>
        <Icon
          href="https://www.linkedin.com/in/krzysztof-klepad%C5%82o/"
          target="_blank"
        >
          <IconSVG src={linkedinIcon} description="Linkedin profile" />
        </Icon>
      </li>
      <li>
        <Icon href="mailto:klepadlo.krzysztof@gmail.com">
          <IconSVG src={mailIcon} description="Chris Klepadlo e-mail" />
        </Icon>
      </li>
      <li>
        <Icon href="https://github.com/ChrisKLP" target="_blank">
          <IconSVG src={githubIcon} description="Github profile" />
        </Icon>
      </li>
    </Wrapper>
  );
};

export default SocialIcons;
