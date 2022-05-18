import React, { useEffect, useState } from "react";
import "./App.scss";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LotterySubmitFormComponent from "./components/LotterySubmitFormComponent/LotterySubmitFormComponent";
import PickWinnerComponent from "./components/PickWinnerComponent/PickWinnerComponent";
import { web3Instance, lotteryInstance } from "./helpers/web3/config";

export type DataStateType = {
  manager: string;
  players: any[];
  balance: string;
};

const initialDataState: DataStateType = {
  manager: "",
  players: [],
  balance: "0",
};

function App() {
  const [data, setData] = useState<DataStateType>(initialDataState);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

  async function getContractData() {
    const manager = await lotteryInstance.methods.manager().call();
    const players = await lotteryInstance.methods.getPlayers().call();
    const balance = await web3Instance.eth.getBalance(
      lotteryInstance.options.address
    );
    setData({ ...data, manager, players, balance });
  }

  useEffect(() => {
    (async () => {
      await getContractData();
    })();
  }, []);

  return (
    <div className="App">
      <HeaderComponent data={data} />
      <hr />
      <main>
        <LotterySubmitFormComponent
          getContractData={getContractData}
          setBtnDisabled={setBtnDisabled}
          btnDisabled={false}
          setMessage={setMessage}
        />
        <hr />
        <PickWinnerComponent
          getContractData={getContractData}
          setBtnDisabled={setBtnDisabled}
          btnDisabled={false}
          setMessage={setMessage}
        />
        <hr />
        <h2>{message}</h2>
      </main>
    </div>
  );
}

export default App;
