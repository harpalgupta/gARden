import React, { Component } from 'react';

import {
  ViroNode, Viro3DObject, ViroQuad, ViroMaterials
} from 'react-viro';

class PlantObject extends Component {
  state = {
    isInFocus: false
  };

  toggleIsInFocus = () => {
    this.setState(prevState => ({ isInFocus: !prevState.isInFocus }));
  };

  handleDeleteClick = () => {
    const { removePlantFromRenderList, plantID } = this.props;
    removePlantFromRenderList(plantID);
  };

  render() {
    const { filesForPlant, plantName } = this.props;
    const { isInFocus } = this.state;
    ViroMaterials.createMaterials({
      [plantName]: {
        shininess: 2.0,
        lightingModel: 'Lambert',
        diffuseTexture: { uri: filesForPlant.texture[0] }
      }
    });
    return (
      <ViroNode
        position={[0, -1, -1]}
        dragType="FixedToWorld"
        onDrag={() => {}}
        onClick={this.toggleIsInFocus}
      >
        <Viro3DObject
          source={{ uri: filesForPlant.obj }}
          materials={[plantName]}
          position={[0, 0, 0]}
          scale={filesForPlant.scale}
          type="OBJ"
        />
        {isInFocus && (
          <ViroQuad
            height={0.2}
            width={0.2}
            onClick={this.handleDeleteClick}
            position={[0, 0.7, 0]}
          />
        )}
      </ViroNode>
    );
  }
}

export default PlantObject;
