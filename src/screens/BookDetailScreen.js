import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BookDetailScreen = (props) => {
    const book = props.route.params.book

    return (
        <View>
            <Text style={styles.textStyle} >Book Title:</Text>
            <Text style={styles.textStyle2} >{book.title}</Text>
            <Text style={styles.textStyle} >Book Author:</Text>
            <Text style={styles.textStyle2} >{book.author}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 15,
        fontSize: 30,
        paddingLeft: 10
    },
    textStyle2: {
        marginVertical: 15,
        fontSize: 40,
        paddingLeft: 10,
        color: 'red'
    }
});

export default BookDetailScreen;