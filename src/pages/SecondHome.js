import React, { Fragment } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.95);
    background-size: cover;
    background-image: url("https://www.presco.com/engineered-film/wp-content/uploads/sites/2/2019/05/markets-cinema-screens-01.jpg");

    iframe {
        margin-top: 5vh;
        width: 52vw;
        height: 45vh;
    }
`

export default function SecondHome() {
    return(
        <Fragment>
            <NavLink style={{textDecoration: 'none'}} to="/">
                <StyledDiv>
                    <iframe
                        src="https://tv.naver.com/embed/17064293?autoPlay=true" 
                        frameborder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="allowfullscreen"
                    >
                    </iframe>
                </StyledDiv>
            </NavLink>
        </Fragment>
    )
}