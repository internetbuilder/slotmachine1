“Slot Black Beard” Documentation by “Code This Lab S.r.l.” v1.0
“Slot Black Beard”
Created: 27/11/2023
By: Code This Lab S.r.l.
Email: info@codethislab.com

Thank you for purchasing our game. If you have any questions that are beyond the scope of this help file, please feel free to email via user page contact form here. Thanks so much!

Table of Contents
Description
Folder Content
Getting Started
HTML Structure
CSS Files and Structure
JavaScript
Game functions
Change Graphic
Disable Sounds
Wordpress Plugin
A) Description - top
Experience the thrill of the seas with 'Black Beard Slot Machine', a pirate adventure featuring high-quality graphics that transport you to the deck of a pirate ship. Discover the Bonus Game, Free Spins, and enjoy the Autoplay in this slot that combines the allure of piracy with the excitement of modern gaming
The ZIP package contains the game with 1920x1080 resolution that scales to fit the whole screen device
Just warning that for very wide screens, the game may not be perfectly full screen. The game is fully compatible with all most common mobile devices.
Sounds are enabled for mobile but we can't grant full audio compatibility on all mobile devices due to some well-know issue between some mobile-browser and HTML5. So if you want to avoid sound loading, please read Disable Sound section).
WARNING: Sounds can't be enabled for Windows Phone as this kind of device have unsolved issues with 'audio' and 'video' tag.

B) Folder Content - top
ctl_arcade_wp_plugin:
This folder contains the zip package that can be used with our Wordpress plugin "CTL Arcade" (http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421).
game
This folder contains the full game source code ready to be edited.
live_demo
This folder contains the obfuscated code. You should upload this folder on your server if you don't need to make any changes.
readme
This folder contains the package instructions.
thumbs
This folder contains all game icons.
assets
This folder contains all game graphic(.fla,.psd).
C) Getting Started - top
To install the game just upload on your server the game folder live_demo.

Game Embedding: The proper way to embed the game is in a full-screen web page or in an iframe.
In the first case the game will fit the screen size, in the second, that of the iframe.
If the iframe size matches that of the screen, the game will fit accordingly.
The alignment will be proportioned to the aspect ratio of the game.
To install the game in a WordPress website, we suggest to use our plugin CTL Arcade .

