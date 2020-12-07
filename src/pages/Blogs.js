import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navbar'
import styled from 'styled-components'

const PostList = styled.div`
    display: flex;
    background-color: white;
    border-radius: 8px;
    width: 60vw;
    margin: 0 20vw 5vh 20vw;
    align-items: center;
    padding-left: 2vw;
    box-shadow: 1.5px 1.5px 10px 0px rgba(0, 0, 0, 0.5);

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-content: flex-start;
    height: 20vh;
    width: 60vw;
    overflow: hidden;
`

const StyledButton = styled.a`
    color: black;
`

const ArticleTitle = styled.h1`
    background: linear-gradient(90deg, #ffa745 0%, #fe869f 30%, #ef7ac8 45%, #a083ed 70%, #43aeff 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Noto Sans KR";
    margin-top: 0.5em;
    width: 450px;
`

const ArticleInfo = styled.p`
    font-family: "Noto Sans KR";
    margin-top: 0.1px;
`

const PlaceHolder = styled.span`
    display: flex;
    height: 10vh;
`

function Article(props) {
    return (
        <Fragment>
            <Link to={props.link} style={{ textDecoration: 'none', color: 'black' }}>
                    <PostList>
                        <InfoWrapper>
                            <ArticleTitle>{props.title}</ArticleTitle>
                            <ArticleInfo>✍️ {props.description}</ArticleInfo>
                            <ArticleInfo>📆 {props.date}</ArticleInfo>
                        </InfoWrapper>
                    </PostList>
            </Link>
        </Fragment>
    )
}

export default function Blogs() {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        async function getTableData() {
            const notionTableData = await fetch(
                "https://notion-api.splitbee.io/v1/table/1cede97c79674f2c993bafbadb46122f"
            ).then(res => res.json())

            setTableData(notionTableData.filter(blog => blog.status === 'live'))
        }

        getTableData();
    }, [])

    return (
        <Fragment>
            <NavBar title="😘" />
            <PlaceHolder />
            <div>
            {tableData.map((blog, index) => {
                return (
                <Article
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    link={'/blog/' + blog.slug}
                    key={index}
                />
                )
            })}
            </div>
        </Fragment>
    )
}