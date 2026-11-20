// Banca de conținut: categorii, lecții (Învață) și întrebări (Quiz).
// Format întrebare: { q: întrebare, a: [variante], c: index corect, e: explicație }
window.CATEGORIES = [
  {
    id: "istorie", name: "Istorie", icon: "🏛️", color: "#c2410c",
    lessons: [
      { t: "Imperiul Roman", x: "Augustus a devenit primul împărat roman în anul 27 î.Hr. Imperiul de Apus a căzut în 476 d.Hr., iar cel de Răsărit (Bizanțul) a rezistat până în 1453, când Constantinopolul a fost cucerit de otomani." },
      { t: "Revoluția Franceză", x: "A început în 1789, cu luarea Bastiliei pe 14 iulie. A adus Declarația Drepturilor Omului și ale Cetățeanului și a pus capăt monarhiei absolute în Franța." },
      { t: "Primul Război Mondial", x: "A durat între 1914 și 1918. Scânteia a fost asasinarea arhiducelui Franz Ferdinand la Sarajevo. S-a încheiat cu armistițiul din 11 noiembrie 1918." },
      { t: "Al Doilea Război Mondial", x: "A început la 1 septembrie 1939, prin invadarea Poloniei de către Germania, și s-a încheiat în 1945 – în mai în Europa și în septembrie în Pacific." },
      { t: "Marile descoperiri geografice", x: "În 1492, Cristofor Columb a ajuns în America. În 1498, Vasco da Gama a ajuns în India pe mare, iar expediția lui Magellan a făcut primul înconjur al lumii (1519–1522)." },
      { t: "Căderea Zidului Berlinului", x: "Pe 9 noiembrie 1989 a căzut Zidul Berlinului, simbolul Războiului Rece. Germania s-a reunificat pe 3 octombrie 1990." }
    ],
    questions: [
      { q: "În ce an a căzut Zidul Berlinului?", a: ["1985", "1989", "1991", "1993"], c: 1, e: "Zidul Berlinului a căzut pe 9 noiembrie 1989." },
      { q: "Cine a fost primul împărat roman?", a: ["Iulius Cezar", "Augustus", "Nero", "Traian"], c: 1, e: "Augustus a devenit primul împărat în anul 27 î.Hr. Iulius Cezar a fost dictator, nu împărat." },
      { q: "În ce an a început Primul Război Mondial?", a: ["1905", "1914", "1918", "1939"], c: 1, e: "Primul Război Mondial a început în 1914 și s-a încheiat în 1918." },
      { q: "Ce civilizație a construit Machu Picchu?", a: ["Aztecii", "Mayașii", "Incașii", "Olmecii"], c: 2, e: "Machu Picchu a fost construit de incași în secolul al XV-lea, în Munții Anzi (Peru)." },
      { q: "Cine a ajuns în America în 1492?", a: ["Vasco da Gama", "Cristofor Columb", "Ferdinand Magellan", "Amerigo Vespucci"], c: 1, e: "Cristofor Columb a ajuns în America pe 12 octombrie 1492." },
      { q: "În ce an a început Revoluția Franceză?", a: ["1776", "1789", "1815", "1848"], c: 1, e: "Revoluția Franceză a început în 1789, cu luarea Bastiliei pe 14 iulie." },
      { q: "Cine a fost primul om care a pășit pe Lună?", a: ["Buzz Aldrin", "Iuri Gagarin", "Neil Armstrong", "Michael Collins"], c: 2, e: "Neil Armstrong a pășit pe Lună pe 20 iulie 1969, în misiunea Apollo 11." },
      { q: "Ce imperiu a cucerit Constantinopolul în 1453?", a: ["Imperiul Otoman", "Imperiul Mongol", "Imperiul Persan", "Imperiul Habsburgic"], c: 0, e: "Otomanii, conduși de sultanul Mehmed al II-lea, au cucerit Constantinopolul în 1453." },
      { q: "Cine este principalul autor al Declarației de Independență a SUA?", a: ["George Washington", "Benjamin Franklin", "Abraham Lincoln", "Thomas Jefferson"], c: 3, e: "Thomas Jefferson a redactat Declarația de Independență, adoptată pe 4 iulie 1776." },
      { q: "În ce an s-a încheiat al Doilea Război Mondial?", a: ["1943", "1944", "1945", "1947"], c: 2, e: "Al Doilea Război Mondial s-a încheiat în 1945." }
    ]
  },
  {
    id: "geografie", name: "Geografie", icon: "🌍", color: "#0f766e",
    lessons: [
      { t: "Oceanele lumii", x: "Pe Pământ există cinci oceane: Pacific (cel mai mare și cel mai adânc), Atlantic, Indian, Arctic și Austral. Groapa Marianelor, din Pacific, are aproape 11 km adâncime." },
      { t: "Cele mai înalte vârfuri", x: "Everestul (8.849 m), din Himalaya, este cel mai înalt munte de pe Pământ. Cel mai înalt vârf din Europa este Elbrus (5.642 m), iar din Africa, Kilimanjaro (5.895 m)." },
      { t: "Capitale care surprind", x: "Capitala Australiei este Canberra (nu Sydney), a Canadei este Ottawa (nu Toronto), a Turciei este Ankara (nu Istanbul), iar a Braziliei este Brasília (nu Rio de Janeiro)." },
      { t: "Cele mai mari țări", x: "Rusia este cea mai mare țară ca suprafață, urmată de Canada, SUA și China. Din 2023, India a depășit China și a devenit țara cu cea mai mare populație." },
      { t: "Deșerturi", x: "Sahara este cel mai mare deșert fierbinte. Ca suprafață totală, cel mai mare deșert este Antarctica, fiindcă un deșert se definește prin precipitații foarte puține, nu prin temperatură." },
      { t: "Ape celebre", x: "Marea Caspică este cel mai mare lac din lume. Strâmtoarea Gibraltar separă Europa de Africa, iar Canalul Suez leagă Marea Mediterană de Marea Roșie." }
    ],
    questions: [
      { q: "Care este cel mai mare ocean?", a: ["Atlantic", "Indian", "Pacific", "Arctic"], c: 2, e: "Oceanul Pacific acoperă aproximativ o treime din suprafața Pământului." },
      { q: "Care este capitala Australiei?", a: ["Sydney", "Melbourne", "Canberra", "Perth"], c: 2, e: "Canberra a fost construită special ca să fie capitala Australiei, ca un compromis între Sydney și Melbourne." },
      { q: "Care este cel mai înalt munte de pe Pământ?", a: ["K2", "Everest", "Kilimanjaro", "Mont Blanc"], c: 1, e: "Everestul are 8.849 m și se află în Himalaya, la granița dintre Nepal și China." },
      { q: "Care este cea mai mare țară ca suprafață?", a: ["Canada", "China", "SUA", "Rusia"], c: 3, e: "Rusia are peste 17 milioane km², aproape dublu față de Canada." },
      { q: "Ce țară are cea mai mare populație (din 2023)?", a: ["China", "India", "SUA", "Indonezia"], c: 1, e: "India a depășit China în 2023 și are peste 1,4 miliarde de locuitori." },
      { q: "Care este cel mai mare deșert fierbinte?", a: ["Gobi", "Kalahari", "Sahara", "Atacama"], c: 2, e: "Sahara are aproximativ 9 milioane km² și se află în nordul Africii." },
      { q: "Care este capitala Canadei?", a: ["Toronto", "Ottawa", "Vancouver", "Montreal"], c: 1, e: "Ottawa este capitala Canadei, în provincia Ontario." },
      { q: "Pe ce continent se află Egiptul?", a: ["Asia", "Europa", "Africa", "Oceania"], c: 2, e: "Egiptul se află în nord-estul Africii, deși Peninsula Sinai ține de Asia." },
      { q: "Care este cel mai mare lac din lume?", a: ["Lacul Baikal", "Lacul Superior", "Marea Caspică", "Lacul Victoria"], c: 2, e: "Marea Caspică are aproximativ 371.000 km² și este, de fapt, un lac." },
      { q: "Ce strâmtoare separă Europa de Africa?", a: ["Bosfor", "Gibraltar", "Dardanele", "Magellan"], c: 1, e: "Strâmtoarea Gibraltar are doar aproximativ 14 km în punctul cel mai îngust." }
    ]
  },
  {
    id: "stiinta", name: "Știință", icon: "🔬", color: "#1d4ed8",
    lessons: [
      { t: "Tabelul periodic", x: "Dmitri Mendeleev a creat tabelul periodic în 1869. Câteva simboluri care vin din latină: Au (aurul, „aurum”), Ag (argintul, „argentum”), Fe (fierul, „ferrum”), Na (sodiul, „natrium”)." },
      { t: "Corpul uman", x: "Un adult are 206 oase. Pielea este cel mai mare organ, iar cel mai mic os, scărița, se află în ureche. Inima bate de aproximativ 100.000 de ori pe zi." },
      { t: "Lumina", x: "În vid, lumina are viteza de aproximativ 300.000 km/s. Lumina Soarelui ajunge pe Pământ în aproximativ 8 minute și 20 de secunde." },
      { t: "Einstein și relativitatea", x: "Albert Einstein a publicat teoria relativității restrânse în 1905 (E = mc²) și pe cea a relativității generale în 1915. A primit Premiul Nobel în 1921, pentru explicarea efectului fotoelectric." },
      { t: "Fotosinteza", x: "Plantele absorb dioxid de carbon (CO₂) și apă și, cu ajutorul energiei luminii, produc glucoză și eliberează oxigen. Procesul are loc în cloroplaste, datorită clorofilei." },
      { t: "Penicilina", x: "Alexander Fleming a descoperit penicilina în 1928, din întâmplare, pe o cultură de bacterii contaminată cu mucegai. A fost primul antibiotic folosit pe scară largă." }
    ],
    questions: [
      { q: "Care este simbolul chimic al aurului?", a: ["Ag", "Au", "Ar", "Go"], c: 1, e: "Au vine din latinescul „aurum”. Ag este simbolul argintului." },
      { q: "Care este cea mai apropiată stea de Pământ?", a: ["Proxima Centauri", "Sirius", "Soarele", "Steaua Polară"], c: 2, e: "Soarele este o stea! Următoarea ca apropiere este Proxima Centauri, la aproximativ 4,2 ani-lumină." },
      { q: "Câte oase are scheletul unui om adult?", a: ["186", "206", "226", "256"], c: 1, e: "Un adult are 206 oase. Bebelușii se nasc cu aproape 300, iar unele dintre ele se sudează în timp." },
      { q: "Care este, aproximativ, viteza luminii în vid?", a: ["30.000 km/s", "150.000 km/s", "300.000 km/s", "1.000.000 km/s"], c: 2, e: "Viteza luminii în vid este de 299.792 km/s, adică aproximativ 300.000 km/s." },
      { q: "Care este cea mai mare planetă din Sistemul Solar?", a: ["Saturn", "Jupiter", "Neptun", "Pământ"], c: 1, e: "Jupiter are o masă de peste două ori mai mare decât toate celelalte planete la un loc." },
      { q: "Cine a formulat teoria relativității?", a: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Niels Bohr"], c: 2, e: "Einstein a publicat relativitatea restrânsă în 1905 și pe cea generală în 1915." },
      { q: "Ce gaz absorb plantele pentru fotosinteză?", a: ["Oxigen", "Azot", "Dioxid de carbon", "Hidrogen"], c: 2, e: "Plantele absorb CO₂ și eliberează oxigen." },
      { q: "La ce temperatură fierbe apa la nivelul mării?", a: ["90 °C", "100 °C", "110 °C", "120 °C"], c: 1, e: "La presiunea de 1 atmosferă, apa fierbe la 100 °C. Pe munte fierbe la o temperatură mai mică." },
      { q: "Care este cel mai mare organ al corpului uman?", a: ["Ficatul", "Creierul", "Pielea", "Plămânii"], c: 2, e: "Pielea unui adult are aproximativ 2 m² și cântărește câteva kilograme." },
      { q: "Cine a descoperit penicilina?", a: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"], c: 1, e: "Alexander Fleming a descoperit penicilina în 1928." }
    ]
  },
  {
    id: "literatura", name: "Literatură", icon: "📚", color: "#7c3aed",
    lessons: [
      { t: "William Shakespeare", x: "Dramaturgul englez (1564–1616) a scris „Romeo și Julieta”, „Hamlet”, „Macbeth” și „Regele Lear”. Este considerat cel mai mare scriitor de limbă engleză." },
      { t: "Clasici universali", x: "„Odiseea” – Homer; „Divina Comedie” – Dante Alighieri; „Don Quijote” – Miguel de Cervantes; „Război și pace” – Lev Tolstoi; „Crimă și pedeapsă” – F. M. Dostoievski." },
      { t: "Mihai Eminescu", x: "Considerat „poetul național” al României (1850–1889). Cele mai cunoscute opere ale sale sunt „Luceafărul”, „Scrisorile” și „Glossă”. Pe 15 ianuarie, ziua lui de naștere, se sărbătorește Ziua Culturii Naționale." },
      { t: "Clasicii români", x: "Ion Creangă – „Amintiri din copilărie”; I. L. Caragiale – „O scrisoare pierdută”; Liviu Rebreanu – „Ion”, „Pădurea spânzuraților”; Mihail Sadoveanu – „Baltagul”." },
      { t: "Secolul XX", x: "George Orwell – „1984” și „Ferma animalelor”; Antoine de Saint-Exupéry – „Micul Prinț”; Gabriel García Márquez – „Un veac de singurătate”; Franz Kafka – „Metamorfoza”." },
      { t: "Premiul Nobel pentru Literatură", x: "Se acordă din 1901. Printre laureați se numără Ernest Hemingway, Albert Camus și Gabriel García Márquez. Herta Müller, născută în România, l-a primit în 2009." }
    ],
    questions: [
      { q: "Cine a scris „Romeo și Julieta”?", a: ["Charles Dickens", "William Shakespeare", "Molière", "Goethe"], c: 1, e: "Shakespeare a scris tragedia în jurul anului 1595." },
      { q: "Cine este autorul romanului „Don Quijote”?", a: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca", "Dante Alighieri"], c: 0, e: "Cervantes a publicat „Don Quijote” în două părți, în 1605 și 1615." },
      { q: "Cine a scris „Război și pace”?", a: ["Dostoievski", "Cehov", "Tolstoi", "Pușkin"], c: 2, e: "Lev Tolstoi a publicat romanul între 1865 și 1869." },
      { q: "Cine a scris poemul „Luceafărul”?", a: ["George Coșbuc", "Mihai Eminescu", "Vasile Alecsandri", "Tudor Arghezi"], c: 1, e: "Eminescu a publicat „Luceafărul” în 1883." },
      { q: "Cine a scris „Micul Prinț”?", a: ["Jules Verne", "Victor Hugo", "Antoine de Saint-Exupéry", "Albert Camus"], c: 2, e: "Saint-Exupéry, scriitor și aviator, a publicat cartea în 1943." },
      { q: "Cine a scris romanul distopic „1984”?", a: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H. G. Wells"], c: 1, e: "George Orwell a publicat „1984” în 1949." },
      { q: "Cui i se atribuie „Odiseea”?", a: ["Homer", "Sofocle", "Vergiliu", "Platon"], c: 0, e: "„Iliada” și „Odiseea” sunt atribuite poetului grec Homer." },
      { q: "Cine a scris romanul „Ion”?", a: ["Mihail Sadoveanu", "Liviu Rebreanu", "Camil Petrescu", "Marin Preda"], c: 1, e: "Liviu Rebreanu a publicat „Ion” în 1920." },
      { q: "Cine a scris „Divina Comedie”?", a: ["Petrarca", "Boccaccio", "Dante Alighieri", "Machiavelli"], c: 2, e: "Dante a scris „Divina Comedie” la începutul secolului al XIV-lea." },
      { q: "Cine a scris „Amintiri din copilărie”?", a: ["Ion Creangă", "I. L. Caragiale", "Ioan Slavici", "Mihai Eminescu"], c: 0, e: "Ion Creangă descrie copilăria sa din Humulești." }
    ]
  },
  {
    id: "arta", name: "Artă & Muzică", icon: "🎨", color: "#be185d",
    lessons: [
      { t: "Renașterea", x: "Leonardo da Vinci a pictat „Mona Lisa” și „Cina cea de taină”. Michelangelo a pictat tavanul Capelei Sixtine (1508–1512) și a sculptat statuia „David”." },
      { t: "Impresionismul", x: "Curentul s-a născut în Franța, în secolul al XIX-lea. Numele vine de la tabloul lui Claude Monet „Impresie, răsărit de soare”. Alți impresioniști: Renoir și Degas." },
      { t: "Van Gogh și Picasso", x: "Vincent van Gogh a pictat „Noaptea înstelată” (1889) și „Floarea-soarelui”. Pablo Picasso a fost unul dintre fondatorii cubismului și a pictat „Guernica” (1937)." },
      { t: "Constantin Brâncuși", x: "Sculptor român (1876–1957), unul dintre pionierii sculpturii moderne. Ansamblul de la Târgu Jiu cuprinde „Coloana fără sfârșit”, „Poarta Sărutului” și „Masa Tăcerii”." },
      { t: "Muzica clasică", x: "Mozart s-a născut la Salzburg în 1756. Beethoven a compus Simfonia a 9-a, cu „Oda bucuriei”, care este azi imnul Uniunii Europene. George Enescu a compus „Rapsodiile române”." },
      { t: "Instrumente", x: "Un pian standard are 88 de clape (52 albe și 36 negre). O vioară are 4 corzi, iar o chitară clasică are 6." }
    ],
    questions: [
      { q: "Cine a pictat „Mona Lisa”?", a: ["Michelangelo", "Rafael", "Leonardo da Vinci", "Botticelli"], c: 2, e: "Leonardo a pictat-o la începutul secolului al XVI-lea. Tabloul este expus la Luvru." },
      { q: "Cine a pictat „Noaptea înstelată”?", a: ["Claude Monet", "Vincent van Gogh", "Paul Cézanne", "Salvador Dalí"], c: 1, e: "Van Gogh a pictat-o în 1889, la Saint-Rémy-de-Provence." },
      { q: "Cine a pictat tavanul Capelei Sixtine?", a: ["Michelangelo", "Leonardo da Vinci", "Tițian", "Caravaggio"], c: 0, e: "Michelangelo l-a pictat între 1508 și 1512." },
      { q: "Ce compozitor a scris Simfonia a 9-a, cu „Oda bucuriei”?", a: ["Mozart", "Bach", "Beethoven", "Haydn"], c: 2, e: "Beethoven a compus-o când era deja aproape complet surd." },
      { q: "Câte clape are un pian standard?", a: ["76", "82", "88", "96"], c: 2, e: "Un pian standard are 88 de clape: 52 albe și 36 negre." },
      { q: "Cine a compus „Rapsodiile române”?", a: ["Ciprian Porumbescu", "George Enescu", "Eduard Caudella", "Gheorghe Zamfir"], c: 1, e: "George Enescu le-a compus în 1901." },
      { q: "Cine a sculptat „Coloana fără sfârșit”?", a: ["Constantin Brâncuși", "Ion Jalea", "Auguste Rodin", "Dimitrie Paciurea"], c: 0, e: "Brâncuși a realizat-o în 1938, la Târgu Jiu." },
      { q: "Cu ce curent artistic este asociat Claude Monet?", a: ["Cubismul", "Impresionismul", "Suprarealismul", "Barocul"], c: 1, e: "Numele curentului vine de la tabloul lui Monet „Impresie, răsărit de soare”." },
      { q: "Cine a pictat „Guernica”?", a: ["Joan Miró", "Salvador Dalí", "Pablo Picasso", "Francisco Goya"], c: 2, e: "Picasso a pictat-o în 1937, ca reacție la bombardarea orașului Guernica." },
      { q: "În ce oraș s-a născut Mozart?", a: ["Viena", "Salzburg", "Praga", "München"], c: 1, e: "Wolfgang Amadeus Mozart s-a născut la Salzburg în 1756." }
    ]
  },
  {
    id: "romania", name: "România", icon: "🇷🇴", color: "#a16207",
    lessons: [
      { t: "Marea Unire", x: "Pe 1 decembrie 1918, la Alba Iulia, s-a proclamat unirea Transilvaniei cu România. De aceea, 1 decembrie este Ziua Națională a României." },
      { t: "Mica Unire", x: "În 1859, Alexandru Ioan Cuza a fost ales domn atât în Moldova, cât și în Țara Românească. Așa s-au unit cele două principate." },
      { t: "Relief și ape", x: "Cel mai înalt vârf din România este Moldoveanu (2.544 m), în Munții Făgăraș. Dunărea se varsă în Marea Neagră prin Delta Dunării, aflată în patrimoniul UNESCO." },
      { t: "Ștefan cel Mare", x: "A domnit în Moldova între 1457 și 1504, iar cetatea sa de scaun a fost Suceava. A ridicat numeroase mănăstiri, printre care Putna și Voroneț." },
      { t: "Inventatori români", x: "Petrache Poenaru a inventat stiloul cu rezervor (1827), Henri Coandă a descoperit efectul Coandă, iar Traian Vuia a realizat unul dintre primele zboruri cu un aparat mai greu decât aerul (1906)." },
      { t: "Sportivi legendari", x: "Nadia Comăneci a primit prima notă de 10 din istoria gimnasticii olimpice, la Montreal, în 1976. Simona Halep a câștigat Roland-Garros (2018) și Wimbledon (2019)." }
    ],
    questions: [
      { q: "Care este cel mai înalt vârf din România?", a: ["Negoiu", "Moldoveanu", "Omu", "Peleaga"], c: 1, e: "Vârful Moldoveanu are 2.544 m și se află în Munții Făgăraș." },
      { q: "În ce an a avut loc Marea Unire?", a: ["1859", "1877", "1918", "1947"], c: 2, e: "Marea Unire a fost proclamată la Alba Iulia, pe 1 decembrie 1918." },
      { q: "Ce domnitor a realizat Mica Unire din 1859?", a: ["Carol I", "Alexandru Ioan Cuza", "Mihai Viteazul", "Ștefan cel Mare"], c: 1, e: "Alexandru Ioan Cuza a fost ales domn în ambele principate." },
      { q: "Ce fluviu formează cea mai mare parte a graniței de sud a României?", a: ["Prut", "Mureș", "Dunărea", "Olt"], c: 2, e: "Dunărea formează granița cu Serbia și Bulgaria." },
      { q: "Care a fost cetatea de scaun a lui Ștefan cel Mare?", a: ["Iași", "Suceava", "Târgoviște", "Alba Iulia"], c: 1, e: "Cetatea de Scaun a Sucevei a fost reședința lui Ștefan cel Mare." },
      { q: "Cine a inventat stiloul cu rezervor?", a: ["Henri Coandă", "Petrache Poenaru", "Traian Vuia", "Aurel Vlaicu"], c: 1, e: "Petrache Poenaru l-a brevetat la Paris, în 1827." },
      { q: "Cine a primit prima notă de 10 din istoria gimnasticii olimpice?", a: ["Simona Amânar", "Nadia Comăneci", "Lavinia Miloșovici", "Andreea Răducan"], c: 1, e: "Nadia Comăneci a obținut nota 10 la Montreal, în 1976." },
      { q: "În ce mare se varsă Dunărea?", a: ["Marea Mediterană", "Marea Neagră", "Marea Egee", "Marea Adriatică"], c: 1, e: "Dunărea se varsă în Marea Neagră prin trei brațe: Chilia, Sulina și Sfântu Gheorghe." },
      { q: "În ce an a aderat România la Uniunea Europeană?", a: ["2004", "2007", "2010", "2013"], c: 1, e: "România a aderat la UE pe 1 ianuarie 2007, odată cu Bulgaria." },
      { q: "În ce oraș s-a proclamat Marea Unire?", a: ["București", "Cluj", "Alba Iulia", "Sibiu"], c: 2, e: "Marea Adunare Națională s-a ținut la Alba Iulia." }
    ]
  },
  {
    id: "sport", name: "Sport", icon: "⚽", color: "#15803d",
    lessons: [
      { t: "Jocurile Olimpice", x: "Primele Jocuri Olimpice moderne au avut loc la Atena, în 1896. Cele cinci inele olimpice simbolizează cele cinci continente locuite care participă la Jocuri." },
      { t: "Fotbal", x: "O echipă are 11 jucători pe teren. Primul Campionat Mondial s-a disputat în 1930, în Uruguay, iar gazdele l-au și câștigat. Brazilia are cele mai multe titluri mondiale: 5." },
      { t: "Atletism", x: "Maratonul are 42,195 km. Distanța amintește de legenda soldatului care a alergat de la Marathon la Atena ca să anunțe victoria grecilor." },
      { t: "Tenis", x: "Turneele de Grand Slam sunt Australian Open, Roland-Garros, Wimbledon (singurul pe iarbă) și US Open. Un „ace” este un serviciu pe care adversarul nici nu îl atinge." },
      { t: "Sporturi de echipă", x: "O echipă de baschet are 5 jucători pe teren, una de volei are 6, iar una de handbal are 7 (inclusiv portarul)." },
      { t: "Turul Franței", x: "Cea mai cunoscută cursă de ciclism din lume se dispută din 1903. Liderul clasamentului general poartă tricoul galben („maillot jaune”)." }
    ],
    questions: [
      { q: "Câți jucători are o echipă de fotbal pe teren?", a: ["9", "10", "11", "12"], c: 2, e: "Fiecare echipă are 11 jucători pe teren, inclusiv portarul." },
      { q: "Unde au avut loc primele Jocuri Olimpice moderne?", a: ["Paris", "Atena", "Londra", "Roma"], c: 1, e: "Primele Jocuri Olimpice moderne au avut loc la Atena, în 1896." },
      { q: "Câte inele are simbolul olimpic?", a: ["4", "5", "6", "7"], c: 1, e: "Cele cinci inele reprezintă continentele participante." },
      { q: "În tenis, cum se numește un serviciu pe care adversarul nici nu îl atinge?", a: ["Smash", "Lob", "Ace", "Volley"], c: 2, e: "Un „ace” aduce direct punctul celui care servește." },
      { q: "Ce lungime are un maraton?", a: ["21,1 km", "40 km", "42,195 km", "50 km"], c: 2, e: "Distanța de 42,195 km a fost standardizată în 1921." },
      { q: "Câți jucători are o echipă de baschet pe teren?", a: ["5", "6", "7", "11"], c: 0, e: "Fiecare echipă are 5 jucători pe teren." },
      { q: "Ce țară a câștigat primul Campionat Mondial de fotbal, în 1930?", a: ["Brazilia", "Argentina", "Uruguay", "Italia"], c: 2, e: "Uruguay, țara gazdă, a învins Argentina cu 4–2 în finală." },
      { q: "În ce an a câștigat Simona Halep turneul de la Wimbledon?", a: ["2017", "2018", "2019", "2021"], c: 2, e: "Simona Halep a învins-o pe Serena Williams în finala din 2019." },
      { q: "Ce sport este Turul Franței?", a: ["Atletism", "Ciclism", "Automobilism", "Motociclism"], c: 1, e: "Turul Franței este o cursă de ciclism pe etape care se dispută din 1903." },
      { q: "Ce lungime are un bazin olimpic de înot?", a: ["25 m", "33 m", "50 m", "100 m"], c: 2, e: "Bazinul olimpic are 50 m lungime." }
    ]
  },
  {
    id: "natura", name: "Natură & Spațiu", icon: "🪐", color: "#0369a1",
    lessons: [
      { t: "Recorduri din lumea animalelor", x: "Balena albastră este cel mai mare animal care a trăit vreodată pe Pământ (poate ajunge la peste 30 m). Ghepardul este cel mai rapid animal terestru (peste 100 km/h), iar girafa este cel mai înalt." },
      { t: "Animale ciudate", x: "Caracatița are trei inimi și sânge albastru. Pinguinii nu zboară, dar sunt înotători excelenți. Albinele fac miere din nectarul florilor." },
      { t: "Sistemul Solar", x: "Sistemul Solar are 8 planete: Mercur, Venus, Pământ, Marte, Jupiter, Saturn, Uranus și Neptun. Pluto a fost reclasificat ca planetă pitică în 2006." },
      { t: "Planeta Roșie", x: "Marte este numită „Planeta Roșie” din cauza oxidului de fier de la suprafață. Acolo se află Olympus Mons, cel mai înalt vulcan cunoscut din Sistemul Solar." },
      { t: "Arbori uriași", x: "Sequoia gigantică este cel mai mare copac ca volum. Cel mai mare exemplar, „General Sherman”, se află în California. Cel mai înalt copac este o sequoia de coastă, de peste 115 m." },
      { t: "Simboluri", x: "Panda uriaș este simbolul WWF din 1961. În China, pandele se hrănesc aproape exclusiv cu bambus." }
    ],
    questions: [
      { q: "Care este cel mai mare animal de pe Pământ?", a: ["Elefantul african", "Balena albastră", "Rechinul-balenă", "Girafa"], c: 1, e: "Balena albastră poate depăși 30 m lungime și 150 de tone." },
      { q: "Care este cel mai rapid animal terestru?", a: ["Leul", "Antilopa", "Ghepardul", "Calul"], c: 2, e: "Ghepardul poate depăși 100 km/h pe distanțe scurte." },
      { q: "Câte inimi are o caracatiță?", a: ["1", "2", "3", "4"], c: 2, e: "Caracatița are trei inimi: două pompează sânge prin branhii, iar una prin restul corpului." },
      { q: "Ce animal este simbolul WWF?", a: ["Tigrul", "Panda uriaș", "Ursul polar", "Elefantul"], c: 1, e: "Panda uriaș este simbolul WWF din 1961." },
      { q: "Care este cel mai înalt animal?", a: ["Elefantul", "Girafa", "Struțul", "Cămila"], c: 1, e: "Girafele pot depăși 5,5 m înălțime." },
      { q: "Ce planetă este numită „Planeta Roșie”?", a: ["Venus", "Marte", "Jupiter", "Mercur"], c: 1, e: "Marte este roșie din cauza oxidului de fier de la suprafață." },
      { q: "Câte planete are Sistemul Solar?", a: ["7", "8", "9", "10"], c: 1, e: "Sistemul Solar are 8 planete, după ce Pluto a fost reclasificat ca planetă pitică în 2006." },
      { q: "Din ce produc albinele mierea?", a: ["Polen", "Nectar", "Sevă", "Rouă"], c: 1, e: "Albinele colectează nectar și îl transformă în miere în stup." },
      { q: "Ce pasăre care nu zboară trăiește în Antarctica?", a: ["Struțul", "Kiwi", "Pinguinul", "Emu"], c: 2, e: "Pinguinul imperial trăiește în Antarctica." },
      { q: "Care este cel mai mare copac ca volum?", a: ["Baobabul", "Sequoia gigantică", "Stejarul", "Eucaliptul"], c: 1, e: "Sequoia „General Sherman” are aproximativ 1.500 m³." }
    ]
  }
];
