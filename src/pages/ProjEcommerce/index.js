import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo,Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-ecommerce/screen1.jpeg'
import PhotoScreen2 from '../../assets/screens-ecommerce/screen2.jpeg'
import PhotoScreen3 from '../../assets/screens-ecommerce/screen3.jpeg'
import PhotoScreen4 from '../../assets/screens-ecommerce/screen4.jpeg'

export default function ProjEcommerce() {
    return (
        <Container>
            <FuncArea>
                <Title> E-commerce Project</Title>
                <Text> <Emphasis>Functionalities:</Emphasis> </Text>
                <Item> <Emphasis>Mobile App</Emphasis> simulate <Emphasis>virtual shop </Emphasis></Item>
                <Item> it has <Emphasis>register</Emphasis> and <Emphasis>login screen</Emphasis>, that <Emphasis>work</Emphasis> with <Emphasis>database</Emphasis></Item>
                <Item> It has <Emphasis>price of items</Emphasis> </Item>
                <Item> You can <Emphasis>choose</Emphasis> e and go to <Emphasis>another screen</Emphasis>, <Emphasis>Cart Screen</Emphasis> </Item>
                <Item> On <Emphasis>Cart Screen</Emphasis>, we have <Emphasis>all items chosen</Emphasis> and the <Emphasis>sum of prices and quantities</Emphasis></Item>
            </FuncArea>

            <ImageArea>
                <Photo src={PhotoScreen1} alt='photoscreen1' />
                <Photo src={PhotoScreen2} alt='photoscreen2' />
                <Photo src={PhotoScreen3} alt='photoscreen3' />
                <Photo src={PhotoScreen4} alt='photoscreen3' />
            </ImageArea>       
        </Container>
    );
}