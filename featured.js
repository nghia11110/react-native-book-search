'use strict';

//var React = require('react-native');
import React, { Component } from 'react';
import BookList from './booklist';

import {
    StyleSheet,
    NavigatorIOS
   } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Featured Books',
                    component: BookList
                }}
            />
        );
    }
}

//module.exports = Featured;