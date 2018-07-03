const btcrDidUtils = require('./resources/btcr-did-tools-js/btcrDidUtils');

export class App {
  constructor() {
    this.styleString = 'font-family: "Courier New", Lucida Console, Monospace; white-space: pre-wrap;';

    this.header = 'Hello World!';
    this.didMethodText = null;
    this.didMethod = null;
    this.didResult = null;
    this.mainnet = false;
    this.didPGP = null;
    this.selectedChain = 'Mainnet';

    this.someOptions = ['Mainnet', 'Testnet'];
  }

  resolveDid() {
    if (this.didMethodText) {
      this.didMethod = this.didMethodText;
      this.didResult = this.selectedChain + ' BTCR Loading...';

      // did:btcr:xut7-szgq-qqhm-r4fl
      try {
        let self = this;
        btcrDidUtils.resolveFromTxref(this.didMethod, this.didResult, this.didPGP)
          .then(function(result) {
            self.didResult = JSON.stringify(result.ddophase3.publicKey[1].publicKeyPem, null, 4);
            self.didPGP = JSON.stringify(result.ddophase3.publicKey[1].publicKeyPem, null, 4);

            self.didResult = self.didResult.replace(/(?:\\[rn]|[\r\n]+)+/g, '<br>').replace(/(?:["]+)+/g, '');

            document.getElementById('pgp').innerHTML = self.didResult;

            console.log(result);
          }, function(err) {
            console.log('error retrieving data from URL');
            self.didResult = err.message;
          })
          .catch(function(err) {
            console.log(err);
          });
      } catch (err) {
        this.didResult = err;
      }
    } else {
      this.didMethod = null;
      this.didResult = null;
    }
  }
}
