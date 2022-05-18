import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { pickWinner } from "../../helpers/web3/api";

interface Props {
    getContractData: () => Promise<void>;
    setBtnDisabled: Dispatch<SetStateAction<boolean>>;
    btnDisabled: boolean;
    setMessage: Dispatch<SetStateAction<string>>;
}

const PickWinnerComponent: React.FC<Props> = ({...props}) => {

    const { getContractData, setBtnDisabled, btnDisabled, setMessage } = props;

    async function onPickWinnerBtnClick(event: FormEvent) {
        event.preventDefault();
        setMessage("Waiting for transaction to complete!");
        setBtnDisabled(true);
    
        await pickWinner();
    
        setBtnDisabled(false);
        setMessage("Winner has been picked!");
        setTimeout(() => {
          setMessage("");
        }, 1000 * 3);
        getContractData();
      }

  return (
    <>
      <h4>Time to pick a winner?</h4>
      <button disabled={btnDisabled} onClick={onPickWinnerBtnClick}>
        Pick a winner!
      </button>
    </>
  );
};

export default PickWinnerComponent;