Save Score: if you need to call your php function for saving score, you can add it in the index.html file:
?
1
2
3
4
5
6
7
8
$(document).ready(function(){
    var oMain = new CMain();
     
    $(oMain).on("save_score", function(evt,iMoney) {
        //ADD YOUR CODE HERE
    });
});
Localization: You can easily change game text for different languages, changing string in CLang.js
?
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
var TEXT_MONEY     = "CREDIT";
var TEXT_BET       = "BET";
var TEXT_COIN      = "BET";
var TEXT_LINES     = "LINES";
var TEXT_PAYTABLE  = "INFO";
var TEXT_AUTO_SPIN = "AUTO PLAY";
var TEXT_SPIN      = "SPIN";
var TEXT_STOP      = "STOP";
var TEXT_STOP_AUTO = "STOP AUTO";
var TEXT_WIN       = "WIN";
var TEXT_PAYTABLE  = "PAYTABLE";
var TEXT_PAYLINES  = "PAYLINES";
var TEXT_BONUS     = "BONUS";
var TEXT_HELP_BONUS1 = "ON REELS 1 AND 5 ON THE PAYLINE STARTS THE BONUS ROUND";
var TEXT_HELP_BONUS2 = "HIT THE ENEMY SHIP TO GET PRIZES!!";
var TEXT_HELP_FREESPIN = "GET 3 OR MORE SCATTERS ON ANY REEL ON A PAYLINE TO TRIGGER FREESPINS";
var TEXT_CURRENCY  = "";
var TEXT_CONGRATS  = "CONGRATULATIONS!!";
var TEXT_YOU_WIN = "YOU GOT";
var TEXT_FREESPINS = "FREESPINS";
var TEXT_YOU_WON = "YOU WON";
var TEXT_NO_WIN = "NO WIN";
var TEXT_ARE_SURE = "ARE YOU SURE?";
var TEXT_SKIP =  "SKIP";
var TEXT_MISS = "MISS";
var TEXT_DELETE_SAVINGS = "YOUR CREDIT WILL BE RESTORED TO DEFAULT VALUE";
var TEXT_RECHARGE = "DO YOU WANT TO RECHARGE YOUR CREDIT?";
var TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT STORING SETTING LOCALLY. IN SAFARI, THE MOST COMMON CAUSE OF THIS IS USING 'PRIVATE BROWSING MODE'. SOME INFO MAY NOT SAVE OR SOME FEATURE MAY NOT WORK PROPERLY.";
Game option: You can easily customize game setting when creating a new instance of the game in index.html file
?
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
var oMain = new CMain({
                start_credit:100,    //STARTING CREDIT WHEN PLAYER PLAYS THE FIRST TIME
                 
                win_occurrence: 35,  //WIN PERCENTAGE. SET A VALUE FROM 0 TO 100.
                freespin_occur : 10, //FREESPIN OCCURRENCE IF THERE IS A WINNING COMBO
                bonus_occur: 10,     //BONUS OCCURRENCE IF THERE IS A WINNING COMBO
                slot_cash: 100,      //THIS IS THE CURRENT SLOT CASH AMOUNT. THE GAME CHECKS IF THERE IS AVAILABLE CASH FOR WINNINGS.
 
                num_freespin: [3,4,5],//THIS IS THE NUMBER OF FREESPINS IF IN THE FINAL WHEEL THERE ARE 3,4 OR 5 FREESPIN SYMBOLS
                bonus_prize: [10,30,60,90,100], //THIS IS THE LIST OF BONUS MULTIPLIERS.
                bonus_prize_occur: [40,25,20,10,5],//OCCURRENCE PERCANTAGE FOR bonus_prize LIST
                coin_bets: [0.05, 0.1,0.15,0.20,0.25,0.3,0.35,0.4,0.45,0.5], //COIN BET VALUES
 
                /***********PAYTABLE********************/
                //EACH SYMBOL PAYTABLE HAS 5 VALUES THAT INDICATES THE MULTIPLIER FOR X1,X2,X3,X4 OR X5 COMBOS
                paytable : [ [0,0,5,20,100],    //PAYTABLE FOR SYMBOL 0
                                        [0,0,5,20,100], //PAYTABLE FOR SYMBOL 1
                                        [0,0,5,20,100], //PAYTABLE FOR SYMBOL 2
                                        [0,0,10,30,150],  //PAYTABLE FOR SYMBOL 3
                                        [0,0,20,50,200],   //PAYTABLE FOR SYMBOL 4
                                        [0,0,25,70,300],   //PAYTABLE FOR SYMBOL 5
                                        [0,0,25,100,500]   //PAYTABLE FOR SYMBOL 6
 
                                    ],
                freespin_num_occur: [50,30,20],//WHEN PLAYER GET FREESPIN, THIS ARRAY GET THE OCCURRENCE OF RECEIVING 3,4 OR 5 FREESPIN SYMBOLS IN THE WHEEL
                 
                min_reel_loop:0,           //NUMBER OF REEL LOOPS BEFORE SLOT STOPS  
                reel_delay: 6,             //NUMBER OF FRAMES TO DELAY THE REELS THAT START AFTER THE FIRST ONE
                time_show_win:2000,        //DURATION IN MILLISECONDS OF THE WINNING COMBO SHOWING
                time_show_all_wins: 2000,  //DURATION IN MILLISECONDS OF ALL WINNING COMBO
                restart_credit:false,      //IF YOU WANT TO RESTART USER CREDIT WITH DEFAULT VALUE SET THIS TO TRUE   
                check_orientation:false,    //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                show_credits:true,              //SHOW CREDITS ON/OFF
                num_spin_for_ads: 20        //NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
                 
                //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN./////////////////////////// 
                /////////////////// YOU CAN GET IT AT: ////////////////////////////////////////////////////
                // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421
 
            });
