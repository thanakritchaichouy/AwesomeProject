import React from 'react';
import { Image, requireNativeComponent, Text, View } from 'react-native';


export default function Section6() {
    return (
        <View style={{ padding: 20 , borderTopWidth : 1, borderBottomWidth : 1}}> 
            <View>
                <Text>Location </Text>
            </View>
            <View>
                <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>
            <View>
            <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 }} source={require('../../assets/week3/map.jpg')} />
            </View>
        </View>
    );
}