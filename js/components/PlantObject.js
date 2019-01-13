import React, { Component } from 'react';

import {
  ViroNode, Viro3DObject, ViroQuad, ViroMaterials
} from 'react-viro';

const deleteButton = require('../res/deleteButton.png');

class PlantObject extends Component {
  state = {
    isInFocus: false
  };

  toggleIsInFocus = () => {
    this.setState(prevState => ({ isInFocus: !prevState.isInFocus }));
  };

  handleDeleteClick = () => {
    const {
      removePlantFromRenderList, plantID, plantName, lowerPlantCounterByType
    } = this.props;
    removePlantFromRenderList(plantID);
    lowerPlantCounterByType(plantName);
  };

  render() {
    const { filesForPlant, plantName } = this.props;
    const { isInFocus } = this.state;
    ViroMaterials.createMaterials({
      [plantName]: {
        shininess: 2.0,
        lightingModel: 'Lambert',
        diffuseTexture: { uri: filesForPlant.texture[0] }
      },
      deleteButton: {
        shininess: 2.0,
        lightingModel: 'Lambert',
        diffuseTexture: deleteButton
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
            height={0.15}
            width={0.15}
            onClick={this.handleDeleteClick}
            position={[0, 0.7, 0]}
            materials={['deleteButton']}
            transformBehaviors="billboardY"
          />
        )}
      </ViroNode>
    );
  }
}

export default PlantObject;
