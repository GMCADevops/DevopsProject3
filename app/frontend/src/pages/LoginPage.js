import React from 'react';
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";
import Cookies from 'js-cookie';

import {Button, Image, Segment, Form, Grid, Container, Header } from 'semantic-ui-react'

export const LoginPage = () => {
    const {control, handleSubmit} = useForm();
    const history = useHistory();
    const formData = new FormData();

    const onSubmit = async(data)  => {

        formData.append('username', data.username);
        formData.append('password', data.password);
        const response = await fetch('/backend/token',{method: 'POST', body: formData});
            if (response.ok) {
                let token = await response.json();
                Cookies.set('login', token.token_type + " " + token.access_token, { sameSite: 'strict' })
                console.log("200");
                history.push("/profile");
            } else {
                console.log("401")}}
                //do something if unable to login
        return(
            <div className="LandingPage">
                <Segment>
                    <Grid>
                        <Grid.Row>
                        <Grid.Column width={16}>
                            <Container fluid textAlign='center'>
                                <Header as='h1'>This is the header</Header>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ornare suspendisse sed nisi lacus sed viverra. Sed 
                                    viverra ipsum nunc aliquet bibendum enim facilisis gravida 
                                    neque. Praesent tristique magna sit amet purus gravida quis
                                    blandit turpis. Tortor vitae purus faucibus ornare suspendisse
                                    sed. In eu mi bibendum neque egestas. Nulla facilisi etiam d
                                    ignissim diam quis enim lobortis scelerisque fermentum. Ullamcor
                                    per sit amet risus nullam eget felis eget. Lorem dolor sed viver
                                    ra ipsum nunc. Semper viverra nam libero justo laoreet sit.
                                    Consequat id porta nibh venenatis cras sed felis eget. In tellus int
                                    eger feugiat scelerisque varius morbi.
                                </p>
                            </Container>
                        </Grid.Column>
                        </Grid.Row>
    
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </Grid.Column>
                        <Grid.Column width={8}>

                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Header as='h1'>
                                    Sign into your Manja Account
                                </Header>
                                <Controller name='username'  required={true} defaultValue={""} control={control}as={<Form.Field>
                                    <label>Email</label>
                                    <input placeholder='Email' maxLength={32} />
                                </Form.Field>}/>
                                <Controller name='password'  required={true} defaultValue={""} control={control}as={<Form.Field>
                                    <label>Password</label>
                                    <input placeholder='Password' type="password" maxLength={32} />
                                </Form.Field>}/>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );

}
export default LoginPage;