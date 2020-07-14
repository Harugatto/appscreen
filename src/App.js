import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Profile, NotFound, Blogs, BlogPost } from './pages'
import { createGlobalStyle } from 'styled-components'
import PageTransition from 'react-router-page-transition';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 100;
        src: url("./fonts/NotoSansKR-Thin.otf");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 300;
        src: url("./fonts/NotoSansKR-Light.otf");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 400;
        src: url("./fonts/NotoSansKR-Regular.otf");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 500;
        src: url("./fonts/NotoSansKR-Medium.otf");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 700;
        src: url("./fonts/NotoSansKR-Bold.otf");
    }

    @font-face {
        font-family: "Noto Sans KR";
        font-weight: 900;
        src: url("./fonts/NotoSansKR-Black.otf");
    }
`

export default function App() {
    return (
        <div>
            <GlobalStyles />    
            <PageTransition timeout={500}>
                <Switch>
                    <Route exact path="/" component={ Profile } />
                    <Route exact path="/blog" component={ Blogs } />
                    <Route exact path="/blog/:blogTitle" component={ BlogPost } />
                    <Route path="/notfound" component={ NotFound } />
                </Switch>
            </PageTransition>
        </div>
    )
}