import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbuttons from './Navbutton'
import { NavLink } from 'react-router-dom'

const Background = styled.div`
    display: inline-flex;
    position: absolute;
    top: 0;
    justify-content: start;
    align-items: center;
    height: 6vh;
    width: 100vw;
    margin: 0;
    background: #833ab4;
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
`

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-right: 1rem;
`

const Title = styled.h1`
    display: flex;
    font-size: 170%;
    color: white;
    font-family: "Noto Sans KR";
    padding: 1rem 1rem 1.5rem 1rem;
`

export default function NavBar(props) {
    return (
        <Fragment>
            <Background>
                <NavLink style={{textDecoration: 'none'}} to="/">
                    <Title>
                        {props.title}
                    </Title>
                </NavLink>
                <Wrapper>
                    <NavLink style={{textDecoration: 'none'}} to="/profile">
                        <Navbuttons context="Profile" />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/blog">
                        <Navbuttons context="Blog" />
                    </NavLink>
                </Wrapper>
            </Background>
        </Fragment>
    );
}