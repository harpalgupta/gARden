import React, { Component } from 'react';
import { Animated } from 'react-native';


class FadeInView extends Component {
    state = {
      fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    }

    componentDidMount() {
      const { fadeAnim } = this.state;
      Animated.timing( // Animate over time
        fadeAnim, // The animated value to drive
        {
          toValue: 100, // Animate to opacity: 1 (opaque)
          duration: 500, // Make it take a while
        }
      ).start(); // Starts the animation
    }

    render() {
      const { fadeAnim } = this.state;
      const { style, children } = this.props;
      return (
        <Animated.View // Special animatable View
          style={{
            ...style,
            right: fadeAnim, // Bind opacity to animated value
          }}
        >
          {children}
        </Animated.View>
      );
    }
}

export default FadeInView;
