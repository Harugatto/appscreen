import React, { Fragment } from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const TitleText = styled.span`
    font-size: 50px;
    font-weight: bold;
    margin: 0.2em;
    font-family: "Noto Sans KR Bold";
    background: linear-gradient(90deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const TitleWrapper = styled.div`
    background-color: rgba(255,255,255,0.6);
    box-shadow: 1.5px 1.5px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
`

const StyledDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url("https://pbs.twimg.com/media/En62wFVUcAAmWqU?format=jpg&name=4096x4096");
    background-size: cover;
`

export default function Home() {
    return (
        <Fragment>
            <NavBar title="😘" />
            <StyledDiv>
                <NavLink style={{textDecoration: 'none'}} to="/2nd">
                    <TitleWrapper>
                        <TitleText>
                            HARUGATTO
                        </TitleText>
                    </TitleWrapper>
                </NavLink>
            </StyledDiv>
        </Fragment>
    )
}
