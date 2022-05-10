<script>
  import SvelteSeo from "svelte-seo";

  let bgs = [
    'bgs/salt-1.jpg',
    'bgs/salt-2.jpg',
    'bgs/salt-3.jpg',
    'bgs/salt-4.jpg',
    'bgs/salt-5.jpg',
    'bgs/salt-6.jpg',
  ]
  
  let bg = bgs[Math.floor(Math.random()*bgs.length)];



</script>

<SvelteSeo
  title="Fingerprints"
  description="Fingerprints DAO, the web3.0 fine art community."
  keywords="NFT, fine art, collection"
  openGraph={{
    images: [
      {
        url: "bgs/rawlogo-seo.png",
        width: 500,
        height: 500,
        alt: "FP logo",
      },
    ],
  }}
/>

<main>
  <div
    class="w-screen h-screen bg-cover bg-center z-0 animate__animated animate__fadeIn"
    style="background-image: url('{bg}');"
  >
    <div class="w-full h-full bg-black/60 overflow-hidden text-center flex justify-center items-center">
      <!-- LOGO -->
      <div class="">
        <img
          src="/logo-animated.gif"
          alt=""
          class="mt-16 md:mt-20 h-56 md:h-64 m-auto"
        />
        <!-- HEADLINE -->
        <p class="mt-4 md:mt-8 md:text-2xl mx-8">
          the web3.0 community for fine art
        </p>
        <!-- ICONS -->
        <div class="mt-8 columns-4 flex justify-center">
          <div class="my-auto mx-4 md:mx-8 lg:mx-12">
            <a href="https://discord.gg/aePw7mqz6U">
              <img
                src="/discord.svg"
                alt=""
                class="h-12 opacity-100 transition ease-in-out hover:opacity-75"
              />
            </a>
          </div>
          <div class="my-auto mx-4 md:mx-8 lg:mx-12">
            <a href="https://twitter.com/FingerprintsDAO">
              <img
                src="/twitter.svg"
                alt=""
                class="h-12 opacity-100 transition ease-in-out hover:opacity-75"
              />
            </a>
          </div>
          <div class="my-auto mx-4 md:mx-8 lg:mx-12">
            <a href="https://snapshot.org/#/fingerprints.eth">
              <img
                src="/snapshot.svg"
                alt=""
                class="h-12 opacity-100 transition ease-in-out hover:opacity-75"
              />
            </a>
          </div>
          <div class="my-auto mx-4 md:mx-8 lg:mx-12">
            <a href="https://opensea.io/0xbc49de68bcbd164574847a7ced47e7475179c76b">
              <img
                src="/opensea.svg"
                alt=""
                class="h-12 opacity-100 transition ease-in-out hover:opacity-75"
              />
            </a>
          </div>
        </div>
        <!-- LINKS -->
        <div class="mt-8 mb-24 md:mt-10 h-44 text-xl grid grid-rows-4">
          <div>
            <a href="/about" class="">about</a>
          </div>
          <div>
            <a href="/join" class="">join here</a>
          </div>
          <div>
            <a href="/gallery" class="">our collection</a>
          </div>
          <!-- <div>
            <a href="https://anchor.fm/rawreview" class="">RAW review podcast</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
