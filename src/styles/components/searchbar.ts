import { InputHTMLAttributes } from 'react'
import styled, { keyframes, css } from 'styled-components'

interface ISearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  isErrored?: boolean
}

const shakeAnimation = keyframes`
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const SearchBar = styled.input<ISearchBarProps>`
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  margin: 28px 0;
  font-size: 18px;
  padding: 4px 24px;
  border-radius: 25px;
  color: var(--primary);
  background-color: var(--bright);

  ::placeholder {
    color: var(--primary);
  }

  &:focus {
    border: 2px solid var(--primary);
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      background-color: #ffebee;
      border: 2px solid var(--danger) !important;
      animation: ${shakeAnimation} 0.6s both linear;
    `}

  @media (max-width: 432px) {
    font-size: 14px;
  }
`
