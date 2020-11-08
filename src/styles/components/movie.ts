import styled, { css } from 'styled-components'

interface IMovieProps {
  isDetails?: boolean
}

export const Container = styled.section<IMovieProps>`
  display: grid;
  margin-bottom: 20px;
  grid-template-rows: 80px auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 'image header header header header' 'image content content content content';
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'header header header header header'
      'image image image image image'
      'content content content content content';
  }

  ${({ isDetails }) =>
    isDetails &&
    css`
      margin-top: 24px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 'header header image' 'content content image';

      @media (max-width: 768px) {
        grid-template-areas:
          'header header header'
          'image image image'
          'content content content';
      }
    `}

  header {
    grid-area: header;
    padding: 0 24px;
  }

  article {
    grid-area: content;
    padding: 0 24px;
  }

  aside {
    grid-area: image;
  }
`

export const Header = styled.header<IMovieProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  position: relative;
  background-color: ${({ isDetails }) =>
    isDetails ? 'var(--darken)' : 'var(--primary)'};

  h1 {
    color: var(--primary);
    font-size: min(max(24px, 4vw), 36px);

    ${({ isDetails }) =>
      !isDetails &&
      css`
        margin-top: auto;
        margin-left: 90px;
        color: var(--secondary);
      `}
  }

  span {
    color: var(--text);

    ${({ isDetails }) =>
      !isDetails &&
      css`
        position: absolute;
        bottom: -24px;
        margin-left: 90px;

        @media (max-width: 768px) {
          mix-blend-mode: difference;
        }
      `}
  }
`

export const Content = styled.article`
  padding: 400px;
  min-height: 200px;
  background-color: var(--bright);

  section {
    margin: 36px 0;

    h2 {
      margin: 22px 0;
      color: var(--primary);
      border-bottom: 2px solid var(--secondary);
    }

    p,
    span {
      font-weight: 400;
      font-size: min(max(16px, 4vw), 18px);
    }

    /* informacoes */
    ul {
      list-style: none;

      li {
        margin-left: 12px;
        margin-bottom: 24px;

        @media (min-width: 768px) {
          &:nth-child(1) {
            margin-left: 0;
          }
        }

        h3 {
          font-size: 22px;
          color: var(--primary);
        }

        span {
          font-weight: 400;
        }
      }
    }
  }
`

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  span {
    text-transform: capitalize;
  }
`

export const GenresList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`

export const Genre = styled.li`
  font-weight: 400;
  padding: 4px 12px;
  border-radius: 24px;
  color: var(--primary);
  background: var(--background);
  border: 2px solid var(--primary);
`

export const Poster = styled.aside`
  width: 100%;
  height: 100%;
  background-color: var(--bright);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Rating = styled.div<IMovieProps>`
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 400;
  border-radius: 50%;
  color: var(--secondary);
  background-color: var(--primary);
  border: 4px solid var(--secondary);
  box-shadow: 0 0 0 4px var(--primary);

  display: grid;
  place-content: center;

  ${({ isDetails }) =>
    isDetails
      ? css`
          position: absolute;
          bottom: -510px;
          right: 20px;

          width: 100px;
          height: 100px;
          font-size: 28px;
          border: 8px solid var(--secondary);

          @media (max-width: 768px) {
            right: 20px;
            top: 20px;

            margin-top: 156%;

            width: 72px;
            height: 72px;
            font-size: 20px;
          }
        `
      : css`
          position: absolute;
          top: 32px;
        `}
`