D) HTML Structure - top
This game have the canvas tag in the body. The ready event into the body calls the main function of the game: CMain().
The head section declares all the javascript functions of the game. The whole project uses a typical object-oriented approach.
In the init function there are 7 mapped events that can be useful eventually for stats

?
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
  <script>
   $(document).ready(function(){
             var oMain = new CMain();
              
            $(oMain).on("bet_placed", function (evt, oBetInfo) {
                //THIS EVENT IS CALLED WHEN SPIN BUTTON IS CLICKED (NOT IF YOU SPIN AFTER HOLDING REELS)
            });
             
            $(oMain).on("bonus_call",function(evt,oData){
                //THIS EVENT IS CALLED WHEN BONUS MUST BE SHOWN
            });
             
            $(oMain).on("recharge", function(evt) {
                //THIS EVENT IS CALLED WHEN CREDIT IS OVER AND USER WANT TO RECHARGE IT.
            });
             
            $(oMain).on("start_session", function(evt) {
                //THIS EVENT IS TRIGGERED WHEN PLAY BUTTON IN MENU SCREEN IS CLICKED
            });
              
            $(oMain).on("end_session", function(evt) {
                //THIS EVENT IS TRIGGERED WHEN THE EXIT BUTTON IS CLICKED.
            });
 
            $(oMain).on("save_score", function(evt,iScore, szMode) {
                    //THIS EVENT IS TRIGGERED WHEN REELS STOPS AFTER A SPIN. IT CAN BE USEFUL TO CALL PHP SCRIPTS (NOT PROVIDED IN THE PACKAGE) THAT SAVE THE SCORE.
             });
     
             $(oMain).on("show_interlevel_ad", function(evt) {
                    //THIS EVENT IS TRIGGERED EVERY N SPIN. MAY BE USEFUL TO CALL ADS SCRIPT. PLEASE EDIT PARAM 'ad_show_counter' in INDEX.HTML TO SET THIS VALUE.
             });
   });
         
  </script>
   
<canvas id="canvas" class="ani_hack" width="1920" height="1920"> </canvas>
E) CSS Files and Structure - top
The game use two CSS files. The first one is a generic reset file. Many browser interpret the default behavior of html elements differently. By using a general reset CSS file, we can work round this. Keep in mind, that these values might be overridden somewhere else in the file.

The second file contains all of the specific stylings for the canvas and some hack to be fully compatible with all most popular mobile devices

F) JavaScript - top
This game contains:

