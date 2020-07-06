import React, { Fragment } from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import profileImage from '../asset/Profile.jpg'

const ProfileWrapper = styled.div`
    display: flex;
    height: 94vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ImageWrapper = styled.div`
    display: flex;
    width: 50vw;
`

const ProfileImage = styled.img`
    display: flex;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
    margin: auto;
`

const ProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 94vh;
    width: 50vw;
`

const NameText = styled.span`
    font-size: 50px;
    font-weight: bold;
    margin: 0.2em;
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`

const Text = styled.span`
`

export default function Profile() {
    return (
        <Fragment>
            <NavBar title="Mathmatics"/>
            <ProfileWrapper>
                <ImageWrapper>
                    <ProfileImage src={ profileImage } alt="Proifle IMG"/>
                </ImageWrapper>
                <ProfileTextWrapper>
                    <NameText>
                        aaa
                    </NameText>
                    <Text>
                        aaa
                    </Text>
                </ProfileTextWrapper>
            </ProfileWrapper>
        </Fragment>
    )
}
