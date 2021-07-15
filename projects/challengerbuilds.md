---
title: Challenger Builds
description: "Challenger Builds helps League of Legends players build the best items for their champions. It looks at the matches of hundreds of different challenger players across servers and finds the best builds."
firsttwohundredchars: "Challenger Builds helps League of Legends players build the best items for their champions. It looks at the matches of hundreds of different challenger players across servers and finds the best builds..."
date: "2021.07.15"
path: "challengerbuilds"
---

### Description

Challenger Builds helps League of Legends players build the best items for their champions. It looks at the matches of hundreds of different challenger players across servers and finds the best builds.

It is hosted on AWS: <a href="https://www.challengerbuilds.net/" target="_blank" rel="noopener noreferrer">https://www.challengerbuilds.net/</a>

Github Repo: <a href="https://github.com/KarahanGuner/lol-app" target="_blank" rel="noopener noreferrer">https://github.com/KarahanGuner/lol-app</a> 

<br/>

### Technologies Used

Challenger Builds is created using React for the frontend and Express for the backend. Data for the matches are fetched every morning from the Riot Games API. The website is hosted on AWS. I used Elastic Beanstalk to quickly set it up. I did not use any external libraries for styling. I wanted to get better at CSS, so I used CSS only.

<br/>

### Performance

I am satisfied with how the performance turned out. Everything works smoothly and Lighthouse scores are great.

<img src="/images/projects/challengerbuilds/chalbuildsperformance-min.jpg" alt="Performance Scores" style="width:100%">

<br/>
<br/>

### Riot Games API

To be able to use the Riot Games API, you need an API key. There are two types of keys: Development and Production. Anyone can get a Development key, but they reset every day and have much lower Rate Limits. To get a Production Key, you have to have your application approved by the Riot Games. Approvel process is fairly simple. You create a working prototype using the Development Key, you apply, a Riot Games employee reviews your application and decides if you can get the key or not. Review process took less than a week, but I have heard from some people in the community that theirs took more than two weeks.

Even though they are much higher, there are Rate Limits to the Production Key. At the time of writing this, mine are: 500 requests every 10 seconds 30000 requests every 10 minutes. Even though it may seem a lot, this limit created challenges in the development. 

Lots and lots of data is needed to give players different build options. To achieve this, every week my server fetches 300 challenger players from the three major servers: NA, EUW, KR. Every day the server fetches the last 50 matches from each of these players. Meaning that at least a total of 15000 matches are fetched from the API every morning. To be able to get these match details from the API, I had to put intervals between the API requests, otherwise I would exceed the rate limit.

I achieved this using the code below. An array of match lists are passed to a "Promise.all", where index of the array represents the champion key. Since Riot Games gives new champions random keys, there are empty spaces in the array, hence the "!champion" check. "championCounter" increases for every champion. A promise is returned for each champion in the array, which then after a "setTimeout", which is dependent on the "championCounter", resolves into another "Promise.all". In this second "Promise.all" fetch requests are made. This assures that there is adequate time between fetches. This whole process is asynchronous, meaning that it doesn't block our Node application.


<pre>
<code>
Promise.all(matchListForEachChampionEUW1.map(function(champion){
        if(!champion) {
            return undefined;
        }
        championCounter = championCounter + 1;
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(Promise.all(champion.map(function(match){
                if(match.gameId){
                    return fetch(`https://euw1.api.riotgames.com/lol/match/v4/matches/${match.gameId}?api_key=${process.env.LOL_API_KEY}`).then(response => response.json()).catch(e => console.log(e));
                } else {
                    return undefined;
                }
            })));
            }, 3000 * championCounter);
        });
    })).then(function(data) {...
</code>
</pre>
<br/>

### Cron Jobs

To handle scheduled tasks, I used the library <a href="https://github.com/kelektiv/node-cron" target="_blank" rel="noopener noreferrer">Node-Cron</a>. This made it simple to divide the tasks and schedule them according to my needs. I used this <a href="https://cronjob.xyz/" target="_blank" rel="noopener noreferrer">website</a> to deal with the syntax. There are different ways to handle scheduled tasks using AWS's in built scheduler, but I went with the Node-Cron library.


<br/>

### Search Engine Optimization (SEO) 

I did a lot of research on SEO while I was building this project. From what I understand a lot of the things that people claim are generally nonsense. There is no secret formula for SEO, you just have to do couple of things right.  from Google should be enough if you want to learn about SEO. There is also an advanced version.

In a nutshell, make sure that your page has a title, description and the contents of the page can be read by a bot, meaning that texts should be in text form, not in a image. Using anchor tags to link between pages in your website is important. You can also add a sitemap to make sure that the bot will find about the pages. There are little nuisances but those can be learned from the document.

Google's bots run Javascript, so if you do it right you can achieve great result even with Client Side Rendered Apps. One library to handle titles and descriptions in your CRA is <a href="https://github.com/nfl/react-helmet" target="_blank" rel="noopener noreferrer">React-Helmet</a>. It allows you to add tags to head your pages that you create using react-router. When Google's bots crawl these pages, they are going to be indexed with the correct title and description. 


<br/>

### Final Thoughts

Challenger Builds was a long project and I am glad that I created it. I had to learn a lot of new things and get much better at CSS to complete it.