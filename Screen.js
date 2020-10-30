import Animated, {
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import {Button} from 'react-native';
import React from 'react';

import {Svg, Circle} from 'react-native-svg';
import {SafeAreaView, View} from 'react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function AnimatedStyleUpdateExample(props) {
  const randomWidth = useSharedValue(10);

  const animatedProps = useAnimatedProps(() => {
    return {
      transform: [1, 0, 0, 1, randomWidth.value * 100, 0],
    };
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 25;
          }}
          style={{backgroundColor: 'red'}}
        />
        <Svg
          viewBow="0 0 200 200"
          style={{borderColor: 'red', borderWidth: 2}}
          width={200}
          height={200}>
          <AnimatedCircle
            animatedProps={animatedProps}
            transform={[1, 0, 0, 1, -100, 0]}
            r={50}
            cx={100}
            cy={100}
            fill="black"
          />
        </Svg>
      </View>
    </SafeAreaView>
  );
}
