import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    StyleSheet,
    Platform,
    Text,
} from 'react-native';

const Nugget = (props: {
    title: string;
    body: string;
    imageUrl: string;
    topic: any;
    id: any;
    uid: string;
    date: any;
    profilePicUrl: string;
    firstName: string;
    lastName: string;
}) => {
    return (
        <View key={props.id} style={styles.feedItem}>
            <View style={styles.flex}>
                <Image style={styles.tinyLogo} source={{ uri: 'https://s5f26875f62f33kkydxbzqs8.devcloud.acquia-sites.com/' + props.profilePicUrl }} />
                <Text style={styles.title} >  {props.title}</Text>
            </View>
            <Text>{props.body}</Text>
            <Text style={styles.credits}>Author: {props.firstName + " " + props.lastName + " @" + props.uid}</Text>
        </View>
    );
}
export default Nugget;


const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row'
    },
    title: {
        fontWeight: '500'
    },
    credits: {
        marginTop: 10,
        color: 'red'
    },
    feedItem: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
    },
    leftCol: {},
    rightCol: {},
    nameRow: {},
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});