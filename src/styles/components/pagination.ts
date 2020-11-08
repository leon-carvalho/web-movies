import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  padding: 24px 0;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    width: 100%;
    list-style: none;

    li {
      & + li {
        margin-left: 32px;
      }
    }
  }
`

export const PaginationItem = styled.button.attrs({
  type: 'button'
})`
  width: 48px;
  height: 48px;

  border: 0;
  font-size: 32px;
  border-radius: 50%;
  color: var(--primary);
  background: transparent;
  transition: all 0.4s;

  &:hover {
    color: var(--secondary);
    background: var(--primary);
    border: 4px solid var(--secondary);
    box-shadow: 0 0 0 4px var(--primary);
    transform: scale(1.2);
  }
`
