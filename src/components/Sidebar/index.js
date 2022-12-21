import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Nav, LinkText, AvatarArea, Photo, Name, Occupation, LinkItem } from './styles.js'
import Card from '../../assets/sidebar/mobile3.png'

export default function Sidebar() {
    return (
        <Container>
            <AvatarArea>
                <Photo src={Card} alt='photo' />
                <Name> Wilgo Moreira </Name>
                <Occupation> Mobile Developer </Occupation>
            </AvatarArea>

            <Nav>
                <Link to='/portfolio'> <LinkText> About Me </LinkText> </Link>
                <Link to='/skills'> <LinkText> Skills </LinkText> </Link>
                <LinkText> Projects </LinkText>
                <Link to='/projchecklist'> <LinkItem> 1. Checklist </LinkItem> </Link>
                <Link to='/projportfolio'> <LinkItem> 2. Porfolio </LinkItem> </Link>
                <Link to='/projecommerce'> <LinkItem> 3. E-commerce </LinkItem> </Link>
                <Link to='/projform'> <LinkItem> 4. Form </LinkItem> </Link>
                <Link to='/projquotes'> <LinkItem> 5. Quotes </LinkItem> </Link>
                <Link to='/projgame'> <LinkItem> 6. Game </LinkItem> </Link>
                <Link to='/contact'> <LinkText> Contact </LinkText> </Link>
            </Nav>
        </Container>
    );
}