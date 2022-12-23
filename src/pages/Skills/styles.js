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
    margin-bottom: ${px2vw(50)};
`;

export const SkillsArea = styled.div`
  margin-bottom:  ${px2vw(30)};
`;

export const Text = styled.p`
    font-size: 1.5rem;
    color: #333;
    margin-left:  ${px2vw(50)};
    line-height: 2.3rem;
`;

export const Item = styled.li`
    font-size: 1.3rem;
    color: #333;
    margin-left:  ${px2vw(50)};
    line-height: 2.3rem;
`;

export const Emphasis = styled.em`
    font-weight: bold;
    color: #000046;
`;