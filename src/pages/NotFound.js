import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledText = styled.span`
    display: flex;
    font-size: 72px;
    font-family: "Noto Sans KR";
    font-weight: bold;
    background: linear-gradient(90deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100vw;
`

const StyledButton = styled.p`
    display: flex;
    font-family: "Noto Sans KR";
    font-weight: bold;
    font-size: 20px;
    color: black;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 70px;
    border: 3px solid;
    border-radius: 11%;

    &:hover {
        background-color: #bababa;
    }
`

const RenderEmoji = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 72px;
    font-family: "Noto Sans KR";
`

export default function NotFound() {
    return (
        <StyledDiv>
            <RenderEmoji>
                <StyledText>
                    404 Page Not Found
                </StyledText>
                😥
            </RenderEmoji>
            <NavLink style={{textDecoration: 'none'}} to="/">
                <StyledButton>
                    Back
                </StyledButton>
            </NavLink>
        </StyledDiv>
    )
}
