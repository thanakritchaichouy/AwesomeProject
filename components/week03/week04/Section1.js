import React from 'react';
import { View , Image , Text } from 'react-native';


export default function Section1() {
    return (
        <View style={{ flexDirection: 'row', marginTop: -20 }} >
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 4 }} source={require('../../assets/week3/room-6.jpg')} />
            </View>   
    );
}