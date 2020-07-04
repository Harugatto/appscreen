import React from 'react'
import styled from 'styled-components'

const MainText = styled.span`
    display: flex;
    font-size: 72px;
    font-family: "Noto Sans KR";
    font-weight: bold;
`

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100vw;
`

export default function NotFound() {
    return (
        <StyledDiv>
            <MainText>
                Page Not Found
            </MainText>
        </StyledDiv>
    )
}
