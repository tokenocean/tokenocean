<script context="module">
  export async function load({ session }) {
    if (session && session.user) {
      return {
        status: 301,
        redirect: "/",
      };
    }

    return {};
  }
</script>

<script>
  import Fa from "svelte-fa";
  import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  import { page, session } from "$app/stores";
  import { user, token } from "$lib/store";
  import { dev, err, goto } from "$lib/utils";
  import { post } from "$lib/api";
  import cryptojs from "crypto-js";
  import { tick } from "svelte";
  import { keypair, singlesig, multisig } from "$lib/wallet";
  import { onMount } from "svelte";

  let show;
  let email = "";
  let password = dev ? "liquidart" : "";

  let emailInput;
  let pageChange = () =>
    setTimeout(() => emailInput && emailInput.select(), 50);
  $: if (emailInput) pageChange($page);

  let login = async () => {
    try {
      let res = await post("/auth/login", { email, password }, fetch).json();

      $user = res.user;
      $session = { user: res.user, jwt: res.jwt_token };
      $token = $session.jwt;
      window.sessionStorage.setItem("password", password);
      window.sessionStorage.setItem("username", res.user.username);

      goto("/");
    } catch (e) {
      err(e);
    }
  };
</script>

<div class="form-container bg-primary px-4">
  <form
    class="mb-6 bg-secondary text-offblack"
    on:submit|preventDefault={login}
    autocomplete="off"
  >
    <h2 class="mb-8 text-offblack">Sign In</h2>
    <div class="flex flex-col mb-4">
      <label class="mb-2 font-medium" for="first_name">Email or username</label>
      <input
        bind:value={email}
        bind:this={emailInput}
        autocapitalize="off"
        data-cy="user"
        class="bg-offblack border-none text-white"
      />
    </div>
    <div class="flex flex-col mb-4">
      <label class="mb-2 font-medium" for="last_name">Password</label>
      <div class="relative">
        {#if show}
          <input
            class="w-full bg-offblack border-none text-white"
            bind:value={password}
            autocapitalize="off"
          />
        {:else}
          <input
            class="w-full bg-offblack border-none text-white"
            type="password"
            bind:value={password}
            autocapitalize="off"
            data-cy="password"
          />
        {/if}
        <button
          class="absolute h-full px-3 right-0 top-0 w-auto"
          type="button"
          on:click|preventDefault|stopPropagation={() => (show = !show)}
        >
          <Fa
            icon={show ? faEyeSlash : faEye}
            class="my-auto mr-1 text-brightgreen"
          />
        </button>
      </div>
    </div>
    <a href="/forgot-password" class="block w-full text-offblack"
      >Forgot password?</a
    >
    <div class="flex my-5 justify-end">
      <button
        class="bg-offblack rounded-full p-2 text-white font-bold hover:text-white w-full"
        type="submit">Sign In</button
      >
    </div>
    <a href="/register" class="text-offblack">Don't have an account? Sign up</a>
  </form>
</div>

<style>
  .form-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container form {
    width: 100%;
    max-width: 450px;

    padding: 40px;
    box-shadow: 0 1px 5px rgb(0 0 0 / 18%);
    border-radius: 10px;
  }

  input {
    @apply appearance-none border rounded leading-tight;
    padding: 0;
    padding: 10px;
  }

  @media only screen and (max-width: 640px) {
    .form-container {
      height: auto;
    }

    .form-container form {
      box-shadow: none;
      padding: 0.2rem;
      margin-top: 50px;
    }
  }
</style>
