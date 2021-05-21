import { useEffect } from 'react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';


const CustomAmplifyAuthenticator = () => {
 
  return (<AmplifyAuthenticator usernameAlias="email">
    <AmplifySignUp
      slot="sign-up"
      usernameAlias="email"
      formFields={[
        {
          type: "email",
          label: "Email as Username",
          placeholder: "Email",
          inputProps: { required: true, autocomplete: "example@gmail.com" },
        },
        {
          type: "password",
          label: "Password",
          placeholder: "Password",
          inputProps: { required: true, autocomplete: "new-password" },
        },
        {
          type: "name",
          label: "Full Names",
          placeholder: "Full Names",
          inputProps: { required: true }
        },
        {
          type: "birthdate",
          label: "Date of birth",
          placeholder: "Date of birth",
          inputProps: { required: true, type: "date" }
        },
      ]}
      
    />
    <AmplifySignIn slot="sign-in" usernameAlias="email" />

  </AmplifyAuthenticator>);
};


export default CustomAmplifyAuthenticator;
