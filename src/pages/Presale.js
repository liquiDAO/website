import React, { useEffect, useState } from 'react';
import './../scss/presale.scss';
import { ethers } from 'ethers';

import { useMetamask } from 'use-metamask';
import { useStatePersist } from 'use-state-persist';

const USDT = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const DEPOSIT = '0x2820Ea87aBe5c69FE3E12DAEC54f02f57C3EF517';

const tokenAbi = [
  'function approve(address _spender, uint256 _value) public returns (bool success)',
  'function allowance(address _owner, address _spender) external view returns (uint256)',
];
const depositAbi = ['function buyTokens() public payable'];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const tokenContract = new ethers.Contract(USDT, tokenAbi, provider).connect(
  signer,
);
const depositContract = new ethers.Contract(
  DEPOSIT,
  depositAbi,
  provider,
).connect(signer);

function Presale() {
  const { connect, metaState } = useMetamask();
  const [isApproved, setIsApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeposited, setIsDeposited] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [contribution, setContribution] = useStatePersist('@contributions', []);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const account = await signer.getAddress();
        const result = await tokenContract.allowance(account, DEPOSIT);
        const formatAmt = ethers.utils.formatUnits(result, 6);

        if (formatAmt > 0) {
          setIsApproved(true);
        }

        setAllowance(formatAmt);
      } catch (ignore) {
        console.error(ignore);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [allowance]);

  const unlock = async (evt) => {
    evt.preventDefault();

    if (metaState.isAvailable && !metaState.isConnected) {
      try {
        await connect(ethers.providers.Web3Provider, 'any');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const approve = async (evt) => {
    evt.preventDefault();
    const amountAsString = prompt(
      'Insert the number of USDt you want to deposit',
    );
    if (!amountAsString) return;

    const amount = ethers.utils.parseUnits(amountAsString, 6);

    try {
      const tx = await tokenContract.approve(DEPOSIT, amount);
      setIsLoading(true);
      await tx.wait();
      setIsLoading(false);
      setIsApproved(true);
    } catch (error) {
      console.error(error);
    }
  };

  const buyWithTether = async (evt) => {
    evt.preventDefault();

    try {
      const tx = await depositContract.buyTokens();
      setIsLoading(true);
      await tx.wait();
      setIsLoading(false);
      setIsDeposited(true);
      setContribution((contrib) => [...contrib, tx.hash]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="presale">
        <h1 className="presale__title">Contribute</h1>
        <div className="presale__container">
          <p className="presale__text">
            The contributions MUST be in USD Tether (USDT) on the Ethereum
            network using MetaMask wallet. As receipt for the contribution will
            be delivered to your wallet an ERC20 LiquiDAO Redeem Token (rLDAO)
            that will grant reserved claim on the public token generation event.
            1 rLDAO is equal to 1 USDT.
          </p>

          <p className="presale__message">USDt allowance: {allowance}</p>

          {metaState.isAvailable && metaState.isConnected ? (
            isApproved && allowance > 0 ? (
              <button
                disabled={isLoading || isDeposited}
                type="submit"
                className="presale__btn"
                onClick={buyWithTether}
              >
                {!isLoading && allowance > 0
                  ? `Purchase`
                  : `Waiting for confirmation...`}
              </button>
            ) : (
              <button
                disabled={isLoading}
                type="submit"
                className="presale__btn"
                onClick={approve}
              >
                {!isLoading ? `Approve USDT` : `Waiting for confirmation...`}
              </button>
            )
          ) : (
            <button type="submit" className="presale__btn" onClick={unlock}>
              Unlock with MetaMask
            </button>
          )}
        </div>
        <h1 className="presale__title">Your transactions</h1>
        <div className="presale__container">
          {contribution.length > 0 ? (
            showContributions(contribution)
          ) : (
            <p className="presale__message">
              Your contributions will appear here
            </p>
          )}
        </div>
      </div>
    </>
  );
}

const showContributions = (txHashes) => (
  <div>
    {txHashes.map((txHash, index) => (
      <a key={index} href={`https://etherscan.io/tx/${txHash}`} target="_blank">
        <p className="presale__message">{txHash}</p>
      </a>
    ))}
  </div>
);

export default Presale;
