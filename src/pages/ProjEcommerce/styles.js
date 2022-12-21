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
    padding-left: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

export const FuncArea = styled.div`
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: #000046;
    margin-left: 7rem;
    line-height: 3.0rem;
`;

export const Item = styled.li`
    font-size: 1.3rem;
    color: #333;
    margin-left: 7rem;
    line-height: 2.5rem;
`;

export const ImageArea = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ddd;
`;

export const Photo = styled.img`
	width: 220px;
	height: 330px;
    object-fit: contain;
    border-radius: 20%;
    margin-left: 5rem;
`;

export const Emphasis = styled.em`
    font-weight: bold;
    color: #000046;
`;