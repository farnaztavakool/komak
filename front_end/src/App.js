import React from 'react';
import { Column, Row, Fragment } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import { Card,Container, Grid, Header, List, Image } from "semantic-ui-react";
// import Card from 'react-bootstrap/Card'
import { CardGroup, Table,Modal} from 'react-bootstrap'


import './App.css';

import data from './data.json'
const styles = StyleSheet.create({
    container: {
        height: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: 'Tickets' };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <div className="Data">
                            <Card.Group doubling itemsPerRow={3} stackable style={{margin: 100}}>


                                {data.map(el => { 
                                    return (
                                        <Card  className='single_card' key={el.title} >


                                            <Image variant="top" src={el.image_url} />
                                                <Card.Content>
                                                    <Fragment>
                                                        <Card.Header>{el.title}</Card.Header>
                                                        <Card.Description>{el.body}</Card.Description>
                                                        </Fragment>
                                                </Card.Content>
                                        </Card> 
                                         
                                     );
                                })}
                             </Card.Group> 
                        </div>
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
