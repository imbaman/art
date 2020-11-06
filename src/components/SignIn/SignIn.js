import React from 'react'
import {Container, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, FormButton,FormContent} from './SignInElements'

const SignIn = () => {

    


    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Logo</Icon>
                <FormContent>
                    <Form action="#">
                    <FormH1>Sign in</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput  type="email" required/>
                     <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput  type="password" required/>
                     <FormButton type='submit'>Continue</FormButton>
                     </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SignIn
