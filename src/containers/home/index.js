import { Avatar, Box, Card, Divider, List, ListItem, ListItemText } from '@mui/material';
import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { getAllNews } from '../../services';
import './home.css';
export default class HomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: [],
            loading: true
        }
    }
    async componentDidMount() {
        await this.getAllNewsData()
    }
    async getAllNewsData() {
        const news = await getAllNews()
        this.setState({
            news: news.data,
            loading: false
        })

        console.log(this.state.news)
    }
    render() {
        return (
            <Box sx={{
                padding: '3rem'
            }}>
                {this.state.loading ? (
                <>
                <Loader/>
                </>) : (
                    <>
                        <section>
                            {this.state.news && this.state.news.length > 0 && (
                                this.state.news.map((news, index) => (
                                    <Box key={index} sx={{
                                        padding: 2
                                    }}><Box sx={{
                                        marginLeft: 2
                                    }}>
                                            <h3>{news.title}</h3>
                                            {news.description}
                                        </Box>
                                        <Box sx={{
                                            margin: 3,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-start'
                                            }}>
                                                <Avatar alt={news.author} src="author" />
                                            </Box>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-end'
                                            }}>
                                                Learn More
                                            </Box>
                                        </Box>
                                        <Divider style={{
                                            marginTop: 10
                                        }} variant="middle" />
                                    </Box>
                                ))
                            )}

                        </section>
                        <aside>
                            <h2>Head Lines</h2>
                            <Card sx={{
                                height: 400,
                                overflow: 'scroll',
                                overflowX:'hidden'
                            }} variant='outline'>
                                <List className='slider' >
                                    {this.state.news && this.state.news.length > 0 && (
                                        this.state.news.map(news => (
                                            <>
                                                <ListItem button>
                                                    <ListItemText primary={news.title} />
                                                </ListItem>
                                                <Divider />
                                            </>
                                        ))

                                    )}

                                </List>
                            </Card></aside>
                    </>
                )}

            </Box>
        )
    }
}
