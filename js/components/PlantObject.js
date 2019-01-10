import React, { Component } from 'react';

import { ViroNode, Viro3DObject, ViroButton } from 'react-viro';

class PlantObject extends Component {
  state = {};

  render() {
    const { filesForPlant } = this.props;
    return (
      <ViroNode
        position={[0, -1, -1]}
        dragType="FixedToWorld"
        onDrag={() => {}}
        onClick={() => {
          // addDeleteButton;
        }}
        // key={`${plant}_${index}`}
      >
        <Viro3DObject
          source={filesForPlant.source}
          resources={filesForPlant.resources}
          position={filesForPlant.position}
          scale={filesForPlant.scale}
          type={filesForPlant.type}
        />
        <ViroButton
          source={{ uri: 'http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bee1.png' }}
          height={0.2}
          width={0.2}
          onClick={() => {
            // console.log('ive been clicked');
          }}
          position={[0, 0.7, 0]}
        />
      </ViroNode>
    );
  }
}

export default PlantObject;
