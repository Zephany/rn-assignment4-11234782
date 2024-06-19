import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const PopularJobs = ({companyLogo, jobTitle, companyName, price, location}) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.logoBox}>
            <Image  source={companyLogo}/>
        </View>
        <View style={styles.details}>
            <View style={styles.topInfo}>
                <Text style={{fontSize: hp('2.5%'), fontWeight: 'bold', width: wp('45%')}}>{jobTitle}</Text>
                <Text style={{fontSize: hp('2%'), fontWeight: 'bold'}}>{price}</Text>
            </View>
            <View style={styles.bottomInfo}>
                <Text style={{fontSize: hp('2%'), color: '#AFB0B6'}}>{companyName}</Text>
                <Text style={{fontSize: hp('2%'), color: '#AFB0B6'}}>{location}</Text>
            </View>
        </View>

    </TouchableOpacity> 
  )
}

export default PopularJobs

const styles = StyleSheet.create({
    container: {
        height: hp('15%'),
        width: wp('90%'),
        backgroundColor: '#FFFFF7',
        flexDirection: 'row',
        borderRadius: 20,
        paddingLeft: wp('5%'),
        paddingRight: wp('5%'),
        paddingBottom: hp('2%'),
        marginTop: hp('3%'),
        marginBottom: hp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoBox: {
        height: hp('10%'),
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    details: {
        height: hp('7%'),
        justifyContent: 'space-between',
        width: wp('65%'),
    },

    topInfo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },

    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },


})