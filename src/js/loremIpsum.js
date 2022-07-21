const ranking = [
  "Fleet",
  "Gunnery",
  "Major",
  "Lance",
  "Warrant",
  "General",
  "Admiral",
  "Colonel",
  "Major",
  "Captain",
  "Ensign",
  "Officer",
  "Sergeant",
  "Corporal",
  "Private",
  "Airman",
  "Seaman",
  "Senior",
  "Staff",
  "Sheriff",
  "Manager",
  "Spy",
  "Agent",
  "Intern",
  "God",
  "Supreme",
  "Divine",
  "Daedric",
  "Undying",
  "Arch",
  "Exalted",
  "Master",
  "Elite",
  "Novice",
  "Emperor",
  "Führer",
  "King",
  "Queen",
  "Prince",
  "Duke",
  "Duchess",
  "Knight",
  "Legate",
  "Tribune",
  "Consul",
  "Baron",
  "Warlock",
  "Evoker",
  "Wizard",
  "Mage",
  "Orc",
];

const cupcake = [
  "Pie icing topping pudding cake cake pastry gummi bears apple pie. Muffin shortbread powder cotton candy marzipan sugar plum. Cake marzipan ice cream chupa chups soufflé topping.",
  "Cake jujubes sugar plum sweet fruitcake candy brownie. Soufflé pudding cake lemon drops oat cake tart pudding cotton candy chocolate bar. Oat cake ice cream danish cotton candy pudding. Croissant carrot cake cupcake donut caramels croissant cake dessert.",
  "Brownie icing lollipop lollipop jelly. Wafer caramels muffin shortbread brownie. Pastry sugar plum apple pie danish chocolate bar marzipan chocolate bar topping.",
  "Chocolate bar chocolate cake candy canes chocolate cake gingerbread tart cheesecake candy. Cake caramels tart gummi bears sugar plum liquorice candy canes bear claw sweet. Tiramisu pie candy gummies topping.",
  "Dessert danish oat cake tart chupa chups gingerbread apple pie halvah. Chupa chups dessert bear claw jelly jelly sesame snaps. Chocolate cake chupa chups marshmallow sugar plum powder marzipan tiramisu pudding.",
  "Cake chocolate bar wafer gingerbread icing cake. Powder jelly-o caramels chocolate bar oat cake chocolate. Croissant lollipop gingerbread oat cake pastry halvah dragée. Fruitcake jujubes pie halvah apple pie gummies cake.",
  "Wafer sweet roll dessert halvah jelly beans cake. Gummi bears jelly-o bonbon tootsie roll chocolate pastry macaroon pastry. Fruitcake apple pie carrot cake croissant apple pie marshmallow lemon drops icing. Cheesecake bear claw lemon drops pie dessert topping cotton candy soufflé.",
  "Tiramisu sweet roll cupcake ice cream danish sesame snaps jelly gingerbread. Cheesecake fruitcake apple pie macaroon biscuit halvah. Tiramisu sweet carrot cake dessert biscuit soufflé cupcake bear claw.",
  "Wafer gummies chupa chups chocolate bar jelly. Powder pastry cupcake marzipan lollipop. Candy wafer cupcake bonbon marshmallow jelly pudding pie.",
  "Sweet roll cheesecake cake jelly liquorice pastry bonbon jelly-o dragée. Bonbon sesame snaps liquorice cake chocolate cake sweet roll pie. Bonbon bonbon cake cake dessert macaroon.",
  "Candy pastry cotton candy halvah brownie marzipan topping marshmallow. Bear claw cookie brownie sweet roll donut candy. Pastry candy canes soufflé donut chupa chups. Jelly-o cookie tiramisu sugar plum powder carrot cake gummies sesame snaps pie.",
  "Fruitcake carrot cake carrot cake marzipan jujubes. Pastry jujubes liquorice lemon drops cotton candy. Shortbread pudding shortbread gummi bears chocolate donut marshmallow.",
  "Cotton candy bonbon bonbon croissant lemon drops. Jelly-o sweet pastry sesame snaps sweet jelly-o tootsie roll sugar plum jelly-o. Candy marshmallow wafer gingerbread gingerbread.",
  "Sugar plum donut cake macaroon apple pie oat cake pie. Brownie apple pie jelly beans chupa chups macaroon jelly beans pastry. Jelly beans cake jelly beans jelly-o tiramisu halvah halvah muffin. Tart candy caramels jelly biscuit pastry oat cake.",
  "Bonbon cotton candy candy caramels gummi bears shortbread toffee chocolate cake. Chocolate biscuit candy canes oat cake liquorice. Macaroon marzipan gingerbread tart bonbon. Jelly beans croissant cotton candy muffin chocolate.",
  "Chocolate bar jujubes pie soufflé caramels macaroon cookie. Liquorice dragée tart dessert macaroon. Sweet jujubes danish ice cream sweet roll candy jelly-o jelly-o halvah. Pastry sweet topping sesame snaps ice cream topping topping cake.",
  "Biscuit cake carrot cake cake dragée. Powder cheesecake lollipop cake jelly beans jujubes sesame snaps topping. Powder icing croissant jujubes wafer.",
  " Dessert ice cream dragée dessert marshmallow cupcake muffin icing sweet. Halvah carrot cake muffin candy canes pudding halvah ice cream. Jelly-o chocolate bar wafer bear claw chocolate bar. Jelly beans cupcake icing jelly beans soufflé.",
  "Pie jelly sweet chocolate cake chocolate bar chupa chups carrot cake. Gingerbread muffin toffee donut fruitcake cookie. Caramels bonbon brownie biscuit wafer soufflé. Pie bonbon fruitcake oat cake tart pastry tart.",
  "Lollipop dessert fruitcake muffin donut donut. Cupcake chocolate cake marzipan oat cake soufflé shortbread lemon drops chocolate tart. Pie soufflé tootsie roll macaroon chocolate bar.",
  "Danish apple pie gummies sesame snaps donut. Apple pie wafer pudding marzipan cheesecake sweet cupcake tart. Caramels toffee donut fruitcake pudding bear claw donut.",
  "Pudding chocolate cake sweet roll tart toffee gummies. Shortbread tiramisu bonbon muffin donut. Chupa chups jujubes toffee pastry cheesecake sweet roll bear claw cake.",
  "Icing donut jelly cupcake apple pie bear claw caramels dragée. Macaroon chupa chups jelly-o sweet caramels sweet. Shortbread powder bear claw dragée carrot cake chocolate bar.",
  "Cheesecake croissant dragée oat cake apple pie powder. Tootsie roll lollipop powder soufflé brownie. Cake sesame snaps tiramisu tart sweet pie carrot cake.",
  "Chocolate cake sweet donut bear claw caramels wafer. Sweet sugar plum soufflé candy canes liquorice. Croissant sweet shortbread tart topping dessert sesame snaps chocolate.",
];

