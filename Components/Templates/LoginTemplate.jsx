import React, { Fragment, Component, useState, useEffect } from "react";
import {
  Container,
  Footer,
  FooterTab,
  H1,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
  ListItem,
  CheckBox,
  Content,
  Card,
  CardItem,
  Spinner,
  Form,
  Input,
  Item
} from "native-base";
import { firebase_sign_in,firebase_sign_in_omar,firebase_sign_in_anonymous } from "../../Hooks/useAuth";




const LoginTemplate = ({navigate}) => {
	const [username, updateUserName] = useState('');
	const [password, updatePassWord] = useState('');


	return(
    <Fragment>
<Container>
<Header>

</Header>
<Content>
<Form>
            <Item>
              <Input 


				onChangeText={(email) =>{updateUserName(email)}}              
              	value={username} 
              	placeholder="Username" />



            </Item>
            <Item last>
              <Input
				onChangeText={(password) =>{updatePassWord(password)}}              
              	value={password} 
              	placeholder="Password" />
            </Item>
             <Button onPress={() =>firebase_sign_in_omar(username, password, navigate)}>
            <Text>Submit</Text>
          </Button>
          </Form>

<Body>

</Body>

<Text>holla</Text>
</Content>
</Container>
    </Fragment>
	)

}
export default LoginTemplate