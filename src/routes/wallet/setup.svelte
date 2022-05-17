<script>
  import { session } from "$app/stores";
  import { goto } from "$lib/utils";
  import { wallet } from "$lib/store";
</script>

{#if $session.user}
    <div class="w-full px-5 md:px-0">
        <p class="mb-6 text-2xl">Welcome!  You'll need a <a href="https://liquid.net/" class="in-text-link">Liquid</a> wallet to use Token Ocean.  Choose an option to get started:</p>
    <div class="text-center flex flex-col">
      <a href="/wallet/create" class="primary-btn m-1">
        {$session.user.wallet_initialized ? "Backup" : "Create new"}
        wallet
      </a>
      <abbr title="I have my 12 word seed phrase"><a href="/wallet/import" class="secondary-btn m-1"
        >Use an existing wallet</a
      ></abbr>
    </div>
  </div>
{/if}

<style>
 .in-text-link {
     color: #0cf574;
 }
</style>
