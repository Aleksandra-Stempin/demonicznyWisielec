var demons_list =[
        ['bobo', 'bobo' , 'Inaczej bobok, babok, bebok (na Górnym Śląsku), Brzydka i złośliwa istota, którą straszono dzieci.<br>Czyniła szkody w domu, ale można było ją przekupić ofiarą z jedzenia.'],
        ['żmij', 'żmija', 'Skrzydlata, gadzia postać trochę przypominająca smoka'],
        ['bęłt', 'bełta' , 'Inaczej błąd lub błud. Złośliwy polny lub leśny demon, który zwodził wędrowców, szczególnie nietrzeźwych, na manowce powodując dezorientację przestrzeną.'],
        ['bies', 'biesa' , 'Personifikacja bliżej nieokreślonego złego ducha. Demon ten mógł wnikać w poszczególne osoby i kierować ich działaniami.'],
        ['pałetnik', 'pałetnika', 'Demoniczna lub półdemoniczna postać uosabiająca zjawiska atmosferyczne. Wierzono, że kierowała ona chmurami. Mogli to też być mężczyźni obdarzeni mocą kontrolowania pogody.'],
        ['leszy', 'leszego' , 'Władca lasu oraz istot w nim żyjących. Przyjmował postać mężczyzny z nienaturalnie bladą tworzą, mógł też przyjmować postać zwierząt takich jak niedźwiedź  lub wilk. Jego stosunek do ludzi był zasadniczo neutralny, lecz potrafił bardzo zaszkodzić tym, którzy niszczyli jego królestwo.'],
        ['licho', 'licho' , 'Demon wędrujący po świecie szukając miejsc, gdzie ludzie żyją szczęśliwie. Czesto podpalał budynki, zsyłał głód, biedę i różne choroby po czym odchodził. Nie było przed nim obrony, trzyba było poczekać, aż sobie pójdzie. Demon ten rzadko pokazywał się ludziom. Kiedy już to robił, przyjmował  postać wychudzonej kobiety z jednym okiem.'],
        ['poroniec', 'porońca' , 'Złośliwy i wrogi ludziom demon wywodzący  się z duszy poronionego lub spędzonego płodu.'],
        ['zmora', 'zmorę' , 'Zwana też marą, istota półdemoniczna. Dusza człowieka zmarłego lub żyjącego, która nocą męczyła śpiących wyssysając ich krew.'],
        ['utopiec', 'utopca' , 'Zły i posępny demon wodny wywodzący się z dusz topielców.'],
        ['uboże', 'uboże' , 'Opiekuńczy duch domowy zapewniający dostatek. Żeby pomagał należało mu składać ofiary z jedzenia.'],
        ['strzyga', 'strzygę' , 'Demon żeński, rodzaj demona wampirycznego. Kobieta o ptasich szponach żywiąca się krwią dzieci. Często przypierał postać puchacza.'],
        ['mamuna', 'mamunę' , 'Demon powstały z duszy kobiety zmarłej w czasie ciąży lub połogu.'],
        ['południca', 'południcę' , 'Demon żeński powstały z duszy kobiety zmarłej tuż przed lub w czasie swojego ślubu. Zadawały napotkanym na polu ludziom zagadki, od odpowiedzi na które zależał los pytanego. Jeżeli odpowiedź była błędna człowiek stawał się ofiarą demona. Demony te także dusiły śpiących na polu żniwiarzy.'],
        ['kikimora', 'kikimorę' , 'Inaczej sziszimora, szkodliwy duch domowy. Demon przybierający postać maleńkiej kobiety choć potrafił też stać się niewidziałny.  Był bardzo wrogi wobec mężczyzn. Po nocach budził niemowlęta, plątał przędzę i szkodził zwierzętom domowym, zwłaszcze kurom.'],
        ['wisielec', 'wisielca' , 'Demon powstały z duszy człowieka powieszonego. Najłatwiej tego demona można było rozpoznać po sznurze noszonym na szyi lub trzymanym w rękach, wywieszonym języku i wywróconych oczach.'],
        ['bezkost','bezkosta','Szczególnie obrzydliwy gatunek wampira, jednak nie zachowuje ludzkiej sylwetki. Demon ten był pozbawiony szkieletu i przypominał worek, który wypełnia się krwią jego ofiar.'],
        ['wieszczy','wieszczego', 'Powstawał ze zmarłego człowieka, który urodził się z wyrośniętymi zębami. Nocami opuszczał swoją mogiłę, wchodził na kościelną wieżę i strasznym głosem wykrzykiwał imiona swoich bliskich. Ci którzy to usłyszeli, umierali jeszcze tej nocy. Aby powstrzymać tego demona należało odkopać jego grób i zabrać mu ubranie.'],
        ['wampierz','wampierza','Żywy trup, który nocą wychodził ze swojego grobu, aby nękać ludzi i wypijać ich krew. Sylwetkę miał podobną do ludzkiej, ale był większy i dużo silniejszy. Miał czerwoną, napuchniętą skórę, długie kły i szpony.'],
        ['stukacz','stukacza', 'Psotny duszek domowy straszący ludzi niespodziewanymi hałasami (szuranie i tupanie na strychu, drapanie desek podłogi, stukanie naczyń w kredensie). Choć wielu ludzi nastraszył i przyprawił o bezsenność, niewielu go widziało.'],
        ['spaleniec','spaleńca','Duch, który błąka się po świecie próbując odpokutować swoją ciężką zbrodnie jaką było podpalenie.'],
        ['rusałka', 'rusałkę', 'Żeński demon przybierający postać bardzo urodziwej i zmysłowej dziewczyny. W księżycową noc można było spotkać grupę tych demonów, gdy tańczyły nago na polanie lub nad brzegiem jeziora. Niejeden młodzieniec tracił dla nich głowę, co się zazwyczaj źle kończyło, ponieważ został załaskotany na śmierć.'],
        ['cicha','cichą','Demon morowego powietrza. Przybierał postać małej, ślicznej dziewczynki. Za swoje ofiary często wybierał dzieci. Dotykała je stalową rózgą powodując natychmiastową śmierć.'],
        ['bazyliszek','bazyliszka','Niewielki demon zamieszkujący ciemne miejsca takie jak piwnice, podziemne korytarze lub lochy. Wykluwał się z  koguciego jaja wysiadywanego przez ropuchę. Miał ciało koguta, wężowy ogon i wyłupiaste żabie oczy. Oczy te czyniły z niego straszną bestię, ponieważ demon ten był w stanie zabić wzrokiem każdą żywą istotę.'],
        ['bieda','biedę','Poruszała się po świecie pod postacią bardzo wysokiej i chudej jak patyk kobiety ubranej w łachmany. Gdy wybrała gospodarstwo, w którym chciała zamieszkać, przyjmowała postać wróbla, myszy lub niewielkiego przedmiotu. Natychmiast sprowadzała na gospodarzy wszelkie nieszczęścia jak choroby bydła, pożary lub plagę gryzoni w stodole'],
        ['bożątko','bożątko','Cichy i spokojny duszek powstały z duszy zmarłego dziecka, którego nie zdążono ochrzcić. Mieszkał w chatach razem z ludźmi, jednak unikał ich wzroku. Za miseczkę strawy odwdzięczały się broniąc domu przed złymi demonami.'],
        ['buc','buca','Demon ten mieszkał w ciemnych, rzadko odwiedzanych zakamarkach domu, na przykład strychach, starych szafach lub pod łóżkami. Ze swojej kryjówki wychodził w nocy, aby bić i straszyć niegrzeczne dzieci. Te najbardziej rozwydrzone wrzucał do worka i zabierał ze sobą.'],
        ['chochlik','chochlika','Ten psotny duszek zamieszkiwał komory i spiżarnie. Uwielbiał płatać figle ludziom i wyjadać ich zapasy. Był bardzo podobny do zwykłego kota, dlatego zdarzało się, że zdenerwowana gospodyni uderzyła demona mokrą szmatą po grzbiecie. Było to niezbyt rozsądne, bo rozgniwany duszek wpadał w szał i tłukł naczynia, przewracał kosze oraz strącał z półek jedzenie.'],
        ['chowaniec','chowańca','Żyjący z ludźmi stworek, który w zamian za jedzenie pomagał swojemu gospodarzowi w różnych pracach domowych i przynosił mu różne, najczęściej skradzione innym, dobra. Aby wyhodować sobie tego pożytecznego demona należało przez dziewięć dni nosić pod pachą pierwsze jajko zniesione przez czarną kurę. W tym czasie należało unikać kąpieli i pobożnej modlitwy. Niestety całe to poświęcenie nie zawsze kończyło się sukcesem.'],
        ['cmentarna baba','cmentarną babę','Demon żeński snujący się nocą w okolicach cmentarzy. Rozgrzebywała groby i rozrzucała kości. Napotkanych ludzi  łapała w uzbrojone w pazury łapy i próbowała zaciągnąć między mogiły.'],
        ['dola','dolę','Żeński demon opiekuńczy, który towarzyszył człowiekowi przez całe życie, czasem nawet przechodził z pokolenia na pokolenie. Duch ten zajmował się potomstwem swojego właściciela, doglądał jego dobytku i zapewniał dobrobyt. Należało jedynie uważać, aby nie go nie rozgniewać, czyli wstawać ochoczo do pracy dwie godziny przed świtem i ciężko pracować przez całe życie.'],
        ['dziki myśliwy','dzikiego myśliwego ','Demon powstały z pokutującej duszy, który pod postacią konnego łowcy przemierzał nocami puszcze i lasy ze sforą widmowych psów. Napotkanego nieszczęśnika potrafił ciężko poturbować, a nawet zabić.'],
        ['fajerman','fajermana','Demon powstały z duszy człowieka, który za życia w sposób bezsensowny i okrutny dręczył zwierzęta. Miał postać płonącego bezgłowego ciała.']
        ]
