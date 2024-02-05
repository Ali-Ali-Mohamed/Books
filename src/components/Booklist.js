import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";

import books from '../../data/books.json';

const BookList = (props) => {
    return (
        <View>
            <FlatList
            showsVerticalScrollIndicator={false}
                data={books}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                                props.navigation.navigate('Book Details', {book: item});
                            }}
                        >
                            <Text style={styles.textStyle} >{item.title}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={ (book) => book.title }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 15,
        fontSize: 45,
        paddingLeft: 10
    }
});

export default BookList;