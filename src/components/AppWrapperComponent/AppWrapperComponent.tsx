import React, { useEffect, useState } from "react";
import App from "../../App";
import { web3Instance } from "../../helpers/web3/config";
import WalletNotConnectedComponent from "../WalletNotConnectComponent/WalletNotConnectedComponent";

type Props = {};

const AppWrapperComponent = (props: Props) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    web3Instance.eth
      .getAccounts()
      .then(() => setIsWalletConnected(true))
      .catch(() => setIsWalletConnected(false));
  }, []);

  return <>{isWalletConnected ? <App /> : <WalletNotConnectedComponent/>}</>;
};

export default AppWrapperComponent;
