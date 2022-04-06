<script context="module">
  export const prerender = true;
</script>

<script>
  import branding from "$lib/branding";
</script>

<div class="container mx-auto sm:justify-between mt-10 md:mt-20">
  <div class="mx-auto">
    <h2 class="mb-10">FAQ</h2>
    <div class="faq-content">
      <div class="faq">
        <h3>Dive in</h3>
        <p class="!mb-5 font-bold">
          Welcome to tokenocean.io, you're ready to mint your first NFT!
        </p>
        <ol class="list-decimal space-y-4 px-10 mb-[80px]">
          <li>
            You will need a bitcoin, liquid, or lightning wallet, we recommend <a
              href="https://coinos.io"
              target="_blank"
              rel="noreferrer">coinos.io</a
            >
            which is the easiest for all three -- click
            <b>register an account</b>, create a username and password, and you
            now have a liquid wallet.
          </li>
          <li>
            You will need to fund this wallet (bitcoin - we recommend <a
              href="https://kraken.com"
              target="_blank"
              rel="noreferrer">Kraken</a
            >
            they are available in many countries or you can locate a
            <a href="https://coinatmradar.com" target="_blank" rel="noreferrer"
              >bitcoin ATM</a
            >
            in your area,
            <a
              href="https://thebitcoinmanual.com/buying-btc/lightning/"
              target="_blank"
              rel="noreferrer">lightning</a
            >,
            <a
              href="https://help.blockstream.com/hc/en-us/articles/900000630846-How-do-I-get-Liquid-Bitcoin-L-BTC"
              target="_blank"
              rel="noreferrer">liquid</a
            >). As it's only 3 cents to mint, 5000 sats or $3 will do for your
            first 100 NFTs.
          </li>
          <li>
            Create an account on <a href="/register"
              >https://market.tokenocean.io</a
            > and go through all of the steps.
          </li>
          <li>
            Fund the Token Ocean liquid wallet from your liquid/coinos wallet.
            Wait 120 seconds.
          </li>
          <li>Now you should be able <b>Submit a new artwork</b>.</li>
        </ol>

        <h3>What's an NFT?</h3>

        <p>
          An NFT is a non-fungible token, a kind of digital bearer asset that
          represents ownership of a unique item or property. NFT's are designed
          to be distinguishable from each other so that no two tokens are the
          same, making them ideal for representing collectibles.
        </p>

        <h3>How do I use them?</h3>

        <p>
          NFT’s can be issued on different blockchains and networks. On {branding.projectName},
          they're created on the Liquid Network, a Bitcoin layer-2 solution and
          sidechain, that can be stored in any wallet that supports Liquid
          assets. {branding.projectName} offers a free built-in web wallet that gets
          used by default.
        </p>

        <h3>How are they created?</h3>

        <p>
          When an artist first uploads an image or video file for an artwork,
          the file is added to the IPFS network and assigned a hash number that
          uniquely identifies the contents of the file. The artist's {branding.projectName}
          wallet will then generate a Liquid asset issuance transaction containing
          the artwork's title and its hash and broadcast it to be permanently recorded
          in the Liquid blockchain.
        </p>

        <h3>Who can publish their art here?</h3>

        <p>Anyone!</p>

        <h3>
          What’s different about {branding.projectName} compared to other NFT platforms?
        </h3>

        <p>
          {branding.projectName} is the first NFT platform that uses the Bitcoin
          Liquid Network instead of Ethereum, Counterparty, or any other centralized,
          expensive, and hackable altcoins. The Liquid Network is a Bitcoin layer-2
          solution and sidechain where transaction fees are denominated in Liquid
          Bitcoin (L-BTC), which is pegged 1:1 to bitcoin.
          <br />
          <br />

          Transaction fees on Liquid are orders of magnitude cheaper than on the
          Bitcoin or Ethereum networks. Liquid also supports native asset
          issuance and atomic swaps, making it possible for people who don't
          know or trust each other to exchange their different tokens and assets
          directly in a single transaction without needing to go through a
          trusted 3rd party escrow agent.
        </p>

        <h3>
          How much are fees on {branding.projectName}?
        </h3>

        <p>
          Currently, it is 50 sats (0.0000005 BTC) or less than three cents per
          asset issuance, and 100 sats (0.000001 BTC) for listing and auctions.
          That's a notable difference from say Ethereum which is typically
          $50-250 USD to mint as of writing this. The lowest bid price allowed
          is 1,000 sats (0.00001 BTC). The only pricing we have other than the
          cost of using the liquid network, is we charge a 3% transaction fee on
          every sale. Easy peasy.
        </p>

        <h3>How do I get some L-BTC?</h3>

        <p>
          To bid or list art on Token Ocean, patrons will need to have some
          L-BTC in their Token Ocean wallets. The easiest way to fund your
          account is to send onchain BTC or bitcoin on the Lighting Network to
          your Token Ocean wallet, and it will auto-convert to L-BTC. You can
          also watch <a
            href="https://www.youtube.com/watch?v=LxY3oxLQhA8"
            target="_blank">this video tutorial</a
          >
          to learn how to use the SideSwap mobile app to turn BTC into L-BTC.
        </p>
      </div>
      <div class="contact boxShadow bg-secondary/25">
        <p>Need more help?</p>
        <ul>
          <li>
            <a
              href="mailto:{branding.emails.support}"
              target="_blank"
              rel="noreferrer">Email support</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  h3 {
    @apply mt-8;
  }
  p,
  h3 {
    @apply mb-4;
  }

  .faq-content {
    display: flex;
  }

  .faq-content p {
    margin-bottom: 80px;
  }

  .contact {
    height: 300px;
    width: 800px;
    padding: 30px;
    margin-left: 50px;
  }
  .contact p {
    margin-bottom: 30px;
    font-size: 22px;
    border-radius: 10px;
  }
  .contact h5 {
    margin-bottom: 10px;
  }

  .contact a,
  .faq a {
    color: #0cf574;
  }

  @media only screen and (max-width: 1023px) {
    h3 {
      font-weight: bold;
    }
    .faq-content {
      flex-wrap: wrap;
    }
    .contact {
      width: 100%;
      margin: 30px 0;
    }
  }
</style>
