import GiphySearch from './giphy-no-key.js';

(async ()=>{
    const demonSlayer = await GiphySearch("Demon slayer");

    console.log(demonSlayer[0].img, demonSlayer[0].embedURL, demonSlayer[0].embed);
})();