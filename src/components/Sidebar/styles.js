import styled from 'styled-components'
import px2vw from "../../utils/px2vw"

export const Container = styled.aside`
    width: ${px2vw(700)};
    background-color: #9AB4FB;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const AvatarArea = styled.div`
    margin-top: ${px2vw(70)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9AB4FB;
    width: ${px2vw(300)};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-color: #000046;
    border-width: 0.1rem;
    border-style: solid;
    z-index: 99;
    -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
	-moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
	box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
`;

export const Photo = styled.img`
	width: 95%;
	height: 15rem;
    object-fit: contain; 
`;

export const Name = styled.p`
    font-size: 1.5rem;
    color: #000046;
    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    border-bottom-color: #000046;
    margin-top: ${px2vw(20)};
    margin-bottom: ${px2vw(20)};
    text-align: center;
`;

export const Occupation = styled.p`
    font-size: 1.8rem;
    color: #000046;
    margin-bottom: ${px2vw(20)};
    text-align: center;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${px2vw(20)};
`;

export const LinkText = styled.h3`
    font-size: 1.5rem;
    color: #000046;
    margin-bottom: ${px2vw(15)};
`;

export const LinkItem = styled.h3`
    font-size: 1.3rem;
    color: #000046;
    margin-left: ${px2vw(15)};
    margin-bottom: ${px2vw(16)};
`;



