import React from 'react';
import { Image, requireNativeComponent, Text, View } from 'react-native';


export default function Section7() {
    return (
        <View style={{ padding: 20, borderTopWidth: 1, borderBottomWidth: 1 }}>
            <View>
                <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>
            
            {/* ก้อนที่ 1 */}
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 100, height: 100 ,borderRadius: 10}} source={require('../../assets/week3/room-8.jpg')} />
                <View style={{ marginLeft: 10 }} >

                    <Text style={{ fontSize: 20 }}>Standard Twin Room </Text>
                    <Text style={{ color: "tomato" , fontSize : 20 }}>$399.99</Text>
                    <Text style={{ color: "skyblue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}