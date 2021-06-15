import React, { useEffect, useState } from 'react';
import './../scss/presale.scss';
import { ethers } from 'ethers';

import { MetamaskStateProvider, useMetamask } from 'use-metamask';
import { useStatePersist } from 'use-state-persist';

const USDT = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const DEPOSIT = '0xC0786c7f22422917bdf778Fe4ABA7F131031cD34';

const tokenAbi = [
  'function approve(address _spender, uint256 _value) public returns (bool success)',
  'function allowance(address _owner, address _spender) external view returns (uint256)',
];
const depositAbi = ['function buyTokens() public'];

function Presale() {
  const { connect, metaState } = useMetamask();

  const [tokenContract, setTokenContract] = useState({});
  const [depositContract, setDepositContract] = useState({});

  const [isApproved, setIsApproved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeposited, setIsDeposited] = useState(false);
  const [allowance, setAllowance] = useState(0);
  const [contribution, setContribution] = useStatePersist('@contributions', []);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        if (window.ethereum === undefined) return;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const token = new ethers.Contract(USDT, tokenAbi, provider).connect(
          signer,
        );
        setTokenContract(token);

        const deposit = new ethers.Contract(
          DEPOSIT,
          depositAbi,
          provider,
        ).connect(signer);
        setDepositContract(deposit);

        const account = await signer.getAddress();
        const result = await token.allowance(account, DEPOSIT);
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
  }, [allowance, tokenContract, depositContract]);

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
      'Insert the number of USDT you want to deposit',
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
            Contributions MUST be made in USD Tether (USDT) on the Ethereum
            network using the MetaMask wallet. As receipt for the contribution,
            an ERC20 token called LiquiDAO Redeem Token (rLDAO) will be
            delivered to your wallet. It grants reserved access for claiming
            LDAO tokens on the public token generation event. 1 rLDAO is equal
            to 1 USDT.
          </p>

          {metaState.isAvailable && metaState.isConnected && (
            <p className="presale__message">USDT allowance: {allowance}</p>
          )}

          {!metaState.isAvailable && (
            <button
              type="submit"
              className="presale__btn"
              onClick={() => {
                window.open(`https://metamask.io`);
              }}
            >
              Install MetaMask
            </button>
          )}
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
                {!isLoading
                  ? `Allow LiquiDAO smart contract to use your USDT`
                  : `Waiting for confirmation...`}
              </button>
            )
          ) : (
            metaState.isAvailable && (
              <button type="submit" className="presale__btn" onClick={unlock}>
                Unlock with MetaMask
              </button>
            )
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
      <a
        key={index}
        href={`https://etherscan.io/tx/${txHash}`}
        target="_blank"
        rel="noreferrer"
      >
        <p className="presale__message">{txHash}</p>
      </a>
    ))}
  </div>
);

const PresaleWithMetamask = () => (
  <MetamaskStateProvider>
    <Presale />
  </MetamaskStateProvider>
);

export default PresaleWithMetamask;
