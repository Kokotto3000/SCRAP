// const express= require('express');
const cheerio= require('cheerio');
const axios= require('axios');

// const PORT= 8000;
const url= "https://www.francetvinfo.fr/";

const rss= "https://www.francetvinfo.fr/titres.rss";

// const app= express();

const article= [];

// axios(url)
//     .then(response => {
//         const html= response.data;
//         const $= cheerio.load(html);
        
//         $('.card-article-majeure', html).each(function(){
//             const title= $(this).find('h2').text();
//             const href= $(this).find('a').attr('href');
//             article.push({
//                 title,
//                 href
//             });
//         });
//        return article;
//     })
//     .then(data => {
//         axios("https://www.francetvinfo.fr" + data[0].href)
//         .then(response=> {
//             const html= response.data;
//             const $= cheerio.load(html);
            
//             $('article', html).each(function(){
//                 const subtitle= $(this).find('.c-chapo').text();
//                 const img= $(this).find('img').attr('src');
//                 const content= $(this).find('.c-body').find('p').text();
//                 //récupérer aussi date et auteur...
//                 article.push({"data" : {
//                     subtitle,
//                     img,
//                     content
//                 }});
//             })
//             console.log(article);
//         })
//         .catch(err=> console.log("err : " + err));
//     })

//     .catch(err => console.log(err));

axios(rss)
    .then(response => {
        const rss= response.data;
        // console.log(html)
        const $= cheerio.load(rss, {
            xml: true
        });

        $('title').each(function() {
            const title= $(this).text();
            console.log("title : " + title)
        });
    })
    .catch(err=> console.log("err : " + err));

// app.listen(PORT, ()=> console.log(`server running on PORT ${PORT}`));
