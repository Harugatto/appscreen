import React from 'react';
import styled from 'styled-components';

const Context = styled.span`
    display: flex;
    font-size: 110%;
    color: white;
    font-family: "Noto Sans KR";
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem 1rem 1.1rem 1rem;

    &:hover {
        color: #bababa;
    }
`

export default function Navbuttons(props) {
    return (
        <Context>
            {props.context}
        </Context>
    )
}