var randomDemonName = ''
var randomDemonDesc = ''
var randomDemonWinOrLoose = ''
var randomDemonPattern = ''
var randomDemonPatternArray = []
var unknownChar = '-'
var spaceChar = '  '
var usedDemons = []
var usedLetters = ''
var letterClicked = false
var wordClicked = false
var userInput = ''
var chances = 20
var chancesOnStart = 20

function onStart(){
	var welcomeText = 'Odgadnij nazwę demona słowiańskiego na podstawie podanej definicji.<br>\
Możesz zgadywać wpisując kolejne litery, wtedy kliknij przycisk z etykietą \"Podaj kolejną literę\".<br>\
Jeżeli znasz już nazwę demona kliknij przycisk z etykietą \"Podaj nazwę demona\".<br>\
Jeżeli chcesz poznać nazwę demona kliknij przycisk z etykietą \"Poddaję się\".<br>\
Za każdym razem swoją decyzję potwierdź klikając z etykietą \"OK\".<br>\
Jeżeli masz odwagę kliknij przycisk z etykietą \"Demona poproszę\" i baw się dobrze.'
	document.getElementById("ok").disabled=true
	document.getElementById("letter").disabled=true
	document.getElementById("giveUp").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("userInput").disabled=true
	document.getElementById("next").disabled=false
	document.getElementById("demonDesc").innerHTML = welcomeText
	usedDemonsLen = Math.floor(demons_list.length * 0.7)
	var i
	for (i=0; i<usedDemonsLen; i++){
		usedDemons[i]=''
	}
		
	//welcomeText = "joł"
	
}

