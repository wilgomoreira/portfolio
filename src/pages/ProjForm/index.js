import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo,Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-form/screen1.jpeg'
import PhotoScreen2 from '../../assets/screens-form/screen2.jpeg'
import PhotoScreen3 from '../../assets/screens-form/screen3.jpeg'

export default function ProjForm() {
    return (
        <Container>
            <FuncArea>
                <Title> Form Project</Title>
                <Text> <Emphasis> Functionalities: </Emphasis></Text>
                <Item> The <Emphasis> Form </Emphasis> uses the <Emphasis>best</Emphasis> resources for <Emphasis>forms</Emphasis>, to <Emphasis>improve </Emphasis> 
                    and <Emphasis>facilitate</Emphasis> <Emphasis>user response</Emphasis>
                </Item>
                <Item> The store owner <Emphasis>quickly register employees</Emphasis> </Item>
                <Item> and which can also instantly <Emphasis>generate</Emphasis> a <Emphasis>list of all of them</Emphasis></Item>
                <Item> The <Emphasis>list</Emphasis> is <Emphasis>not lost</Emphasis> as it is <Emphasis>saved</Emphasis> to an <Emphasis>external, online database</Emphasis></Item>
            </FuncArea>
    
            <ImageArea>
                <Photo src={PhotoScreen1} alt='photoscreen1' />
                <Photo src={PhotoScreen2} alt='photoscreen2' />
                <Photo src={PhotoScreen3} alt='photoscreen3' />
            </ImageArea>       
        </Container>
    );
}