const primary = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const names = [
  "Clayborne Poag",
  "Goldi Keaveney",
  "Richy Le Estut",
  "Luce Baynom",
  "Aldon Skett",
  "Izzy Ternault",
  "Maurits Beaves",
  "Lonnard Orfeur",
  "Lotty Kirkby",
  "Amandy O'Hern",
  "Shea Eslie",
  "Virge Jakoviljevic",
  "Millard Macer",
  "Bevon Mintoft",
  "Ryun Guitton",
  "Pearce Ramas",
  "Reider Gorey",
  "Teador Barnhart",
  "Burk Lembrick",
  "Jillana Shovelbottom",
  "Genni Tolotti",
  "Jolie Maxwaile",
  "Mignon Shawley",
  "Darla MacNalley",
  "Jerrine Billiard",
  "Meade Braithwaite",
  "Ezri Ferrarini",
  "Rana Cordsen",
  "Roxine Jakubowsky",
  "Dani Frampton",
  "Neill Paladino",
  "Tobie Cordon",
  "Martino Wharin",
  "Heall Gabala",
  "Anatollo O'Grady",
  "Jasper Grzelewski",
  "Angelique Benz",
  "Park Kettow",
  "Van Hartup",
  "Lebbie Bawdon",
  "Tamara Brattell",
  "Luisa Evensden",
  "Adriane Khristyukhin",
  "Dar Espinoy",
  "Opalina Priddle",
  "Arlie Mutton",
  "Christel Tie",
  "Rochester Pappin",
  "Hayden Haugg",
  "Ninette Leyland",
  "Menard Lyall",
  "Man Durak",
  "Valeria Garett",
  "Alvira O'Hagan",
  "Domini Rockingham",
  "Ealasaid Piggin",
  "Gasparo Treece",
  "Morgen Yendall",
  "Aileen Gubbins",
  "Shea Craigg",
  "Lilli Noonan",
  "Gene Eydel",
  "Aili Duinbleton",
  "Dell Bellham",
  "Wood Mebes",
  "Dar Durn",
  "Britta Denley",
  "Cilka Sworne",
  "Toma Danielovitch",
  "Gabriel Bagnold",
  "Verena Mechi",
  "Darcey Mepham",
  "Wendie MacSorley",
  "Belita Korb",
  "Codie Tearny",
  "Marga Folli",
  "Ermina Knoles",
  "Josephine Sander",
  "Svend Pavia",
  "Frankie Myrkus",
  "Deerdre Blincko",
  "Duky MacGown",
  "Verla Melbourn",
  "Doralyn Blaycock",
  "Emmott Michiel",
  "Marcy Tebbett",
  "Odelia Lanfranchi",
  "Olympia MacWhirter",
  "Anderson Ezzell",
  "Loren Rattry",
  "Vassily Dowry",
  "Alvinia Qualtro",
  "Maurizio Crat",
  "Mile Ilyuchyov",
  "Florie Weeks",
  "Woodman Asquith",
  "Geralda Tipler",
  "Christos Southam",
  "Marcelo Hugueville",
  "Gasper Niland",
  "Jillane Thynne",
  "Issy Farragher",
  "Lisabeth Murrock",
  "Carilyn Cockshutt",
  "Miltie Wyrill",
  "Marleah Boniface",
  "Evvy Hayne",
  "Otes Coppenhall",
  "Valli Chugg",
  "Delainey Crust",
  "Cyndia McNirlan",
  "Garrik Aggett",
  "Roxana Hyndson",
  "Lil Martinello",
  "Helene McGilben",
  "Joshuah MacDermot",
  "Bevan Pursey",
  "Roderigo Maffey",
  "Dorie Vergo",
  "Hy Sibun",
  "Angelika Ferres",
  "Bord Debow",
  "Husein Speddin",
  "Ulrick Van den Hof",
  "Wainwright Armell",
  "Ofelia Basnall",
  "Creight Bycraft",
  "Shaine Zambonini",
  "Kristel Keller",
  "Maddy Le Moucheux",
  "Sean Windybank",
  "Kaylil Kinsett",
  "Dehlia Duffus",
  "Alyosha Lantiff",
  "Rena McAughtry",
  "Edlin Sandry",
  "Issie Pantone",
  "Stillmann Weldrick",
  "Ashly Reidshaw",
  "Karil Sicha",
  "Tedie Butlin",
  "Grier Anelay",
  "Anabal Gobert",
  "Mortimer Embling",
  "Josselyn McGuiness",
  "Annetta Bingley",
  "Marie-ann Sheavills",
  "Gloria Whittington",
  "Ardis MacParland",
  "Joelynn Pimblott",
  "Rochelle Absolon",
  "Eimile De Bruyn",
  "Bryan Teissier",
  "Bianca Carr",
  "Gregg Jarrett",
  "Barron Saffell",
  "Milly Mingay",
  "Bab Vanezis",
  "Nappy A'Barrow",
  "Roderich Bruster",
  "Liv Sylett",
  "Brit Hembrow",
  "Clevie Evanson",
  "Bellanca Weins",
  "Vita Wyldbore",
  "Daisey Luscott",
  "Lewie Cowden",
  "Eulalie Piddick",
  "Grove Kimmings",
  "Shurwood Yitshak",
  "Rutter Cocksedge",
  "Sidney Thay",
  "Quinn Groome",
  "Shirlee Sturton",
  "Blaire Leglise",
  "Erick Nelm",
  "Russ Estcot",
  "Jodie Fant",
  "Netty Isakovic",
  "Teresa Mallows",
  "Kerrill Baldacchino",
  "Adolphus Minshaw",
  "Lena Cocking",
  "Winn Iddiens",
  "Gerhardine Fawdrie",
  "Tammie Brogden",
  "Ainslie Attard",
  "Alissa Petruska",
  "Armando Middlemist",
  "Gae O'Shiels",
  "Matty Fransinelli",
  "Guillema Dobrovolski",
  "Rolland Latham",
  "Wendell Powlesland",
  "Liz Kohtler",
  "Marga Pithcock",
  "Mireille Roggers",
  "Miguel Franzotto",
  "Raynell Dolman",
  "Moria Tedorenko",
];

