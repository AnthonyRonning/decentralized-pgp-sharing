# Decentralized PGP Sharing Abstract

## Purpose:
Provide a trusted way to share, verify, and update PGP public keys. 

## Problem:
Currently, sharing PGP keys has a number of security concerns, some of which are so common that most people will forgo opsec in order to get what needs to be done, which is usually to get a message across to another party. 

### Centralized Dynamic Hosting:
- Users can host PGP keys on centralized servers that allow seamless updates to their keys, and a single point where communicators can come to in order to always have their latest public key. Example: Keybase. 
- This becomes a problem because a user account could be hacked, through numerous means, and their PGP keys could be updated with the attacker's keys. 
- Communicators updating their reference to a hacked user's PGP keys will have knowledge that a PGP key was updated, but not know that it's now illegitimate. 
- New communicators that have not imported the user's PGP keys before will have no knowledge that the current PGP key is that of an attacker's. 
### Static Hosting:
- Users can host PGP keys on centralized/decentralized servers that can not be updated. This helps provide a reference to communicators so they know that the contents of the PGP key they visit cannot be changed or altered by a 3rd party. 
- Centralized static hosting still has faults and trust issues, and no guarantee that a 3rd party did not change the PGP key.
  - Example: Centralized forums that show if a post has been edited can be used to show that their PGP key was not updated, although admins might be able to change the contents of a post without an "edited" flag showing. 
- Unfortunately, a communicator can never really know where the correct link is. A user can post their static hosting link in chat messages, online forums, etc. but who is to know that the user has not been hacked and posting false links to PGP keys belonging to an attacker? Existing communicators that have had enough trusted conversation with a user can have a high level of certainty that the link they have been given is correct and can use that link in the future, but new/early communicators will have some doubt. 
- If a user needs to update their PGP keys, and cannot edit the contents where their old key is stored (such as IPFS), there's many problems here:
  - Existing communicators might have an old/insecure reference to the old public key and not know that a new key is in play. 
  - A user will have to propagate a link to the new key somewhere/somehow. This is a concern because the means of this propagation could have came from a hacked account, and such, communicators need to be weary of communicating with a new PGP key. 
    - New PGP keys that have been signed by old keys have less concern here. 

## Solution:
By using Decentralized Identifiers with the option to provide a continuation link, a one time reference to a DID will always provide the latest PGP key when resolved. 

By the nature of leveraging blockchain technologies for this, the PGP key trail can always be audited, so you know what PGP key is being used at any point in time, as well as the frequency of updates. 

A blockchain private key is required for updates and is not subject to centralized accounts being hacked (as long as a user is not using centralized blockchain key management), and as such, these keys need to especially be safeguarded. The use of hardware wallets or cold storage can keep blockchain key management secure as well. 

While DID's can use dynamic hosting, in order to best provide trusted PGP sharing, the use of IPFS with DID's is suggested. 

## Drawbacks:
- The same DID can provide countless amounts of updates to a PGP key, but if at any point, the DID needs to change (whether because of general rotation or a compromise in blockchain private keys), then it shares similar concerns as decentralized static hosting, although less frequent.
- If a blockchain private key has been compromised and an update to a PGP key now references that of an attacker's, then it shares similar concerns with dynamic hosting, where a communicator does not know if an update has been compromised. 

## Conclusion
Using DIDs for PGP keys does not eliminate some of the problems with PGP keys today, but it does drastically cut down on single points of failure. By adding the complexity of blockchain and common use of hardware wallets / cold storage to manage blockchain keys, we can eliminate centralized PGP key hosting concerns while still providing a single source of truth. 
