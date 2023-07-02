window.addEventListener("load", () => {
  const emojis = {
    "grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","orange":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","mango":"🥭","red apple":"🍎","green apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","blueberries":"🫐","kiwi fruit":"🥝","tomato":"🍅","olive":"🫒","coconut":"🥥","avocado":"🥑","eggplant":"🍆","potato":"🥔","carrot":"🥕","ear of corn":"🌽","hot pepper":"🌶️","bell pepper":"🫑","cucumber":"🥒","leafy green":"🥬","broccoli":"🥦","pea pod":"🫛","garlic":"🧄","onion":"🧅","ginger":"🫚","mushroom":"🍄","peanuts":"🥜","beans":"🫘","chestnut":"🌰","bread":"🍞","croissant":"🥐","baguette bread":"🥖","flatbread":"🫓","pretzel":"🥨","bagel":"🥯","pancakes":"🥞","waffle":"🧇","cheese wedge":"🧀","meat on bone":"🍖","poultry leg":"🍗","cut of meat":"🥩","bacon":"🥓","hamburger":"🍔","french fries":"🍟","pizza":"🍕","hot dog":"🌭","sandwich":"🥪","taco":"🌮","burrito":"🌯","tamale":"🫔","stuffed flatbread":"🥙","falafel":"🧆","egg":"🥚","cooking":"🍳","shallow pan of food":"🥘","pot of food":"🍲","fondue":"🫕","bowl with spoon":"🥣","green salad":"🥗","popcorn":"🍿","butter":"🧈","salt":"🧂","canned food":"🥫","bento box":"🍱","rice cracker":"🍘","rice ball":"🍙","cooked rice":"🍚","curry rice":"🍛","ramen":"🍜","steaming bowl":"🍜","spaghetti":"🍝","roasted sweet potato":"🍠","oden":"🍢","sushi":"🍣","fried shrimp":"🍤","fish cake with swirl":"🍥","moon cake":"🥮","dango":"🍡","dumpling":"🥟","fortune cookie":"🥠","takeout box":"🥡","oyster":"🦪","soft ice cream":"🍦","shaved ice":"🍧","ice cream":"🍨","doughnut":"🍩","cookie":"🍪","birthday cake":"🎂","shortcake":"🍰","cupcake":"🧁","pie":"🥧","chocolate bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey pot":"🍯","baby bottle":"🍼","glass of milk":"🥛","hot beverage":"☕","teapot":"🫖","teacup without handle":"🍵","sake":"🍶","bottle with popping cork":"🍾","wine glass":"🍷","cocktail glass":"🍸","tropical drink":"🍹","beer mug":"🍺","clinking beer mugs":"🍻","clinking glasses":"🥂","tumbler glass":"🥃","pouring liquid":"🫗","cup with straw":"🥤","bubble tea":"🧋","beverage box":"🧃","mate":"🧉","ice":"🧊",
    "love letter":"💌","hole":"🕳️","bomb":"💣","person taking bath":"🛀","person in bed":"🛌","kitchen knife":"🔪","amphora":"🏺","world map":"🗺️","compass":"🧭","brick":"🧱","barber pole":"💈","manual wheelchair":"🦽","motorized wheelchair":"🦼","oil drum":"🛢️","bellhop bell":"🛎️","luggage":"🧳","hourglass done":"⌛","hourglass not done":"⏳","watch":"⌚","alarm clock":"⏰","stopwatch":"⏱️","timer clock":"⏲️","mantelpiece clock":"🕰️","thermometer":"🌡️","umbrella on ground":"⛱️","firecracker":"🧨","balloon":"🎈","party popper":"🎉","confetti ball":"🎊","japanese dolls":"🎎","carp streamer":"🎏","wind chime":"🎐","red envelope":"🧧","ribbon":"🎀","wrapped gift":"🎁","diving mask":"🤿","yo-yo":"🪀","kite":"🪁","crystal ball":"🔮","magic wand":"🪄","nazar amulet":"🧿","hamsa":"🪬","joystick":"🕹️","teddy bear":"🧸","piñata":"🪅","nesting dolls":"🪆","framed picture":"🖼️","thread":"🧵","sewing needle":"🪡","yarn":"🧶","knot":"🪢","folding hand fan":"🪭","shopping bags":"🛍️","prayer beads":"📿","hair pick":"🪮","gem stone":"💎","postal horn":"📯","studio microphone":"🎙️","level slider":"🎚️","control knobs":"🎛️","radio":"📻","banjo":"🪕","mobile phone":"📱","mobile phone with arrow":"📲","telephone":"☎️","telephone receiver":"📞","pager":"📟","fax machine":"📠","battery":"🔋","electric plug":"🔌","laptop":"💻","desktop computer":"🖥️","printer":"🖨️","keyboard":"⌨️","computer mouse":"🖱️","trackball":"🖲️","computer disk":"💽","floppy disk":"💾","optical disk":"💿",
    "dvd":"📀","abacus":"🧮","movie camera":"🎥","film frames":"🎞️","film projector":"📽️","television":"📺","camera":"📷","camera with flash":"📸","video camera":"📹","videocassette":"📼","magnifying glass tilted left":"🔍","magnifying glass tilted right":"🔎","candle":"🕯️","light bulb":"💡","flashlight":"🔦","red paper lantern":"🏮","diya lamp":"🪔","notebook with decorative cover":"📔","closed book":"📕","open book":"📖","green book":"📗","blue book":"📘","orange book":"📙","books":"📚","notebook":"📓","ledger":"📒","page with curl":"📃","scroll":"📜","page facing up":"📄","newspaper":"📰","rolled-up newspaper":"🗞️","bookmark tabs":"📑","bookmark":"🔖","label":"🏷️","money bag":"💰","coin":"🪙","yen banknote":"💴","dollar banknote":"💵","euro banknote":"💶","pound banknote":"💷","money with wings":"💸","credit card":"💳","receipt":"🧾","envelope":"✉️","e-mail":"📧","incoming envelope":"📨","envelope with arrow":"📩","outbox tray":"📤","inbox tray":"📥","package":"📦","closed mailbox with raised flag":"📫","closed mailbox with lowered flag":"📪","open mailbox with raised flag":"📬","open mailbox with lowered flag":"📭","postbox":"📮","ballot box with ballot":"🗳️","pencil":"✏️","black nib":"✒️","fountain pen":"🖋️","pen":"🖊️","paintbrush":"🖌️","crayon":"🖍️","memo":"📝","file folder":"📁","open file folder":"📂","card index dividers":"🗂️","calendar":"📅","tear-off calendar":"📆","spiral notepad":"🗒️","spiral calendar":"🗓️","card index":"📇","chart increasing":"📈","chart decreasing":"📉","bar chart":"📊","clipboard":"📋","pushpin":"📌","round pushpin":"📍","paperclip":"📎","linked paperclips":"🖇️","straight ruler":"📏",
    "triangular ruler":"📐","card file box":"🗃️","file cabinet":"🗄️","wastebasket":"🗑️","locked":"🔒","unlocked":"🔓","locked with pen":"🔏","locked with key":"🔐","key":"🔑","old key":"🗝️","hammer":"🔨","axe":"🪓","pick":"⛏️","hammer and pick":"⚒️","hammer and wrench":"🛠️","dagger":"🗡️","crossed swords":"⚔️","water pistol":"🔫","boomerang":"🪃","shield":"🛡️","carpentry saw":"🪚","wrench":"🔧","screwdriver":"🪛","nut and bolt":"🔩","gear":"⚙️","clamp":"🗜️","balance scale":"⚖️","white cane":"🦯","link":"🔗","chains":"⛓️","hook":"🪝","toolbox":"🧰","magnet":"🧲","ladder":"🪜","alembic":"⚗️","test tube":"🧪","petri dish":"🧫","dna":"🧬","microscope":"🔬","telescope":"🔭","satellite antenna":"📡","syringe":"💉","drop of blood":"🩸","pill":"💊","adhesive bandage":"🩹","crutch":"🩼","stethoscope":"🩺","door":"🚪","mirror":"🪞","window":"🪟","bed":"🛏️","couch and lamp":"🛋️","chair":"🪑","toilet":"🚽","plunger":"🪠","shower":"🚿","bathtub":"🛁","mouse trap":"🪤","razor":"🪒","lotion bottle":"🧴","safety pin":"🧷","broom":"🧹","basket":"🧺","roll of paper":"🧻","bucket":"🪣","soap":"🧼","toothbrush":"🪥","sponge":"🧽","fire extinguisher":"🧯","shopping cart":"🛒","cigarette":"🚬","coffin":"⚰️","headstone":"🪦","funeral urn":"⚱️","moai":"🗿","placard":"🪧","identification card":"🪪","potable water":"🚰","skull":"💀","pile of poo":"💩","clown face":"🤡","ogre":"👹","goblin":"👺","ghost":"👻","alien":"👽","alien monster":"👾","robot":"🤖","grinning cat":"😺","cat with tears of joy":"😹","smiling cat with heart-eyes":"😻",
    "cat":"🐈","black cat":"🐈‍⬛","lion":"🦁","tiger face":"🐯","tiger":"🐅","leopard":"🐆","horse face":"🐴","horse":"🐎","unicorn":"🦄","zebra":"🦓","donkey":"🫏","deer":"🦌","moose":"🫎","bison":"🦬","cow face":"🐮","ox":"🐂","water buffalo":"🐃","cow":"🐄","pig face":"🐷","pig":"🐖","boar":"🐗","pig nose":"🐽","ram":"🐏","ewe":"🐑","goat":"🐐","camel":"🐪","two-hump camel":"🐫","llama":"🦙","giraffe":"🦒","elephant":"🐘","mammoth":"🦣","rhinoceros":"🦏","hippopotamus":"🦛","mouse face":"🐭","mouse":"🐁","rat":"🐀","hamster":"🐹","rabbit face":"🐰","rabbit":"🐇","chipmunk":"🐿️","beaver":"🦫","hedgehog":"🦔","bat":"🦇","bear":"🐻","polar bear":"🐻‍❄️","koala":"🐨","panda":"🐼","sloth":"🦥","otter":"🦦","skunk":"🦨","kangaroo":"🦘","badger":"🦡","paw prints":"🐾","turkey":"🦃","chicken":"🐔","rooster":"🐓","hatching chick":"🐣","baby chick":"🐤","front-facing baby chick":"🐥","bird":"🐦","black bird":"🐦‍⬛","penguin":"🐧","dove":"🕊️",
    "eagle":"🦅","duck":"🦆","swan":"🦢","goose":"🪿","owl":"🦉","dodo":"🦤","wing":"🪽","feather":"🪶","flamingo":"🦩","peacock":"🦚","parrot":"🦜","frog":"🐸","crocodile":"🐊","turtle":"🐢","lizard":"🦎","snake":"🐍","dragon face":"🐲","dragon":"🐉","sauropod":"🦕","t-rex":"🦖","spouting whale":"🐳","whale":"🐋","dolphin":"🐬","seal":"🦭","fish":"🐟","tropical fish":"🐠","blowfish":"🐡","shark":"🦈","octopus":"🐙","jellyfish":"🪼","spiral shell":"🐚","coral":"🪸","snail":"🐌","butterfly":"🦋","bug":"🐛","ant":"🐜","honeybee":"🐝","beetle":"🪲","lady beetle":"🐞","cricket":"🦗","cockroach":"🪳","spider":"🕷️","spider web":"🕸️","scorpion":"🦂","mosquito":"🦟","fly":"🪰","worm":"🪱","microbe":"🦠","bouquet":"💐","cherry blossom":"🌸","white flower":"💮","lotus":"🪷","rosette":"🏵️","rose":"🌹","wilted flower":"🥀","hibiscus":"🌺","hyacinth":"🪻","sunflower":"🌻","blossom":"🌼","tulip":"🌷","seedling":"🌱","potted plant":"🪴","evergreen tree":"🌲",
    "deciduous tree":"🌳","palm tree":"🌴","cactus":"🌵","sheaf of rice":"🌾","herb":"🌿","shamrock":"☘️","four leaf clover":"🍀","maple leaf":"🍁","fallen leaf":"🍂","leaf fluttering in wind":"🍃","empty nest":"🪹","nest with eggs":"🪺","mushroom":"🍄","chestnut":"🌰","crab":"🦀","lobster":"🦞","shrimp":"🦐","squid":"🦑","globe showing europe-africa":"🌍","globe showing americas":"🌎","globe showing asia-australia":"🌏","globe with meridians":"🌐","rock":"🪨","new moon":"🌑","waxing crescent moon":"🌒","first quarter moon":"🌓","waxing gibbous moon":"🌔","full moon":"🌕","waning gibbous moon":"🌖","last quarter moon":"🌗","waning crescent moon":"🌘","crescent moon":"🌙","new moon face":"🌚","first quarter moon face":"🌛","last quarter moon face":"🌜","full moon face":"🌝","sun with face":"🌞","star":"⭐","glowing star":"🌟","shooting star":"🌠","cloud":"☁️","sun behind cloud":"⛅","cloud with lightning and rain":"⛈️","sun behind small cloud":"🌤️",
    "sun behind large cloud":"🌥️","sun behind rain cloud":"🌦️","cloud with rain":"🌧️","cloud with snow":"🌨️","cloud with lightning":"🌩️","tornado":"🌪️","fog":"🌫️","wind face":"🌬️","rainbow":"🌈","snowman without snow":"⛄","comet":"☄️","fire":"🔥","droplet":"💧","water wave":"🌊","christmas tree":"🎄","sparkles":"✨","tanabata tree":"🎋","pine decoration":"🎍"
  };
  
  const prompt = document.getElementById('prompt');
  const box = document.getElementById('result');
  let searchResults = {};

  const getRandomEmoji = () => emojis[getRandomInt(0, emojis.length)];
  const getOrdinal = (i) => i == 0 ? "first" : i == 1 ? "second" : i == 2 ? "third" : i == 3 ? "fourth" : i == 4 ? "fifth" : i == 5 ? "sixth" : '';

  let input;
  let starter = document.getElementById('starter');

  function setText(limit) {
    box.innerText = "";
    starter.innerHTML = "";
    if (!searchResults[0]) return;
    for (let i = 0; i < limit; i++) {
      if (!searchResults[i]) return;
      box.innerText += searchResults[i];
    }
  }

  let timeout;

  let debounce = function(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  function onType(e) {
    input = e.target.value;
    const keywords = input.split(" ");
    keywords.forEach((word, index) => {
      if (!word) return;
      word = word.toLowerCase();
      const found = Object.keys(emojis).filter(key => {return key.startsWith(word) || key.includes(word)});
      console.log(found);
      if (found.length > 0) {
        searchResults[index] = emojis[found[found.length-1]];
      }
    });
    if (input.length < 1) setText(0);
    else setText(keywords.length);
  }
  
  prompt.oninput = (e) => {
    debounce(onType(e), 1000);
  }


  // SpeechRecognition code from MDN -- https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

  var recognition = new SpeechRecognition();
  var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
  if (SpeechGrammarList) {
    // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
    // This code is provided as a demonstration of possible capability. You may choose not to use it.
    var speechRecognitionList = new SpeechGrammarList();
    // var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
    console.log(Object.keys(emojis).length)
    console.log(colors.length)
    // Limit is about 7.2k
    const grammar = `#JSGF V1.0; grammar emojis; public <emoji> = ${Object.keys(emojis).join(" | ")};`
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
  }
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  var diagnostic = document.querySelector('.output');

  document.body.onclick = function() {
    recognition.start();
    console.log('Ready to receive a command.');
  }

  recognition.onresult = function(event) {
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at the last position.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object
    var color = event.results[0][0].transcript;
    debounce(onType({target: {value: color}}), 1000);
    diagnostic.textContent = 'Result received: ' + color + '.';
    console.log('Confidence: ' + event.results[0][0].confidence);
  }

  recognition.onspeechend = function() {
    recognition.stop();
  }

  recognition.onnomatch = function(event) {
    diagnostic.textContent = "I didn't recognise that emoji.";
  }

  recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
});