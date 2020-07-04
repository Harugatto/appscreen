import React from 'react';
import styled from 'styled-components';

const Context = styled.span`
    display: flex;
    font-size: 1rem;
    color: white;
    font-family: "Noto Sans KR";
    text-transform: uppercase;
    font-weight: bold;
`

export default function Navbuttons(props) {
    return (
        <Context>
            {props.context}
        </Context>
    )
}
