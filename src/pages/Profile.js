import React, { Fragment } from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar'
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
    flex-direction: row-reverse;
    margin-right: 10vw;
`

const ProfileImageBackground = styled.div`
    display: flex;
    height: 320px;
    width: 320px;
    border-radius: 50%;
    background: #833ab4;
    background: -webkit-linear-gradient(to right top, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right top, #fcb045, #fd1d1d, #833ab4);
    box-shadow: 1px 1px 5px 0px rgba(107,107,107,1);
`

const ProfileImage = styled.img`
    display: flex;
    margin: 10px;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
`

const ProfileTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 94vh;
    width: 50vw;
`

const NameText = styled.span`
    display: flex;
    font-size: 50px;
    font-weight: bold;
    margin: 1em 0 0.5em 0;
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 40vh;
    align-items: flex-end;
`

const Text = styled.span`
    font-family: "Noto Sans KR";
    height: 57vh;
`

export default function Profile() {
    return (
        <Fragment>
            <NavBar title="😘"/>
            <ProfileWrapper>
                <ImageWrapper>
                    <ProfileImageBackground>
                        <ProfileImage src={ profileImage } alt="Proifle IMG"/>
                    </ProfileImageBackground>
                </ImageWrapper>
                <ProfileTextWrapper>
                    <NameText>
                        Profile
                    </NameText>
                    <Text>
                        👀 송지호 <br />
                        😃 KDMHS 18th Hacking Defence <br />
                        🎂 2003.04.19 <br />
                        ✉️ jihojiho2003@gmail.com <br />
                        💡 TRUST - Hacking Defence Club <br />
                        💡 BMW - Benedu Math Worriors <br />
                        🏆 The Hacking Championship Junior 2019 - 4th Prize 
                    </Text>
                </ProfileTextWrapper>
            </ProfileWrapper>
        </Fragment>
    )
}
