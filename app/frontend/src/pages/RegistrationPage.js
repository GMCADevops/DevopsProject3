import React from 'react';
import { useHistory } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";

import {Image, Segment, Form, Grid, Container, Header, Button } from 'semantic-ui-react'


export const RegistrationPage = () => {

  const {control, handleSubmit} = useForm();
  const history = useHistory();

  const onSubmit = async(data)  => {
          console.log(data)
          const response = await fetch('/backend/users/',
          {method: 'POST', headers : {'Content-Type':'application/json'}, body: JSON.stringify(data)});
              if (response.ok) {
                console.log("200");
                history.push("/login");
              } else {
                  console.log("401")
                  //add something here to say bad request / most likely will be email taken.
                }}
    return(
        <div className="RegistrationPage">
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
        <div onSubmit={handleSubmit(onSubmit)}>
          <Header as='h1'>Create your Manja Account</Header>
          <Form>
          <Controller as={Form.Input}
              label="Email Address"
              placeholder='Email'
              defaultValue={""}
              name='email'
              control={control}
              pattern="^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$"
              required={true}
              maxLength={32}
              />
            <Controller as={Form.Input}
              label="First Name"
              placeholder='First Name'
              defaultValue={""}
              name='first_name'
              control={control}
              required={true}
              pattern="[A-Za-z]+"
              maxLength={20}
              />
            <Controller as={Form.Input}
              label="Last Name"
              placeholder='Last Name'
              defaultValue={""}
              name='last_name'
              control={control}
              required={true}
              pattern="[A-Za-z]+"
              maxLength={20}
              />
            <Controller as={Form.Input}
              label="Password"
              type="password"
              placeholder='Password'
              defaultValue={""}
              name='password'
              control={control}
              required={true}
              minLength={7}
              maxLength={32}
              />
              <label for="Gender">Gender</label>
            <Controller name="gender" label="Gender" required={true} defaultValue={""} control={control} as={
              <select>
                <option placeholder='Gender'></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            }/>

            <div style={{marginTop:10}}>
            <Button type='submit'>Submit</Button>
            </div>
          </Form>
        </div>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Segment>
        </div>
    );
}
export default RegistrationPage;