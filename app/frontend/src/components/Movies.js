import React from 'react';
import {Rating, Card , Image, Popup, Container, Button, Icon} from "semantic-ui-react"

export const Movies = ({movies}) => {
    return (
        <Container style={ {marginTop : 40 }}>
            <Card.Group itemsPerRow={5}>
        {movies.map(movie=> {
            return(
                <Popup trigger={
                    <Card>
                        <Image src='https://picsum.photos/100/100' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{movie.title}</Card.Header>
                            <Card.Meta>later</Card.Meta>
                            <Card.Description>{movie.description}</Card.Description>
                        </Card.Content>
                        <Button.Group>
                        <Button icon>
                            <Icon name='eye' />
                        </Button>
                        <Button icon>
                            <Icon name='save' />
                        </Button>
                        <Button icon onClick={async() => {
                            const response = await fetch('/backend/movies/1',{method: 'DELETE'});
                                if (response.ok) {
                                    console.log("200")
                                    window.location.reload(true);
                                } else {
                                    console.log("401")
                                    }}}>
                                <Icon name='delete' />
                        </Button>
                    </Button.Group>
                    </Card>
                }>

                    <Popup.Header>User Rating</Popup.Header>
                        <Popup.Content>
                           <Rating icon = "star" rating={movie.rating} maxRating={5} disabled/>
                        </Popup.Content>
                    </Popup>
                    )})}
                    </Card.Group>
                    </Container>

                    )}
