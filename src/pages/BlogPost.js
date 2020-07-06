import React, { Fragment } from 'react';
import { NotionRenderer } from "react-notion";
import NavBar from '../components/navbar';
import { NavLink } from 'react-router-dom';
import Back from '../asset/back.png';
import styled from 'styled-components';

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const StyledBackButton = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border-radius: 50%;
  border: 3px solid #f0f0f0;
  padding: 10px;
`
const BackButtonWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: row-reverse;
  height: 50px;
`

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blockMap: {}
    }
  }

  async blogNameToId(blogSlug) {
    const blogsDatabase = await fetch(
      "https://notion-api.splitbee.io/v1/table/4a900f47ce9143b59695cf25d8461893"
    ).then(res => res.json());

    try {
      const blog = blogsDatabase.filter(blog => blog.slug === blogSlug).pop();
      return blog.id
    } catch {
      return null
    }
  }

  async componentDidMount() {
    const blogId = await this.blogNameToId(this.props.match.params.blogTitle)
    const blogData = await fetch(
      "https://notion-api.splitbee.io/v1/page/" + blogId
    ).then(res => res.json());

    this.setState({ blockMap: blogData })
  }

  render() {
    return (
      <Fragment>
        <NavBar title="Harugatto" />
        <NotionRenderer fullPage blockMap={this.state.blockMap} />
        <BackButtonWrapper>
          <NavLink to="/blog">
            <StyledBackButton src={ Back } alt="BackButton" />
          </NavLink>
        </BackButtonWrapper>
      </Fragment>
    )
  }
}