import React from 'react';
import { Container, Title, FuncArea, ImageArea, Text, Item, Photo, Emphasis } from './styles.js'

import PhotoScreen1 from '../../assets/screens-checklist/screen0.jpeg'
import PhotoScreen2 from '../../assets/screens-checklist/screen5.jpeg'
import PhotoScreen3 from '../../assets/screens-checklist/screen6.jpeg'
import PhotoScreen4 from '../../assets/screens-checklist/screen10.jpeg'

export default function ProjChecklist() {
    return (
        <Container>
            <FuncArea>
                <Title> Checklist Project</Title>
                <Text> <Emphasis> Functionalities: </Emphasis></Text>
                <Item> <Emphasis>Mobile App </Emphasis> to make a <Emphasis>checklist of any equipment, machine, etc</Emphasis> </Item>
                <Item> It has a <Emphasis>screen</Emphasis> just for <Emphasis>registering</Emphasis> the <Emphasis>checklist questions</Emphasis> </Item>
                <Item> On this <Emphasis>screen</Emphasis>, you can <Emphasis>register, edit and delete questions</Emphasis> from the <Emphasis>checklist</Emphasis> </Item>
                <Item> The <Emphasis>app</Emphasis> can <Emphasis>take a picture</Emphasis> or it can <Emphasis>grab</Emphasis> it from the <Emphasis>mobile phone album</Emphasis> for that <Emphasis>checklist question </Emphasis></Item>
                <Item> The <Emphasis>user</Emphasis> then <Emphasis>chooses the status</Emphasis> for the <Emphasis>checklist item</Emphasis>, be it <Emphasis>'ok', 'not ok' or 'not applied' </Emphasis></Item>
                <Item> You can <Emphasis>use the printer</Emphasis> to <Emphasis>print checklist</Emphasis> or <Emphasis>salve in PDF file. </Emphasis> </Item>
                <Item> And <Emphasis>not</Emphasis> to <Emphasis>lose the cheklist done</Emphasis>, <Emphasis>everything</Emphasis> is being <Emphasis>saved</Emphasis> in the <Emphasis>database</Emphasis> </Item>
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