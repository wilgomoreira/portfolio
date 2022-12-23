import React from "react";

import { Container, IconsArea, IconsLink, Text, IconLinkedin, IconGithub} from './styles.js'

export default function Footer() {
    return (
        <Container>
            <IconsArea>
                <IconsLink href="https://www.linkedin.com/in/wilgomoreira/">
                    <IconLinkedin/>
                </IconsLink>
                <IconsLink href="https://github.com/wilgomoreira">
                    <IconGithub/>
                </IconsLink>
                <Text>Made by Wilgo Moreira </Text>
            </IconsArea>
        </Container>
    )
}