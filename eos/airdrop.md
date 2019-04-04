### Carmel Airdrop

**Total Distribution Budget:** *3.1464b CARMEL*

*Distribution Algorithm:*

1. **Sanitize** base snapshot
2. Separate wallets in **9 levels** based on EOS stake
3. Use the reversed Fibonnaci sequence to assign a **distribution factor** to each level
4. Assign a **variance** based on the **midrange/mean** ration for each level
5. Calculate Level Budget as **EOS holdings x distribution factor x variance**

### Base Snapshot
* **Date:** April 2nd, 2019
* **Total wallets:** 893,475
* [Download CSV file](https://www.eossnapshots.io/data/2019-04/20190402_account_snapshot.csv) (*courtesy of eossnapshots.io*)

### Sanitized Snapshot
* Excludes wallets with less than 10 EOS
* Excludes Block.one and related wallets
* Excludes eosio system wallets
* Exclude exchange and exchanged related wallets (binance, okex, okb, bitfinex, bithumb, chintai, dexeos, gate, kraken, newdex, huobi, stagexchange, otcbtc, eosps, zbeos)
* **Total remaining sanitized wallets:** 174,772
* **Total EOS:** 542.12 million
* [Download Sanitized CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402.sorted.csv)

### Distribution Levels

**Level 1** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level1.sorted.csv))

* **EOS Stake Range:** 10 - 100 EOS
* **Total wallets:** 84,889
* **Total EOS:** 3.12m
* **Distribution Factor:** 34 (*9th Fibonnaci number*)
* **Midrange:** 55
* **Mean:** 36.75
* **Variance:** 1.50 (midrange/mean)

  **DISTRIBUTION BUDGET:** 158.74m (3.12m x 34 x 1.50)

**Level 2** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level2.sorted.csv))

* **EOS Stake Range:** 100 - 1k EOS
* **Total wallets:** 64,415
* **Total EOS:** 20.30m
* **Distribution Factor:** 21 (*8th Fibonnaci number*)
* **Midrange:** 550
* **Mean:** 315.14
* **Variance:** 1.75 (midrange/mean)

  **DISTRIBUTION BUDGET:** 743.99m (20.30m x 21 x 1.75)

**Level 3** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level3.sorted.csv))

* **EOS Stake Range:** 1k - 5k EOS
* **Total wallets:** 17,385
* **Total EOS:** 35.55m
* **Distribution Factor:** 13 (*7th Fibonnaci number*)
* **Midrange:** 3,000
* **Mean:** 2,044.87
* **Variance:** 1.47 (midrange/mean)

  **DISTRIBUTION BUDGET:** 678.02m (35.55m x 13 x 1.47)

**Level 4** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level4.sorted.csv))

* **EOS Stake Range:** 5k - 10k EOS
* **Total wallets:** 3,067
* **Total EOS:** 20.65m
* **Distribution Factor:** 8 (*6th Fibonnaci number*)
* **Midrange:** 7,500
* **Mean:** 6,732.96
* **Variance:** 1.11 (midrange/mean)

  **DISTRIBUTION BUDGET:** 184.02m (20.65m x 8 x 1.11)

**Level 5** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level5.sorted.csv))

* **EOS Stake Range:** 10k - 50k EOS
* **Total wallets:** 2,999
* **Total EOS:** 58.89m
* **Distribution Factor:** 5 (*5th Fibonnaci number*)
* **Midrange:** 30,000
* **Mean:** 19,636.55
* **Variance:** 1.53 (midrange/mean)

  **DISTRIBUTION BUDGET:** 449.85 (58.89m x 5 x 1.53)

**Level 6** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level6.sorted.csv))

* **EOS Stake Range:** 50k - 100k EOS
* **Total wallets:** 437
* **Total EOS:** 29.61m
* **Distribution Factor:** 3 (*4th Fibonnaci number*)
* **Midrange:** 75,000
* **Mean:** 67,757.44
* **Variance:** 1.11 (midrange/mean)

  **DISTRIBUTION BUDGET:** 98.33m (29.61m x 3 x 1.11)

**Level 7** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level7.sorted.csv))

* **EOS Stake Range:** 100k - 1m EOS
* **Total wallets:** 425
* **Total EOS:** 112.40m
* **Distribution Factor:** 2 (*3rd Fibonnaci number*)
* **Midrange:** 550,000
* **Mean:** 264,470.59
* **Variance:** 2.08 (midrange/mean)

  **DISTRIBUTION BUDGET:** 467.50m (112.40m x 2 x 2.08)

**Level 8** ([CSV file](http://files.carmel.io/snapshots/eos_snapshot_20190402_level8.sorted.csv))

* **EOS Stake Range:** 1m - 5m EOS
* **Total wallets:** 82
* **Total EOS:** 152.18m
* **Distribution Factor:** 1 (*2nd Fibonnaci number*)
* **Midrange:** 3,000,000
* **Mean:** 1,855,853.66
* **Variance:** 1.62 (midrange/mean)

  **DISTRIBUTION BUDGET:** 246.00m (152.18m x 1 x 1.62)


**Level 9** ([CSV file](http:// files.carmel.io/snapshots/eos_snapshot_20190402_level9.sorted.csv))

* **EOS Stake Range:** 5m-15m EOS
* **Total wallets:** 12
* **Total EOS:** 109.42m
* **Distribution Factor:** 1 (*1st Fibonnaci number*)
* **Midrange:** 10,000,000
* **Mean:** 9,118,333.33
* **Variance:** 1.10 (midrange/mean)

  **DISTRIBUTION BUDGET:** 120.00m (109.42m x 1 x 1.10)
