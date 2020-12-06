import React, { Fragment } from 'react'
import styled from 'styled-components'
import Navbuttons from './Navbutton'
import { NavLink } from 'react-router-dom'

const Background = styled.div`
    display: inline-flex;
    position: fixed;
    top: 0;
    justify-content: start;
    align-items: center;
    height: 6vh;
    width: 100vw;
    margin: 0;
    background: #833ab4;
    background: -webkit-linear-gradient(90deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
    background: linear-gradient(90deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
    z-index: 100;
    box-shadow: 1.5px 1.5px 10px 0px rgba(0, 0, 0, 0.5);
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
    padding: 1rem 1rem 1.3rem 1rem;
`

export default function NavBar(props) {
    return (
        <Fragment>
            <Background>
                <Title>
                    {props.title}
                </Title>
                <Wrapper>
                    <NavLink style={{textDecoration: 'none'}} to="/">
                        <Navbuttons context="Home" />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/profile">
                        <Navbuttons context="Profile" />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/blog">
                        <Navbuttons context="Blog" />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/todo">
                        <Navbuttons context="ToDo" />
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to="/NotFound">
                        <Navbuttons context="404" />
                    </NavLink>
                </Wrapper>
            </Background>
        </Fragment>
    );
}