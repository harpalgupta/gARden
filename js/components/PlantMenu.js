import React, { Component } from 'react';
import {
  // AppRegistry,
  View,
  StyleSheet,
  FlatList,


} from 'react-native';
import FadeInView from './FadeInView';

import PlantCard from './PlantCard';

// render() {
//   const { addPlantToRenderList } = this.props;
//   return (
//     <View style={styles.menu}>
//       <FlatList
//         data={[{ key: 'lavender' }, { key: 'rose' }]}
//         renderItem={({ item }) => (
//           <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
//         )}
//       />
//     </View>
//   );
// }

// class FadeInView extends Component {
//     state = {
//       fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
//     }

//     componentDidMount() {
//       const { fadeAnim } = this.state;
//       Animated.timing( // Animate over time
//         fadeAnim, // The animated value to drive
//         {
//           toValue: 1, // Animate to opacity: 1 (opaque)
//           duration: 500, // Make it take a while
//         }
//       ).start(); // Starts the animation
//     }

//     render() {
//       const { fadeAnim } = this.state;
//       const { style, children } = this.props;
//       return (
//         <Animated.View // Special animatable View
//           style={{
//             ...style,
//             opacity: fadeAnim, // Bind opacity to animated value
//           }}
//         >
//           {children}
//         </Animated.View>
//       );
//     }
// }

// You can then use your `FadeInView` in place of a `View` in your components:
class PlantMenu extends Component {
  componentDidMount = () => 1 + 1

  render() {
    const { addPlantToRenderList } = this.props;

    return (
      <View style={styles.menu}>
        <FadeInView style={{
          width: '100%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, backgroundColor: 'powderblue'
        }}
        >
          <FlatList
            data={[{ key: 'lavender' }, { key: 'rose' }]}
            renderItem={({ item }) => (
              <PlantCard plantName={item.key} addPlantToRenderList={addPlantToRenderList} />
            )}
          />
        </FadeInView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'transparent',
    width: 200,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: 0,
    height: '100%',

  }
});

export default PlantMenu;
