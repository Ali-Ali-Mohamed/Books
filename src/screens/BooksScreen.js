import React from "react";
import { StyleSheet, View } from "react-native";

import BookList from "../components/Booklist";

const BooksScreen = (props) => {

    return (
        <View>
            <BookList navigation={props.navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 5,
        marginHorizontal: 7
    }
});

export default BooksScreen;