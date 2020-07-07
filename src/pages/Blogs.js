import React, { Fragment, useState, useEffect } from 'react'
import NavBar from '../components/navbar'
import styled from 'styled-components'

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 15vh;
`

const PostList = styled.div`
    display: flex;
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 60vw;
    margin: 0 20vw 0 20vw;
    align-items: center;
    padding-left: 2vw;
`

const StyledButton = styled.a`
    color: black;
`

const ArticleTitle = styled.h1`
    background: linear-gradient(to left, #833ab4, #fd1d1d, #fcb045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Noto Sans KR";
`

const ArticleInfo = styled.p`
    font-family: "Noto Sans KR";
`

const PlaceHolder = styled.span`
    display: flex;
    height: 10vh;
`

function Article(props) {
    return (
        <Fragment>
        <PlaceHolder />
        <ListWrapper>
            <PostList>
            <StyledButton href={props.link} style={{ textDecoration: 'none' }}>
                <ArticleTitle>{props.title}</ArticleTitle>
                <ArticleInfo>{props.description}</ArticleInfo>
                <ArticleInfo>{props.date}</ArticleInfo>
            </StyledButton>
            </PostList>
        </ListWrapper>
        </Fragment>
    )
}

export default function Blogs(props) {
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        async function getTableData() {
        const notionTableData = await fetch(
            "https://notion-api.splitbee.io/v1/table/1cede97c79674f2c993bafbadb46122f"
        ).then(res => res.json())

        setTableData(notionTableData.filter(blog => blog.status === 'live'));
        }

        getTableData();
    }, [])

    return (
        <Fragment>
            <NavBar title="Harugatto" />
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