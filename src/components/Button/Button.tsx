import styled, { css } from 'styled-components';
import outIcon from '../../assets/icons/out-icon.svg';
import filterIcon from '../../assets/icons/filter-icon.svg';
import acceptIcon from '../../assets/icons/accept-icon.svg';
import SVG from 'react-inlinesvg';

const Icon = styled(SVG)`
  transition: fill 0.2s;
`;

const Link = styled.a<{ filter?: number; accept?: number }>`
  display: block;
  padding: 0.6rem 1.6rem;
  min-width: 11rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.secondary};
  background-color: transparent;
  border-radius: 3em;
  border: 2px solid ${({ theme }) => theme.secondary};
  transition: color 0.2s, border 0.2s, background-color 0.2s;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.primary};

    ${Icon} {
      fill: ${({ theme }) => theme.background};
    }
  }

  ${({ accept, filter }) =>
    (filter || accept) &&
    css`
      padding: 1.5rem;
      width: 21.5rem;
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.background};
      background-color: ${({ theme }) => theme.primary};
      border: none;

      &:hover {
        border: none;
        color: ${({ theme }) => theme.background};
        background-color: #ffd68f;

        ${Icon} {
          fill: ${({ theme }) => theme.background};
        }
      }
    `};
`;

type ButtonProps = {
  href?: string | undefined;
  children: React.ReactNode;
  filter?: number;
  accept?: number;
  icon?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  filter,
  accept,
  ...props
}) => {
  return (
    <>
      {filter || accept ? (
        <Link
          as="button"
          filter={filter || accept}
          aria-label={filter ? 'Filter Button' : 'Accept Button'}
          {...props}
        >
          <span>
            {children}
            <Icon
              src={filter ? filterIcon : acceptIcon}
              description={filter ? 'Filter Icon' : 'Accept Icon'}
            />
          </span>
        </Link>
      ) : (
        <Link href={href} target="_blank">
          <span>
            {children}
            <Icon src={outIcon} description="Out Icon" />
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
