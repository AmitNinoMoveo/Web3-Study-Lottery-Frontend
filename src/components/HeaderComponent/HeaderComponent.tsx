import React from 'react'
import { DataStateType } from '../../App';
import { web3Instance } from '../../helpers/web3/config';

interface Props{
  data: DataStateType
}

const HeaderComponent: React.FC<Props> = ({data, ...props}) => {


  const { manager, players, balance } = data;

  return (
    <header>
        <h1>Lottery Contract</h1>
        <p>This contract is managed by {manager}</p>
        <p>There are currently {players.length} people participating</p>
        <p>
          Competing to win {web3Instance.utils.fromWei(balance)} ether!
        </p>
      </header>
  )
}

export default HeaderComponent;