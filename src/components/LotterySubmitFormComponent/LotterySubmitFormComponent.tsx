import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { enterLottery } from "../../helpers/web3/api";

interface Props {
  getContractData: () => Promise<void>;
  setBtnDisabled: Dispatch<SetStateAction<boolean>>;
  btnDisabled: boolean;
  setMessage: Dispatch<SetStateAction<string>>;
}

const LotterySubmitFormComponent: React.FC<Props> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState("");

  const { getContractData, setBtnDisabled, btnDisabled, setMessage } = props;

  async function onEntrySubmit(event: FormEvent) {
    event.preventDefault();
    // Reset form input
    const ethAmount = inputValue;
    setInputValue("");
    // Prevent further submits
    setBtnDisabled(true);
    // Show message
    setMessage("Waiting for transaction to complete!");
    // Send request
    await enterLottery(ethAmount);
    // Show message
    setMessage("You were added to the pool!");
    setTimeout(() => {
      setMessage("");
    }, 1000 * 3);
    // Get updated data by rerendering the component.
    getContractData();
    // Enable submit
    setBtnDisabled(false);
  }

  return (
    <form onSubmit={onEntrySubmit}>
      <h4>Want to try your luck?</h4>
      <div>
        <label>Amount of ether to enter</label>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
      </div>
      <button disabled={btnDisabled}>Enter</button>
    </form>
  );
};

export default LotterySubmitFormComponent;
