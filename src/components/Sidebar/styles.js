import styled from 'styled-components'

export const Container = styled.header`
    width: 40%;
    height: 95vh;
    background-color: #9AB4FB;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AvatarArea = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #9AB4FB;
    width: 55%;
    height: 100vh;
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
	width: 100%;
	height: 15rem;
    object-fit: contain; 
`;

export const Name = styled.p`
    font-size: 1.5rem;
    color: #000046;
    margin-top: 2rem;
    border-bottom-width: 0.2rem;
    border-bottom-style: solid;
    border-bottom-color: #000046;
    margin-bottom: 1rem;
`;

export const Occupation = styled.p`
    font-size: 2rem;
    color: #000046;
`;

export const Nav = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
  
`;

export const LinkText = styled.h3`
    font-size: 1.5rem;
    color: #000046;
    margin-bottom: 1rem;
`;

export const LinkItem = styled.h3`
    font-size: 1.3rem;
    color: #000046;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
`;



