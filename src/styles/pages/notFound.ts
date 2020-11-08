import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--bright);
  background: var(--primary);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    color: var(--secondary);
    font-size: 10rem;

    display: flex;
    align-items: center;
  }

  nav {
    padding: 16px 28px;
    border-radius: 25px;
    background: var(--bright);
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.08);
      background-color: var(--secondary);
    }

    span {
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--dark);
    }
  }
`

const scaryAnimation = keyframes`
    0% {
    transform: translateX(0px);
  }

  25% {
    transform: translateX(16px);
  }

  50% {
    transform: translateX(-16px);
  }

  75% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(-16px);
  }
`

export const Scary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LeftEye = styled.div`
  width: 4rem;
  height: 6rem;
  margin-left: 4px;
  border-radius: 50%;
  background-color: var(--bright);
  border: 2px solid var(--secondary);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightEye = styled.div`
  width: 4rem;
  height: 6rem;
  margin-right: 4px;
  border-radius: 50%;
  margin-left: 0.7rem;
  background-color: var(--bright);
  border: 2px solid var(--secondary);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const EyeBall = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--dark);
  animation: ${scaryAnimation} 3.8s infinite alternate-reverse;
`