jQuery
Our custom scripts
CreateJs plugin
Howler plugin
Screenfull plugin
jQuery is a Javascript library that greatly reduces the amount of code that you must write.
The game have the following js files:
CMain: the main class called by the index file.
This file controls the sprite_lib.js file that manages the sprite loading, the loop game and initialize the canvas with the CreateJs library
ctl_utils: this file manages the canvas resize and its centering
sprite_lib: this class loads all images declared in the main class
settings: general game settings
CLang: global string variables for language localization
CPreloader: simple text preloader to show resources loading progress
CMenu: simple menu with play button
CGfxButton: this class create a standard button
CTextButton: this class create a standard text button
CGame: this class manages the game logic
CPaytableLandscape: this class manages the paytable panel that is shown clicking the info button when device is in landscape mode
CPaytablePortrait: this class manages the paytable panel that is shown clicking the info button when device is in landscape mode
CInterface: this class controls game GUI that contains text and buttons
CAPIController: this class contains some settings of bonus and prizes and all the main calls when user spin the reels
CSlotSettings: this class contains all infos relative to symbols, combos and their animations
CAnimSymbol: this class manages the symbol animations when there is a winning payline
CAreYouSurePanel: this clas shows an alert screen when needed
CAvatar: this class manages the animations of the main character
CBetBut: this class manages the payline buttons on the reels' sides
CBgController: this class manages the game background
CBigWin: this class manages big win animation
CBonusBut: this class manages the jar in the bonus panel
CHitShipEffect: this class manages the explosion effect when enemy ship is hit
CMissShipEffect: this class manages the water effect when enemy ship is missed
CBonusPanel: this class shows the bonus panel
CBonusResultPanel: this class shows the final panel with prize of the bonus panel
CCTLText: this class manages the autofit texts in the game
CCreditsPanel: Credits Panel
CFreespinPanel: this class shows the amount of won freespins
CGuiLandscape: this class manages the slot buttons in the landscape mode
CGuiPortrait: this class manages the slot buttons in the portrait mode
CRechargePanel: this class shows a recharge panel when credit is over
CReelColumn: this class manages a reel in the slot
CResultFreespin: this class shows the final prize of freespins
CRollingScore: this class manages a rolling text
CScoreText: this class creates a text that shows won prize
CStaticSymbolCell: this class manages the animation of the winning symbols
CSpriteSheetTextButton: a generic button with two states
CSuspanceEffect:this class shows the suspance reel effect
CreateJs is a suite of modular libraries and tools which work together to enable rich interactive content on open web technologies via HTML5.
Howler is a javascript Audio library.
Resuming, the complete game flow is the following:

The index.html file calls the CMain.js file after ready event is called
The main class calls CPreloader.js to init preloader text and start sprite loading
When all sprites contained in "/sprites" folder are loaded, the main class removes the preloader and calls the CMenu.js file that shows the main menu
If user click on the play button in main menu, the CGame.js class is called and the game starts
The User can start slot spinning, clicking the spin button on the right
If user click on the exit button in the up-right corner, the game returns to the menu screen
G) Game functions - top
In this section will be explained all the most important functions used in CGame.js file.

_init()
This function attach on the canvas some game sprites like background (oBg), GUI, help panel and paytable. It also init the reels.
unload()
This function removes all images from canvas and event listeners on buttons. It's called when user decide to exit from the game.
reelArrived()
This function manages reel loop during slot spinning
_realEndReelAnimation()
This function reset slot buttons and initialize symbol animations if there are winning combos
_showWin()
This function shows next winning combo after slot spinning.
onSpin()
This function is called when user click spin button.
update()
This function manages the game loop.
H) Change Graphic - top
You can easily change all the game graphic, replacing all the file you need in the "/sprites" folder. Just respect file format (.png or .jpg) and size if you don't want to change any code line.


I) Disable Sounds - top
If you want to disable all the sounds for mobile devices, you have to change the following value in settings.js file:

?
1
var DISABLE_SOUND_MOBILE = true;


J) Wordpress Plugin - top
CTL Arcade will allow you to add a real arcade on your worpress website, in this way your users will be more involved and will stay connected longer.

It's possible to add Ads banner at the beginning of each game and at the end of each level. This will give you a new tool to increase your revenues.

Your own users will promote your website sharing their scores on the main Social Networks, with no extra costs for you.

You'll get by default the score-sharing on Twitter. To add Facebook just follow the guideline below.

3 widgets can be added in your pages through a shortcode.
Game iframe
Rate the Game
Leaderboard
Minimum Requirements:

PHP 4.3
WordPress 4.3.1
HTML5
Canvas
Javascript / jQuery
This plugin is designed to work only with games built by Code This Lab.

You can find it here!
ctl arcade

Once again, thank you so much for purchasing this game. Fell free to contact us if you have any questions or issue relating to this game. No guarantees, but we'll do our best to assist.

CODE THIS LAB S.R.L.

Go To Table of Contents

