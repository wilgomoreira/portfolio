import styled from "styled-components";
import px2vw from '../utils/px2vw'

export const Container = styled.div`
`;

export const CenterArea = styled.div`
    display: flex;
    flex-direction: row;
    height: calc(100vh - ${px2vw(50)});
`;