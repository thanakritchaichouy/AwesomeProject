import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Section2() {
    return (
        <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, margin: 20, padding: 20 , alignItems : 'center' , marginTop: -20 , backgroundColor : "white" }}>
            {/* ก้อนที่ 1 */}
            <View>
                <Text style={{ fontSize: 20 }}> Hilton San Francisco </Text>
            </View>
            {/* ก้อนที่ 2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <View style={{ flexDirection: 'row'  }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
            </View>
            {/* ก้อนที่ 3 */}
            <View>
                <Text style={{ color: 'gray' }}> Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
            </View>
        </View>
    );
}