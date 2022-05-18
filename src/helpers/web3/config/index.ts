import Web3 from "web3";
import { AbiItem } from "web3-utils";

window.ethereum.request({ method: "eth_requestAccounts" });

const address = "0x2c917c72519d9b60215Cc645eb97d6380060b549";

const abi = [
  {
    inputs: [],
    name: "enter",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address payable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "players",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const web3Instance = new Web3(window.ethereum);
export const lotteryInstance = new web3Instance.eth.Contract(
  abi as AbiItem[],
  address
);