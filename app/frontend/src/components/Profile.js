import React from 'react';
import {Card , Image ,Container} from "semantic-ui-react"

export const Profile = ({profiles}) => {
    return(
        <Container style={ {marginTop : 5 }}>
            <Card.Group itemsPerRow={1}></Card.Group>
                <Card>
                        <Image src={profiles.userImage} alt="profile picture" wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{profiles.email}</Card.Header>
                            <Card.Description>{profiles.first_name}</Card.Description>
                        </Card.Content>
                </Card>
    </Container>
    )}