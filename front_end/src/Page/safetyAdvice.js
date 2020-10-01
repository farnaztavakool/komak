import React, { Component, Fragment } from 'react'
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from '../components/sidebar/SidebarComponent';
import HeaderComponent from '../components/header/HeaderComponent';

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

export default class SafetyAdvice extends React.Component {

    state = { selectedItem: 'Safety Advice', redirect:false };

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
                   
                </Column>
            </Row>
        );
    }
}
