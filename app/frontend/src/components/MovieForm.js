import React, { useState } from 'react'
import { Form, Input, Rating, Button, Container } from 'semantic-ui-react';
import Cookies from 'js-cookie';
//this is a test
export const MovieForm = ({onNewMovie}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(1);
    const [genre, setGenre] = useState("")
    const [release, setRelease] = useState()
    return(
        <div>
            <Container>
                <Form>
                    <Form.Field>
                        <Input required placeholder="Movie title" value={title} onChange={e =>setTitle(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Rating icon='star' rating={rating} maxRating={5} onRate={(_, data)=> setRating(data.rating)}></Rating>
                    </Form.Field>
                        <Form.TextArea required placeholder="Description" value={description} onChange={e =>setDescription(e.target.value)}>
                    </Form.TextArea>
                        <Input required placeholder="Genre" value={genre} onChange={e =>setGenre(e.target.value)}/>
                        <Input required placeholder="Release date" value={release} onChange={e =>setRelease(e.target.value)}/>
                    <Form.Field>
                        <Button onClick={async() => {
                            if (title.length >= 2 && description.length > 10){
                                const movie = {title, rating, description, release, genre}
                                console.log(movie)
                                const response = await fetch('/users/' + Cookies.get("id") + '/movies/',
                                {method: 'POST', headers : {'Content-Type':'application/json'}, body: JSON.stringify(movie)});
                                    if (response.ok) {
                                        console.log("200");
                                            onNewMovie(movie)
                                            setTitle('')
                                            setRating(1)
                                            setDescription('')
                                    } else {
                                        console.log("401")}}}}>
                                        Submit
                        </Button>
                    </Form.Field>
                </Form>
            </Container>
        </div>
    )
}