function shortenTxid(txid) {
  return txid.slice(0, 15) + "..." + txid.slice(-15);
}

export { shortenTxid };
