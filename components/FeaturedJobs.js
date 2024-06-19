import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react';


const FeaturedJobs = ({ companyLogo, jobTitle, companyName, backgroundColor, price, location }) => {
  return (
        <TouchableOpacity style={[styles.container, {backgroundColor}]}>
            <View style={styles.topDetails}>
                <View style={styles.logoBox}>
                <Image source={companyLogo} style={styles.logo} />
                </View>
                <View style={styles.jobInfo}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#FFFFFF'  }}>{jobTitle}</Text>
                    <Text style={{fontSize: 15, color: '#FFFFFF'}}>{companyName}</Text>
                </View>
            </View>
            <View style={styles.bottomDetails}>
                <Text style={{fontSize: 15, color: '#FFFFFF'}}>{price}</Text>
                <Text style={{fontSize: 15, color: '#FFFFFF'}}>{location}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default FeaturedJobs

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        height: 200,
        width: 300,
        borderRadius: 20,
        marginRight: 15,
        paddingTop: 20,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,

    },

    topDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    logoBox: {
        height: 50,
        width: 60,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    jobInfo: {
        marginLeft: 20,
    },

    bottomDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
    },

})