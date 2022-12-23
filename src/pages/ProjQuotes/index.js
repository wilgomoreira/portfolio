import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo, Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-quotes/AppScreen1.jpeg'
import PhotoScreen2 from '../../assets/screens-quotes/AppScreen2.jpeg'

export default function ProjQuotes() {
    return (
        <Container>
            <FuncArea>
                <Title> Quotes Project</Title>
                <Text> <Emphasis> Functionalities: </Emphasis></Text>
                <Item> <Emphasis>Mobile App</Emphasis> to <Emphasis>help people</Emphasis> who are <Emphasis>feeling unmotivated</Emphasis></Item>
                <Item> A <Emphasis>phrase</Emphasis> from a <Emphasis>great genius</Emphasis> can be the <Emphasis>most impactful</Emphasis> thing </Item>
                <Item> The <Emphasis>App</Emphasis> consumption of an <Emphasis>external API</Emphasis> for <Emphasis>genius quotes</Emphasis> </Item>
            </FuncArea>

            <ImageArea>
                <Photo src={PhotoScreen1} alt='photoscreen1' />
                <Photo src={PhotoScreen2} alt='photoscreen2' />
            </ImageArea>       
        </Container>
    );
}