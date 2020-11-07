import styled, { css } from 'styled-components'
import { IMovieCardProps } from '@/components/MovieCard'

export const Container = styled.section<IMovieCardProps>`
  display: grid;
  margin-bottom: 20px;
  grid-template-rows: 80px auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 'image header header header header' 'image content content content content';

  @media (max-width: 768px) {
    grid-template-areas:
      'header header header header header'
      'image image image image image'
      'content content content content content';
  }

  ${({ isDetails }) =>
    isDetails &&
    css`
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

export const Header = styled.header<IMovieCardProps>`
  height: 100%;
  position: relative;
  background-color: ${({ isDetails }) =>
    isDetails ? 'var(--darken)' : 'var(--primary)'};

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: min(max(24px, 4vw), 36px);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ isDetails }) =>
      isDetails ? 'var(--primary)' : 'var(--secondary)'};
    margin-left: ${({ isDetails }) => (isDetails ? 'none' : '72px')};
  }

  span {
    color: var(--text);
    font-size: 20px;
    ${({ isDetails }) =>
      !isDetails &&
      css`
        position: absolute;
        bottom: -24px;
        margin-left: 72px;
      `}
  }
`

export const Content = styled.article`
  background-color: var(--bright);
  padding: 400px;
  min-height: 200px;

  section {
    margin: 36px 0;

    h2 {
      margin: 16px 0;
      color: var(--primary);
      border-bottom: 2px solid var(--secondary);
    }

    p {
      font-weight: 400;
    }

    /* informacoes */
    ul {
      list-style: none;

      display: flex;
      flex-wrap: wrap;
      align-items: center;

      li {
        margin-left: 4px;
        margin-bottom: 24px;

        &:nth-child(1) {
          margin-left: none;
        }

        h3 {
          color: var(--primary);
        }

        span {
          font-weight: 400;
        }
      }
    }
  }
`

export const Genre = styled.span`
  border-radius: 24px;
  padding: 4px 12px;
  color: var(--primary);
  background: var(--background);
  border: 2px solid var(--primary);
`

export const Poster = styled.aside`
  background-color: blue;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Rating = styled.div<IMovieCardProps>`
  width: 64px;
  height: 64px;
  font-size: 18px;
  border-radius: 50%;
  color: var(--secondary);
  background-color: var(--primary);
  border: 4px solid var(--secondary);

  display: grid;
  place-content: center;

  position: absolute;
  top: 50px;

  ${({ isDetails }) =>
    isDetails &&
    css`
      position: absolute;
      margin-top: 432px;
      right: 20px;
      width: 120px;
      height: 120px;
    `}
`
