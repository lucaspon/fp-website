<script lang="ts">
  // @ts-nocheck
  import SvelteSeo from "svelte-seo";
  import { onMount } from "svelte";

  export let assets;
  let excludedNFTs = [
    "Alphabetty Doodle Coll",
    "Avid Lines",
    "fingerprints.eth",
    "Gutter Punks Flyer - Meebits",
    "CRAYON CLUB X BAYC",
    "Meebits",
    "My Overall World",
    "Spinal Foxes",
    "SUPERPLASTIC: Cryptojankyz",
    "YELLOW PILLZ",
    "Nifty Island Totems",
    "The Jims",
    "Voxels (formerly Cryptovoxels)",
    "Temple",
    "Gallery Premium Membership Cards",
    "seoulstarsnft #133",
    "Within/Without",
    "Uninterested Unicorn #2",
    "Handsom Acade",
  ];

  function compare(a, b) {
    if (a.collection["name"] < b.collection["name"]) {
      return -1;
    }
    if (a.collection["name"] > b.collection["name"]) {
      return 1;
    }

    if (a["name"] < b["name"]) {
      return -1;
    }
    if (a["name"] > b["name"]) {
      return 1;
    }

    return 0;
  }

  onMount(assets.sort(compare));
</script>

<svelte:head>
  <title>Fingerprints | Gallery</title>
</svelte:head>

<SvelteSeo
  title="Fingerprints Collection"
  description="Fingerprints DAO, the web3.0 fine art community."
  keywords="NFT, fine art, collection"
  openGraph={{
    images: [
      {
        url: "https://lh3.googleusercontent.com/zDIjp_7f2QPD95mc0S9kRRpKGk2lhafj9950obE5269uKTWUlhG3mNes0IY9_R-gO0LQIs3WFxkj8i_JAIvaqKSGo_GAA19esYFADQ",
        width: 650,
        height: 950,
        alt: "In Translation #2 by Claudia Pawlak",
      },
    ],
  }}
/>

<main>
  <div
    class="w-full min-h-screen bg-cover bg-center z-0 animate__animated animate__fadeIn bg-gradient-to-r from-lime-200 to-green-900"
    style=""
  >
    <div class="w-full bg-black/50 min-h-screen h-fit overflow-hidden">
      <!-- LOGO -->
      <div class="h-[10vh] my-[2vh]">
        <a href="/"
          ><img src="/fp-logo-reversed.svg" alt="" class="h-full m-auto hover:animate-pulse" /></a
        >
      </div>
      <!-- GALLERY -->
      <div class="h-fit my-[2vh] w-[90%] mx-auto p-4 bg-black/60 rounded-3xl">
        <div class="text-center mt-4 mb-6"><h1>the Fingerprints collection</h1></div>
        <div class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6">
          {#await assets}
            <p>...loading gallery</p>
          {:then assets}
            {#each assets as asset}
              {#if !(excludedNFTs.includes(asset["name"]) || excludedNFTs.includes(asset["collection"]["name"]))}
                
                  <div class="m-4">
                    <a href={asset["permalink"]}>
                      <img
                      class="rounded-lg object-contain h-72 w-72"
                      src={asset["image_url"]}
                      alt=""
                      />
                    </a>
                    <div class="m-2 text-left capitalize"><p>{asset["name"]}</p></div>
                    <div class="m-2 text-left text-xs italic capitalize">
                      <p>{asset["collection"]["name"]}</p>
                    </div>
                  </div>
              {/if}
            {/each}
          {:catch error}
            <p>An error occurred!</p>
          {/await}
        </div>
      </div>
      <!-- buttons -->
      <div class="text-center my-6 text-xl">
        <!-- {#await pagination then pagination}
          {#if (pagination["previous"] !== undefined) & (pagination["previous"] !== null)}
            <a href="#" on:click={() => get(pagination["previous"])}>← previous</a>
          {/if}
          {#if (pagination["previous"] !== undefined) & (pagination["next"] !== undefined) & ((pagination["previous"] !== null) & (pagination["next"] !== null))}
            <span> | </span>
          {/if}
          {#if (pagination["next"] !== undefined) & (pagination["next"] !== null)}
            <a href="#" on:click={() => get(pagination["next"])}>next →</a>
          {/if}
        {/await} -->
      </div>
      <div class="text-center my-6 text-xl opacity-90"><a href="/">← home</a></div>
    </div>
  </div>
</main>
