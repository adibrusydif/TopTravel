import React, { Component } from 'react'
import { View, Text, Image, ScrollView  } from 'react-native'
import { fetchReviewers } from '../actions'
import { connect } from 'react-redux'


const img ='http://s1.ticketm.net/img/tat/dam/a/3f1/71d1373b-98d4-4347-9ab6-64d17f87f3f1_151521_CUSTOM.jpg'


class Reviewers extends Component {
    componentDidMount(){
        this.props.dispatch(fetchReviewers())
    }
    render() {
        return (
            <View style={{ padding:10 }}>
                <Text style={{ fontSize:15 , fontWeight:'bold', marginBottom:5}}>Top Reviewers</Text>
                <View>
                    
                    {this.props.daftar_rev.map((data, index) => (
                        <Image style={{width:100,height:100,borderRadius:5, margin:10, resizeMode:'contain'}}
                            source={{ uri: data.avatar }}
                            key={index}
                    />
                    ))}
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isfetching: state.reviewers.isfetching,
        daftar_rev: state.reviewers.items
    }
}

export default connect(mapStateToProps)(Reviewers)