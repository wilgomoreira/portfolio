import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo, Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-portfolio/screen1.jpeg'
import PhotoScreen2 from '../../assets/screens-portfolio/screen2.jpeg'
import PhotoScreen3 from '../../assets/screens-portfolio/screen4.jpeg'
import PhotoScreen4 from '../../assets/screens-portfolio/screen8.jpeg'

export default function ProjPorfolio() {
    return (
        <Container>
            <FuncArea>
                <Title> Portfolio Project</Title>
                <Text> <Emphasis>Functionalities: </Emphasis></Text>
                <Item> <Emphasis>Mobile App</Emphasis> with my <Emphasis>Portfolio Projects</Emphasis> </Item>
                <Item> Help <Emphasis>spread</Emphasis> my <Emphasis>work</Emphasis></Item>
                <Item> It has my <Emphasis>Skills</Emphasis> as well </Item>
                <Item> And it <Emphasis>has photos of projects </Emphasis></Item>
            </FuncArea>
            <Text> <Emphasis>Images: </Emphasis></Text>

            <ImageArea>
                <Photo src={PhotoScreen1} alt='photoscreen1' />
                <Photo src={PhotoScreen2} alt='photoscreen2' />
                <Photo src={PhotoScreen3} alt='photoscreen3' />
                <Photo src={PhotoScreen4} alt='photoscreen4' />
            </ImageArea>       
        </Container>
    );
}