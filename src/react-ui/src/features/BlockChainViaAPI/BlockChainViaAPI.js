import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { Tabs, TabSection } from '../Tabs/Tabs';

class BlockChainViaAPI extends Component {
  componentDidMount() {
    this.props.fetchCharacter();
  }

  render() {
    const character = this.props.isFetching ? <RefreshIndicator
      size={50}
      top={0}
      left={0}
      loadingColor="#FF9800"
      status="loading"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}
    /> :
      this.props.locations.map(character =>
        <p>Name {character[0]}</p>)

    return (
      <div className="home-page-container">
        {character};
      </div>
    );
  }

}

export default BlockChainViaAPI;
