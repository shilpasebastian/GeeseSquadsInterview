import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop:20,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Poppins_500Medium',
        marginTop: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        alignItems: 'baseline'
    },
    footerText: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
    },
    signUpText: {
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
        color: '#7b68ee',
    },
});

export default styles;