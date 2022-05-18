import { lotteryInstance, web3Instance } from "../config";

export async function enterLottery(ethAmount: string): Promise<void> {
  const accounts = await web3Instance.eth.getAccounts();

  await lotteryInstance.methods.enter().send({
    from: accounts[0],
    value: web3Instance.utils.toWei(ethAmount, "ether"),
  });

  return;
}

export async function pickWinner() {
  const accounts = await web3Instance.eth.getAccounts();

  await lotteryInstance.methods.pickWinner().send({ from: accounts[0] });
  return;
}
