import {useConnect} from 'wagmi'

export const Landing : React.FC<{}> = props => {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect() ;
    return (
    <>
    <h4>Welcome to Landing Page </h4>
    <br></br>
    <h5>Lets Connect Your wallet </h5>
    <div>
      {connectors.map((connector) => (
        <>
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
        <br></br>
        </>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>
    </>
    )
}