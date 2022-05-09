export async function get() {
  let merged = [];
  let pagination = {
    next: null,
    previous: null,
  };
  let url;
  let key = 'b726e508da2d44cbbaa31eaf601d5c38';
  let i = 0;

  do {
    if (pagination["next"] === null) {
      url = "https://api.opensea.io/api/v1/assets?" + new URLSearchParams({ owner: "0xbc49de68bcbd164574847a7ced47e7475179c76b" }).toString();
    } else {
      url = "https://api.opensea.io/api/v1/assets?" + new URLSearchParams({ owner: "0xbc49de68bcbd164574847a7ced47e7475179c76b" }).toString() + "&limit=50" + "&cursor=" + pagination['next'];
    }

    const response = await fetch(url, {
      headers: {
        "x-api-key": key,
      },
    });

    const data = await response.json();
    const next = await data["next"];
    const previous = await data["previous"];
    pagination = {
      next: next,
      previous: previous,
    };

    merged.push(data["assets"]);
    console.log(pagination);

    i++

  } while (pagination["next"] !== null || i === 0);

  let assets = [].concat.apply([], merged);

  return {
    body: {
      assets: assets  
    },
  };
}
