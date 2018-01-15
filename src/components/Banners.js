import React, { Component } from 'react'
import { 
    View, 
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { fetchBanners } from '../actions'
import { connect } from 'react-redux'


const styles = StyleSheet.create({
    slide: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { color: '#fff', fontSize: 30, fontWeight: 'bold' }
})

class Banners extends Component {
    // state = {
    //     data_images: [
    //         {
    //             image_link: 'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/europe/tmb_06'
    //         }, {
    //             image_link: 'https://cdn.theculturetrip.com/wp-content/uploads/2015/08/balmoral-castle-shutterstock_411483256.jpg'
    //         }, {
    //             image_link: 'https://guidetoiceland.imgix.net/9368/x/0/about-iceland-category-nature-info-.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&h=630&ixlib=php-1.1.0&w=1200&s=fc31072c9629a9f294f000e0eec622e3'
    //         }
    //     ]
    // }

    componentDidMount(){
        this.props.dispatch(fetchBanners())
    }

    render(){
        return (
            <Swiper 
                autoplay
                dotColor={'white'}
                showsButtons={false}>
                {this.props.banners.map((data, index) => (
                    <View style={styles.slide} key={index}>
                        <Image 
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: data.image }} 
                        />
                    </View>
                ))}
            </Swiper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banners: state.banners.items
    }
}

export default connect(mapStateToProps)(Banners)