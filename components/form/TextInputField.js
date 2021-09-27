import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function TextInputField({ fieldName, placeholder, error, touched, handleBlur, labelName, handleChange, currentValue }) {
    return (
        <View style={{paddingVertical: 3}}>
            <Text style={styles.label}>{labelName}</Text>
            <TextInput
                style={(touched && error) ? [styles.input, {borderColor: '#dc143c'}] : styles.input}
                onChangeText={handleChange(fieldName)}
                onBlur={handleBlur(fieldName)}
                value={currentValue}
                blurOnSubmit={true}
                textContentType="name"
                keyboardType="default"
                placeholder = {placeholder}
                placeholderTextColor = "#8c8e8f"
                autoCapitalize = "none"
                autoCompleteType="name"
            />
            {(error && touched) && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 14,
        borderColor: "#cbcaca",
        borderWidth: 2,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginTop: 1,
        marginBottom: 10,
        fontFamily: "Poppins",
        fontSize: 13,
        width: '100%'
    },
    label: {
        fontSize: 13,
        fontFamily: "PoppinsBold"
    },
    errorText: {
        fontSize: 13,
        fontWeight: '800',
        color: 'red',
    },
})
