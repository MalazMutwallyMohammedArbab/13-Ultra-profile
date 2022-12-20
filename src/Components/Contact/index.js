import React from 'react';
import Foter from './../Footer'
import { ContactSection, ContactTitle, Span, Form, FormInput, Input, InputText, InputEmail, InputExp, TextArea, InputSubmit } from './style.js'

const Contact = () => {
    return (
      <React.Fragment>
        <ContactSection>
            <div class="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
        <Foter />
      </React.Fragment>
    )
}

export default Contact;