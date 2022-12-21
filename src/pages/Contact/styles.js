import styled from 'styled-components'
import imageBackground from '../../assets/back-portfolio.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url(${imageBackground});
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #000046;
    padding: 4rem;
`;

export const IconArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IconsLink = styled.a`
    margin-left: 5rem;
    margin-top: 3rem;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: #333;
    margin-left: 3rem;
`;

export const Emphasis = styled.em`
    font-weight: bold;
    color: #000046;
`;