const joke_length = 78;
const prifile_lenght = 4999;
const quote = {
  jokes: [
    {
      type: "twopart",
      setup: "Why do programmers confuse Halloween and Christmas?",
      delivery: "Because Oct 31 = Dec 25",
      safe: true,
    },
    {
      type: "single",
      joke: "// This line doesn't actually do anything, but the code stops working when I delete it.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why does no one like SQLrillex?",
      delivery: "He keeps dropping the database.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "What do you call a developer who doesn't comment code?",
      delivery: "A developer.",
      safe: true,
    },
    {
      type: "twopart",
      setup:
        "Why did the Python programmer not respond to the foreign mails he got?",
      delivery: "Because his interpreter was busy collecting garbage.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the programmer quit his job?",
      delivery: "Because he didn't get arrays.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "How can you tell an extroverted programmer?",
      delivery: "He looks at YOUR shoes when he's talking.",
      safe: true,
    },
    {
      type: "single",
      joke: '"Honey, go to the store and buy some eggs."\n"OK."\n"Oh and while you\'re there, get some milk."\nHe never returned.',
      safe: true,
    },
    {
      type: "single",
      joke: '"We messed up the keming again guys."',
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why are modern programming languages so materialistic?",
      delivery: "Because they are object-oriented.",
      safe: true,
    },
    {
      type: "single",
      joke: "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
      safe: true,
    },
    {
      type: "single",
      joke: "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
      safe: true,
    },
    {
      type: "single",
      joke: "How do you tell HTML from HTML5?\n- Try it out in Internet Explorer\n- Did it work?\n- No?\n- It's HTML5.",
      safe: true,
    },
    {
      type: "single",
      joke: "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
      safe: true,
    },
    {
      type: "single",
      joke: 'Judge: "I sentence you to the maximum punishment..."\nMe (thinking): "Please be death, please be death..."\nJudge: "Learn Java!"\nMe: "Damn."',
      safe: true,
    },
    {
      type: "twopart",
      setup: "What's the object-oriented way to become wealthy?",
      delivery: "Inheritance.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the functional programmer get thrown out of school?",
      delivery: "Because he refused to take classes.",
      safe: true,
    },
    {
      type: "twopart",
      setup: ".NET developers are picky when it comes to food.",
      delivery: "They only like chicken NuGet.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why do programmers wear glasses?",
      delivery: "Because they need to C#",
      safe: true,
    },
    {
      type: "single",
      joke: "Algorithm: A word used by programmers when they don't want to explain how their code works.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "How many programmers does it take to screw in a light bulb?",
      delivery: "None. It's a hardware problem.",
      safe: true,
    },
    {
      type: "single",
      joke: 'A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says "I\'ll have to charge you extra, that\'s a root beer float".\nThe guy says "In that case, better make it a double."',
      safe: true,
    },
    {
      type: "single",
      joke: "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
      safe: true,
    },
    {
      type: "single",
      joke: "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
      safe: true,
    },
    {
      type: "single",
      joke: 'A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks "may I join you?"',
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the web developer walk out of a resturant in disgust?",
      delivery: "The seating was laid out in tables.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why is 6 afraid of 7 in hexadecimal Canada?",
      delivery: "Because 7 8 9 A?",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Hey, wanna hear a joke?",
      delivery: "Parsing HTML with regex.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why do programmers confuse Halloween and Christmas?",
      delivery: "Because Oct 31 = Dec 25",
      safe: true,
    },
    {
      type: "single",
      joke: 'Today I learned that changing random stuff until your program works is "hacky" and a "bad coding practice" but if you do it fast enough it\'s "Machine Learning" and pays 4x your current salary.',
      safe: true,
    },
    {
      type: "single",
      joke: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
      safe: true,
    },
    {
      type: "single",
      joke: 'Eight bytes walk into a bar.\nThe bartender asks, "Can I get you anything?"\n"Yeah," reply the bytes.\n"Make us a double."',
      safe: true,
    },
    {
      type: "single",
      joke: "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
      safe: true,
    },
    {
      type: "single",
      joke: '"Knock, knock."\n"Who\'s there?"\n\n[very long pause]\n\n"Java."',
      safe: true,
    },
    {
      type: "single",
      joke: "Debugging: Removing the needles from the haystack.",
      safe: true,
    },
    {
      type: "single",
      joke: "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the JavaScript heap close shop?",
      delivery: "It ran out of memory.",
      safe: true,
    },
    {
      type: "single",
      joke: "The generation of random numbers is too important to be left to chance.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "What is the best prefix for global variables?",
      delivery: "//",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why are modern programming languages so materialistic?",
      delivery: "Because they are object-oriented.",
      safe: true,
    },
    {
      type: "single",
      joke: "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
      safe: true,
    },
    {
      type: "single",
      joke: "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
      safe: true,
    },
    {
      type: "single",
      joke: 'A byte walks into a bar looking miserable.\nThe bartender asks it: "What\'s wrong buddy?"\n"Parity error." it replies. \n"Ah that makes sense, I thought you looked a bit off."',
      safe: true,
    },
    {
      type: "single",
      joke: "ASCII silly question, get a silly ANSI.",
      safe: true,
    },
    {
      type: "twopart",
      setup:
        "What do you get if you lock a monkey in a room with a typewriter for 8 hours?",
      delivery: "A regular expression.",
      safe: true,
    },
    {
      type: "single",
      joke: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
      safe: false,
    },
    {
      type: "single",
      joke: 'Two C strings walk into a bar.\nThe bartender asks "What can I get ya?"\nThe first string says "I\'ll have a gin and tonic."\nThe second string thinks for a minute, then says "I\'ll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@"\nThe first string apologizes, "You\'ll have to excuse my friend, he\'s not null-terminated."',
      safe: true,
    },
    {
      type: "twopart",
      setup: "What do you call a group of 8 Hobbits?",
      delivery: "A Hobbyte.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the JavaScript heap close shop?",
      delivery: "It ran out of memory.",
      safe: true,
    },
    {
      type: "single",
      joke: "Algorithm: A word used by programmers when they don't want to explain how their code works.",
      safe: true,
    },
    {
      type: "twopart",
      setup:
        "So what's a set of predefined steps the government might take to preserve the environment?",
      delivery: "An Al-Gore-ithm.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why do Java programmers hate communism?",
      delivery: "They don't want to live in a classless society.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Hey baby I wish your name was asynchronous...",
      delivery: "... so you'd give me a callback.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "What is a dying programmer's last program?",
      delivery: "Goodbye, world!",
      safe: true,
    },
    {
      type: "single",
      joke: '"Can I tell you a TCP joke?"\n"Please tell me a TCP joke."\n"OK, I\'ll tell you a TCP joke."',
      safe: true,
    },
    {
      type: "single",
      joke: 'Four engineers get into a car. The car won\'t start.\nThe Mechanical engineer says "It\'s a broken starter".\nThe Electrical engineer says "Dead battery".\nThe Chemical engineer says "Impurities in the gasoline".\nThe IT engineer says "Hey guys, I have an idea: How about we all get out of the car and get back in".',
      safe: true,
    },
    {
      type: "single",
      joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
      safe: true,
    },
    {
      type: "twopart",
      setup: "How do you generate a random string?",
      delivery: "Put a Windows user in front of Vim and tell them to exit.",
      safe: true,
    },
    {
      type: "single",
      joke: "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
      safe: false,
    },
    {
      type: "single",
      joke: "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "How did you make your friend rage?",
      delivery: "I implemented a greek question mark in his JavaScript code.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "What is the most used language in programming?",
      delivery: "Profanity.",
      safe: true,
    },
    {
      type: "single",
      joke: "UDP is better in the COVID era since it avoids unnecessary handshakes.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why is Linux safe?",
      delivery: "Hackers peak through Windows only.",
      id: 260,
    },
    {
      type: "twopart",
      setup: "What are bits?",
      delivery: "Tiny things left when you drop your computer down the stairs.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the programmer jump on the table?",
      delivery: "Because debug was on his screen.",
      safe: true,
    },
    {
      type: "single",
      joke: 'Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"',
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why do programmers prefer using the dark mode?",
      delivery: "Because light attracts bugs.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why did the Python data scientist get arrested at customs?",
      delivery: "She was caught trying to import pandas!",
      safe: true,
    },
    {
      type: "twopart",
      setup: "What are bits?",
      delivery: "Tiny things left when you drop your computer down the stairs.",
      safe: true,
    },
    {
      type: "single",
      joke: 'Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"',
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why do they call it hyper terminal?",
      delivery: "Too much Java.",
      safe: true,
    },
    {
      type: "twopart",
      setup: "Why was the JavaScript developer sad?",
      delivery: "Because they didn't Node how to Express themself!",
      id: 292,
    },
    {
      type: "twopart",
      setup: "why do python programmers wear glasses?",
      delivery: "Because they can't C.",
      id: 294,
    },
    {
      type: "single",
      joke: "I have a joke about Stack Overflow, but you would say it's a duplicate.",
      id: 301,
    },
    {
      type: "single",
      joke: "I have a joke about Stack Overflow, but you would say it's a duplicate.",
      id: 301,
    },
    {
      type: "twopart",
      setup: "Why are Assembly programmers always soaking wet?",
      delivery: "They work below C-level.",
      id: 264,
    },
    {
      type: "twopart",
      setup: "Why did the database administrator leave his wife?",
      delivery: "She had one-to-many relationships.",
      id: 265,
    },
    {
      type: "twopart",
      setup: "How did the programmer die in the shower?",
      delivery:
        "He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
      id: 266,
    },
  ],
};
