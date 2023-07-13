import React from 'react' ;
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'
  import { Landing } from './landing';
  import { TabsList } from './tabs';
  
export const Application : React.FC<{}> = props => {
    const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  if (!isConnected) {
    return (
        <>
        <Landing></Landing>
        </>
    )
  }
  else {
  return (<TabsList></TabsList>)
}
}