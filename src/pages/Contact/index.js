import React from 'react';
import { Container, Title, Text, IconsLink, IconArea, Emphasis } from './styles.js'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiMailbox } from 'react-icons/gi'

export default function Contact() {
    return (
        <Container>
            <Title> Contact </Title>

            <IconsLink href="wilgomoreira@gmail.com">
                <IconArea>
                    <GiMailbox size="40" color="#000046" />
                    <Text> <Emphasis>wilgomoreira@gmail.com </Emphasis> </Text>
                </IconArea>
            </IconsLink>

            <IconsLink href="https://www.linkedin.com/in/wilgomoreira/">
                <IconArea>
                    <FaLinkedin size="40" color="#000046" />
                    <Text> <Emphasis> https://www.linkedin.com/in/wilgomoreira </Emphasis> </Text>
                </IconArea>
            </IconsLink>

            <IconsLink href="https://github.com/wilgomoreira">
                <IconArea>
                    <FaGithub size="40" color="#000046" />
                    <Text> <Emphasis> https://github.com/wilgomoreira </Emphasis> </Text>
                </IconArea>
            </IconsLink>
        </Container>
    );
}