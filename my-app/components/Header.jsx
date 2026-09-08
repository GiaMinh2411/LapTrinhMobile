import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'

export class Header extends Component{
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Logo</Text>
                
                <View style={styles.right}>
                    <Text style={styles.text}>Tìm   </Text>
                    <Text style={styles.text}>Giỏ hàng</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'navy',
        padding: 16,
    },
    right: {
        flexDirection: 'row',
    },
    text: {
        color: 'white',
    }
});

export default Header;