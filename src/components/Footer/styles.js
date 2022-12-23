import styled from 'styled-components'
import px2vw from "../../utils/px2vw"

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Container = styled.footer`
    width: ${px2vw(1920)};
    height: ${px2vw(50)};
    background-color: #9AB4FB;
    display: block;
    position: relative;
    clear: both;
`;

export const IconsArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconsLink = styled.a`
    margin-left: ${px2vw(30)};
    margin-top: ${px2vw(20)};
`;

export const Text = styled.p`
    color: #000046;   
    font-size: 1rem;
    margin-left: ${px2vw(40)};
    margin-top: ${px2vw(20)};
`;

export const IconLinkedin = styled(FaLinkedin)`
    color: #000046;
    transform: scale(1.5);
`;

export const IconGithub = styled(FaGithub)`
    color: #000046;
    transform: scale(1.5);
`;

