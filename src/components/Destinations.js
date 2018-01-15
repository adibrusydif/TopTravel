import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { fetchDest} from '../actions'

const img ='http://s1.ticketm.net/img/tat/dam/a/3f1/71d1373b-98d4-4347-9ab6-64d17f87f3f1_151521_CUSTOM.jpg'

class Destinations extends Component {

    componentDidMount(){
        this.props.dispatch(fetchDest())
    }

    render() {
        return (
            <View style={{ padding:10 }}>
                <Text style={{ fontSize:15 , fontWeight:'bold', marginBottom:5}}>Top ini Destinations</Text>
                <ScrollView horizontal={true}>
                    {this.props.daftar_destinasi.map((data, index) => (
                        <Image style={{width:100,height:100,borderRadius:5, marginRight:5, resizeMode:'contain'}}
                            source={{ uri: data.image }}
                            key={index}
                    />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        daftar_destinasi: state.destination.items,
        isFetching: state.destination.isFetching
    }
}

export default connect(mapStateToProps)(Destinations)