import React, {Fragment} from 'react'
import styled from 'styled-components'
import Navbuttons from './Navbutton'

const Background = styled.div`
    display: inline-flex;
    justify-content: start;
    align-items: center;
    height: 8vh;
    width: 100vw;
    margin: 0;
    background: #833ab4;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Title = styled.h1`
    display: flex;
    font-size: 170%;
    color: white;
    font-family: "Noto Sans KR";
    padding: 1rem;
`

const Navbar = () => {
    return (
        <Fragment>
            <Background>
                <Title>
                    Mathmatics
                </Title>
                <Navbuttons />
            </Background>
        </Fragment>
    );
}

export default Navbar