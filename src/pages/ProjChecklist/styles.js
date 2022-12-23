import styled from 'styled-components'
import px2vw from "../../utils/px2vw"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${px2vw(1920)};
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #000046;
    margin-top: ${px2vw(50)};
    margin-left: ${px2vw(50)};
    margin-bottom: ${px2vw(25)};
`;

export const FuncArea = styled.div`

`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: #000046;
    margin-left: ${px2vw(50)};
    line-height: 2.5rem;
`;

export const Item = styled.li`
    font-size: 1.3rem;
    color: #333;
    margin-left: ${px2vw(50)};
    line-height: 2.3rem;
`;

export const ImageArea = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ddd;
    flex-wrap: wrap;
`;

export const Photo = styled.img`
	width: 220px;
	height: 330px;
    object-fit: contain;
    border-radius: 20%;
    margin-left: ${px2vw(50)};
    margin-top: ${px2vw(50)};

    @media (max-width: 767px) {
        width: 100px;
	    height: 150px;
    }
`;

export const Emphasis = styled.em`
    font-weight: bold;
    color: #000046;
`;