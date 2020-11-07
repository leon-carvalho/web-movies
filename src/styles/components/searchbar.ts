import styled from 'styled-components'

export const SearchBar = styled.input`
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

  @media (max-width: 432px) {
    font-size: 14px;
  }
`
