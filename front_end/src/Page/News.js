import React, { Component, Fragment } from 'react'
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../components/sidebar/SidebarComponent';
import HeaderComponent from '../components/header/HeaderComponent';
import { Card,Container, Grid, Header, List, Image } from "semantic-ui-react";
import {BrowserRouter as Router,Route,
    Redirect,Switch} from 'react-router-dom'

import '../App.css';

import data from '../data.json'
const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        height:'100%',
        backgroundColor: '#F7F8FC',
        padding: 30
        
    },
    hover: {
        ':hover': {
            transform: 'scale(1.1)'
        },
        marginBottom: 30,
        marginRight:30

    }


});

export default class News extends React.Component {

    state = { selectedItem: 'News', redirect:false };


    render() {
        const { selectedItem } = this.state;
        let where = selectedItem.replace(/\s/g, "")
        if (this.state.redirect) {return <Redirect to={where}/>}
        return (
            <Row className={css(styles.container)}>
                 <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => {
                    const here = '/'+ { selectedItem }
                    this.setState({ selectedItem })
                    const goto = '/' + {selectedItem}
                    let x = {selectedItem}
                    console.log(x['selectedItem'])
                    this.setState({redirect:true})
                  
                }}/>
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <div className="Data">
                        <Fragment >
            <Card.Group doubling itemsPerRow={3} stackable style={{margin: 100}}>
                {data.map(partner => (
                    <div class = {css(styles.hover)}>
                    <Card  className='single_card' key={partner.title} 
                      
                        >
    
                        <Image  src = {partner.image_url} />
                    
                        <Card.Content>
                            <Fragment>
                                <Card.Header>{partner.title}
                                </Card.Header>
                                <Card.Description>{partner.body}</Card.Description>
                                <Card.Content extra style={{paddingTop:20}}>
                                {/* <a>
                <Button className="visit" basic color = 'yellow' onClick = {() => window.location.href = partner.page}> visit</Button>
                                </a> */}
                                </Card.Content>

                            </Fragment>
                        </Card.Content>
                    </Card>
                    </div>
                    ))
                    
                }
                        
                </Card.Group> 
                </Fragment>

                        </div>
                    </div>
                </Column>
            </Row>
        );
    }
}
