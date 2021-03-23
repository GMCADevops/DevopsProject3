import React  from 'react';
import {Form , Button ,Header} from "semantic-ui-react"
import { useForm, Controller } from "react-hook-form";
import Cookies from 'js-cookie';


export const ProfileForm = () => {
    const {control, handleSubmit} = useForm();
    const onSubmit1 = async(data)  => {
        console.log(data)
        const response = await fetch('/profile/edit',
        {method: 'POST', headers : {'Content-Type':'application/json', "Authorization": Cookies.get("login")}
        , body: JSON.stringify(data)});
            if (response.ok) {
              console.log("200");
              //add something here to clean up the form
            } else {
                console.log("401")
                //add something here to say bad request / most likely will be email taken.
              }}

    return(
      <div onSubmit={handleSubmit(onSubmit1)}>
        <Header as='h1'>update your Manja Account details</Header>
        <Form>
          <Controller as={Form.Input}
              label="Email Address"
              placeholder='Email'
              name='email'
              defaultValue={""}
              control={control}
              pattern="^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$"
              required={true}
              maxLength={32}
              />
            <Controller as={Form.Input}
              label="First Name"
              placeholder='First Name'
              name='first_name'
              defaultValue={""}
              control={control}
              required={true}
              pattern="[A-Za-z]+"
              maxLength={20}
              />
            <Controller as={Form.Input}
              label="Last Name"
              placeholder='Last Name'
              name='last_name'
              defaultValue={""}
              control={control}
              required={true}
              pattern="[A-Za-z]+"
              maxLength={20}
              />
            <Controller as={Form.Input}
              label="Password"
              type="password"
              placeholder='Password'
              name='password'
              defaultValue={""}
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
        
    )
}