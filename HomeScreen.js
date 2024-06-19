import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FeaturedJobs from './components/FeaturedJobs';
import PopularJobs from './components/PopularJobs';

const ProfilePic = require('./assets/profile-picture.png');
const OnlineCircle = require('./assets/online-circle.png');
const SearchImage = require('./assets/search-image.png');

export default function HomeScreen({ route }) {
    
    const {name, email} = route.params

    const FeaturedJobsData = [
        {id: '1', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Software Engineer', companyName: 'Facebook', backgroundColor: '#4169E1', price: '$130,00', location: 'Accra, Ghana' },
        {id: '2', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Cloud Engineer', companyName: 'Google', backgroundColor: '#151B54', price: '$110,00', location: 'Accra, Ghana' },
        {id: '3', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Security Analyst', companyName: 'Google', backgroundColor: '#0E7C78', price: '$140,00', location: 'Accra, Ghana' },
        {id: '4', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'IT Systems Engineer', companyName: 'Facebook', backgroundColor: '#92860D', price: '$100,00', location: 'Accra, Ghana' },
        {id: '5', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Data Scientist', companyName: 'Google', backgroundColor: '#D3383F', price: '$190,00', location: 'Accra, Ghana' },
        {id: '6', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'Web Developer', companyName: 'Facebook', backgroundColor: '#964E00', price: '$120,00', location: 'Accra, Ghana' },
        {id: '7', companyLogo: require('./assets/googleLogo.png'), jobTitle: 'Computer Engineer', companyName: 'Google', backgroundColor: '#125913', price: '$150,00', location: 'Accra, Ghana' },
        {id: '8', companyLogo: require('./assets/facebookLogo.png'), jobTitle: 'UX/UI Developer', companyName: 'Facebook', backgroundColor: '#B23737', price: '$90,00', location: 'Accra, Ghana' },
    ];

    const PopularJobsData = [
        {id: '1', companyLogo: require('./assets/burger-king-logo.png'), jobTitle: 'Jr Executive', companyName: 'Burger King', price: '$96,000/y', location: 'Los Angeles, US' },
        {id: '2', companyLogo: require('./assets/beats-logo.png'), jobTitle: 'Product Manager', companyName: 'Beats', price: '$84,000/y', location: 'Florida, US' },
        {id: '3', companyLogo: require('./assets/facebook-logo.png'), jobTitle: 'Product Manager', companyName: 'Facebook', price: '$86,000/y', location: 'Florida, US' },
        {id: '4', companyLogo: require('./assets/facebook-logo.png'), jobTitle: 'Senior Developer', companyName: 'Facebook', price: '$110,000/y', location: 'Cambridge, UK' },
        {id: '5', companyLogo: require('./assets/burger-king-logo.png'), jobTitle: 'HR Specialist', companyName: 'Burger King', price: '$98,000/y', location: 'London, UK' },
        {id: '6', companyLogo: require('./assets/facebook-logo.png'), jobTitle: 'Account Coordinator', companyName: 'Facebook', price: '$88,000/y', location: 'Texas, US' },
        {id: '7', companyLogo: require('./assets/beats-logo.png'), jobTitle: 'Sales Representative', companyName: 'Beats', price: '$75,000/y', location: 'Johannesburg, SA' },
        {id: '8', companyLogo: require('./assets/burger-king-logo.png'), jobTitle: 'Java Developer', companyName: 'Burger King', price: '$99,500/y', location: 'Mumbai, IN' },
    ]
    
    
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>{ name }</Text>
                    <Text style={{fontSize: hp('2.5%'), color: '#95969D'}}>{ email }</Text>
                </View>
                <View style={styles.image}>
                    <TouchableOpacity>
                    <Image source={ ProfilePic }/>
                    <Image source={OnlineCircle} style={styles.isOnline}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
            <View style={styles.search}>
                <View style={styles.searchSpace}>
                    <Image source={SearchImage}/>
                    <TextInput style={styles.searchBox} placeholder='Search a job or position' />
                </View>
                <View>
                    <TouchableOpacity>
                    <View style={styles.filter}>
                        <View>
                        <Text>|</Text>
                        <Text>O</Text>
                        </View>
                        <View>
                        <Text>O</Text>
                        <Text style={{marginLeft: wp('1%')}}>|</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.featuredJobsBox}>
                <View style={styles.jobsHeading}>
                    <Text style={{fontSize:hp('3%'), fontWeight: 'bold'}}>Featured Jobs</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: hp('2%'), color: '#95969D', paddingTop: hp('0.5%')}}>See all</Text>
                    </TouchableOpacity>
                </View> 
                <FlatList
                    data={FeaturedJobsData}
                    renderItem={({ item }) => (
                        <FeaturedJobs 
                            companyLogo={item.companyLogo}
                            jobTitle={item.jobTitle}
                            companyName={item.companyName}
                            backgroundColor={item.backgroundColor}
                            price={item.price}
                            location={item.location}
                        />
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.PopularJobsBox}>
                <View style={styles.jobsHeading}>
                    <Text style={{fontSize:hp('3%'), fontWeight: 'bold'}}>Popular Jobs</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: hp('2%'), color: '#95969D', paddingTop: hp('0.5%')}}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={PopularJobsData}
                    renderItem={({ item }) => (
                        <PopularJobs  
                        companyLogo={item.companyLogo}
                        jobTitle={item.jobTitle}
                        companyName={item.companyName}
                        price={item.price}
                        location={item.location}
                        />
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        width: wp('100%'),
        paddingLeft: wp('5%'),
        paddingBottom: hp('3%'),    
    },

    profile: {
        marginTop: hp('5.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: wp('5%'),
        marginBottom: hp('1%'),
    },

    image: {
        flexDirection: 'row',
    },

    isOnline: {
        position: 'absolute',
        top: 6,
        left: 40,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 4,
    },

    search: {
        width: wp('90%'),
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        MarginRight: 5,
        height: hp('7%'),
      },

      searchSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        width: wp('73%'),
        borderRadius: 10, 
        paddingLeft: 10,
      },

      searchBox: {
        height: 50,
        width: wp('60%'),
        padding: 10,
        fontSize: hp('2%'),
        fontWeight: 'bold',  
      }, 

      filter: {
        width: wp('13%'),
        height: hp('7%'),
        backgroundColor: '#D3D3D3',
        borderRadius: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    featuredJobsBox: {
        height: 290,
        marginTop: hp('3%'),
    },

    jobsHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: wp('6%'),
    },

})