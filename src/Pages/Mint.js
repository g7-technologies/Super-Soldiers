import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../Containers/Mint.styled";
import { Icon } from "@iconify/react";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };


  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  
  const [ counter, setCounter ] = useState(1)
  function decrementCounter () {
      if(counter <= 1) {
          setCounter(1);
      }else {
          setCounter(counter - 1);
      }
  }

  return (
    <Wrapper>
      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <div className="counter-container">
          <p className="center_align">
            The sale has ended.
          </p>
          <p className="center_align">
              You can still find {CONFIG.NFT_NAME} on
          </p>
          <div className="mintbutton-group">
            <div className="connect_button">
              <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <>
              <p className="center_align">
                  Connect to the {CONFIG.NETWORK.NAME} network
              </p>
              <div className="mintbutton-group">
                <div className="connect_button">
                {(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?
                  <a target={"_blank"} href={CONFIG.DEEPLINK}>
                    Connect
                  </a>
                  :
                  <button onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }}>
                    Connect
                  </button>
                }
                </div>
                {blockchain.errorMsg !== "" ? (
                    <p className="center_align">
                      {blockchain.errorMsg}
                    </p>
                ) : null}
              </div>
            </>
          ) : (  
            <div>
              <h4 className="center_align">NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}</h4>
              <p className="center_align">
                1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
              </p>
              <div className="mintbutton-group">
                <div className="counter-container">
                  <button onClick={decrementMintAmount}>
                    <Icon icon="akar-icons:minus" />
                  </button>
                  <div className="counter" id="nft_amount">{mintAmount}</div>
                  <button onClick={incrementMintAmount}>
                    <Icon icon="akar-icons:plus" />
                  </button>
                </div>
                <div className="button">
                  <button onClick={(e) => {e.preventDefault(); claimNFTs(); getData(); }}>
                    {claimingNft ? "Minting In Process" : "Mint Now"}
                  </button>
                </div>
              </div>
              {
                feedback == "Sorry, something went wrong please try again later." ?
                <p className="fs-6 mt-2 text_danger">
                  {feedback}
                </p>
                :
                <p className="fs-6 mt-2 right_align">
                  {feedback}
                </p>
              }
              
            </div>
          )
        }
        </div>
      )}
    </Wrapper>
  );
}

export default Mint;
