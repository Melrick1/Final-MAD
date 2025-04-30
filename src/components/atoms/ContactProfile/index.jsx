import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

function ContactProfile({ name, email }) {
  return (
    <View style={Styles.contactInfo}>
        <Text style={Styles.contactName}>{name} :</Text>
        <View style={Styles.contactEmail}>
            <Icon name="mail" size={16} style={Styles.contactIcon} />
            <Text style={Styles.contactText}>{email}</Text>
        </View>
    </View>
  );
};

const Styles = StyleSheet.create({
    contactInfo: {
        flexDirection: 'column',
        alignItems: 'left',
        marginleft: 16,
    },
    contactName: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
    contactEmail: {
        flexDirection: 'row',
    },
    contactIcon: {
        marginRight: 6,
    },
    contactText: {
        fontSize: 16,
    },
});

export default ContactProfile;