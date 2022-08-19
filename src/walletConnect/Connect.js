import connector from "./initiateConnection";

function Connect() {
  return (
    <div className="WalletConnect">
      <button onClick={connector.connect}>Connect Wallet</button>
    </div>
  );
}

export default Connect;