window.onload = onStart

function win(){
	message = "Gratuluję odważny pogromco słowiańskich demonów,<br>pokonałeś "+randomDemonWinOrLoose +".<br><br>"
	document.getElementById("demonPattern").classList.add("demonPatternWin")
	document.getElementById("gameLevel").disabled=false
	document.getElementById("letter").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("next").disabled=false
	document.getElementById("giveUp").disabled=true
	document.getElementById("userInput").disabled=true
	document.getElementById("chancesLeft").innerHTML = '	'
	document.getElementById("letterOrWord").innerHTML = '<br>Jeżeli chcesz stoczyć następną walkę, naciśnij przycisk \"Demona poproszę\".'
	document.getElementById("demonPattern").innerHTML = message
	
}

function loose(){
	defetWordForm = 'pokonał'
	lastChar = randomDemonName.substr(-1)
	if (lastChar=="a"){
		defetWordForm = "pokonała"
	}
	else if (lastChar=="o"){
		defetWordForm = "pokonało"
	}
	else{
		defetWordForm = 'pokonał'
	}
	document.getElementById("demonPattern").classList.add("demonPatternLoose")
	message = "Niestety, przegrałeś,<br>"+randomDemonName +" " + defetWordForm + " Ciebie.<br><br>"
	document.getElementById("gameLevel").disabled=false
	document.getElementById("letter").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("next").disabled=false
	document.getElementById("giveUp").disabled=true
	document.getElementById("userInput").disabled=true
	document.getElementById("chancesLeft").innerHTML = '	'
	document.getElementById("letterOrWord").innerHTML = '<br>Jeżeli chcesz spróbować ponownie naciśnij przycisk \"Demona poproszę\".'
	document.getElementById("demonPattern").innerHTML = message
	
}
function chancesCount(chances){
	weaponMessage = "Zostało Ci jeszcze " + chances + "woreczków soli."
	if(chances>=5){
		weaponMessage = "Zostało Ci jeszcze " + chances + " woreczków soli."
	}
	else if (chances>1){
		weaponMessage = "Zostały Ci jeszcze tylko " + chances + " woreczki soli."
	}
	else if (chances==1){
		weaponMessage = "Został Ci ostatni woreczk soli.<br>Musisz podać nazwę demona."
		document.getElementById("letter").disabled=true

	}
	return weaponMessage
}
function nextButton(){
	randomDemonPattern = ''
	usedLetters = ''
	randomDemon = demons_list[Math.floor(Math.random()*demons_list.length)]
	//randomDemon = demons_list[29]
	randomDemonName = randomDemon[0]
	document.getElementById("letterOrWord").innerHTML = ""
	document.getElementById("letter").disabled=false
	document.getElementById("word").disabled=false
	document.getElementById("next").disabled=true
	document.getElementById("giveUp").disabled=false
	document.getElementById("gameLevel").disabled=true
	document.getElementById("userInput").disabled=true
	document.getElementById("demonPattern").classList.remove("demonPatternWin")
	document.getElementById("demonPattern").classList.remove("demonPatternLoose")
	chancesDesc = document.getElementById('gameLevel').value
	chancesSel = document.getElementById('gameLevel')
	chancesDesc =chancesSel.options[chancesSel.selectedIndex].text
	chancesOnStart = chancesDesc.match("[0-9]+")
	chances = chancesOnStart
	document.getElementById("chancesLeft").innerHTML = chancesCount(chances)
	while(usedDemons.includes(randomDemonName)){
		randomDemon = demons_list[Math.floor(Math.random()*demons_list.length)]
		randomDemonName = randomDemon[0]
	}
	usedDemons.shift()
	usedDemons.push(randomDemonName)
	
	randomDemonWinOrLoose = randomDemon[1]
	randomDemonDesc=randomDemon[2]
	var i
	for (i=0; i<randomDemonName.length; i++){
		if (randomDemonName.charAt(i)==' '){
			randomDemonPattern = randomDemonPattern + spaceChar
		}
		else{
			randomDemonPattern = randomDemonPattern + unknownChar
		}
	}
	randomDemonPatternArray = randomDemonPattern.split()
	

	document.getElementById("demonDesc").innerHTML = randomDemonDesc 
	document.getElementById("demonPattern").innerHTML = randomDemonPattern
	
}


