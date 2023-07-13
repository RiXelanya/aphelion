import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'


export function TabsList() {
    const [value , setValue] = React.useState("one");
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
      const { address, connector, isConnected } = useAccount()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
    const { disconnect } = useDisconnect();
    return (
        <>
        <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Wallet" />
        <Tab value="two" label="Mint" />
      </Tabs>
    </Box>
    {value === "one" && 
    <>
    <div>Connected to {connector!.name}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
        </>
        }
    {value === "two" && 
    <>
    <p>hello</p>
    </>
    }
        </>
    )
}