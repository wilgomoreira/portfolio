import React from 'react';
import { Container, Title, SkillsArea, Text, Item, Emphasis} from './styles.js'

export default function Skills() {
    return (
        <Container>
            <Title> Skills </Title>
            <SkillsArea>
                <Text> <Emphasis>Nowdays: </Emphasis></Text>
                <Item> I <Emphasis>work</Emphasis> doing <Emphasis>Mobile Apps</Emphasis> In <Emphasis>React Native </Emphasis></Item>
            </SkillsArea>

            <SkillsArea>
                <Text> I have <Emphasis>already worked</Emphasis> for <Emphasis>3 years</Emphasis> with <Emphasis>software development:</Emphasis> </Text>
                <Item> <Emphasis>Software</Emphasis> in the <Emphasis>petroleum area </Emphasis> and </Item>
                <Item> Other <Emphasis>software</Emphasis> for use in <Emphasis>patient physiotherapy</Emphasis> </Item>
            </SkillsArea>

            <SkillsArea>
                <Text>I <Emphasis>also</Emphasis> have <Emphasis>knowledge </Emphasis> in: </Text>
                <Item> <Emphasis>Frontend: </Emphasis> HTML, CSS, Javascript, ReactJS and NextJS </Item>
                <Item> <Emphasis>Backend:</Emphasis> REST API, Relational (MySQL, SQLite, PostgreSQL) </Item>
                <Item> <Emphasis>Backend: </Emphasis> Non-Relational (Firebase, MongoDB) databases </Item>
                <Item> <Emphasis>Code Versioning:</Emphasis> Git and GitHub</Item>
                <Item> <Emphasis>Other languages:</Emphasis> Java, C++ and Python</Item>
            </SkillsArea>

            <SkillsArea>
                <Text>In <Emphasis>addition</Emphasis> to <Emphasis>HardSkills</Emphasis>, I <Emphasis>have</Emphasis> the following <Emphasis>SoftSkills: </Emphasis> </Text>
                <Item><Emphasis>Self-taught</Emphasis> to seek <Emphasis>knowledge </Emphasis></Item>
                <Item><Emphasis>Adaptation </Emphasis> to <Emphasis>various scenarios</Emphasis> and sudden <Emphasis>changes in companies.</Emphasis> </Item>
                <Item><Emphasis>Practical</Emphasis> and <Emphasis>objective</Emphasis> in <Emphasis>solving problems.</Emphasis></Item>
                <Item><Emphasis>Teamwork</Emphasis>, as I've <Emphasis>worked</Emphasis> with <Emphasis>several people</Emphasis> in many <Emphasis>different teams</Emphasis> for <Emphasis>10 years.</Emphasis> </Item>
            </SkillsArea>
        </Container>
    );
}