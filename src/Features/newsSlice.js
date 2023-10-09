import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "user",
  initialState: {
    news: [
      {
        source: {
          id: null,
          name: "Manchester United",
        },
        author: "Communications Department",
        title: "Official statement: Erik ten Hag - Man Utd",
        description:
          "Manchester United is delighted to announce the appointment of Erik ten Hag as Men's First Team Manager, subject to work visa requirements.",
        url: "https://www.manutd.com/en/news/detail/erik-ten-hag-appointed-as-man-utd-manager-official-statement",
        urlToImage:
          "https://assets.manutd.com/AssetPicker/images/0/0/16/141/1084869/NMS_Article_Header_copy1650534418325_large.jpg",
        publishedAt: "2022-04-21T10:10:00Z",
        content:
          "<ul><li>Share With email</li><li>Copy Link</li></ul>\r\nManchester United is delighted to announce the appointment of Erik ten Hag as Mens First Team Manager, subject to work visa requirements, from th… [+82 chars]",
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "HT Sports Desk",
        title:
          "'Even Shaheen doesn't bowl over 145 kph, but Umran...': Ex-Pakistan captain - Hindustan Times",
        description:
          "After impressing Dale Steyn, Ravi Shastri, Sunil Gavaskar and Kapil Dev, Umran Malik's popularity has reached the other side of the border.",
        url: "https://www.hindustantimes.com/cricket/ipl-2022-even-shaheen-afridi-doesn-t-bowl-over-145-kph-but-umran-malik-pakistan-legend-rashid-latif-says-srh-pacer-will-make-a-name-for-himself-101650531002768.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2022/04/21/1600x900/shaheen-umran-getty-ipl_1650531274939_1650531280372.jpg",
        publishedAt: "2022-04-21T09:04:15Z",
        content:
          "With one impressive performances after the other in IPL 2022, Umran Malik is winning admirers. From Dale Steyn to Ravi Shastri to Sunil Gavaskar to the legendary Kapil Dev, all are in awe of the 21-y… [+2337 chars]",
      },
      {
        source: {
          id: null,
          name: "Formula 1",
        },
        author: "F1",
        title:
          "Sainz to remain with Ferrari until 2024 following contract extension - Formula 1",
        description:
          "Ferrari have rewarded Carlos Sainz’s fine form with a fresh two-year contract that will keep him at the famous Formula 1 team until at least the end of 2024.",
        url: "https://www.formula1.com/en/latest/article.breaking-sainz-to-remain-with-ferrari-until-2024-following-contract.5WQKCJkNKDXWEtZsAYkBh7.html",
        urlToImage:
          "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/EmiliaRomagnaGP/Preview/GettyImages-1390627528.jpg",
        publishedAt: "2022-04-21T08:36:32Z",
        content:
          "Ferrari have rewarded Carlos Sainzs fine form with a fresh two-year contract that will keep him at the famous Formula 1 team until at least the end of 2024.\r\nThe Spaniard had a stellar debut season w… [+2490 chars]",
      },
      {
        source: {
          id: null,
          name: "NDTV News",
        },
        author: "Vishesh Roy",
        title:
          "Watch: Arjun Tendulkar Cleans Up Ishan Kishan With Searing Yorker In Mumbai Indians Training - NDTV Sports",
        description:
          "IPL 2022: Arjun Tendulkar bowled a brilliant yorker and it ended up castling Ishan Kishan during a training session.",
        url: "https://sports.ndtv.com/ipl-2022/arjun-tendulkar-cleans-up-ishan-kishan-with-searing-yorker-during-mumbai-indians-training-watch-2906507",
        urlToImage:
          "https://c.ndtvimg.com/2022-02/lcc6k61o_arjun-tendulkar-bcci-ipl_625x300_13_February_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
        publishedAt: "2022-04-21T08:15:35Z",
        content:
          "Arjun Tendulkar is yet to play a game for the Mumbai Indians in the ongoing Indian Premier League (IPL) 2022 edition but he has already garnered a lot of attention and the fans are desperately waitin… [+1107 chars]",
      },
      {
        source: {
          id: null,
          name: "GQ India",
        },
        author: "Umaima Saeed",
        title:
          "Inside Rajasthan Royals bowler Yuzvendra Chahal’s luxurious life: A luxurious home in Gurgaon, Porsche Cayenne, over Rs 31 crore income from IPL and more - GQ India",
        description:
          "Yuzvendra Chahal first came to the limelight when he ended the National Under-19 Cooch Behar Trophy in 2009 as its leading wicket-taker. Know about his luxurious life",
        url: "https://www.gqindia.com/get-smart/content/inside-rajasthan-royals-bowler-yuzvendra-chahals-luxurious-life-a-luxurious-home-in-gurgaon-a-porsche-cayenne-rs-32-crore-income-ipl-and-more",
        urlToImage:
          "https://assets.gqindia.com/photos/6260f9ee904ce73072684bbb/16:9/w_1280,c_limit/Yuzvendra%20Chahal%E2%80%99s%20luxurious%20life.jpeg",
        publishedAt: "2022-04-21T07:27:29Z",
        content:
          "Rajasthan Royals spin bowling sensation Yuzvendra Chahal was the showstopper on Monday during the IPL 2022 match against Kolkata Knight Riders. Chahal became the 19th bowler to take a hat-trick in th… [+1165 chars]",
      },
      {
        source: {
          id: null,
          name: "DAWN.com",
        },
        author: "Reuters",
        title:
          "Tennis star Maria Sharapova says she is pregnant with first child - DAWN.com",
        description:
          "The former athlete took to Instagram on her 35th birthday to announce her first pregnancy.",
        url: "https://images.dawn.com",
        urlToImage: "https://i.dawn.com/large/2022/04/6260ec4b546b7.png",
        publishedAt: "2022-04-21T06:37:33Z",
        content:
          "Former world number one Maria Sharapova on Tuesday used the occasion of her 35th birthday to announce that she was pregnant with her first child.\r\nThe Russian five-time Grand Slam champion, who retir… [+563 chars]",
      },
      {
        source: {
          id: null,
          name: "Thecricketlounge.com",
        },
        author: "Jatin Khandelwal",
        title:
          "5 Players Who Debuted With Virat Kohli But Faded Away - The Cricket Lounge",
        description:
          "Virat Kohli made his ODI debut on August 18, 2008, versus Sri Lanka soon after he had led India to the under-19 World Cup title earlier that. He made his T20I and Test debut in the next three years an",
        url: "https://thecricketlounge.com/2022/04/5-players-who-debuted-with-virat-kohli-but-faded-away/",
        urlToImage:
          "https://thecricketlounge.com/wp-content/uploads/2022/04/Virat-Kohli.jpg",
        publishedAt: "2022-04-21T06:31:52Z",
        content:
          "Virat Kohli made his ODI debut on August 18, 2008, versus Sri Lanka soon after he had led India to the under-19 World Cup title earlier that. He made his T20I and Test debut in the next three years a… [+3084 chars]",
      },
      {
        source: {
          id: null,
          name: "NDTV News",
        },
        author: "Neelav Chakravarti",
        title:
          'IPL 2022: "Suresh Raina Entered My Life Like A God," Says Young SRH Pacer - NDTV Sports',
        description:
          "IPL 2022: Pacer Kartik Tyagi, who is with SunRisers Hyderabad (SRH) in the ongoing season, revealed how Suresh Raina helped shape his cricket career as a youngster.",
        url: "https://sports.ndtv.com/ipl-2022/suresh-raina-entered-my-life-like-a-god-says-young-srh-pacer-2906217",
        urlToImage:
          "https://c.ndtvimg.com/2022-02/ma6q1csg_suresh-raina-bcciipl_650x400_15_February_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
        publishedAt: "2022-04-21T06:18:09Z",
        content:
          "Since his performance in the 2020 U-19 Cricket World Cup, Kartik Tyagi has seen his career rise in prominence. In the same year, the pacer was roped in by Rajasthan Royals (RR) in the Indian Premier … [+2412 chars]",
      },
      {
        source: {
          id: null,
          name: "Telegraph.co.uk",
        },
        author: null,
        title:
          "Ralf Rangnick's shock tactics have failed to jolt Manchester United out of mediocrity - The Telegraph",
        description:
          "After once thinking he may want the job full-time, Rangnick may have realised that any coach sent into United was destined to fail",
        url: "https://www.telegraph.co.uk/football/2022/04/21/ralf-rangnicks-shock-tactics-have-failed-jolt-manchester-united/",
        urlToImage:
          "https://www.telegraph.co.uk/content/dam/football/2022/04/20/TELEMMGLPICT000293011986_trans_NvBQzQNjv4Bq-vJo4GxdzALP6sfrv59F_YvEHy0dqRrgWWMLdBwSBOk.jpeg?impolicy=logo-overlay",
        publishedAt: "2022-04-21T06:07:00Z",
        content:
          "His remarks on Tuesday night that United were six years behind Liverpool did not go down well at the club who, even at this nadir, believe that fortunes can be changed much quicker than that. Murtoug… [+3928 chars]",
      },
      {
        source: {
          id: null,
          name: "SB Nation",
        },
        author: "David Pasztor",
        title:
          "Antonio Rüdiger, Andreas Christensen added to Chelsea injury list - We Ain't Got No History",
        description: "In doubt for the weekend as well",
        url: "https://weaintgotnohistory.sbnation.com/2022/4/21/23035118/antonio-rudiger-andreas-christensen-added-to-chelsea-injury-list",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/y0KBZakA5q5CpaCvkcAZ75XN5ss=/1979x292:5107x1930/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23405705/1240111693.jpg",
        publishedAt: "2022-04-21T05:59:37Z",
        content:
          "Adding the literal injuries to the insult that was Wednesday nights 4-2 loss to Arsenal at home, both Andreas Christensen and Antonio Rüdiger are now a doubt for our next game as well.\r\nChristensen g… [+1224 chars]",
      },
      {
        source: {
          id: null,
          name: "News18",
        },
        author: "G Krishnan",
        title:
          "IPL 2022: Time for Rohit Sharma, Virat Kohli and MS Dhoni to Make Way? - News18",
        description:
          "Like they say, form is temporary, class is permanent. The fans must be hoping that the duo of current India captain and his predecessor get runs quickly for the sake of their own good, for their franchise’s good and for the good of Indian cricket.",
        url: "https://www.news18.com/cricketnext/news/ipl-2022-time-for-rohit-sharma-virat-kohli-and-ms-dhoni-to-make-way-5023567.html",
        urlToImage:
          "https://images.news18.com/ibnlive/uploads/2022/04/unnati-naishaa-2-165051894916x9.jpg",
        publishedAt: "2022-04-21T05:32:45Z",
        content:
          "Royal Challengers Bangalores most decorated batsman in Indian Premier League history, Virat Kohli, is not having the best of tournaments so far in its 15th edition. With only 48 against Mumbai Indian… [+9181 chars]",
      },
      {
        source: {
          id: null,
          name: "Cricketaddictor.com",
        },
        author: "More by Vicky Singh",
        title:
          "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Indian Senior Women's T20 - Cricket Addictor",
        description:
          "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Indian Senior Women’s T20",
        url: "https://cricketaddictor.com/fantasy-cricket/rai-w-vs-del-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-indian-senior-womens-t20/",
        urlToImage:
          "https://cricketaddictor.com/wp-content/uploads/2022/03/Womens-IPL.jpg",
        publishedAt: "2022-04-21T04:15:21Z",
        content:
          "RAI-W vs DEL-W Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Indian Senior Womens T20 match between Railways Women and Delhi Women. They will play… [+4231 chars]",
      },
      {
        source: {
          id: null,
          name: "Cricketaddictor.com",
        },
        author: "More by Vicky Singh",
        title:
          "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU'S MCL T20 - Cricket Addictor",
        description:
          "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- BYJU’S MCL T20",
        url: "https://cricketaddictor.com/fantasy-cricket/chc-vs-bscc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-mcl-t20-2/",
        urlToImage:
          "https://cricketaddictor.com/wp-content/uploads/2021/12/Wanderers-Stadium-in-Johannesburg.-Photo-Getty-Images.jpg",
        publishedAt: "2022-04-21T04:02:48Z",
        content:
          "CHC vs BSCC Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of BYJU’S MCL T20 match between Chanmarians Cricket Club and Bawngkawn South Cricket Club. … [+4445 chars]",
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "HT Sports Desk",
        title:
          "DC vs PBKS Highlights, IPL: Delhi Capitals beat Punjab Kings by nine wickets - Hindustan Times",
        description:
          "IPL 2022 Highlights, Delhi Capitals vs Punjab Kings: David Warner and Sarfaraz Khan guided Delhi home with 57 balls to spare. Follow the Highlights of DC vs PBKS:",
        url: "https://www.hindustantimes.com/cricket/dc-vs-pbks-live-score-ipl-2022-delhi-capitals-vs-punjab-kings-t20-match-32-latest-updates-full-scorecard-and-cricket-news-101650448827402.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2022/04/20/1600x900/rabada_1650471180984_1650471192179.jpg",
        publishedAt: "2022-04-21T02:48:29Z",
        content:
          "Punjab Kings: Mayank Agarwal(c), Shikhar Dhawan, Jonny Bairstow, Liam Livingstone, Jitesh Sharma(w), Shahrukh Khan, Kagiso Rabada, Nathan Ellis, Rahul Chahar, Vaibhav Arora, Arshdeep Singh\r\nDelhi Cap… [+171 chars]",
      },
      {
        source: {
          id: null,
          name: "Managing Madrid",
        },
        author: "Matt_Wiltse",
        title:
          "Player Ratings: Osasuna 1 - 3 Real Madrid; 2022 La Liga - Managing Madrid",
        description:
          "A victory away in Pamplona brings the La Liga title within touching distance.",
        url: "https://www.managingmadrid.com/2022/4/21/23034205/player-ratings-osasuna-1-3-real-madrid-2022-la-liga",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/sXENQUG189Ts1u7Jvq_8bNFn4mA=/0x0:4000x2094/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23405405/1392620084.jpg",
        publishedAt: "2022-04-21T02:23:22Z",
        content:
          "Goals from David Alaba, Marco Asensio, and Lucas Vazquez were enough to drive home another La Liga victory.\r\n Full match player ratings below:\r\nThibaut Courtois7: Made a huge save at the start of the… [+2038 chars]",
      },
      {
        source: {
          id: null,
          name: "International Cricket Council",
        },
        author: "ICC",
        title:
          "West Indies legend Kieron Pollard retires from international cricket - International Cricket Council",
        description:
          "The legendary West Indies all-rounder Kieron Pollard has announced his retirement from international cricket.",
        url: "https://www.icc-cricket.com/news/2582199",
        urlToImage:
          "https://resources.pulse.icc-cricket.com/ICC/photo/2022/04/20/878193f3-e5bc-44ca-9fb0-7bc10311c1fc/GettyImages-1351326838.jpg",
        publishedAt: "2022-04-21T02:16:52Z",
        content:
          "The legendary West Indies all-rounder Kieron Pollard has announced his retirement from international cricket.The 34-year-old Pollard announced on Wednesday that he has called time on a 15-year intern… [+2544 chars]",
      },
      {
        source: {
          id: null,
          name: "Cricbuzz",
        },
        author: null,
        title:
          "Need to pick and choose formats to prolong career: Mustafizur | Cricbuzz.com - Cricbuzz - Cricbuzz",
        description:
          "Mustafizur Rahman was speaking after a Cricbuzz report that the BCB plans to have a chat with him about his Test future",
        url: "https://www.cricbuzz.com/cricket-news/121991/need-to-pick-and-choose-formats-to-prolong-career-mustafizur",
        urlToImage:
          "http://www.cricbuzz.com/a/img/v1/600x400/i1/c231626/mustafizur-rahman-was-speaking.jpg",
        publishedAt: "2022-04-21T02:06:43Z",
        content:
          "Mustafizur Rahman was speaking after a Cricbuzz report that the BCB plans to have a chat with him about his Test future © Getty\r\nBangladesh pace bowler Mustafizur Rahman hinted that he is unlikely to… [+3376 chars]",
      },
      {
        source: {
          id: null,
          name: "DAWN.com",
        },
        author: "Mohammad Yaqoob, Mir Shabbar Ali",
        title: "Ramiz calls for calm amid resignation rumours - DAWN.com",
        description:
          "Sources say a list of candidates for PCB chief's role lying on Shehbaz’s desk at PMO, Ramiz may quit anytime.",
        url: "https://www.dawn.com",
        urlToImage: "https://i.dawn.com/large/2022/04/6260e53c093df.jpg",
        publishedAt: "2022-04-21T01:55:07Z",
        content:
          "KARACHI/LAHORE: Sensing stress and anxiety among his subordinates at the Pakistan Cricket Board headquarters in Lahore, chairman Ramiz Raja gathered them in a meeting on Wednesday and assured them th… [+3420 chars]",
      },
      {
        source: {
          id: null,
          name: "Hindustan Times",
        },
        author: "HT Sports Desk",
        title:
          "Watch: Kuldeep Yadav's gesture for Axar Patel after IPL match is pure gold - Hindustan Times",
        description:
          "Kuldeep said that he felt Axar was more deserving of the award as the pair led Delhi Capitals' demolition job on the Punjab Kings at the Brabourne Stadium. | Cricket",
        url: "https://www.hindustantimes.com/cricket/kuldeep-yadav-axar-patel-player-of-the-match-award-share-dc-thrash-pbks-ipl-2022-101650480260983.html",
        urlToImage:
          "https://images.hindustantimes.com/img/2022/04/20/1600x900/kuldeep_axar_bcci_1650480652667_1650480658918.jpg",
        publishedAt: "2022-04-21T01:47:04Z",
        content:
          "Kuldeep Yadav continued his rich vein of form as he and Axar Patel led Delhi Capitals in their demolition job of the Punjab Kings on Wednesday. Kuldeep was one of three bowlers who took two wickets e… [+1393 chars]",
      },
      {
        source: {
          id: null,
          name: "Cricketaddictor.com",
        },
        author: "More by Vicky Singh",
        title:
          "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 - Cricket Addictor",
        description:
          "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022",
        url: "https://cricketaddictor.com/fantasy-cricket/mumbai-indians-vs-chennai-super-kings-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-tata-ipl-2022/",
        urlToImage:
          "https://cricketaddictor.com/wp-content/uploads/2022/04/2-2-6.png",
        publishedAt: "2022-04-21T01:46:57Z",
        content:
          "Mumbai Indians vs Chennai Super kings Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Tata IPL 2022 match between Mumbai Indians and Chennai Super K… [+6057 chars]",
      },
      {
        source: {
          id: null,
          name: "India.com",
        },
        author: "Zee Media Bureau",
        title:
          "MI vs CSK IPL 2022: BIG blow for Chennai Super Kings as Devon Conway leaves to get married, MS Dhoni and ot... - Zee News",
        description:
          "t.co oYBPQHs25f!#WeddingWhistles #Yellove pic.twitter.com pTLdQgTa5n — Chennai Super Kings (@ChennaiIPL) April 19, 2022 Conway and other members of CSK were seen attending the ceremony in the traditional attire from Tamil Nadu.",
        url: "https://zeenews.india.com/cricket/mi-vs-csk-ipl-2022-big-blow-for-chennai-super-kings-as-devon-conway-leaves-to-get-married-ms-dhoni-and-other-enjoy-pre-wedding-bash-watch-2455731.html",
        urlToImage:
          "https://english.cdn.zeenews.com/sites/default/files/2022/04/21/1033938-dhoniconway.jpg",
        publishedAt: "2022-04-21T01:42:36Z",
        content:
          "Defending champions Chennai Super Kings are currently reeling at 9th place on the IPL 2022 points table so far. They were dealt another blow as New Zealand opener Devon Conway has now left the T20 le… [+2723 chars]",
      },
      {
        source: {
          id: null,
          name: "Lastwordonsports.com",
        },
        author: "Jim Smith",
        title:
          "WTA Stuttgart Day 4 Predictions Including Bianca Andreescu vs Aryna Sabalenka - Last Word On Sports",
        description:
          "Expect plenty of exciting tennis on day four at the WTA Stuttgart Open. But who will reach the last eight in Baden-Wurttemberg?",
        url: "https://lastwordonsports.com/tennis/2022/04/20/wta-stuttgart-day-4-predictions-andreescu-sabalenka/",
        urlToImage:
          "https://cdn.lastwordonsports.com/tennis/wp-content/uploads/sites/17/2022/04/Kontaveit.jpg",
        publishedAt: "2022-04-21T01:24:51Z",
        content:
          "With a number of star names in action on day four at the WTA Stuttgart Open, there should be no shortage of excitement. As always, we here at LWOT will be offering our predictions for every match on … [+2428 chars]",
      },
      {
        source: {
          id: null,
          name: "YouTube",
        },
        author: null,
        title:
          "ANGERS SCO - PARIS SAINT-GERMAIN (0 - 3) - Highlights - (SCO - PSG) / 2021-2022 - Ligue 1 Uber Eats Official",
        description:
          "ANGERS SCO vs PARIS SAINT-GERMAIN Highlights (0 - 3) in video. Ligue 1 Uber Eats - Season 2021/2022 - Week 33 STADE RAYMOND-KOPA - Wednesday 20 April 2022Goa...",
        url: "https://www.youtube.com/watch?v=7Amd0Xkf24A",
        urlToImage: "https://i.ytimg.com/vi/7Amd0Xkf24A/hqdefault.jpg",
        publishedAt: "2022-04-21T01:01:53Z",
        content: null,
      },
    ],
  },
});

export default newsSlice.reducer;
