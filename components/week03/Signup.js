import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
            <TextInput placeholder='Input id' />
            <TextInput placeholder='Input email' />
            <TextInput placeholder='Input address' />
            <TextInput placeholder='Input id' />
            <Button title='sign up' color={"tomato"}/>
            
        </View>    
    );
}


