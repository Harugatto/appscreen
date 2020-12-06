import React, { Fragment, useState, useEffect } from 'react';
import { NotionRenderer } from "react-notion";
import NavBar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import Back from '../asset/back.png';
import styled from 'styled-components';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const StyledBackButton = styled.img`
    display: flex;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border-radius: 50%;
    border: 3px solid #f0f0f0;
    padding: 10px;
    align-items: flex-end;
    box-shadow: 1.5px 1.5px 10px 0px rgba(0, 0, 0, 0.5);
`
const BackButtonWrapper = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    display: flex;
    flex-direction: row-reverse;
    height: 50px;
`

export default function BlogPost(props) {

    const [blockMap, setBlockMap] = useState("")

    const blogNameToId = async (blogSlug) => {
        const blogsDatabase = await fetch(
            "https://notion-api.splitbee.io/v1/table/1cede97c79674f2c993bafbadb46122f"
        ).then(res => res.json())

        try {
            const blog = blogsDatabase.filter(blog => blog.slug === blogSlug).pop()
            return blog.id
        } catch {
            return null
        }
    }

    useEffect(() => {
        async function getBlogInfo() {
            const blogId = await blogNameToId(props.match.params.blogTitle)
            const blogData = await fetch(
                "https://notion-api.splitbee.io/v1/page/" + blogId
            ).then(res => res.json())

            setBlockMap(blogData)
        }
        getBlogInfo()
    }, [])

    return (
        <Fragment>
            <NavBar title="😘" />
            <NotionRenderer fullPage blockMap={blockMap} />
            <BackButtonWrapper>
            <NavLink to="/blog">
                <StyledBackButton src={ Back } alt="BackButton" />
            </NavLink>
            </BackButtonWrapper>
        </Fragment>
    )
}