import React, { Component, createRef } from 'react';
import { Segment, Grid, Image, Icon, Divider } from 'semantic-ui-react';
import logo from "./Logo.png"

export default class Footer extends Component {
    contextRef = createRef()
    render () {
        return(
            <div className="footer">
                <Segment>
                    <Grid doubling columns={7}>
                        <Grid.Column>
                            <p>Mobile App</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Community</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Help Desk</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Image as='div' src={logo} size='tiny' />
                        </Grid.Column>
                        <Grid.Column>
                            <p>Company</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Blog</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Resources</p>
                        </Grid.Column>
                    </Grid>
                    <Divider />
                    <Grid doubling columns={4}>
                        <Grid.Column>
                            <Icon name='facebook official' size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name='instagram' size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name='twitter' size='large' />
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name='linkedin' size='large' />
                        </Grid.Column>
                    </Grid>
                </Segment>
             </div>
        )
    }
}