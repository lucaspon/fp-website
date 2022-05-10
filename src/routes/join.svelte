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
  <title>Fingerprints | Join</title>
</svelte:head>

<main>
  <div
    class="w-screen min-h-screen bg-cover bg-center z-0 animate__animated animate__fadeIn overflow-hidden"
    style="background-image: url({bg});"
  >
    <div class="w-full bg-black/50 min-h-screen h-fit overflow-hidden">
      <!-- LOGO -->
      <div class="h-[10vh] my-[2vh]">
        <a href="/"
          ><img
            src="/fp-logo-reversed.svg"
            alt=""
            class="h-full m-auto hover:animate-pulse"
          /></a
        >
      </div>
      <!-- INFO -->
      <div class="h-fit my-[2vh] w-[90%] md:w-[50%] lg:w-[40%] mx-auto p-8 md:p-12 bg-black/60 rounded-3xl">
        <h1 class="mb-5 text-lg">Fingerprints is a web3.0 fine art community for collectors, artists and builders.</h1>
        <h1 class="mb-5 text-lg">To join, follow these steps:</h1>
            <div class="my-2 text-rawblue"><a href="https://metamask.io/">1: get enough ETH in a Metamask wallet (or similar)</a><br></div>
            <div class="my-2 text-rawblue"><a href="#">2: acquire at least 500 $PRINTS tokens</a><br></div>
            <div class="my-2 text-rawblue"><a href="https://discord.gg/aePw7mqz6U">3: join our discord</a><br></div>
            <div class="my-2 text-rawblue"><a href="#">4: head over to #🔗|join-here and authenticate your $PRINTS tokens</a><br></div>
            <div class="my-2 text-rawblue"><a href="#">5: welcome! read the #❕|onboarding channel for more information</a><br></div>
        </div>
        <div class="text-center my-6 text-xl"><a href="/">← back</a></div>
  </div>
</main>

<style>
</style>
