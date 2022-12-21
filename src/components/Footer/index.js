import React from "react";

import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Container, IconsArea, IconsLink, Text } from './styles.js'

export default function Footer() {

    return (
        <Container>
            <IconsArea>
                <IconsLink href="https://www.linkedin.com/in/wilgomoreira/">
                    <FaLinkedin size="40" color="#000046" />
                </IconsLink>
                <IconsLink href="https://github.com/wilgomoreira">
                    <FaGithub size="40" color="#000046" />
                </IconsLink>
                <Text>Made by Wilgo Moreira </Text>
            </IconsArea>
        </Container>
    )
}