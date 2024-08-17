const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/news', async (req, res) => {
  try {
    // Hardcoded news data for testing
    const news = [
      {
        title: 'AEK Athens Wins the Superleague',
        link: 'https://www.aekfc.gr/newsdetails/aaa-299-129151.htm?lang=el&path=85332408',
        imageUrl: 'https://www.aekfc.gr/uploads/images/129151/i-aek-protathlitria-2022-23-denlarge.jpg?lm=7f0dbb13770b30d99f38af2593e365bf',
      },
      {
        title: 'New Signings for AEK Athens',
        link: 'https://www.gazzetta.gr/football/superleague/2360843/aek-metagrafes-protathike-kai-stin-enosi-o-binisioys',
        imageUrl: 'https://www.gazzetta.gr/sites/default/files/styles/article_main_image/public/2024-08/carlos_vinicius_0.webp?itok=P_tJIx5q',
      },
      {
        title: 'AEK Athens Prepares for Upcoming Derby',
        link: 'https://www.sdna.gr/podosfairo/1226473_aek-me-allages-kontra-ston-ofi-se-foyl-rythmoys-simera-o-libai',
        imageUrl: 'https://www.sdna.gr/sites/default/files/styles/main/public/2024-08/4347698.jpg?itok=IXQMhlFP',
      },
      {
        title: 'AEK Athens New President',
        link: 'https://www.sport-fm.gr/article/podosfairo/superleague1/aek-simera-i-sunedeuksi-tupou-tou-mariou-iliopoulou/4989839',
        imageUrl: 'https://resources.sport-fm.gr/supersportFM/images/news/24/06/20/4302407-(plagies)_092124.jpg?w=880&f=bicubic',
      },
      {
        title: 'Big Signing for AEK Athens',
        link: 'https://www.gazzetta.gr/football/superleague/2352445/aek-symfonia-me-lamela-gia-trietes-symbolaio-grafoyn-stin-argentini',
        imageUrl: 'https://www.gazzetta.gr/sites/default/files/styles/article_main_image/public/2024-07/lamela-europa.webp?itok=PK_o6pl1',
      },
      {
        title: 'AEK Athens Prepares for Upcoming Derby',
        link: 'https://www.efsyn.gr/athlitismos/podosfairo/417709_pire-ntermpi-i-aek-sto-8-apo-tin-koryfi-o-olympiakos-poy-fonazei-gia',
        imageUrl: 'https://www.efsyn.gr/sites/default/files/styles/main/public/2024-01/Aek-Olympiakos-1020.jpg.webp?itok=kl_GfK1x',
      },
    ];

    console.log('Scraping completed. News data:', news);

    // Log and send the news data as JSON
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



