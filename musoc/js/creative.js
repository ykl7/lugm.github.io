(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    var mentors = [

    {

     "name": "Yash Kumar Lal",

     "mobile": "8095718111",
     "whatsapp": "",
     "email": "yklal95@gmail.com",
     "github": "https://github.com/ykl7",
     "domain": "NLP, ML, iOS, Flask",
     "languages": "Python, Objective-C"     
 },
 {

     "name": "Utkarsh Kashyap",

     "mobile": "7829414143",
     "whatsapp": "",
     "email": "utkarsh.k05@gmail.com",
     "github": "https://github.com/utkarsh5k",
     "domain": "ML",
     "languages": "C, C++, Java, Python"     
 },
 {

     "name": "Sudarshan Sunder",

     "mobile": "7259377755",
     "whatsapp": "9445069658",
     "email": "sundersudarshan@gmail.com",
     "github": "https://github.com/sudarshansunder",
     "domain": "Android, Backend stuff, ML",
     "languages": "C/C++, Java, JavaScript, Python, PHP"     
 },
 {

     "name": "Bhargav Karanam",

     "mobile": "8123637692",
     "whatsapp": "",
     "email": "bhargav.karanam@gmail.com",
     "github": "https://github.com/bhargavkaranam",
     "domain": "WebDev",
     "languages": "Node.JS, PHP, React JS"     
 },
 {

     "name": "Avikant Saini",

     "mobile": "+91 809-513-8333",
     "whatsapp": "",
     "email": "avikantsainidbz@gmail.com",
     "github": "github.com/avikantz",
     "domain": "iOS, UI/UX, Graphics, Memes",
     "languages": "Swift, Objective C, Python"     
 },
 {

     "name": "Aditya Walvekar",

     "mobile": "9342579059",
     "whatsapp": "",
     "email": "aditya.s.walvekar@gmail.com",
     "github": "https://GitHub/adwalvekar",
     "domain": "Web development, Neural Networks",
     "languages": "Python, PHP, Java, C, JavaScript"     
 },
 {

     "name": "Shivang Bharadwaj",

     "mobile": "9650344911",
     "whatsapp": "",
     "email": "shivang.bharadwaj3@gmail.com",
     "github": "https://github.com/reficul31",
     "domain": "WebDev",
     "languages": "JavaScript, Python"     
 },
 {

     "name": "Mehul Gupta",

     "mobile": "9521092155",
     "whatsapp": "9901693769",
     "email": "mehul.guptagm@gmail.com",
     "github": "github.com/therealssj",
     "domain": "WebDev",
     "languages": "PHP, Python"     
 },
 {

     "name": "Kartik Arora",

     "mobile": "9871211569",
     "whatsapp": "",
     "email": "aawaazdo@kartikarora.me",
     "github": "https://github.com/kartikarora",
     "domain": "Android, Full Stack Dev",
     "languages": "Java, c, c++, python"     
 },
 {

     "name": "Raamish Malik",

     "mobile": "7026827800 ",
     "whatsapp": "",
     "email": "raamish.malik@gmail.com ",
     "github": "github.com/raamish",
     "domain": "Backend(Python) , ML",
     "languages": "C, C++, Python"     
 },
 {

     "name": "Siddharth Kothiyal",

     "mobile": "9663597229",
     "whatsapp": "",
     "email": "sid.kothiyal27@gmail.com",
     "github": "https://github.com/sidkothiyal",
     "domain": "Android, Python Applications, ROS, Machine Learning ",
     "languages": "Python, C, C++, Java, XML"     
 },
 {

     "name": "Ujjwal Arora",

     "mobile": "7019953464",
     "whatsapp": "7019953464",
     "email": "arora.ujjwal@gmail.com",
     "github": "https://www.github.com/azwreith",
     "domain": "WebDev, Android",
     "languages": "JavaScript, PHP, Python, Java"     
 },
 {

     "name": "Arjun Narayan",

     "mobile": "9916324321",
     "whatsapp": "09916324321",
     "email": "arjun.narayan46@gmail.com",
     "github": "Github.com/TacticalGoat",
     "domain": "Web, App",
     "languages": "Python C# C++"     
 },
 {

     "name": "Chinmay Nivsarkar",

     "mobile": "8123653584",
     "whatsapp": "",
     "email": "chinmayn96@gmail.com",
     "github": "github.com/chinmay-n",
     "domain": "Linux",
     "languages": "Python,C"     
 },
 {

     "name": "Sukriti Paul",

     "mobile": "9535281939",
     "whatsapp": "9449987703",
     "email": "sukritipaul05@gmail.com",
     "github": "https://github.com/JuOllie",
     "domain": "  Image Processing, Computer Vision,Data Mining and Data Science, ML and PR, Android Dev, Tesseract,RHEL6.",
     "languages": " C,C++,C#,Java, Python,R,Ruby, MATLAB (software). (Training the The OCR requires knowledge of shell scripting, and that doesn't really fall under a programming language;mentioned it nevertheless )."     
 },
 {

     "name": "Ishan Handa",

     "mobile": "9731794141",
     "whatsapp": "",
     "email": "ishanhanda1@gmail.com",
     "github": "https://github.com/ishaaann/",
     "domain": "BackEnd , ML and Data Science",
     "languages": "Python, C, C#, SQL, (Little Little) Javascript, R"     
 },
 {

     "name": "Jitesh Kumar Jha",

     "mobile": "9591361570",
     "whatsapp": "",
     "email": "jiteshjha96@gmail.com",
     "github": "https://github.com/jiteshjha",
     "domain": "WebDev, ML, Simulations",
     "languages": "Javascript, Ruby, Python, C"     
 },
 {

     "name": "Saketh Kaparthi",

     "mobile": "08123199279",
     "whatsapp": "",
     "email": "sakethkaparthi@gmail.com",
     "github": "www.github.com/sakethkaparthi",
     "domain": "Android, Google cardboard VR",
     "languages": "Java, python"     
 },
 {

     "name": "Punit Bhatt",

     "mobile": "9964356899",
     "whatsapp": "",
     "email": "bhattpunit96@gmail.com",
     "github": "github.com/punitbhatt",
     "domain": "ML, neural network, Android",
     "languages": "Python, C++, Java"     
 },
 {

     "name": "Mayank Bansal",

     "mobile": "9742931741",
     "whatsapp": "3125932465",
     "email": "manky.bansal@gmail.com",
     "github": "github.com/mankybansal",
     "domain": "WebDev, Android",
     "languages": "Java, PHP, C++, C, HTML, JS, CSS"     
 }
 ];

 var projectIdeas = [
 {

     "name": "Utkarsh Kashyap",
     "title1": "Simple ML library from scratch",
     "idea1": "A small C++ library that would contain few basic ML algorithms like Linear Regression, K-means Clustering and k-Nearest Neighbours (for the brave, Neural Nets). The library will be written from scratch, in C++, in an object oriented fashion, and shall contain all the required utility functions that are generally used in Data oriented problems, like loading and writing to CSV files, finding min/max/mean/mode etc, filling null values in a dataset. The algorithms itself will have 4 basic methods to train, test, predict and find the score of a test set. ",
     "title2": "Optimize distance between functions in a single text file",
     "idea2": "There are large text files containing 1000+ lines of code, where there are various functions that call each other. Many times, the functions are poorly placed in the file and it requires a lot of scrolling to track functions calling each other. The aim of this project is to make an optimization tool that finds the best ordering of functions in a file based on the some metric that accurately represents the distance between functions, and rearranges them accordingly, thus enhancing readability of large codebases. ",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Kartik Arora",
     "title1": "Wear Dialer",
     "idea1": "Dial a number on the watch and place a call from your phone. No need to take out the phone from pocket!",
     "title2": "Potato Library",
     "idea2": "Easy to use Utility library for Android",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Shivang Bharadwaj",
     "title1": "Dynamic Form Creation and Dating Saving",
     "idea1": "Making a desktop application that allows us to store data in dynamically created forms offline and then the data can be pushed to the server once the host is connected to the internet.",
     "title2": "Text Editor Plugin for Lightweight Markup Languages",
     "idea2": "Basically a text editor plugin that allows us to render the LML in the formatted form live as it is being typed. The plugin might support multiple file extensions such as markdown, reStructuredText, Textile etc.",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Bhargav Karanam",
     "title1": "Facebook Bot for DigitalOcean Server Management",
     "idea1": "Make a Facebook bot that uses the DigitalOcean API to manage droplets. This can be used to view status, load of the servers. Also can be used to add/edit DNS records, upgrade droplets, create load balancers etc. Can be used to listen to events once DO introduces the Webhook service. Droplets can be upgraded, load balancers can be created on demand once webhooks are introduced",
     "title2": "App to verify the authenticity of a FB post",
     "idea2": "Build an app to verify authenticity of Facebook posts. Mine through the history of posts by the individual/pages using Graph API and also the news articles regarding the topic discussed in the post. Mining through the feed of the page/individual will give an insight on the person's behaviour. App can be used to display (predict) the certainty of a post being fake.  #TRUMPELECTIONSCENES",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Mehul Gupta",
     "title1": "CLI for ReadTheDocs",
     "idea1": "Create a cli for downloading docs using readthedocs api.\nThe hardest part of this project is probably the fact that readthedocs doesn't have a proper documentation for api.\nLast time I checked some of the stuff did not work either as they were shifting to a new api so might need to leverage the site to find the required docs.\nLanguage of choice: python.",
     "title2": "Google Play Store API",
     "idea2": "Google changed their playstore API recently and added much more data which is not available on the old API.\nThe opengapps project is one such project which requires the latest API but its not very straight forward to figure it out.\nIf you use a proxy to see the playstore traffic then the playstore apk stops making requests.\nGetting past this is probably the hardest part.\nLanguage of choice: python.\n\nP.S We will be dealing with google protocol buffers aswell since that is what the playstore uses as the message format.",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Jitesh Kumar Jha",
     "title1": "language-translate",
     "idea1": "Implement a basic model of Neural Machine Translation(https://github.com/neubig/nmt-tips) with Tensorflow and NLTK as a web application(preferably, flask), which serves as language translator web-application. The service will probably take up some time to produce results, hence this project be extended with the employment of GPUs as the next stage of the project. Difficulty Level : Hard",
     "title2": "Flappy-play-yo-self",
     "idea2": "Train a neural network to play Flappy Bird using genetic algorithm(GA). This project can either be implemented as an application(pygame library looks interesting for having a control over the game), or as a modest javascript single page webapp(let's stick with react.js). Difficulty Level : Medium",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Ishan Handa",
     "title1": "Document Fingerprinting",
     "idea1": "The basic idea of building this product is to detect cases of \"Document Copying\" and \"Code Plagiarism\". These problems are encountered by almost everybody and there does not exist many solutions for it. We are looking to build an industry grade solution here which involves working on different algorithms for detecting aforementioned cases and providing a proper GUI for the same. We would be looking to implement this in Python/ (or a language of your choice) and we can also implement this as a web service depending on your expertise.",
     "title2": "Remote Screen Control",
     "idea2": "Remote Screen Control let's you control Linux systems remotely, in a easy and fast way over local area networks (basically a Team Viewer clone). While doing this you'll have to work on various different components like key logger, using sockets to transfer images, file transfers, live video and voice chat etc. The biggest challenge when it comes to this problem is to reduce the lag of videos over the internet.",
     "title3": "Chrome Extension For Blocking Unwanted Content",
     "idea3": "We are looking to build a chrome extension which lets user block any content / image / videos on internet which are not suitable to his preferences. The product basically targets people who are recovering from addictions and children who may unknowingly access content which they should not. We'll be looking to do this in Javascript so a little experience with Javascript would be appreciated."
 },
 {

     "name": "Ujjwal Arora",
     "title1": "Emoji, Video, and Audio Support for RocketChat Android App",
     "idea1": "Emojis, video messages, and audio messages are current supported by the RocketChat web app. They are not, however, by their official android application. Your goal will be to port these features over to their android application.\nRefer issues #113, #114, #175 on https://github.com/RocketChat/Rocket.Chat.Android",
     "title2": "Improve Table Structure Tab of PHPMyAdmin",
     "idea2": "Discussions of improving the table structure tab are currently about at https://github.com/phpmyadmin/phpmyadmin/projects/1\nYou will participate there, get the plans ready, and implement it!",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Raamish Malik",
     "title1": "Online Code Judge",
     "idea1": "The brief idea here is to simulate the working of the popular online code judges like SPOJ and CodeChef but with the added functionalities of p2p chat or file sharing (more feature suggestions are welcome). \nFrontend would be web obviously with the choice of backend left for the mentee's comfort.",
     "title2": "Music Recommendation as a Service",
     "idea2": "We have always ran into the problem of liking one song but never able to find songs similar to that. To tackle such problems, the idea is to provide a web service (or as an API) that connects with a users music history and tries to suggest songs similar to the taste of the user's music choice.\nAn additional feature would be standalone suggestion by just taking a song as input and providing similar genre songs (more work needed here).",
     "title3": "Chrome Extension For Blocking Unwanted Content",
     "idea3": "We are looking to build a chrome extension which lets user block any content / image / videos on internet which are not suitable to their preferences. The product basically targets people who are recovering from addictions and children who may unknowingly access content which they should not. We'll be looking to do this in Javascript so a little experience with Javascript would be appreciated."
 },
 {

     "name": "Yash Kumar Lal",
     "title1": "Simple Natural Language Processing techniques",
     "idea1": "Native implementation and evaluation of PoS tagging, language modeling and representation. Baselining of each algorithm and testing to be included. Further algorithms and approaches can be covered if time permits (leeway for students).",
     "title2": "Backend for Samaritan smart system",
     "idea2": "https://github.com/avikantz/Samaritan was designed to be a semi-intelligent system based on Samaritan from Person of Interest. Python implementation of context recognition from available query in the backend. Students can also come up with other ideas that the system would benefit from.",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Avikant Saini",
     "title1": "Meme Maker",
     "idea1": "The involved student(s) as a part of the MemeMaker organization (https://github.com/MemeMaker) would be required to do:\n- [iOS/Swift] Improve on the existing Meme Maker iOS app (Swift 3 port to begin with)\n- [iOS/Swift] Adding new features to the application.\n- [Python/Flask] Adding new features to the backend.\n- [Android/Java] Port MemeMaker to Android\n\nBenefits:\n- Dank Memer certification.\n- Shoutout on Qnax Zrzrf (:p).",
     "title2": "Samaritan-AI",
     "idea2": "The involved student(s) will be expected to work on the following as an attempt to create a working heavily downsized and non evil clone of Samaritan from CBS' Person of Interest.\n- [HTML/CSS/JS] Make a web interface for Samaritan. Something along the lines of (https://github.com/avikantz/Samaritan) (Right now we have a clone http://samaritan-ai.herokuapp.com)\n- [Android/Java] Create a front end all code interface using graphics libraries for Samaritan (Similar to what's done for iOS at (https://github.com/avikantz/Samaritan)\n\nBenefits:\n-Lifetime protection from Samaritan\n-Placement in Northern Lights program\n-Nautilus solutions",
     "title3": "Instant Cutouts",
     "idea3": "The involved students shall be expected to work on a machine learned image processing platform (Python/OpenCV/SciKitLearn) to get instant cutouts of subjects from images. This project is still in ideas phase, so the student shall have the chance to start afresh.\nMotivation: As a photoshopper/memer, most of the time is spent in getting cutouts of people (For n00bs: A cutout is a background removed image of a subject (e.g. http://i.imgur.com/fjYfbNT.png))\n(Some datasets and examples can be taken from r/cutouts)\n\nBasic workflow shall be:\n[Input image] -- system -> [cutout]\nAdvanced workflow:\n[Input image with multiple subjects] -- system -- [list of subjects] -- interface to select -> [Cutout(s)]"
 },
 {

     "name": "Aditya Walvekar",
     "title1": "Skribe",
     "idea1": "A voice to text transcriber. Useful in meetings, and other events. Preferred language:Python. Past experience of dealing with sound is helpful. This app can be extended to support multiple people, auto voice recognition, applying some ML to extract key words and return a TLDR.",
     "title2": "OnePay",
     "idea2": "Often, while switching from one payment gateway to another, a huge chunk of the app needs to be re-built to fit the API calls of the newer payment gateway. With OnePay, we can build an open source module to handle transaction of any Payment Gateway through a single interface. ",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Chinmay Nivsarkar",
     "title1": "MIT-Linux",
     "idea1": "Despite being a technical college, Linux receives little love at MIT given the fact that it is largely believed it is not as intuitive to use. Hence the plan is to build a debian based compiled-from-source distro, tailor made for MIT students. Customised in such a way that it contains open-source/linux based alternatives for all necessary applications used by the students, additionally providing desktop environments and apps that help for an easy transition into Linux, when coming from a Windows background.\n\nLanguages : C,Linux",
     "title2": "Location Based Reminder ",
     "idea2": "An app that allows you to tag tasks and locations together - mobile network, GPS or WiFi based. Purpose of the app is to simplify problems that involve group effort by setting up a system that can notify different people across devices. The base idea is to tag people in said tasks and remind them to complete if the tag matches their location - where the tag is either a location (Network/GPS) or BSSID(WiFi). Any further enhancements can be discussed and implemented.\n\nLanguages: Android",
     "title3": "Server Monitoring Chat Bot",
     "idea3": "A hosted server often is SSH-ed or needs a browser to view statistics about health and activity. To simplify this process, build a bot in Python (using the Telegram Bot API) that can use command line tools/ read from certain files on the server and display certain stats interactively, depending on the query. Some form security must be implemented that ensures the connection cannot be exploited, but this could simplify the monitoring process significantly.\n\nLanguages : Python,Linux"
 },
 {

     "name": "Punit Bhatt",
     "title1": "Text detection and localisation in images",
     "idea1": "A neural network needs to be designed to help detect text in images without the use of any existing neural network libraries. Also, the location of the detected text needs to be found out.",
     "title2": "Parallel computer vision library",
     "idea2": "Create a python library containing the CUDA implementation of basic computer vision algorithms like filters, edge detectors . It needs to be well documented and written in an object oriented manner. Everything must be written from scratch without using any other CV libraries. ",
     "title3": "Python library for basic Linux commands",
     "idea3": ""
 },
 {

     "name": "Saketh Kaparthi",
     "title1": "Location based silent mode",
     "idea1": "An android app that tracks the current location of user, when in the vicinity of any user specified location(s) switches the mobile to silent mode.",
     "title2": "VR Platformer game(Google cardboard)",
     "idea2": "A simple VR  endless runner platformer game. Uses unity3d and C# / JavaScript. For a good idea of what the game will be, look at \nhttps://play.google.com/store/apps/details?id=co.outtabed.hopvr\nNote: Cardboard headset and android phone with version 5.0+ required",
     "title3": "Local messenger",
     "idea3": "An android app that makes a chat client, which connects devices across the same network and helps communicate locally(without internet)."
 },
 {

     "name": "Siddharth Kothiyal",
     "title1": "Remote Screen Control (Android)",
     "idea1": "Remote Screen Control let's you create an interface which allows you to share the screen and lets another user control the system remotely in real time, in an easy way (basically a Team Viewer clone). This project will be dealing with the Android implementation of Ishan Handa's Remote Screen Control and at many times you will find yourself working hand in hand with the person working on that project. The app should allow your phone to be universally controlled by another system or may be able to control another system (not necessarily another Android).  While doing this you'll have to work on various different components like key logger/screen touches, using sockets to transfer images, file transfers, live video and voice chat etc. The biggest challenge when it comes to this problem is to reduce the lag of videos over the internet. In addition to it the student will find themselves working a lot with the background services in android, which will be an amazing learning experience. ",
     "title2": "Physics Simulator",
     "idea2": "This project will mostly be made on Python (pref) or C++, and will extensively use OpenGL to visually represent the simulations. The project aims to (as the name suggests) simulate basic real world physics problems, like a bouncing ball,  floating object, collisions. Would be a fun experience for people interested in physics. In the initial days the student will be involved in making basic primitives available to the user. After that the student will get to work on making simulations possible. Brownie points for providing functionalities like pan, zoom, rotate etc, in the simulations. ",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Arjun Narayan",
     "title1": "Club Online Event Framework",
     "idea1": "Most clubs have an event which mostly fits a question and answer framework. We can create a nice framework and expedite the whole process. ",
     "title2": "2D Game Engine ",
     "idea2": "Will be an amazingly difficult but rewarding project. Pretty Self explanatory on the end goal :P. Can be as simple or as complex as you want it to be. ",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Sudarshan Sunder",
     "title1": "Smallr - Minimizing boilerplate code in Android",
     "idea1": "Smallr, an Android library that aims to minimize/remove the need to write so much boilerplate code (Code that needs to be written with little or no modifications just to make something work). One such example is the RecyclerView adapter and the FragmentPager adapter. This library is essentially a wrapper to such classes (one's mentioned above and more) that reduces the amount of code required to accomplish the same thing.",
     "title2": "Braille OCR using Python ",
     "idea2": "This application reads out Braille in English for the visually impaired. It uses Machine learning in order to recognize the braille characters. The characters are then mapped to their corresponding English alphabet. It then uses TTS to read out the sentence in English or any language that the user prefers (Using Google translate API). ",
     "title3": "",
     "idea3": ""
 },
 {

     "name": "Mayank Bansal",
     "title1": "Public Reactometer ",
     "idea1": "This project involves aggregating news from pre determined trusted sources and aggregating them in one place as well as listing possible fake news sources. The reactometer measures public opinion in terms of (angry, uneducated, happy, supporting, against, sad, etc.) based on articles from the web, Facebook, Twitter and other social media platforms. The system would require sentiment analysis to analyse text and then would have to map reactions onto a web platform. Requires HTML, JS, CSS, and any web backend platform (Node, PHP, Flask)",
     "title2": "Money Genie",
     "idea2": "This project involves building a chat bot (on Facebook messenger) that can parse and understand basic monetary transactions like \"Spent $32 on ????? today\", \"Borrowed $50 from ?????\", \"????? Owes me some money\" (sends reminder to that person), \"Transfer balance to ????\" (Pay money you owe), etc and will log everything for you so you can see how much you spent and keep track of money you lent, or borrowed. Involves understanding of language parsing, chatbots, Facebook messenger API.",
     "title3": "SentiBox UI/UX",
     "idea3": "SentiBox is a UI/UX project which involves developing a web framework for being able to create an online personal scrapbook with different paper materials, photos, post-it notes, etc. Users should be allowed to upload pictures, scale, rotate and place it in their online journal. There would be different handwritten fonts as well. This project would require knowledge of CSS, JS (A lot) , HTML."
 }
 ];




 $(document).on("click",".btn-info",function(){
    var name = $(this).data("name");
    var pDetails = JSON.search(projectIdeas,'//*[name="' + name + '"]');
    var mDetails = JSON.search(mentors,'//*[name="' + name + '"]');
    $(".sidenav-details").empty();
    if(pDetails.title3 == "")
        $(".sidenav-details").append('<h2 class="section-heading text-center">' + name + '</h2> <h4>Domain:</h4><span>' + mDetails[0].domain + ' </span><h4>Languages:</h4><span>' + mDetails[0].languages + ' </span><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title1 + '</h3> <p class="card-text">' + pDetails[0].idea1 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title2 + '</h3> <p class="card-text">' + pDetails[0].idea2 + '</p></div></div></div></div>');
    else
        $(".sidenav-details").append('<h2 class="section-heading text-center">' + name + '</h2> <h4>Domain:</h4><span>' + mDetails[0].domain + ' </span><h4>Languages:</h4><span>' + mDetails[0].languages + ' </span><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title1 + '</h3> <p class="card-text">' + pDetails[0].idea1 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title2 + '</h3> <p class="card-text">' + pDetails[0].idea2 + '</p></div></div></div></div><div class="row"> <div class="col-md-10 col-md-offset-1"> <div style="height:auto;" class="card"> <div class="card-block"> <h3 class="card-title">' + pDetails[0].title3 + '</h3> <p class="card-text">' + pDetails[0].idea3 + '</p></div></div></div></div>');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#mySidenav").css('width',"100%");
}
else 
    $("#mySidenav").css('width',"30%");
});

 $(document).on("click",".closebtn",function(){
    document.getElementById("mySidenav").style.width = "0";
});

 $.each(mentors,function(k,v){

    $(".mentorsHolder").append('<div class="col-md-3 col-lg-3 col-sm-11 col-xs-11"> <div class="card"> <img class="card-img-top" src="http://rhythmanalysis.net/style/images/user-placeholder.jpg" width="auto" height="200" alt="Mentor Image"> <div class="card-block"> <h4 class="card-title">' + v.name + '</h4> <p class="card-text"><button data-name="' + v.name + '" class="btn-info">View Details</button></p><p class="card-text"><small class="text-muted"><a target="_blank" href="' + v.github + '"><i class="fa fa-github fa-2x"></i></a><a target="_blank" href="tel:' + v.mobile + '"><i class="fa fa-phone fa-2x"></i></a><a target="_blank" href="mailto:' + v.email + '"><i class="fa fa-envelope fa-2x"></i></a></small></p></div></div></div>');
});






})(jQuery); // End of use strict
