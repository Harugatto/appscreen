import React, { Fragment } from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

const TitleText = styled.span`
    font-size: 50px;
    font-weight: bold;
    margin: 0.2em;
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const TitleWrapper = styled.div`
    background-color: #f0f0f0;
    border-radius: 15px;
`

const MainText = styled.span`
    font-size: 16px;
    font-weight: bold;
    font-family: "Noto Sans KR";
    margin: 1em 0 1em 0;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100vw;
`

export default function Home() {
    return (
        <Fragment>
            <NavBar title="Mathmatics" />
            <StyledDiv>
                <TitleWrapper>
                    <TitleText>
                        HARUGATTO
                    </TitleText>
                </TitleWrapper>
                <MainText>
                </MainText>
            </StyledDiv>
        </Fragment>
    )
}
