import React from 'react';
import { Container, Title, Text, Emphasis} from './styles.js'

//import myPhoto from '../../assets/myPhoto6.png'

export default function Home() {
    return (
        <Container>
            <Title> About Me </Title>

            <Text> Hello! my <Emphasis>name</Emphasis> is <Emphasis>Wilgo.</Emphasis></Text>
            <Text> Since I was a <Emphasis>child</Emphasis> I always liked <Emphasis> technological </Emphasis> toys, <Emphasis> automation. </Emphasis></Text>
            <Text> I believe that's why I <Emphasis>worked</Emphasis> in <Emphasis>Engineering.</Emphasis> But I <Emphasis>have changed </Emphasis> my <Emphasis>plans.</Emphasis></Text>
            <Text> <Emphasis> Nowdays </Emphasis>, I have <Emphasis> discovered </Emphasis> a <Emphasis>new area</Emphasis> to <Emphasis>work</Emphasis> in, </Text>
            <Text> which I <Emphasis>have fallen in love</Emphasis> with and I am <Emphasis>truly</Emphasis> working with <Emphasis>joy</Emphasis>. </Text>
            <Text> To tell the <Emphasis>computer</Emphasis> what you <Emphasis>think</Emphasis> and <Emphasis>want to do</Emphasis> is <Emphasis>sensational.</Emphasis> </Text>
            <Text> I'm going for a <Emphasis>career</Emphasis> as a <Emphasis>Developer.</Emphasis> </Text>
            <Text> <Emphasis>Solving problems</Emphasis> is a <Emphasis>challenge</Emphasis>, but it brings <Emphasis>great satisfaction.</Emphasis> </Text>
        </Container>
    );
}