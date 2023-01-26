import React from 'react';
import { View, TextInput } from 'react-native';
import MyIcon from '../week3/MyIcon';


export default function Section5() {
    return (
        <View style={{borderColor: "gray", borderRadius: 10, margin: 10, padding: -20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
                < MyIcon title='wifi' name='wifi' size={30} color= 'skyblue' />
                < MyIcon title='coffee' name='coffee' size={30} color='skyblue' />
                < MyIcon title='bath' name='bath' size={30} color='skyblue' />
                < MyIcon title='car' name='car' size={30} color='skyblue' />
                < MyIcon title='paw' name='paw' size={30} color='skyblue' />
            </View>
        </View>
            );
}