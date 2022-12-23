import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo,Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-game/Screen1.png'
import PhotoScreen2 from '../../assets/screens-game/Screen2.png'

export default function ProjGame() {
    return (
        <Container>
            <FuncArea>
                <Title> Game Project</Title>
                <Text> <Emphasis> Functionalities: </Emphasis></Text>
                <Item> I always <Emphasis>wanted</Emphasis> to <Emphasis>play</Emphasis> this style of <Emphasis>game</Emphasis> with <Emphasis>another player</Emphasis> on the 
                    <Emphasis>same screen. </Emphasis>
                </Item>
                <Item> The <Emphasis>game</Emphasis> is using <Emphasis>HTML, CSS and Javascript </Emphasis></Item>
                <Item> <Emphasis>Have Fun! </Emphasis></Item>
            </FuncArea>
    
            <ImageArea>
                <Photo src={PhotoScreen1} alt='photoscreen1' />
                <Photo src={PhotoScreen2} alt='photoscreen2' />
            </ImageArea>       
        </Container>
    );
}