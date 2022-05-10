<script>
  import SvelteSeo from "svelte-seo";

  let bgs = [
    "bgs/salt-1.jpg",
    "bgs/salt-2.jpg",
    "bgs/salt-3.jpg",
    "bgs/salt-4.jpg",
    "bgs/salt-5.jpg",
    "bgs/salt-6.jpg",
  ];
  let bg = bgs[Math.floor(Math.random() * bgs.length)];
</script>

<svelte:head>
  <title>Fingerprints | About</title>
</svelte:head>

<SvelteSeo
  title="About Fingerprints DAO"
  description="Fingerprints DAO, the web3.0 photography community for collectors, artists and builders."
  keywords="NFT, photography, collection"
  openGraph={{
    images: [
      {
        url: "bgs/gp-low.jpg",
        width: 500,
        height: 500,
        alt: "FP logo",
      },
    ],
  }}
/>

<main>
  <div
    class="w-screen min-h-screen bg-cover bg-center animate__animated animate__fadeIn overflow-hidden"
    style="background-image: url({bg});"
  >
    <div class="bg-black/50 min-h-screen h-fit overflow-hidden">
      <!-- LOGO -->
      <div class="h-[10vh] my-[2vh]">
        <a href="/"><img src="/fp-logo-reversed.svg" alt="" class="h-full m-auto hover:animate-pulse" /></a>
      </div>
      <!-- FAQ -->
      <div
        class="h-fit my-[2vh] w-[90%] md:w-[50%] lg:w-[40%] mx-auto p-8 md:p-12 bg-black/60 rounded-3xl"
      >
        <h1 class="mb-3">What is Fingerprints?</h1>
        <p class="mb-10">
          Fingerprints is a decentralized autonomous organization (DAO) established in the Ethereum
          mainnet with the purpose of pioneering ways to curate, collect and further blockchain art.<br
          /><br />
        </p>
        <h1 class="mb-3">What are $PRINTS tokens?</h1>
        <p class="mb-10">
          $PRINTS is our governance token through which enthusiasts, collectors and artists can
          become members.<br /><br />
          It also works as a means to gain exposure to our collection and wield voting power within the
          organization.
        </p>

        <h1 class="mb-3">What are the perks of Fingerprints membership?</h1>
        <p class="mb-10">
          Fingerprints members gain exclusive access to our private discord channels, where they can
          mingle with our collected artists and other cool members.<br /><br />
          <br />
          You also become eligible to work for the DAO and earn ETH and special roles within the community
          (<a href="#" class="text-rawblue">learn more</a>).<br /><br />
          Members will also gain priority access in future drops, events and projects premiered by RAW.<br
          /><br />
          We're constantly working to expand the perks of Fingerprints membership, so there's a lot more
          we can't anticipate!
        </p>

        <h1 class="mb-3">How does Fingerprints' curation system work?</h1>
        <p class="mb-5">[TBD]</p>

        <h1 class="mb-3">How do I become a member?</h1>
        <p class="">
          Just follow the instructions in our <a href="/join" class="text-rawblue">join page</a>.
        </p>
      </div>

      <!-- back button -->
      <div class="w-full h-[4vh] my-[6vh] text-xl text-center">
        <a href="/" class="">← back</a>
      </div>
    </div>
  </div>
</main>

<style>
</style>
