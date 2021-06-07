import React, {useState, useRef} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import Carousel, {ParallaxImage, Pagination} from 'react-native-snap-carousel';
import {images} from '../../../assets';
export const {width, height} = Dimensions.get('screen');
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const {width: screenWidth} = Dimensions.get('window');
const DATA = [1, 2, 3, 4, 5, 6];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {entries, activeSlide} = useState('');
  const [index, setIndex] = React.useState(0);
  const isCarousel = useRef(null);
  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={images.banner2}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  return (
    <View style={{paddingTop: top + 20}}>
      <Carousel
        loop
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={DATA}
        renderItem={_renderItem}
        hasParallaxImages={true}
        onSnapToItem={item => setIndex(item)}
        autoplay={true}
      />
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#FC9733',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default HomeScreen;
// const {top} = useSafeAreaInsets();
const styles = StyleSheet.create({
  item: {
    width: width - 60,
    height: 180,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: width,
    height: 180,
    resizeMode: 'contain',
  },
});
