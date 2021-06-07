import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {images} from '../../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{paddingTop: top + 20}}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop={true}
        autoplayLoopKeepAnimation={true}
        showPagination
        paginationStyle={{
          marginVertical: -40,
        }}
        paginationDefaultColor={'#E7E7E7'}
        paginationActiveColor={'#FC9733'}
        paginationStyleItem={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 5,
        }}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image style={styles.images} source={images.banner2}></Image>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
export const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  images: {
    height: 180,
    resizeMode: 'contain',
  },
});
