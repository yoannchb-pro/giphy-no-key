import got from 'got';

async function GiphySearch(name = ""){
    const formated = name.split(' ').join('-').toLowerCase();

    const reponse = await got(`https://giphy.com/search/${formated}`);
    const body = reponse.body;

    const iterator = body.matchAll(/gifs:\s?([\s\S]*)(,[\s\n\t]*nextUrl)/gi);

    const value = iterator.next().value[1];
    
    const json = JSON.parse(value);

    json.forEach(element => {
        element.img = `https://media1.giphy.com/media/${element.id}/200w.webp`;
        element.embed = `<iframe style="pointer-events: none;" src="https://giphy.com/embed/${element.id}" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
        element.embedURL = `https://giphy.com/embed/${element.id}`;
    });

    return json;
}

export default GiphySearch;