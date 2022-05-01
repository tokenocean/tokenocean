<script context="module">
  export async function load({ session }) {
    if (!(session && session.user))
      return {
        status: 302,
        redirect: "/login",
      };

    return {};
  }
</script>

<script>
  import { session } from "$app/stores";
  import Fa from "svelte-fa";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { border, bg } from "./_colors";
  import { page } from "$app/stores";
  import { browser } from "$app/env";
  import { query, get } from "$lib/api";
  import { onDestroy, onMount, tick } from "svelte";
  import {
    asset,
    assets,
    balances,
    pending,
    password,
    rate as r,
  } from "$lib/store";
  import { ProgressLinear } from "$comp";
  import { getArtworksByOwner } from "$queries/artworks";
  import { assetLabel, btc, err, sats, tickers, val } from "$lib/utils";
  import { requireLogin } from "$lib/auth";
  import { getBalances } from "$lib/wallet";

  import Fund from "./_fund.svelte";
  import Withdraw from "./_withdraw.svelte";
  import Transactions from "./_transactions.svelte";

  let balance;
  balances.subscribe((b) => b && (balance = val($asset, b[$asset] || 0)));

  if (!$asset) $asset = btc;
  let name = (a) => {
    return tickers[a] ? tickers[a].name : assetLabel(a);
  };

  let funding;
  let withdrawing;

  let toggleFunding = () => {
    funding = !funding;
    withdrawing = false;
  };

  let toggleWithdrawing = () => {
    withdrawing = !withdrawing;
    funding = false;
  };

  let poll;
  let pollBalances = async () => {
    await getBalances($session);
    poll = setTimeout(pollBalances, 5000);
  };

  onMount(pollBalances);
  onDestroy(() => clearTimeout(poll));

  let getExchangeRate = async () => {
    try {
      $r = await get("/rate.json", fetch);
    } catch (e) {
      console.log(e);
    }
  };

  getExchangeRate();

  let rateInterval;
  clearInterval(rateInterval);
  rateInterval = setInterval(getExchangeRate, 30000);

  $: exchangeRateUSD = $r && $r.rateUSD;
  $: exchangeRateCAD = $r && $r.rateCAD;
  $: fiat_priceUSD = (balance * exchangeRateUSD).toFixed(2);
  $: fiat_priceCAD = (balance * exchangeRateCAD).toFixed(2);
  let fiat = "USD";
</script>

<a href="/a/create" class="primary-btn mb-5" data-cy="new-artwork"
  >Submit a new artwork</a
>

{#if $balances && $pending}
  <div class="w-full">
    {#if $assets.length > 1}
      <div class="mb-5">
        <a class="secondary-color" href="/wallet/asset">
          <div class="flex">
            <div class="px-5 md:px-0">
              {$assets.length}
              assets available in this wallet
            </div>
            <div class="my-auto ml-1">
              <Fa icon={faChevronRight} />
            </div>
          </div>
        </a>
      </div>
    {/if}

    <div class="bg-offblack/75 mb-2 pt-1 sm:rounded-lg">
      <div
        class={`border-l-8 text-center p-3 text-white text-xl w-1/2 rounded-r-full mt-5 font-bold ${border(
          $asset
        )} ${bg($asset)}`}
      >
        {name($asset)}
      </div>

      <div class="m-6">
        <div class="text-sm light-color">Balance</div>
        <div class="flex mt-3">
          <span class="text-4xl text-white mr-3">{balance}</span>
          <span class="text-gray-400 mt-auto">{assetLabel($asset)}</span>
        </div>
        {#if assetLabel($asset) === "L-BTC"}
          <div class="flex w-full mt-2">
            {#if fiat === "USD"}
              <p class="w-full">
                ${fiat_priceUSD > 0 ? fiat_priceUSD : "..."}
                <span class="text-gray-400">USD</span>
              </p>
            {:else if fiat === "CAD"}
              <p class="w-full">
                ${fiat_priceCAD > 0 ? fiat_priceCAD : "..."}
                <span class="text-gray-400">CAD</span>
              </p>
            {/if}
            <svg
              on:click={() =>
                fiat === "USD" ? (fiat = "CAD") : (fiat = "USD")}
              class="w-4 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#ffffff"
              ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                d="M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z"
              /></svg
            >
          </div>
        {/if}
      </div>
      {#if $pending && val($asset, $pending[$asset])}
        <div class="m-6">
          <div class="text-sm text-white">Pending</div>
          <div class="flex mt-3">
            <span class="light-color mr-3"
              >{$pending && val($asset, $pending[$asset] || 0)}</span
            >
            <span class="text-gray-400">{assetLabel($asset)}</span>
          </div>
        </div>
      {/if}
      <div class="flex justify-between p-6 pt-2">
        <button on:click={toggleFunding} class="button-trans-gray w-full mr-2"
          >Fund</button
        >
        <button
          on:click={toggleWithdrawing}
          class="button-trans-gray w-full ml-2"
          disabled={!balance}>Withdraw</button
        >
      </div>
    </div>
    <div>
      <Fund bind:funding />
      <Withdraw bind:withdrawing />
      <Transactions />
    </div>
  </div>
{/if}

<style>
  .dark-red {
    background: #2b0208;
  }
  .dark-green {
    background: #082527;
  }
  .dark-gray {
    background: #31373e;
  }
  .border-blue {
    border-color: #0067d9;
  }

  .bg-btc {
    background: rgba(52, 190, 171, 0.25);
  }
  .border-btc {
    border-color: #30bfad;
  }

  .light-color {
    color: #f4f4f4;
  }

  .active {
    @apply border-t-2 border-b-2 border-r-2 text-white;
  }

  button:disabled {
    @apply text-gray-400 border-gray-400;
  }
</style>
