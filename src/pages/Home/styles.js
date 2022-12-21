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

export const Text = styled.p`
    font-size: 1.5rem;
    color: #333;
    margin-left: 7rem;
    line-height: 3.5rem;
`;

export const Emphasis = styled.em`
    font-weight: bold;
    color: #000046;
`;

export const Photo = styled.img`
	width: 100%;
	height: 450px;
    object-fit: contain; 
    border-color: #000046;
    border-width: 0.1rem;
    border-style: solid;
    border-radius: 20%;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
`;

