# Carmel Security Model

The bulk of the cryptographic security in Carmel, resides within the Carmel Desktop App. That's where the Carmel Wallet lives and that's where blockchain transactions are signed. The way Carmel secures the Desktop App is through a secure vault, tied to the developer's machine and heavily protected by both symmetric and assymetric encryption, as well as password hashing and secure local password storage. The Carmel Vault is secured using advanced cryptographic algorithms and it is practically impossible to compromise. The Security Model has 5 layers of security:

1. A Carmel **Vault** is secured with strong **symmetric encryption** using a 256-bit Vault Key. The cipher used is an **AES-256-GCM** cipher. See [Vault Security](#vault-security) for more details on how your data stored in a Carmel Vault is secured and [how secure it really is](#practically-unbreakable) (hint: it's practically unbreakable).

2. The **Vault Key** is computed from a Machine Secret with Elliptic Curve Cryptography (ECC), using the Elliptic Curve Digital Signature Algorithm (ECDSA) and the **Secp256k1** standard and hashed using **HMAC-SHA256**. Have a look at [Vault Key Security](#vault-key-security) for details about the way Carmel secures the Vault Key.

3. The **Machine Secret** is secured with strong password encryption from a **Master Password** using the **BIP38** standard. See [Machine Secret Security](#machine-secret-security) for more details.

4. The **Machine Hash** is stored in the System Keychain. Depending on the host system, that's either the **Mac Keychain**, the **Linux Secret Service API** or the **Windows Credential Vault**.

5. The **System Keychain** is protected natively by the host system using the **Keychain Password**.

## Threat Exposure

To crack a Carmel Vault, an attacker will need to either:

1. decrypt the vault data directly by guessing the AES-256 key, or
2. get access to the host system and crack both the System Keychain Password and the Master Password.

The first attack would take billions of times more than the age of the universe, as [described in detail below](#practically-unbreakable).

The second attack would take more effort than cracking any of your other sensitive information, like your online passwords, your access keys or your other saved passwords.

This attack is **much harder than stealing your other passwords** like your email account password or your favorite social media account password because the attacker would have to not only crack a password, but two - and to steal your computer.

It's also **harder than stealing your remote service access keys** like your AWS secret keys or your SSH private keys, because those are saved in plaintext on the host system and the attacker would only have to compromise your system, whereas with Carmel, they would also have to crack your System Keychain Password and your Master Password.

This attack is **harder than to accomplish than stealing other passwords** from your System Keychain, like WiFi passwords or any other saved passwords, because with Carmel the attacker would also have to crack the Master Password as well.

## Vault Security

First, every Carmel Vault gets encrypted from the cleartext JSON format, using symmetric encryption.

A Carmel Vault is encrypted with [AES [1]](#aes-standard), the strongest symmetric standard available. AES is the [US federal government standard [2]](#aes-security) for classified information.

The AES key used for Carmel Vaults is a 256-bit key that creates an incredibly large number of possible solutions, making it practically impossible to crack.

In terms of security, a Carmel Vault is rock solid and as secure as top secret US information and as secure as top password managers like [1password [3]](#1password-security-model), [DashLane [4]](#dashlane-security-whitepaper) or [LastPass [5]](#lastpass-security-model) - they all use AES-256 encryption.

As its mode of operation, Carmel uses a highly efficient and performant mode, called the [Galois/Counter Mode [6]](#galois-counter-mode) mode, making it very difficult to break because it includes an authentication factor in addition to the base encryption.

Carmel also uses **pseudorandom numbers** to generate vectors and nonces, which means that the algorithm is implemented in the most secure way possible, without leaving any open doors for algorithm-based weaknesses.

#### Practically Unbreakable

AES has never been cracked. If that happens - considering that it's at the heart of all security systems from the US government to the best password managers out there - the whole world will essentially collapse and the security of your data will be the least of your worries.

The computational complexity of AES-256 is 2<sup>256</sup> - that's how difficult it is to crack it. That means there are that many possible solutions to guess the private key used for encryption. That's a big number - a really, really big number.

To understand how secure AES-256 encryption is against brute force attacks, consider the following. The [world's top supercomputer [7]](#top-supercomputer) called Sunway TaihuLight, has a computing power of 93 petaflops. That's 93 x 10<sup>15</sup> floating point operations per second (flops). In the most, absolute most conservative estimation, it would an attacker would require a minimum of 1000 flops to computer an AES key. In practice it could take much more than that. But if we assume 1000, then that means that the top supercomputer in the world could check 93 x 10<sup>12</sup> (93 x 10<sup>15</sup>/1000) combinations per second. With 31536000 seconds in a year (365 x 24 x 60 x 60) and given AES-256's computational complexity of 2<sup>256</sup> that means that it would take **3.31 x 10<sup>56</sup> years** to crack the encryption.

That's many, many **billions of times longer than the age of our universe.**

The best known attack against AES is called the [Biclique attack [8]](#biclique-attack) and all that it did is reduce computational complexity from  2<sup>256</sup> to 2<sup>254.4</sup> which is practically irrelevant.

Even if you apply the best known attack and use many of the world's top supercomputers, it would still take billions of years to crack a Carmel Vault.d

## Vault Key Security

It's impossible to break the vault as long as the Vault Key is not in plain sight. That means a Carmel Vault Key has to be secured as well. If we can use a symmetric encryption algorithm (AES) for encrypting a vault, we cannot do the same for keys because we want these to be shared and we don't want to have to share the Vault Key as that would be highly insecure. We do however, want to make sure the Vault Key is [as secure as the Vault itself](#practically-unbreakable).

In other words, we want a Carmel Vault Owner to secure send a vault to themselves on another machine or to someone else without having to share the Vault Key. In order to accomplish this Carmel uses [Elliptic Curve Cryptography [9]](#elliptic-curve-cryptography) to secure the Vault Key in a shareable way.

The specific Elliptic Curve algorithm used is Elliptic Curve Digital Signature Algorithm (ECDSA) using [Secp256k1 [10]](#secp256k1), which is the same algorithm used in Bitcoin, Ethereum and other blockchains such as [EOS [11]](#eos-security). The computation complexity is the same as for AES-256 and thus the key is as secure as the vault itself against brute force attacks and as secure as Bitcoin and Ethereum private keys.

The Machine Signature represents the public Elliptic Curve Cryptography (ECC) key and the private ECC key is the Machine Secret. The Vault Key is generated by hashing the computed ECC secret resulting from the ECC computation, using HMAC-SHA256.

When a Carmel Vault is locked (encrypted), it is signed using the Machine Signature of the machine on which it was encrypted. That effectively means that the Vault can only be unlocked (decrypted) on that same machine. A vault can be  shared from one machine to another by signing it using both Machine Ids. The shared vault can be unlocked on either one of those machines.

## Machine Secret Security

The Machine Secret constitutes the ultimate access to the Vault Key. Using that, the Vault Key can be computed and using the Vault Key, the Vault itself can be decrypted.

The Machine Signature is not a security concern and it does not need to be protected so Carmel keeps it in cleartext, stored in a cleartext file on the filesystem and uses this file to identify the host machine. The Machine Secret on the other hand, is extremely sensitive and it is not kept in plain sight anywhere on the Machine. It is the ECC private key and needs to be heavily secured.

At the same time, in case this key, the Machine Secret is lost, we want to have a mechanism by which it can be retrieved. That's why Carmel uses a Machine Mnemonic, a 12-word [mnemonic phrase [12]](#mnemonic-phrase) based on the **BIP39 standard** which can be used to recover the Machine Secret.

**The Machine Mnemonic is stored outside of the Carmel system and its security falls outside the scope of Carmel.**

Carmel goes to great lengths to secure the Machine Secret by encrypting it with a Master Password using the [BIP38 standard [13]](#bit38-standard), the same standard used to secure blockchain addresses, such as in [encrypted paper wallets [14]](#encrypted-paper-wallets).

In addition to encrypting the Machine Secret, Carmel stores it in the machine's system keychain. The very place where all secure information is stored. This is much safer than the filesystem, where sensitive information like SSH keys are stored. Meaning that the Carmel Machine Secret much is safer than a typical access key used to connect to a secure remote server or service.

Even if the machine itself is physically compromised, the machine's system keychain is usually password protected using a form of administrator password and the attacker would have to obtain that password too.

This all means, that even if the machine is compromised and the machine's administrator password is cracked and the native keychain is exposed, the Machine Secret is still protected by the Master Password.

## References

###### 1. [AES Standard](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf)
###### 2. [AES Security](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard#Security)
###### 3. [1password Security Model](https://support.1password.com/1password-security/)
###### 4. [DashLane Security Whitepaper](https://www.dashlane.com/download/Dashlane_SecurityWhitePaper_Dec2017.pdf)
###### 5. [LastPass Security Model](https://www.lastpass.com/how-lastpass-works)
###### 6. [Galois/Counter Mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode)
###### 7. [Top supercomputer](https://en.wikipedia.org/wiki/Sunway_TaihuLight)
###### 8. [Biclique attack](https://en.wikipedia.org/wiki/Biclique_attack)
###### 9. [Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)
###### 10. [Secp256k1](https://en.bitcoin.it/wiki/Secp256k1)
###### 11. [EOS Security](https://github.com/EOSIO/eos/blob/af648f70a7d4cc90760c1e5e140e07b4b452354e/libraries/fc/src/crypto/elliptic_mixed.cpp)
###### 12. [Mnemonic phrase](https://en.bitcoin.it/wiki/Mnemonic_phrase)
###### 13. [BIP38 Standard](http://cryptocoinjs.com/modules/currency/bip38/)
###### 14. [Encrypted Paper Wallets](https://bitcoinpaperwallet.com/bip38-password-encrypted-wallets/)
