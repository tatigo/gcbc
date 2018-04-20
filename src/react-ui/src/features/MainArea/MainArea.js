import React, { Component } from 'react';
import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('Service Delivery Identifier', {
    clientId: '2ojiXHQ9VSeiar1SZrWjqEUoRGLmTfamxBU',
    network: 'rinkeby',
    signer: SimpleSigner('698e8a7e26ce35c9617b1e524db00edb7eb4c9af17e428c1fb2994cc70b6b5fe')
})

export const web3 = uport.getWeb3()

class MainArea extends Component {
  componentDidMount() {
    
  }

  render() {
    
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    }).then((credentials) => {
      console.log(credentials);
    })

    return (
      <div></div>
    );
  }

}

export default MainArea;
