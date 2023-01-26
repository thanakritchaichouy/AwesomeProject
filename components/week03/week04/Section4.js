import React from 'react';
import { requireNativeComponent, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={{ padding: 10 , borderTopWidth : 1, borderBottomWidth : 1}}> 
            <View>
                <Text>Hotel Description </Text>
            </View>
            <View>
                <Text>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>
    );
}