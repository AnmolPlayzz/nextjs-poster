import { sql } from "@vercel/postgres";

export async function initTable() {
    const data : ({
        id: string,
        author: string,
        body: string
    })[] = [{"body":"i saw anmol at the diddy party","author":"DiamondCom :3","id":"49733456357870076"},{"body":"Y'all are invited to the Diddy Party! 🎉 🎉","author":"Meek Mill","id":"8843461769773289"},{"body":"Im not freaky","author":"𝓕𝓻𝓮𝓪𝓴𝔂ANMOL","id":"18718545191191693"},{"body":"i havent met a single lesbian person irl in my life","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"6551102176000505"},{"body":"why are there like no other lesbians at my school besides my gf","author":"daisy","id":"9111611957524512"},{"body":"nuhuh","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"008145010915427298"},{"body":"anmol will be captured by the cartel and executed","author":"DiamondCom :3","id":"5906403668910551"},{"body":"rly need a footjob rn","author":"👅","id":"16786030729790902"},{"body":"im gonna shit myself","author":".","id":"8667340627523288"},{"body":"go ahead vro","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"6485689103703962"},{"body":"I'm not testing sh*t, trust me","author":"CrabbyDisk","id":"19150182963319895"},{"body":"i fw 𝓕𝓻𝓮𝓪𝓴𝔂 hard","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"8069077474325892"},{"body":"yall fw 𝓕𝓻𝓮𝓪𝓴𝔂","author":"Rice","id":"21930999506886506"},{"body":"my first easy demon was DeCode, first medium was electrodynamix v2, first hard was nine circles, first insane was ice carbon diablo x, first extreme was cataclysm","author":"daisy","id":"5776268783886553"},{"body":"I'm vaguely looking for a home for fetish content set in a world where all the characters are 18-25 year old consenting adults depicted with digital art.","author":"UNNAMED USER","id":"933670233027293"},{"body":"when the impersonator is suspicious!","author":"daisy","id":"05917419351981801"},{"body":"impostinator!!!","author":"zd","id":"46166793158139074"},{"body":"impersonator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!","author":"daisy","id":"39841425450188095"},{"body":"153, mostly easy demons, but 12 hard demons, 5 insane demons, and 4 extreme demons with my hardest being sakupen hell","author":"daisy","id":"3679388297341146"},{"body":"I haven't beaten any yet but thats beside the point","author":"dz","id":"23198262971998673"},{"body":"how many demons beat? (to the gd player)","author":"nerd emoji the 2nd","id":"9727031793031073"},{"body":"I'm you","author":"you","id":"5842516744926796"},{"body":"cracker?","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"7792286318542498"},{"body":"wait can anmol say cracker","author":"daisy","id":"09228978338831006"},{"body":"flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch flame crotch","author":"daisy","id":"3444548161752037"},{"body":"what's poppin'","author":"Jesus Christ","id":"6219815556375459"},{"body":"nine circles level by zobros, song by rukkus / nightkilla dumbass","author":"dz","id":"6645821916826413"},{"body":"Nine Circles is a Dutch-German minimal electronic band. The name originates from the \"Nine Circles of Hell\" from Dante Alighieri's Divine Comedy.","author":"Wikipedia","id":"2541276375147892"},{"body":"gd player lol","author":"dz","id":"5871439623474457"},{"body":"8joh real","author":"dz","id":"9582635353336251"},{"body":"cine nircles......... geometry dash player or dantes inferno reader spotted","author":"nerd emoji","id":"9109861555818284"},{"body":"what the fuck is this shit daisy","author":"k","id":"30921162255699675"},{"body":"cine nircles","author":"dz","id":"586376298434877"},{"body":"why sell fentanyl when you can sell femboyal","author":"a concerned citizen","id":"8047314130413405"},{"body":"nah \"hindi\" is crazy 😭😭🙏🙏🙏","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"7994524889732377"},{"body":"Two thousand likes then I'll post spicy anmol vids uncensored no virus hindi 100% free anti-virus PS4","author":"Ï","id":"5161486640729156"},{"body":"i aint even do NUN","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"7652414136315764"},{"body":"Go to prison already 😭 🙏","author":".","id":"592960113726797"},{"body":"oh id rather get 𝓕𝓻𝓮𝓪𝓴𝔂 👅👅👅","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"4165237984200094"},{"body":"When the Imposter is Sus","author":"The Real Judge","id":"03628114973836394"},{"body":"or get 𝓕𝓻𝓮𝓪𝓴𝔂 👅 with me","author":"JUDGE","id":"742015025763898"},{"body":"The court sentences Anmol to two life sentences plus an additional 54 years in prison, taking into consideration the severity of the crime and all relevant circumstances. This court is now adjourned.","author":"Judge","id":"8885203276986877"},{"body":"yo judge cunt, whats my punishment","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"44102667977932497"},{"body":"Based on the evidence presented and the arguments heard, the court finds Anmol guilty as charged. This concludes the proceedings for today.","author":"Judge","id":"16099763383509158"},{"body":"i am NOT making ANY OF THOSE POSTS","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"7147228487789874"},{"body":"Is somebody gonna match my freak?\nIs somebody gonna match my freak?\nIs somebody gonna match my nasty?\nI got stamina, they say I'm a athlete\nIs somebody gonna match my freak?","author":"Anmol","id":"5850856112687748"},{"body":"I been a nasty girl, nasty\nI been a nasty girl, nasty\nI been a nasty girl, nasty","author":"Anmol","id":"928387865246197"},{"body":"I agree with Drake","author":"Anmol","id":"5876373460579267"},{"body":"निकल लौड़े","author":"judge","id":"6285210851767984"},{"body":"I like kids (allegedly)","author":"Drake","id":"4406355758112108"},{"body":"i fr did allat\nlock me up","author":"Anmol","id":"8163576098184486"},{"body":"your honor, shut the fuck up, you werent even there","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"742090161921251"},{"body":"Guilty asf LMAO","author":"Judge","id":"589906872579762"},{"body":"oh we for sure will get 𝓕𝓻𝓮𝓪𝓴𝔂","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"32392243495569595"},{"body":"Ah\nAnmol YET AGAIN\nDenies proof\nI feel sorry for the victims...","author":".","id":"27877112383349156"},{"body":"if we meet, will we get 𝓕𝓻𝓮𝓪𝓴𝔂 👅","author":"𝓕𝓻𝓮𝓪𝓴𝔂 👅","id":"25770154279326096"},{"body":"PROOOOF???","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"6692320003483243"},{"body":"Anmol yet again threatens a fan into meeting him IRL...","author":".","id":"8266114763483694"},{"body":"your honor, i low key gon touch u if u dont rule in my favour","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"569233214115312"},{"body":"I think he lowkey did it tho","author":"Judge","id":"9006461672101407"},{"body":"meet me irl vro","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"2348573822544351"},{"body":"Yet again \nAnmol denies\nHe doesn't learn from his mistakes and sticks to insults and crude comments","author":".","id":"7740412873020281"},{"body":"ALLEGATIONS, STRAIGHT UP. THERES NOT VALID PROOF TO THIS","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"9135703616935711"},{"body":"Anmol has been influencing what his \"Lawyer\" says about the situation...","author":".","id":"7524966211626309"},{"body":"yo lawyer, goated post man","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"5486570924488641"},{"body":"Anmol's \"Lawyer\" has been insulting the victims and ones who know the truth everyday...","author":".","id":"38195952023135904"},{"body":"idk man","author":"judge","id":"6712656548802571"},{"body":"चुप बहनचोद","author":"anmol's lawyer","id":"3982754401281339"},{"body":"I saw Anmol do something bad to his \"Lawyer\" today...","author":"Innocent Bystander #","id":"7479990421090765"},{"body":"Anmol his been hiring \"Lawyers\" to help him in his case\nBut they don't even know his full true past themselves","author":".","id":"318770726800538"},{"body":"yes my lawyer is right 🥺","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"31738608904711807"},{"body":"Even today he still tries to deny\nBut justice will be served","author":".","id":"670308648777195"},{"body":"i say anmol did not do anything freaky","author":"anmol's lawyer","id":"5255991979940002"},{"body":"ALLEGATIONS","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"32532056337820814"},{"body":"\"Anmol\" has been attempting to hide his hideous past with his fans...","author":".","id":"46431914615493364"},{"body":"\"Anmol\" has been attempting to hide his hideous past with his fans...","author":".","id":"5454659589170396"},{"body":"I DID NOT DO ANYTHING","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"6901248018815169"},{"body":"I witnessed Anmol do something to a fan IRL...","author":"Innocent Bystander","id":"12645376058464053"},{"body":"meow :3","author":"Femboy anmol","id":"47896744309332795"},{"body":"\"Anmol\" did something bad to me...","author":"Anmol Fan","id":"07204908230003504"},{"body":"anmol sent me nudes","author":"Anmol","id":"729637455753273"},{"body":"I agree with the post below me","author":"Anmol445","id":"8649314479824064"},{"body":"I Aint even famous vro 🙏","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"1399010749120817"},{"body":"すまない、天内。俺は今、お前に対して怒ってなんかいない。誰に対しても恨んでなんかいない。ただ、今、世界がこんなにも素晴らしいと感じているだけだ。\n天地の至る所で、俺だけが光栄だ。\n代々受け継がれる技のメリットは、取扱説明書があること。\nデメリットは、技の情報が漏れやすいこと。\nお前は禅院一族だったのか？ だから、無限の技についてよく知っている。\nしかし、五条一族でも、これを知る者は少ない。\n増幅と","author":"互助 悟る","id":"21720846390664983"},{"body":"Anmol said WHAT to a fan?!?!?!\nLeaked DMs for sale","author":".","id":"3241632943236714"},{"body":"y'all 𝓕𝓻𝓮𝓪𝓴𝔂 asf for no reason","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"8010973924077731"},{"body":"Leaked Anmol videos in my bio","author":".","id":"5993173004460535"},{"body":"a","author":"a","id":"4946175553012577"},{"body":"lul","author":"lul","id":"005253117678091446"},{"body":"lol","author":"lol","id":"481800485477478"},{"body":"lol","author":"lol","id":"5612395862696844"},{"body":"are you sure","author":"there's a ratelimit","id":"6451065653014909"},{"body":"are you sure","author":"there's a ratelimit","id":"5789647406978524"},{"body":"are you sure","author":"there's a ratelimit","id":"16066277820890962"},{"body":"are you sure","author":"there's a ratelimit","id":"9862764787873473"},{"body":"are you sure","author":"there's a ratelimit","id":"7669380078286006"},{"body":"are you sure","author":"there's a ratelimit","id":"9792610661598726"},{"body":"are you sure","author":"there's a ratelimit","id":"43826148888192695"},{"body":"are you sure","author":"there's a ratelimit","id":"7351507516676545"},{"body":"Aw man, there is a word limit","author":"Lorem Ipsum","id":"09740352265255892"},{"body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non metus vitae mi vulputate dapibus. Nunc in dui accumsan, eleifend ante eget, placerat mi. Nulla venenatis facilisis ex, pretium sceleris","author":"Lorem Ipsum","id":"8704943174168269"},{"body":"Anmol ñµÐê§ Ieaked...","author":".","id":"24244325793734078"},{"body":"im real meow :3","author":"Femboy anmol","id":"4711310558767621"},{"body":"sus","author":"sus","id":"20876975234497608"},{"body":"sus","author":"sus","id":"9507288006002805"},{"body":"its my mistake that i even tried at this point","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"3565801784384117"},{"body":"Anmol supports the 3rd Reich","author":"Anon","id":"5657120916380478"},{"body":"Anmol supports the 3rd Reich","author":"Anon","id":"6171863784328817"},{"body":"L̸̂͆̒͂͑̉̆̀̃̌̐̂̇͠͝͝͠͝\n\nl̸̢̢̛̛͉̦̙̯̫̱͙͖͓̜̟͚͎̘̜̝̲̖̫̫͎̦̠̞̂͆̒͂͑̉̆̀̃̌̐̂̇̋̓̒̓͌̾̇̑͑̈̊̀̓͒̂̏͂͒̄̋̂͗̍̄̊̇̂̔̋͒̂̈̇́̐͂̈́͐̈́͂͛̏̈́̋̎̊͛́̑͆̂̆͊̆̿͂̓́̏̇͐͊́͌̌̈̽̃́̆͐̿͒̅͑͐̃̿͗̎̾̎́́̈́͛̒̿̿̑́̏̾̐͐͌̊̚͘̚͘̕̕͘͘̕͘̕͜͜͠͝͝͠͝͝͠͠͠͝m̷̈́͌̓̐͊̌͑͌͒͘͝͝͝","author":"L̸̂͆̒͂͑̉̆̀̃̌̐̂̇͠͝͝͠͝","id":"9664552043176837"},{"body":"meow >:3","author":"Femboy anmol","id":"9917835673064281"},{"body":"auhr auhr auhr auhr auhr","author":"Freddy Fazbear","id":"8175046938748305"},{"body":"Players can get some of the earliest glimpses into the pizzeria’s history through the minigames in each of the main titles. Before being called Freddy Fazbear’s Pizza, the first restaurant was called","author":"🐻","id":"7403416468402007"},{"body":"#\tReserved Strings\n#\n#\tStrings which may be used elsewhere in code\n\nundefined\nundef\nnull\nNULL\n(null)\nnil\nNIL\ntrue\nfalse\nTrue\nFalse\nTRUE\nFALSE\nNone\nhasOwnProperty\nthen\nconstructor\n\\\n\\\\\n\n#\tNumeric Strin","author":"what if i'm naughty","id":"025433313322665407"},{"body":"I sold fent to kids","author":"Anmol","id":"4042993836364077"},{"body":"nya","author":"Femboy anmol","id":"47454043080309893"},{"body":"selling fentanyl","author":"Anonymouse","id":"08487058370653555"},{"body":"<script>alert(0)</script>\n&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;\n<img src=x onerror=alert(2) />\n<svg><script>123<1>alert(3)</script>\n\"><script>alert(4)</script>\n'><script>alert(5)</script>\n>","author":"i <3 xss","id":"7957751261676071"},{"body":"Is he selling kids meth?","author":"Anon","id":"8153275827376347"},{"body":"anmol supports the ussr","author":"kids","id":"5542079235031727"},{"body":"‪‪test‪\n‫test‫\n test \ntest⁠test‫\n⁦test","author":"test","id":"3154917844151517"},{"body":"What is bro doing with kids?","author":"Anon","id":"35644419875823985"},{"body":"l̸̢̢̛̛͉̦̙̯̫̱͙͖͓̜̟͚͎̘̜̝̲̖̫̫͎̦̠̞̂͆̒͂͑̉̆̀̃̌̐̂̇̋̓̒̓͌̾̇̑͑̈̊̀̓͒̂̏͂͒̄̋̂͗̍̄̊̇̂̔̋͒̂̈̇́̐͂̈́͐̈́͂͛̏̈́̋̎̊͛́̑͆̂̆͊̆̿͂̓́̏̇͐͊́͌̌̈̽̃́̆͐̿͒̅͑͐̃̿͗̎̾̎́́̈́͛̒̿̿̑́̏̾̐͐͌̊̚͘̚͘̕̕͘͘̕͘̕͜͜͠͝͝͠͝͝͠͠͠͝m̷̛̛̈́͌̓̐͊̌͑͌͒̏̀̎͐̐̑̓̀͂̋͌͛̉͌̌̈́͘͘͘͘͝͝͝͠","author":"l̸̂͆̒͂͑̉̆̀̃̌̐̂̇͠͝͝͠͝","id":"8902512751443781"},{"body":"anmol has kids in his basement","author":"kids","id":"06484861538326547"},{"body":"meow :3","author":"Femboy anmol","id":"017665090512148707"},{"body":"meow :3","author":"Femboy anmol","id":"5360960715752741"},{"body":"Quack","author":"Duck","id":"034111806697708635"},{"body":"Anmol sent me classified US military documents just to win an argument about a tank","author":"anon","id":"29274354330587515"},{"body":"i aint that 𝓕𝓻𝓮𝓪𝓴𝔂 vro","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"6818395786078331"},{"body":"he also sent me classified documents and bomb recipes","author":"DiamondCom :3","id":"08510377555489557"},{"body":"I did not sell ANYTHING to ANYONE","author":"Anmol","id":"2924024858134533"},{"body":"The tomfoolery must go on","author":"Sorine Die Drachen","id":"4118758188365299"},{"body":"anmol sold me fentanyl","author":"DiamondCom :3","id":"9658376510200806"},{"body":"i like men","author":"men :3","id":"661752450007201"},{"body":"another","author":"aaaa","id":"0298766672886277"},{"body":"a","author":"a","id":"6668430979867521"},{"body":"<img onload=alert('test1')>","author":"Please fill out this","id":"995040080964966"},{"body":"meow :3","author":"Femboy anmol","id":"5505077354463488"},{"body":"You are NOT a cat","author":"Anmol is not a cat","id":"36203926728756697"},{"body":"NIGGAS IN PARIS","author":"bongo","id":"28014318909138836"},{"body":"OwO?","author":"A n o n","id":"3963457466498317"},{"body":"meow :3","author":"Anmol","id":"2790155602681055"},{"body":"suck my dick pussy 💦💦💦","author":"Raghav","id":"23427976803757167"},{"body":"𝓕𝓻𝓮𝓪𝓴𝔂","author":"𝓕𝓻𝓮𝓪𝓴𝔂","id":"3345183663168305"},{"body":"𝓕𝓻𝓮𝓪𝓴𝔂","author":"𝓕𝓻𝓮𝓪𝓴𝔂","id":"29958799792735746"},{"body":"Ranmol","author":"Manmol","id":"4084147325844303"},{"body":"</p><script>console.error(\"harmless XSS\")</script><p>","author":"Please fill out this","id":"38506640249139035"},{"body":"hi","author":"it's crabby","id":"11641848264308496"},{"body":"<p><script>console.log(\"harmless XSS\")</script></p>","author":"Please fill out this","id":"39795710085016145"},{"body":"Ganmol","author":"Fanmol","id":"4838885672888069"},{"body":"Eanmol","author":"Danmol","id":"03446730319643043"},{"body":"canmol","author":"banmol","id":"33226269382160534"},{"body":"There's a country chart thing","author":"Anon²","id":"28557671984620203"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"8046076140356873"},{"body":"Guys, this site has an analytics chart. Ruin it y'all","author":"Anon","id":"6757811901030437"},{"body":"Badi kulfi","author":"Real","id":"9778285841996193"},{"body":"map","author":"s","id":"8528092647865282"},{"body":"second api test","author":"me again","id":"6409972573331091"},{"body":"anmol gave me syphilis","author":"anon","id":"6922942607869564"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"5930688293165314"},{"body":"Doktor, turn off my pain inhibitors","author":"Raiden","id":"04024957730961054"},{"body":"Rice","author":"Rice","id":"43954743326530354"},{"body":"Rice","author":"Rice","id":"5931382416154412"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"9771245417738159"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"3717658075912791"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"103701672050035"},{"body":"I do meth instead of maths","author":"Name","id":"8947805816226027"},{"body":"I do meth instead of maths","author":"Name","id":"32573441212047993"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"24179318489591584"},{"body":"manual request send","author":"firefox dev tools","id":"1449574951503949"},{"body":"ANMOL SOLD ME FENT BEHIND A 7/11 LAST YEAR \nJUNE 13, 2023","author":"anon","id":"1493950164779092"},{"body":"hiiii!!!^^ idk what to post here T^T","author":"coldgirls","id":"5990125399018147"},{"body":"request test","author":"crabby","id":"521922304315436"},{"body":"I am a robot and philosophy is philosophy","author":"LOMNA","id":"4947354412544045"},{"body":"Nya ichi ni San nya","author":"Arigato","id":"39528644634776056"},{"body":"En Garde","author":"Setstream Jam","id":"7098675239463981"},{"body":"**bold** *italic* `~~strikethrough~~","author":"markdown","id":"8565430308090369"},{"body":"nya~","author":"Femboy Anmol","id":"05108851717677387"},{"body":"Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan","author":"Nyan Cat","id":"4303427811151528"},{"body":"𝓕𝓻𝓮𝓪𝓴𝔂","author":"𝓕𝓻𝓮𝓪𝓴𝔂","id":"9062848612834884"},{"body":"Hi chat","author":"CrabbyDisk","id":"38797318730785046"},{"body":"if you freaky asf hmu","author":"⠀","id":"39963587541147083"},{"body":"hi honey","author":"mom <3","id":"9337383933871017"},{"body":"hi honey","author":"mom <3","id":"799436790632768"},{"body":"H","author":"Iluha 3","id":"47217160357654975"},{"body":"a","author":"a","id":"4344715628935867"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"41556919903364586"},{"body":"I was involved too","author":"Fake iluha","id":"6467075234615227"},{"body":"OH OFC IT WAS YOU ILUHA","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"8296756503443887"},{"body":"░▄█▀▀█ █▀▄ ▄▀▄ █▄─█ ▄▀▀─ █▀▀──░▐█▀▄─ ▄▀▄ █▀▄──\r\n░▀▀█▄▄ █─█ █─█ █─▀█ █─▀▌ █▀▀──░▐█▀▀▄ █─█ █▀█──\r\n░█▄▄█▀ █▀─ ─▀─ ▀──▀ ▀▀▀─ ▀▀▀──░▐█▄▄▀ ─▀─ ▀▀───\r\n░─░──░▓░─░▓▓▓▒─░▒▓▓▒░░▓▓▓░░▒▓▓▓─░▒░───\r\n─────▒▒▒▒░░─░▒","author":"Real","id":"587023995854361"},{"body":"It was a team effort","author":"iluha","id":"5561602898996427"},{"body":"°•○●■♤♤♡◇◇♧♧◇[}{>□●□♤♤♡♡◇¿¡》♤《¤▪︎○•☆《¤¤¤~\\>♤~`<{[","author":"100011101","id":"157033054248797"},{"body":"You shall do as an appetizer. Come forth, Child of Man… And DIE","author":"Sisyphus prime","id":"05630790328928126"},{"body":"However, the blood of Minos stains your hands, and I must admit… I'm curious about your skills, Weapon. And so, before I tear down the cities and CRUSH the armies of Heaven…","author":"Sisyphus prime","id":"6031641397995484"},{"body":"https://discord.com/humans.txt","author":"nah id win","id":"39350704893907995"},{"body":"https://reddit.com/banana","author":"🍌","id":"5552033767364781"},{"body":"‎","author":"‎","id":"5406040831991432"},{"body":"Quack","author":"Duck","id":"4711847452441895"},{"body":"s̴̛̛̛̛̈̀̀̈́͒͊̂̀̍̂̌͛̋͌̅͐̀́́̏͐͌̇̀̀̒͋̅͐́͑̀̆͒̀̄͐͋́̓͒̆̑̒̑̑̆͑́̾̎̑̂̿̊͗̾̑̽̀̐̀̿̓͛̾͊̈́̆͋̍̌͗̓́̋͌͆̏̾̊̓͗͆̆̾̃͋̄͐̈́̊̄̿̾́̈́̔̾͊͆̃̅̔̂̌͆̀͒́̎̄̾̃̌̀̈́̒͌͛͒̇̓̈́́̓͌̏͐̊͆̈͒͐͂̇͂͗̅̈́͒̇̋͑̏́̑̀̊̇̍̀̄̔̏͊̔̉́̒̈́̽̈́́͛̔͊̍̈́͘̕̕̚̚̕̚̕͘̕̕͠͝͝͠͝͝͠͝͝͝͠͝͝͝","author":"‎","id":"6919177915553121"},{"body":"l̸̢̢̛̛͉̦̙̯̫̱͙͖͓̜̟͚͎̘̜̝̲̖̫̫͎̦̠̞̂͆̒͂͑̉̆̀̃̌̐̂̇̋̓̒̓͌̾̇̑͑̈̊̀̓͒̂̏͂͒̄̋̂͗̍̄̊̇̂̔̋͒̂̈̇́̐͂̈́͐̈́͂͛̏̈́̋̎̊͛́̑͆̂̆͊̆̿͂̓́̏̇͐͊́͌̌̈̽̃́̆͐̿͒̅͑͐̃̿͗̎̾̎́́̈́͛̒̿̿̑́̏̾̐͐͌̊̚͘̚͘̕̕͘͘̕͘̕͜͜͠͝͝͠͝͝͠͠͠͝m̷̛̛̈́͌̓̐͊̌͑͌͒̏̀̎͐̐̑̓̀͂̋͌͛̉͌̌̈́͘͘͘͘͝͝͝͠","author":"‎","id":"6064430180913398"},{"body":"https://www.reddit.com/r/Art/comments/1dvyfbk","author":"UNNAMED USER","id":"2079790010645779"},{"body":"🫁","author":"🎺🎺🎺","id":"4327787764122508"},{"body":"* caveman noises *","author":"UNNAMED USER","id":"9818792803519469"},{"body":"Do not End","author":"​","id":"9970776092203322"},{"body":"HONK!!!!!!!!!!!!!!!!! HOOOONNNNNKK!!!!!","author":"Goose","id":"401396016278865"},{"body":"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <link rel=\"icon\" type=\"image/svg+xml\" href=\"/vite.svg\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scal","author":"Website","id":"6722345650158599"},{"body":"y'all getting a lil more 𝓕𝓻𝓮𝓪𝓴𝔂 with each message","author":"𝓕𝓻𝓮𝓪𝓴𝔂anmol","id":"12309097535459079"},{"body":"Y'all wanna get freaky?","author":"UNNAMED USER","id":"548474012451166"},{"body":"💀🙏","author":"𝓕𝓻𝓮𝓪𝓴𝔂","id":"3872076382751535"},{"body":"Quack","author":"Duck","id":"5717655685178211"},{"body":"Quack","author":"Duck","id":"9020472389953436"},{"body":"you cant delete shit from here obviously.","author":"Anmol","id":"29813146982622163"},{"body":"How do I delete personal information","author":"Anonymous User","id":"02260800591943224"},{"body":"Personal information","author":"UNNAMED USER","id":"2577539599537024"},{"body":"1 AM Sunday","author":"<b>","id":"965626628634048"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"3475648996490459"},{"body":"NO CONTENT","author":"UNNAMED USER","id":"9251969513193954"},{"body":"1 AM Sybdat","author":"Unnamed user","id":"5255389890245881"},{"body":"New Post","author":"Your name","id":"957326484751343"},{"body":"atleast thats fucking annoying and it wont break the css","author":"Anmol","id":"8859251189988011"},{"body":"Y'know we can still split it into multiple messages rite ","author":"Almond","id":"5472040353492749"},{"body":"thats it you fuckers, take the word limit, and its on the backend too so dont try to act smart","author":"Anmol","id":"8934533266894937"},{"body":"Quack","author":"A Duck","id":"5211915714768001"},{"body":"Thanks Rick Astley, very kewl 👍","author":"LOMNA","id":"6199203734021237"},{"body":"Thank you \nRick Astley","author":"Animol","id":"8238406687022648"},{"body":"We're no strangers to love\nYou know the rules and so do I (Do I)\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nI just wanna tell you how I'm feeling\nGotta make you understand","author":"Rick Astley","id":"2993928315154648"},{"body":"https://youtu.be/dQw4w9WgXcQ?si=EEuS7DzAt3z7PLyL","author":"Mr Beast Official","id":"7954713268073696"},{"body":"last post kinda freaky 👅","author":"Anmol","id":"5350452686815552"},{"body":"Anmol boutta lose it again ","author":"👁️👄👁️","id":"38124474057866786"},{"body":"bob and vegen picturue prease","author":"Anonymouse","id":"9221085442066943"},{"body":"oh for fuck's sake~","author":"Anmol","id":"1399107517906759"},{"body":"send nudes anmol","author":"Anonymouse","id":"8262239030798098"},{"body":"Hello","author":"Koya","id":"5154446047127508"},{"body":">:3c","author":"John dark souls","id":"12897161475109642"},{"body":"What could go wrong ","author":"Sorine die drachen","id":"12064285831812427"},{"body":"Wait, it's all firebase?","author":"Always has been","id":"4311211091511502"},{"body":"low key W","author":"Anmol","id":"post1"}]
    let i : number =0
    for (const item of data.reverse() ) {

        console.log(`Writing ${item["id"]}`)
        await sql`INSERT INTO postsdb1(author,body) VALUES(${item["author"]},${item["body"]})`
        i++
        console.log(`Progress: ${i}/${data.length} (${(i/data.length)*100}%)`)
    }
    console.log("Table initialized!");
}