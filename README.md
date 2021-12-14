# Giphy No Key v1.0.0

## Installation

```
npm i giphy-no-key
```

## How to use ?
Import

```js
import GiphySearch from 'giphy-no-key';
```

Search a media

```js
const name = "Demon Slayer";
const demonSlayer = await GiphySearch(name);
console.log(demonSlayer[0].img, demonSlayer); //image and [...]
```

## Example

```js
import GiphySearch from 'giphy-no-key';

(async ()=>{
    const demonSlayer = await GiphySearch("Demon slayer");

    console.log(demonSlayer[0].img, demonSlayer[0].embedURL, demonSlayer[0].embed);
})();
```