function letterButton(){
	letterClicked = true
	wordClicked = false
	document.getElementById("letter").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("next").disabled=true
	document.getElementById("giveUp").disabled=true
	document.getElementById("userInput").disabled=false
	document.getElementById("ok").disabled=false
	document.getElementById("userInput").value = "podaj kolejną literę"
	document.getElementById("userInput").focus()
	document.getElementById("userInput").select()
}

function wordButton(){
	wordClicked = true
	letterClicked = false
	document.getElementById("letter").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("next").disabled=true
	document.getElementById("userInput").disabled=false
	document.getElementById("giveUp").disabled=true
	document.getElementById("ok").disabled=false
	document.getElementById("userInput").value = "podaj nazwę demona"
	document.getElementById("userInput").focus()
	document.getElementById("userInput").select()
	
}

function okButton(){
	document.getElementById("ok").disabled=true
	document.getElementById("letter").disabled=false
	document.getElementById("word").disabled=false
	document.getElementById("giveUp").disabled=false
	document.getElementById("userInput").disabled=true
	document.getElementById("next").disabled=true
	userInput = document.getElementById("userInput").value
	userInput = userInput.trim()
	userInput = userInput.toLowerCase()
	userInput = userInput.replace("  ", " ")
	document.getElementById("userInput").value = ''
	
	//word
	if (wordClicked){
		document.getElementById("demonPattern").innerHTML = userInput
		if (userInput==randomDemonName){
			win()
		}
		else {
			loose()
		}
	
		
		document.getElementById("ok").disabled=true
		document.getElementById("letter").disabled=true
		document.getElementById("giveUp").disabled=true
		document.getElementById("word").disabled=true
		document.getElementById("userInput").disabled=true
		document.getElementById("next").disabled=false
	}
	//litera
	else if(letterClicked){
		if(chances>=0){
			if(userInput.length==1&&usedLetters.search(userInput)==-1){			
				usedLetters = usedLetters + ", " + userInput
				if(randomDemonName.search(userInput)==-1){
					chances = chances - 1
				}
				if (usedLetters.charAt(0)==','){
					usedLetters = usedLetters.slice(1)
				}
				usedLetters= usedLetters.trim()
				document.getElementById("letterOrWord").innerHTML = "użyte litery: " + usedLetters
				var i
				for (i=0; i<randomDemonName.length; i++){
					if (randomDemonName.charAt(i)==userInput){
						randomDemonPatternArray[i]=userInput
					}
					else if (randomDemonName.charAt(i)==' '){
						randomDemonPatternArray[i] =' '
					}
					
					else{
						randomDemonPatternArray[i]=randomDemonPattern.charAt(i)
					}
					
				}
				randomDemonPattern = randomDemonPatternArray.join().replaceAll(',','')
			
				document.getElementById("demonPattern").innerHTML = randomDemonPattern 
				document.getElementById("chancesLeft").innerHTML = chancesCount(chances)
				
				if (randomDemonPattern==randomDemonName){
					win()
				}
		
			}
		}
		if (chances==0){
			loose()
			document.getElementById("letterOrWord").innerHTML = message
		}
		
		
	}
	//error
	else{
		document.getElementById("letterOrWord").innerHTML = "error"
	}

}

function giveUpButton(){
	const message = "Tajemniczym demonem jest "+randomDemonName+"."
	document.getElementById("demonPattern").innerHTML = message
	document.getElementById("ok").disabled=true
	document.getElementById("letter").disabled=true
	document.getElementById("word").disabled=true
	document.getElementById("giveUp").disabled=true
	document.getElementById("userInput").disabled=true
	document.getElementById("next").disabled=false
	document.getElementById("gameLevel").disabled=false
	document.getElementById("chancesLeft").innerHTML = '	'
	document.getElementById("letterOrWord").innerHTML = '<br>Jeżeli chcesz spróbować ponownie naciśnij przycisk \"Demona poproszę\".'
	
}


