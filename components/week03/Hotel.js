import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Hotel() {
    return (
        <View style={{ }}>
            {/* ก่อนที่1 */}
            <View style={{flexDirection : 'row'}}> 
            <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require('../../assets/week3/room-1.jpg')} />

            </View>

            {/* ก่อนที่2 */}
            <View style={{flexDirection : 'row',marginVertical : 10}}> 
                <FontAwesome name="map-marker" size={28}color="tomato"/> 
                <Text style={{color : 'grey'}}>553 Cislason Radial </Text>
            </View>

            {/* ก่อนที่3 */}
            <View>
            <Text style={{fontSize : 20}}>Botton Hotel</Text>
             </View>

            {/* ก่อนที่4 */}
            <View>
                <View style={{flexDirection : 'row',justifyContent :"space-between",marginVertical : 10 }}>
                <FontAwesome name='star'size={20}color="orange "/>
                <FontAwesome name='star'size={20}color="orange "/>
                <FontAwesome name='star'size={20}color="orange "/>
                <FontAwesome name='star'size={20}color="orange "/>
                <FontAwesome name='star-half'size={20}color="orange "/>

                </View>
                <Text style={{color : "green" }}>100 Reviews</Text>
            </View>

            {/* ก่อนที่5 */}
            <View>
            <Text style={{fontSize : 30,color : "tomato"}}>$125</Text>   
            </View>
            
        </View>    
    );
}
