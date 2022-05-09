<script>
  import SvelteSeo from "svelte-seo";
</script>

<svelte:head>
  <title>RAW | About</title>
</svelte:head>

<SvelteSeo
  title="About RAW DAO"
  description="RAW DAO, the web3.0 photography community for collectors, artists and builders."
  keywords="NFT, photography, collection"
  openGraph={{
    images: [
      {
        url: "bgs/gp-low.jpg",
        width: 500,
        height: 500,
        alt: "RAW logo",
      },
    ],
  }}
/>

<main>
  <div
    class="w-screen min-h-screen bg-cover bg-center animate__animated animate__fadeIn"
    style="background-image: url('bgs/gp-low.jpg');"
  >
    <div class="bg-black/30 min-h-screen h-fit overflow-hidden">
      <!-- LOGO -->
      <div class="h-[10vh] my-[2vh]">
        <a href="/"><img src="/raw-logo.svg" alt="" class="h-full m-auto hover:animate-pulse" /></a>
      </div>
      <!-- FAQ -->
      <div
        class="h-fit my-[2vh] w-[90%] md:w-[50%] lg:w-[40%] mx-auto p-8 md:p-12 bg-black/60 rounded-3xl"
      >
        <h1 class="mb-3">What is RAW?</h1>
        <p class="mb-10">
          RAW is a decentralized autonomous organization (DAO) established in the Ethereum mainnet
          with the purpose of pioneering ways to curate, collect and further NFT photography.<br
          /><br />
          It launched as an incubation from
          <a href="https://www.fingerprintsdao.xyz/" class="text-rawblue">Fingerprints DAO</a>, and
          has since developed its own community.
        </p>
        <h1 class="mb-3">What are $RAW tokens?</h1>
        <p class="mb-10">
          $RAW is our governance token through which enthusiasts, collectors and artists can become
          members.<br /><br />
          It also works as a means to gain exposure to our collection and wield voting power within the
          organization.
        </p>

        <h1 class="mb-3">What are the perks of RAW membership?</h1>
        <p class="mb-10">
          RAW members gain exclusive access to our private discord channels, where they can mingle
          with our collected artists and other cool members.<br /><br />
          Members can participate in the decentralized curation system, nominating collections and voting
          on which ones they believe RAW should acquire.
          <br /><br />
          You also become eligible to work for the DAO and earn ETH and special roles within the community
          (<a
            href="https://snapshot.org/#/rawdao.eth/proposal/0x12e284f4598f60cf37667c9a69b8930d12ac5f88b45b95c66b2537ec540de628"
            class="text-rawblue">learn more</a
          >).<br /><br />
          Members will also gain priority access in future drops, events and projects premiered by RAW.<br
          /><br />
          We're constantly working to expand the perks of RAW membership, so there's a lot more we can't
          anticipate!
        </p>

        <h1 class="mb-3">How does RAW's curation system work?</h1>
        <p class="mb-5">
          Every month there is a decentralized curation cycle in RAW that follows the following
          steps:
        </p>

        <table class="table-auto border border-gray-300 border-separate mb-10">
          <thead class="border border-gray-400">
            <tr class="border border-gray-400">
              <th class="border border-gray-400">Week</th>
              <th class="border border-gray-400">Activity</th>
            </tr>
          </thead>
          <tbody class="border border-gray-400">
            <tr class="border border-gray-400">
              <td class="p-2 border border-gray-400">Week 1</td>
              <td class="p-2 border border-gray-400"
                >Nomination week: members submit collection suggestions for the curation cycle, of
                which the first 20 are chosen.</td
              >
            </tr>
            <tr class="border border-gray-400">
              <td class="p-2 border border-gray-400">Weeks 2 & 3</td>
              <td class="p-2 border border-gray-400"
                >Voting weeks: members gather to discuss and vote on which of the nominated collections they believe
                RAW should acquire using an approval voting system.<br /><br />
                The top 3 voted collections will be acquired by RAW.</td
              >
            </tr>
            <tr class="border border-gray-400">
              <td class="p-2 border border-gray-400">Week 4</td>
              <td class="p-2 border border-gray-400"
                >Acquisition week: Specific pieces are chosen by the community to be acquired via
                open polls in our Discord server.</td
              >
            </tr>
          </tbody>
        </table>

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
