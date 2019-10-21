import React from 'react';
import './App.css';
import {HeaderRow, HeaderTabs, Tab, Layout,Header,Navigation,Content,Drawer,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
import Main from './components/main';
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

class App extends React.Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout className="container-fluid">
            <Header title="Title" scroll>
              <Navigation>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
                <a href="/about-me">About me</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
                <a href="/about-me"></a>
              </Navigation>
            </Drawer>
            <Content className="container-modifed">
              <Container fixed >
                <Main/>
              </Container>
            </Content>
            <Footer size="mega">
              <FooterSection type="middle">
                <FooterDropDownSection title="Features">
                  <FooterLinkList>
                    <a href="#">About</a>
                    <a href="#">Terms</a>
                    <a href="#">Partners</a>
                    <a href="#">Updates</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                  <FooterLinkList>
                    <a href="#">Specs</a>
                    <a href="#">Tools</a>
                    <a href="#">Resources</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                  <FooterLinkList>
                    <a href="#">How it works</a>
                    <a href="#">Patterns</a>
                    <a href="#">Usage</a>
                    <a href="#">Products</a>
                    <a href="#">Contracts</a>
                  </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                  <FooterLinkList>
                    <a href="#">Questions</a>
                    <a href="#">Answers</a>
                    <a href="#">Contact Us</a>
                  </FooterLinkList>
                </FooterDropDownSection>
              </FooterSection>
              <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Layout>
        </div>
    );
  }
}

export default App;
