const express= require('express');
const cheerio= require('cheerio');
const axios= require('axios');

const PORT= 8000;
const url= "https://www.francetvinfo.fr/";

const app= express();

axios(url)
    .then(response => {
        const html= response.data;
        const $= cheerio.load(html);
        const articles= [];
        $('.most-read__item', html).each(function(){
            const title= $(this).find('p').text();
            const href= $(this).find('a').attr('href');
            articles.push({
                title,
                href
            });
        })
       console.log(articles);
    })
    .catch(err => console.log(err));

app.listen(PORT, ()=> console.log(`server running on PORT ${PORT}`));
