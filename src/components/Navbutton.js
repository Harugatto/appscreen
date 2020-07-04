import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-right: 1rem;
`

const Context = styled.span`
    display: flex;
    font-size: 1.3rem;
    color: white;
    font-family: "Noto Sans KR";
    text-transform: uppercase;
    font-weight: bold;
`

export default function Navbuttons() {
    return (
        <Wrapper>
            <Context>
                Profile
            </Context>
            <Context>
                Blog
            </Context>
            <Context>
                Menu
            </Context>
            <Context>
                Menu
            </Context>
        </Wrapper>
    )
}
