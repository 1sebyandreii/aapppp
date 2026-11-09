/* ============================================================
   BAZA DE ÎNTREBĂRI (Econometrie, Marketing, Finanțe)
   ============================================================ */

const INTREBARI = [
  // --- ECONOMETRIE ---
  {
    "materie": "Econometrie",
    "intrebare": "Instrumentul care stă la baza studierii legăturilor dintre fenomenele economice sub aspect cantitativ, prin aplicarea demersului econometric, este:",
    "optiuni": ["a) modelul pur aleator", "b) modelul pur determinist", "c) modelul econometric", "d) modelul economic"],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Un model econometric este folosit pentru:",
    "optiuni": [
     "a) analiza influenței diferitelor variabile independente, ignorând influența variabilei dependente",
     "b) evaluarea modului în care variabila dependentă explică modificările variabilelor independente",
     "c) analizarea relațiilor dintre variabila dependentă şi variabilele explicative specificate în model",
     "d) descrierea exclusivă a variației datelor din eșantion, fără interes pentru relațiile cauzale"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Considerând construirea unui model econometric pentru diferite fenomene economice, este corectă afirmaţia:",
    "optiuni": [
     "a) se lucrează doar cu baze de date de mari dimensiuni",
     "b) este suficientă specificarea ecuațiilor matematice",
     "c) modelul este semnificativ statistic dacă parametrii de regresie sunt semnificativ diferiți de 0",
     "d) nu este necesar să cunoaştem teoriile economice privind fenomenele modelate"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$. Parametrii care fac obiectul estimării și testării statistice sunt:",
    "optiuni": [
     "a) X şi Y",
     "b) X, Y și $\\epsilon$",
     "c) $\\beta_{0}$și $\\beta_{1}$"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma $Y = \\beta_{0} + \\beta_{1}X + \\epsilon$. Sunt corecte afirmaţiile:",
    "optiuni": [
     "a) variabilele modelului econometric sunt variabilele $\\beta_{0}$și $\\beta_{1}$",
     "b) parametrii modelului econometric sunt $\\beta_{0}$și $\\beta_{1}$",
     "c) variabilele modelului econometric sunt variabilele X şi Y"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Modelul de regresie conține:",
    "optiuni": [
     "a) variabile nespecificate",
     "b) variabile mixte",
     "c) variabile aleatoare",
     "d) estimatori"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Componenta aleatoare a unui model de regresie este reprezentată de:",
    "optiuni": [
     "a) variabilele independente",
     "b) variabila reziduală",
     "c) variabila dependentă",
     "d) media condiționată a variabilei dependente"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Includerea variabilei reziduale într-un model econometric este justificată prin:",
    "optiuni": [
     "a) cunoaşterea valorii exacte a parametrilor modelului",
     "b) existența de variabile explicative care nu au fost incluse explicit în model",
     "c) posibilitatea de a estima prin interval de încredere 95% parametrii modelului de regresie",
     "d) existenţa unei relații funcționale (perfecte) între X și Y"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "În modelul econometric, variabila reziduală reflectă / include efecte datorate:",
    "optiuni": [
     "a) influenței variabilelor omise sau a altor factori neobservați care influențează variabila dependentă (neincluderii în model a unor variabile independente importante)",
     "b) valorilor exacte ale parametrilor estimați",
     "c) specificării exacte a formei funcționale a modelului",
     "d) dependenței complet deterministe dintre variabila dependentă și variabilele independente"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie, un estimator al unui parametru reprezintă:",
    "optiuni": [
     "a) o variabilă aleatoare, care ia ca valori estimațiile determinate pe baza celor k eşantioane posibil de extras",
     "b) o valoare constantă, identică pentru orice eșantion extras din populație",
     "c) un set de valori prestabilite potrivit datelor colectate pentru un singur eșantion",
     "d) o valoare arbitrară, care depinde de hazard"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie, estimațiile parametrilor sunt:",
    "optiuni": [
     "a) valori generate întâmplător, fără utilizarea unui algoritm statistic",
     "b) valori estimate pentru parametri pe baza datelor unui eșantion",
     "c) valori teoretice ale parametrilor la nivelul întregii populații",
     "d) întotdeauna identice cu valorile reale ale parametrilor populației"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Proprietățile unui estimator sunt:",
    "optiuni": [
     "a) precizia",
     "b) convergența",
     "c) nedeplasarea",
     "d) \\[Toate variantele menționate (a, b, c) reprezintă proprietăți ale estimatorilor\\]"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Criteriul care stă la baza metodei celor mai mici pătrate, folosită în procesul de estimare a parametrilor modelului de regresie, este:",
    "optiuni": [
     "a) minimizarea sumei absolute a reziduurilor, pentru a obține o estimare robustă a parametrilor",
     "b) maximizarea coeficienților de regresie, pentru a asigura o corelație strânsă între variabilele independente şi dependente",
     "c) maximizarea variantei reziduurilor, adică a diferenței dintre valorile estimate și cele observate",
     "d) minimizarea sumei pătratelor reziduurilor, adică a diferențelor dintre valorile observate şi cele estimate ($\\sum_{}^{}e_{i}^{2} = \\min$)"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model liniar simplu, termenul liber reprezintă:",
    "optiuni": [
     "a) ordonata punctului în care dreapta de regresie intersectează axa orizontală",
     "b) valoarea medie a variabilei X pentru o valoare specificată a variabilei Y",
     "c) valoarea estimată a variabilei dependente Y atunci când variabila independentă X ia valoarea zero",
     "d) modificarea medie a variabilei Y produsă la modificarea cu o unitate a variabilei X"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model liniar simplu, panta dreptei reprezintă:",
    "optiuni": [
     "a) valoarea variabilei Y, corespunzătoare unei variații absolute a lui X cu o unitate",
     "b) media variației absolute a variabilei dependente Y, corespunzătoare unei variații absolute a lui X cu o unitate de măsură",
     "c) niciuna dintre variantele de mai sus",
     "d) valoarea variabilei dependente Y atunci când $X = 0$"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Fie un model liniar simplu pentru care se cunoaște valoarea lui $r_{yx}$, $s_{x}$și $s_{y}$. Valoarea lui $b_{1}$poate fi determinată pe baza relației:",
    "optiuni": [
     "a) $b_{1} = R\\frac{s_{x}}{s_{y}}$",
     "b) $b_{1} = r_{yx}\\frac{s_{y}}{s_{x}}$",
     "c) $b_{1} = r_{yx}\\frac{s_{x}}{s_{y}}$"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniar simplu $y = \\beta_{0} + \\beta_{1}X + \\epsilon$, identificați relația greşită:",
    "optiuni": [
     "a) $IC_{\\beta_{1}} = b_{1} \\pm t_{\\frac{\\alpha}{2};n - 2} \\cdot s_{b_{1}}$",
     "b) $IC_{\\beta_{1}} = b_{1} \\pm t_{calculat} \\cdot s_{b_{1}}$",
     "c) $P\\left( \\beta_{1} \\in IC_{\\beta_{1}} \\right) = 1 - \\alpha$",
     "d) $P\\left( \\beta_{1} \\notin IC_{\\beta_{1}} \\right) = \\alpha$"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru modelul de regresie liniară simplă este întotdeauna valabilă relația:",
    "optiuni": [
     "a) $\\rho = \\eta$",
     "b) $\\rho = \\eta^{2}$",
     "c) $\\rho^{2} = 1 - \\eta^{2}$",
     "d) $\\rho^{2} = \\eta^{2}$"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie liniară simplă, raportul de corelație dintre cele două variabile este egal cu:",
    "optiuni": [
     "a) raportul de determinație ridicat la puterea 2",
     "b) modulul coeficientului de corelație bivariată",
     "c) inversul pantei dreptei modelului de regresie",
     "d) produsul dintre abaterile standard ale variabilelor"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Valoarea coeficientului de corelație, pentru un model liniar simplu, este egală cu:",
    "optiuni": [
     "a) coeficientul de regresie $b_{1}$, pentru un model de regresie cu variabile standardizate",
     "b) panta dreptei modelului de regresie cu variabile nestandardizate",
     "c) pătratul raportului de determinație",
     "d) raportul de corelație"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru un model de regresie liniară simplă, coeficientul de corelație simplă sau bivariată:",
    "optiuni": [
     "a) este întotdeauna negativ, indiferent de sensul legăturii dintre variabile",
     "b) este egal cu raportul de determinație la pătrat",
     "c) este identic cu panta dreptei de regresie dacă variabilele sunt standardizate",
     "d) este egal cu 1, dacă variabila dependentă nu este corelată cu variabila independentă"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Alegeți afirmaţia corectă privind coeficientul de corelație $\\rho_{xy}$:",
    "optiuni": [
     "a) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model liniar",
     "b) $\\rho_{xy}$reprezintă % variației lui Y explicate de variația lui X printr-un model oarecare",
     "c) $\\rho_{xy}$reprezintă corelația dintre x și y indiferent de forma modelului",
     "d) $\\rho_{xy}$reprezintă corelația dintre x şi y pentru un model liniar simplu"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Modelul liniar multiplu conține:",
    "optiuni": [
     "a) cel puțin k parametri, care este egal cu numărul de variabile independente plus unu",
     "b) cel puțin k parametri, care este egal cu numărul de variabile independente",
     "c) o variabilă dependentă explicată în raport cu o variabilă independentă și variabila reziduală",
     "d) cel puțin k parametri, egal cu numărul de variabile dependente plus unu"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Un coeficient de regresie într-un model liniar multiplu exprimă:",
    "optiuni": [
     "a) modificarea (variația) medie a variabilei dependente dacă o variabilă independentă, căreia îi este atașat, variază cu o unitate și celelalte variabile rămân constante",
     "b) intensitatea legăturii dintre variabila independentă, căreia îi este atașat, și variabila dependentă",
     "c) valoarea estimată a variabilei dependente pentru anumite niveluri ale variabilelor independente",
     "d) variația variabilelor independente dacă variabila dependentă variază cu o unitate"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație pentru un model liniar multiplu:",
    "optiuni": [
     "a) este un indicator al intensității legăturii dintre Y şi una dintre variabilele independente",
     "b) exprimă capacitatea modelului liniar multiplu de a explica variația variabilei dependente Y cu ajutorul variației simultane a variabilelor independente",
     "c) este egal cu valoarea absolută a coeficientului de corelație",
     "d) este un indicator al corelației dintre variabilele independente"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Raportul de determinație este egal cu 1 sau 100% atunci când:",
    "optiuni": [
     "a) modelul de regresie explică în totalitate variația variabilei dependente",
     "b) legătura dintre variabila dependentă și setul de variabile independente incluse în model este foarte slabă",
     "c) variabilele independente explică în proporţie de 99% variația variabilei dependente",
     "d) variabila reziduală explică în proporţie de 99% variația variabilei dependente"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Raportul de corelație pentru un model de regresie liniară multiplă:",
    "optiuni": [
     "a) este un indicator al influenței variabilei dependente asupra variabilelor independente",
     "b) este egal cu suma valorilor absolute ale coeficienților de corelație bivariată",
     "c) măsoară intensitatea relației dintre variabila dependentă şi variabilele independente din modelul liniar",
     "d) exprimă efectul individual al fiecărei variabile independente asupra variabilei Y"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru a măsura intensitatea legăturii dintre o variabilă dependentă ($Y$) și un set de variabile explicative ($X_{1},X_{2}$), se va estima:",
    "optiuni": [
     "a) coeficientul $\\beta_{1}$",
     "b) coeficientul de regresie bivariată dintre $Y$şi $X_{1}$",
     "c) raportul de corelație multiplă",
     "d) coeficientul de corelație simplă dintre $X_{1}$şi $X_{2}$"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru a compara două modele de regresie liniară multiplă care conțin un număr diferit de variabile independente, este recomandată folosirea:",
    "optiuni": [
     "a) valorilor raportului de determinație $R^{2}$, deoarece oferă o imagine sintetică a legăturilor dintre variabile",
     "b) tuturor valorilor coeficienților de regresie parţială",
     "c) coeficienţilor de regresie standardizați ai variabilelor comune din cele două modele",
     "d) valorilor raportului de determinație ajustat ($R^{2}$ ajustat), care ține seama de numărul parametrilor din model"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model de regresie multiplă cu variabile standardizate, coeficienții de regresie:",
    "optiuni": [
     "a) sunt identici cu coeficienții de corelație bivariată",
     "b) sunt identici cu coeficienții de corelație parțială",
     "c) ajută la ierarhizarea importanței variabilelor independente în explicarea variației variabilei dependente",
     "d) au doar valori pozitive"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Dacă un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$explică semnificativ legătura dintre variabile, atunci:",
    "optiuni": [
     "a) cel puțin un factor explică semnificativ variația variabilei dependente",
     "b) toți factorii influențează semnificativ variația variabilei dependente",
     "c) toți parametrii modelului sunt semnificativi"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Pentru un model liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$, dacă parametrul $\\beta_{1}$este semnificativ statistic, atunci:",
    "optiuni": [
     "a) erorile sunt nule",
     "b) parametrul $\\beta_{2}$nu este semnificativ statistic",
     "c) modelul de regresie are cel puțin un factor care explică semnificativ variația variabilei dependente"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Testarea influenței marginale a unei variabile independente excluse dintr-un model multiplu presupune:",
    "optiuni": [
     "a) verificarea ipotezei nule potrivit căreia excluderea variabilei independente nu are o influenţă semnificativă asupra lui Y (sau utilizarea unui test Fisher)",
     "b) verificarea ipotezei nule potrivit căreia excluderea variabilei independente are o influență semnificativă asupra lui Y",
     "c) verificarea ipotezei nule potrivit căreia creșterea valorii variației explicate este semnificativă",
     "d) utilizarea unui test Student"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Dacă influența marginală a unei variabile excluse dintr-un model de regresie liniar multiplu este semnificativă statistic, atunci:",
    "optiuni": [
     "a) Modelul cu variabila exclusă explică într-o pondere semnificativ mai mare variația variabilei dependente",
     "b) Puterea explicativă a modelului a scăzut semnificativ prin eliminarea acestei variabile din model",
     "c) Eliminarea variabilei din model este corectă",
     "d) Raportul de determinație crește semnificativ prin excluderea acestei variabile"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "În testarea parametrului $\\eta$(sau a modelului de regresie), este utilizată statistica $F$. Care este relația după care se calculează valoarea lui $F_{calc}$?",
    "optiuni": [
     "a) $F_{calc} = \\frac{\\frac{ESS}{k - 1}}{\\frac{TSS}{n - 1}}$",
     "b) $F_{calc} = \\frac{\\frac{ESS}{k - 1}}{\\frac{RSS}{n - k}}$",
     "c) $F_{calc} = \\frac{\\frac{RSS}{n - k}}{\\frac{TSS}{n - 1}}$",
     "d) $F_{calc} = \\frac{\\frac{RSS}{n - k}}{\\frac{ESS}{k - 1}}$"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Un estimator este convergent dacă:",
    "optiuni": [
     "a) varianța sa tinde spre valoarea parametrului atunci când volumul eșantionului tinde spre volumul populaţiei: $V\\left( \\widehat{\\theta} \\right) \\rightarrow \\theta$când $n \\rightarrow N$",
     "b) este nedeplasat și are varianța cea mai mică față de varianța oricărui alt estimator nedeplasat posibil pentru parametrul considerat",
     "c) media sau speranța matematică a acestuia este egală cu parametrul: $M\\left( \\widehat{\\theta} \\right) = \\theta$",
     "d) varianța sa tinde spre 0 atunci când volumul eșantionului tinde spre volumul populaţiei: $V\\left( \\widehat{\\theta} \\right) \\rightarrow 0$când $n \\rightarrow N$"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "$R^{2}$(raportul de determinaţie) se calculează după relația:",
    "optiuni": [
     "a) $\\frac{TSS}{ESS}$",
     "b) $\\frac{RSS}{TSS}$",
     "c) $\\frac{TSS}{RSS}$",
     "d) $\\frac{ESS}{TSS}$"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Estimațiile sunt:",
    "optiuni": [
     "a) valori posibile ale estimatorilor",
     "b) valori estimate la nivelul populației",
     "c) mărimi fixe calculate la nivel de eșantion"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Se consideră un model econometric de forma: $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\epsilon$. Este corectă afirmaţia:",
    "optiuni": [
     "a) parametrii modelului sunt $\\beta_{0},\\beta_{1}$și $\\beta_{2}$",
     "b) este liniară cel mult una dintre legăturile liniare simple dintre variabila dependentă și variabilele independente",
     "c) parametrul de regresie $\\beta_{0}$arată nivelul mediu al variabilei dependente, atunci când variabilele independente se mențin constante",
     "d) variabilele independente ale modelului sunt $\\beta_{0},\\beta_{1}$și $\\beta_{2}$"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Dacă pentru testarea unui model de regresie liniar multiplu de forma $Y = \\beta_{0} + \\beta_{1}X_{1} + \\beta_{2}X_{2} + \\beta_{3}X_{3} + \\epsilon$, statistica test Fisher are un nivel de semnificație (p-value / Sig.) superior riscului asumat ($\\alpha$), atunci:",
    "optiuni": [
     "a) toți parametrii modelului sunt semnificativi diferiți de 0",
     "b) există legătură semnificativă între $Y$şi variabilele independente incluse în model",
     "c) cel puțin un factor explică semnificativ variația variabilei dependente",
     "d) nici un parametru nu este semnificativ statistic"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Într-un model econometric, componenta deterministă este:",
    "optiuni": [
     "a) $M\\left( Y|X \\right)$",
     "b) combinația liniară dintre variabilele independente și $\\epsilon$",
     "c) variabila reziduală",
     "d) regresia sau media condiționată"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Econometrie",
    "intrebare": "Modelele econometrice pot fi:",
    "optiuni": [
     "a) liniare",
     "b) deterministe",
     "c) neliniare"
    ],
    "raspuns_corect": ["a", "c"]
  },

  // --- MARKETING ---
  {
    "materie": "Marketing",
    "intrebare": "Setul evocat include:",
    "optiuni": [
      "a) Mărcile necunoscute",
      "b) Produsele din alte categorii",
      "c) Mărcile respinse din start",
      "d) Mărcile luate în considerare pentru cumpărare"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Marketing",
    "intrebare": "În piramida lui Maslow, nevoia de stimă se află:",
    "optiuni": [
      "a) După nevoile de apartenență și înaintea autorealizării",
      "b) La baza piramidei",
      "c) În afara ierarhiei",
      "d) Imediat deasupra nevoilor fiziologice"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Mixul de marketing este format, în mod clasic, din deciziile legate de:",
    "optiuni": [
      "a) Relații publice, management financiar, distribuție, recrutare",
      "b) Produs, preț, promovare, distribuție",
      "c) Cercetare, vânzare, administrare, planificare",
      "d) Producție, logistică, contabilitate, resurse umane"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Gradul scăzut de implicare a consumatorului se asociază cu:",
    "optiuni": [
      "a) Căutare extensivă de informații",
      "b) Evaluare complexă a alternativelor",
      "c) Rezolvarea de rutină a problemei",
      "d) Achiziții planificate strategic"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Ce este piața în accepțiunea administrării afacerilor?",
    "optiuni": [
      "a) sfera circulației mărfurilor; cererea și oferta de mărfuri",
      "b) totalitatea relațiilor care se stabilesc între vânzători și cumpărătorii unei categorii de produse",
      "c) locul în care se întâlnește cererea cu oferta",
      "d) un loc întins și deschis dintr-o localitate, unde se întâlnesc mai multe străzi",
      "e) un loc special amenajat unde se face comerț cu mărfuri",
      "f) un grup de cumpărători sau consumatori"
    ],
    "raspuns_corect": ["f"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Segmentarea pe stiluri de viață se bazează pe:",
    "optiuni": [
      "a) ideea că valorile culturale și modul de viață influențează semnificativ structura consumului și comportamentul de cumpărare",
      "b) predicția comportamentului de consum și cumpărare, în raport cu obiceiurile, atitudinile și opiniile diverselor grupuri",
      "c) diferențele între preferințele consumatorilor ca bază explicativă a diversității comportamentelor",
      "d) ipoteza că diferențele în profilul socio-demografic se află la originea diferențelor în stil de viață"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Alege afirmația corectă dintre cele de mai jos:",
    "optiuni": [
      "a) Piața critică este mai mare decât piața potențială.",
      "b) Piața critică este mai mică decât piața potențială.",
      "c) Piața critică este egală sau mai mare decât piața potențială.",
      "d) Piața critică este egală cu piața potențială."
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Nevoile umane sunt:",
    "optiuni": [
      "a) Dependente exclusiv de cultură",
      "b) Fixe și identice pentru toți oamenii",
      "c) Nelimitate ca număr, dar limitate ca intensitate",
      "d) Limitate ca număr și nelimitate ca intensitate"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Marketing",
    "intrebare": "Comportamentul de cumpărare se referă la:",
    "optiuni": [
      "a) Atitudinea consumatorului față de marcă",
      "b) Evaluarea satisfacției post-cumpărare",
      "c) Acțiunile și deciziile din momentul achiziției (evoluțiile prin care trece consumatorul când se decide să cumpere)",
      "d) Modul în care produsul este folosit ulterior"
    ],
    "raspuns_corect": ["c"]
  },

  // --- FINANȚE (Toate cele ~80+ grile complete din documente) ---
  {
    "materie": "Finanțe",
    "intrebare": "Procesele și relaţiile economice în formă bănească ce au loc în sfera circulației produsului național:",
    "optiuni": [
      "a) presupun o modificare a mărimii valorice a patrimoniului administrat de participanții la aceste procese și relaţii, nu doar o schimbare a formei valorii",
      "b) nu sunt considerate financiare în nici una din accepțiunile date conceptului de finanțe și sferei sale de manifestare",
      "c) sunt considerate financiare numai în accepțiunea extinsă dată conceptului de finanțe și sferei sale de manifestare",
      "d) nu sunt considerate financiare în accepțiunea restrânsă dată conceptului de finanțe și sferei sale de manifestare"
    ],
    "raspuns_corect": ["c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Exprimarea în formă bănească a proceselor și relațiilor economico-sociale:",
    "optiuni": [
      "a) caracterizează finanțele doar în accepțiunea restrânsă",
      "b) caracterizează finanțele doar în accepțiunea extinsă",
      "c) se manifestă doar în sfera repartiției produsului intern brut",
      "d) presupune manifestarea funcției banilor de măsură a valorii"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Printre cerințele îndeplinirii rolului ce revine pârghiilor financiare, pot fi menționate:",
    "optiuni": [
      "a) pârghiile financiare să se angreneze organic în mecanismul de funcţionare a economiei",
      "b) pârghiile financiare să se îmbine organic cu normele și normativele economico-financiare",
      "c) instrumentele financiare să contribuie la soluționarea unor probleme de ordin economic și social în condiții avantajoase",
      "d) instrumentele financiare să influenţeze pozitiv anumite laturi ale activității economice în diverse faze ale reproducției sociale"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele afirmaţii sunt adevărate:",
    "optiuni": [
      "a) caracterul obiectiv al funcției de control rezidă în exercitarea controlului prin intermediul unor persoane, ce îndeplinesc atribuţiuni de control financiar",
      "b) controlul financiar intern preventiv este mai eficient decât controlul financiar intern postoperativ",
      "c) controlul financiar extern postoperativ este ineficient",
      "d) funcţia de control are o sferă mai restrânsă de manifestare decât funcția de repartiție"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele corelații reflectă cerințele de echilibru financiar la nivelul unei întreprinderi publice (de stat):",
    "optiuni": [
      "a) venituri excepționale = costuri + profit",
      "b) venituri + subvenții = costuri + profit",
      "c) venituri - profit = costuri",
      "d) venituri = costuri"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele corelații reflectă cerințele de echilibru financiar la nivelul unei întreprinderi din sectorul industrial (privat):",
    "optiuni": [
      "a) alocații bugetare + venituri proprii = cheltuieli",
      "b) venituri bugetare = cheltuieli bugetare + rezerve bugetare",
      "c) alocații bugetare + credite = cheltuieli + dobânzi",
      "d) venituri = costuri + profit"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Redistribuirea de resurse financiare între persoanele fizice şi juridice este expresia manifestării finanțelor în funcția de:",
    "optiuni": [
      "a) alocare (a resurselor)",
      "b) distribuire (a resurselor)",
      "c) control asupra activităților economico-sociale",
      "d) repartiție a PIB"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Diferențierile între relațiile financiare publice specifice bugetului de stat și cele specifice bugetelor locale constau în:",
    "optiuni": [
      "a) forma de proprietate în care se administrează patrimoniile respective",
      "b) numărul componentelor principale pe care le înglobează fiecare",
      "c) existența contraprestației directe",
      "d) tipul de interese (obiective) ce se satisfac prin relațiile financiare respective"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele categorii de procese și relații economice sunt considerate financiare, atât în accepțiunea extinsă, cât și în cea restrânsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
      "a) procesele și relaţiile economice realizate în formă bănească ce presupun un transfer de valoare și de putere de cumpărare între participanţi",
      "b) toate procesele și relațiile economice la care participă entităţile publice",
      "c) procesele și relaţiile economice prin care se constituie, distribuie și se utilizează fondurile bănești pentru funcționarea diferitelor entități",
      "d) toate procesele și relațiile economice ce presupun un transfer de valoare între participanți"
    ],
    "raspuns_corect": ["c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Fondurile proprii ale întreprinderilor cu capital de stat destinate activității de producţie sunt:",
    "optiuni": [
      "a) fonduri financiare de consum",
      "b) fonduri financiare de nivel micro-economic",
      "c) fonduri financiare de nivel mediu-economic",
      "d) fonduri financiare de înlocuire sau dezvoltare"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele componente ale sferei finanțelor este specifică subsistemului financiar privat:",
    "optiuni": [
      "a) finanțele gospodăriilor (menajelor)",
      "b) asigurările de bunuri, persoane și răspundere civilă",
      "c) asigurările sociale",
      "d) creditul"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Contractarea și primirea unui credit de la o bancă pentru achiziționarea de către o întreprindere a unui utilaj din import concretizează:",
    "optiuni": [
      "a) un flux financiar de contrapartidă",
      "b) un flux financiar autonom",
      "c) un flux financiar decalaj",
      "d) un flux financiar multiplu"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Îndeplinirea funcției banilor de măsură a valorii presupune:",
    "optiuni": [
      "a) mijlocirea de către aceştia a acumulării și păstrării valorii lor la dispoziția deţinătorilor sub formă de sume de bani",
      "b) realizarea unor procese și relații de alocare-utilizare a unor sume de bani, de vehiculare a valorii în formă bănească prin operaţiuni de încasări și plăți",
      "c) folosirea acestora în realizarea transferului de valoare între participanți la diferitele tranzacții",
      "d) utilizarea lor pentru evaluarea şi dimensionarea valorică a diferitelor bunuri şi servicii"
    ],
    "raspuns_corect": ["d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele instrumente de conducere și reglare a activității financiare conține indicatori cu niveluri obligatorii de respectat:",
    "optiuni": [
      "a) bugetul de stat (al administrației centrale)",
      "b) bugetul economiei naţionale",
      "c) bugetul funcţional",
      "d) planul de conturi"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Creditul, în ipostaza de componentă a finanțelor:",
    "optiuni": [
      "a) presupune participarea unor intermediari financiari",
      "b) apare ca relație financiară doar în sfera finanţelor private",
      "c) se desfășoară pe principiul cedării definitive a sumelor de bani, dacă activitatea este neprofitabilă",
      "d) are caracter de rambursabilitate în cazul manifestării unui eveniment viitor incert, dar posibil"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Funcția finanțelor de repartiție a produsului intern brut:",
    "optiuni": [
      "a) se definește ca fiind capacitatea finanțelor de a mijloci repartiția în formă bănească a produsului intern brut",
      "b) generează fluxuri de constituire și distribuire a fondurilor bănești la diferite nivele de derulare a activităților economico-sociale",
      "c) are un caracter obiectiv imprimat de modalitățile concrete de constituire și distribuire a fondurilor băneşti",
      "d) are o sferă de manifestare mai extinsă decât funcția de control"
    ],
    "raspuns_corect": ["a", "b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Intervenţia reglatoare a autorităților publice prin instrumente financiare în perioadele de supraîncălzire a economiei se poate face prin:",
    "optiuni": [
      "a) diminuarea cheltuielilor publice, concomitent cu majorarea impozitelor sau introducerea de noi impozite",
      "b) majorarea cheltuielilor publice şi diminuarea impozitelor și taxelor",
      "c) întocmirea și executarea de bugete excedentare",
      "d) diminuarea cheltuielilor publice, concomitent cu diminuarea impozitelor sau renunțarea la unele impozite pentru a menține bugetul de stat în echilibru"
    ],
    "raspuns_corect": ["a", "c"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Fondurile asigurărilor sociale de stat se încadrează în categoria:",
    "optiuni": [
      "a) fondurilor (financiare) centralizate",
      "b) fondurilor (financiare) descentralizate",
      "c) fondurilor (financiare) publice de rezervă",
      "d) fondurilor (financiare) de înlocuire și dezvoltare"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele categorii de procese și relații economice nu sunt considerate financiare în accepțiunea extinsă dată conceptului de finanțe și sferei sale de cuprindere:",
    "optiuni": [
      "a) procesele și relaţiile economice în formă bănească din sfera repartiției produsului creat",
      "b) procesele și relațiile economice în formă natural-materială fără transfer de valoare",
      "c) procesele și relațiile economice în formă bănească din sferele circulației și consumului produsului intern brut",
      "d) procesele și relaţiile economice în formă natural-materială cu transfer de valoare"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Intervenţia reglatoare prin instrumente financiare a autorităților publice pentru contracararea ciclicității în economie se poate realiza prin:",
    "optiuni": [
      "a) majorarea cheltuielilor publice în faza de recesiune și reducerea lor în faza de expansiune",
      "b) majorarea impozitelor în faza de recesiune şi diminuarea acestora în faza de expansiune",
      "c) întocmirea şi executarea de bugete echilibrate în fiecare an din durata ciclului economic",
      "d) întocmirea și executarea de bugete excedentare în faza de recesiune a economiei"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Bugetul funcțional (folosit în sfera finanțelor publice):",
    "optiuni": [
      "a) reflectă resursele şi cheltuielile publice pe termen mediu",
      "b) se mai numește și buget de mijloace",
      "c) se întocmeşte pentru o perioadă de 1 an bugetar",
      "d) are caracter imperativ"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele instrumente de conducere și reglare a activităților financiare conține indicatori ce vizează o perioadă mai îndelungată (termen mediu şi lung):",
    "optiuni": [
      "a) bugetul economiei naţionale",
      "b) bugetul program",
      "c) bugetul funcţional",
      "d) bugetul de mijloace"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Expresia \"economie de îndatorare\":",
    "optiuni": [
      "a) semnifică faptul că în economia unei țări satisfacerea nevoilor de finanțare se procură îndeosebi prin participarea intermediarilor financiari, bancari şi nebancari",
      "b) semnifică faptul că economia unei țări este îndatorată peste posibilitățile sale financiare",
      "c) semnifică faptul că în economia unei țări, sursele de finanțare se procură, preponderent, de pe piața de capital",
      "d) semnifică faptul că în economia unei țări resursele de finanțare se procură în cea mai mare măsură prin emiterea şi tranzacționarea titlurilor de valoare (acţiuni, obligațiuni)"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Controlul concomitent, ca una din formele sub care se manifestă controlul financiar, se particularizează prin faptul că:",
    "optiuni": [
      "a) permite corectarea operativă a operațiunilor ce se abat de la cerințele de legalitate, eficiență și oportunitate",
      "b) este cea mai eficientă formă de control financiar",
      "c) permite evitarea inițierii unor operațiuni ineficiente și evitarea pierderilor aferente lor",
      "d) urmăreşte stabilirea rezultatelor efective comparativ cu cele preconizate, abaterile înregistrate, cauzele lor, măsurile ce se vor aplica pentru îmbunătățirea activității viitoare"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "În balanța financiară a statului, la venituri curente se includ:",
    "optiuni": [
      "a) impozitele directe și indirecte",
      "b) amortizmentele",
      "c) dobânzile plătite aferente datoriei publice",
      "d) transferuri de capital primite"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Latura subiectivă a îndeplinirii de către finanțe a funcției de control asupra activităților economice și sociale decurge din:",
    "optiuni": [
      "a) manifestarea finanţelor ca procese și relații economice în formă bănească",
      "b) exercitarea atribuţiilor de control de către persoane cu atribuții specifice în domeniu",
      "c) îndeplinirea de către finanţe a funcției de repartiție a PIB",
      "d) îndeplinirea de către bani a functiilor specifice"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Care din următoarele formulări corespund accepțiunii restrânse dată conceptului de finanţe:",
    "optiuni": [
      "a) finanțele înglobează ansamblul proceselor și relațiilor economice în formă bănească cu transfer de valoare pentru satisfacerea nevoilor cu caracter public",
      "b) finanţele înglobează ansamblul proceselor și relaţiilor prin care se constituie și distribuie fonduri băneşti pentru satisfacerea diferitelor necesități",
      "c) finanțele înglobează ansamblul proceselor și relaţiilor de repartiție atât în formă bănească, cât și în formă natural-materială a produsului creat",
      "d) finanțele înglobează ansamblul proceselor și relaţiilor economice în formă bănească"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Transferul de valoare specific finanțelor publice:",
    "optiuni": [
      "a) include printre participanți și persoane fizice sau juridice private",
      "b) are loc, de regulă, cu titlu definitiv",
      "c) vizează satisfacerea unor nevoi cu caracter colectiv",
      "d) se realizează, în principiu, fără o contraprestație directă și imediată din partea beneficiarului sumei de bani transferate"
    ],
    "raspuns_corect": ["b", "c", "d"]
  },
  // --- Grilele suplimentare din capitolele următoare (Finanțe) ---
  {
    "materie": "Finanțe",
    "intrebare": "Între premisele directe care au stat la baza apariției finanţelor pot fi menționate:",
    "optiuni": [
      "A. Îndeplinirea de către bani a funcției de mijloc de prezervare / stocare a valorii",
      "B. Îndeplinirea de către bani a funcției de măsură a valorii",
      "C. Îndeplinirea de către bani a funcției de mijloc de schimb",
      "D. Apariţia instituțiilor de tip statal (a statului)"
    ],
    "raspuns_corect": ["b", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Primele forme concrete de procurare a resurselor financiare la dispoziția statului pot fi menționate:",
    "optiuni": [
      "A. Dările în natură și prestaţiile în muncă pentru funcţionarea armatei",
      "B. Impozitele în bani",
      "C. Cheltuielile cu plata soldelor militarilor",
      "D. Tributurile în bani încasate de la popoarele învinse"
    ],
    "raspuns_corect": ["a", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Perioada liberală s-a caracterizat prin aceea că:",
    "optiuni": [
      "A. Statul nu lăsa să acționeze libera concurență și mecanismele pieței",
      "B. Intervenţia statului asupra activității economice nu limita libertatea de acțiune a forțelor pieței",
      "C. În această perioadă, finanțele sunt considerate un veritabil mijloc de intervenţie în economie",
      "D. Statul trebuia să stea departe de activitatea economică"
    ],
    "raspuns_corect": ["b", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "În perioada intervenţionistă:",
    "optiuni": [
      "A. Finanţele sunt considerate un veritabil mijloc de intervenție în economie",
      "B. Viața economică era dominată de ideea de superioritate a inițiativei private",
      "C. Finanțele publice au fost utilizate pentru asigurarea echilibrului economic și social al ţării",
      "D. Predomină ideea neutralității finanţelor publice"
    ],
    "raspuns_corect": ["a", "c"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Existenta finanțelor, a relațiilor financiare este legată de:",
    "optiuni": [
      "A. Apariția bunurilor și a unor structuri statale",
      "B. Apariția statului și a unei mărfuri cu rol de echivalent universal",
      "C. Existența relaţiilor marfă-bani-marfă fără legătură cu statul",
      "D. Existența statului, a folosirii banilor și a formelor valorice în repartizarea produsului intern brut"
    ],
    "raspuns_corect": ["b", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Ca trăsături ale bunurilor (utilităților) publice se disting:",
    "optiuni": [
      "A. Caracterul neconcurențial (și indivizibil) al accesului la consumul acestora",
      "B. Caracterul colectiv al consumului acestora",
      "C. Accesul exclusiv pe bază de preț al pieței",
      "D. Caracterul divizibil şi privat"
    ],
    "raspuns_corect": ["a", "b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Constituirea fondurilor publice se realizează prin intermediul funcției de repartiție a finanțelor în:",
    "optiuni": [
      "A. Procesul distribuirii PIB între persoane juridice și stat",
      "B. Procesul distribuirii şi redistribuirii PIB între persoane juridice și fizice, pe de o parte, și stat, pe de altă parte",
      "C. Procesul redistribuirii PIB între întreprinzători privați și persoane juridice",
      "D. Procesul distribuirii PIB exclusiv în sfera producţiei materiale"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Mijlocirea de către finanțele publice a satisfacerii unor nevoi sociale prin oferta de utilități publice exprimă conţinutul funcției de:",
    "optiuni": [
      "A. Distribuire",
      "B. Reglare",
      "C. Alocare",
      "D. Stabilizare"
    ],
    "raspuns_corect": ["c"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Mijlocirea de către finanțele publice a unor procese de redistribuire a resurselor între persoanele fizice şi juridice pentru înfăptuirea unor criterii de echitate socială exprimă conținutul funcției de:",
    "optiuni": [
      "A. Distribuire",
      "B. Alocare",
      "C. Stabilizare",
      "D. Control"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Intervenția reglatoare prin instrumente financiare a autorităților publice în faza de recesiune a economiei se poate realiza prin:",
    "optiuni": [
      "A. Diminuarea impozitelor (directe şi/sau indirecte)",
      "B. Majorarea cheltuielilor publice de consum și/sau investiții",
      "C. Acceptarea deficitului bugetar și finanțarea acestuia din resurse extraordinare",
      "D. Majorarea impozitelor pe consum"
    ],
    "raspuns_corect": ["a", "b", "c"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Încasarea integrală a contravalorii bunurilor livrate sau serviciilor prestate la un moment ulterior livrării/prestării concretizează un flux financiar:",
    "optiuni": [
      "A. Multiplu",
      "B. Decalat",
      "C. Autonom",
      "D. De contrapartidă"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Fondurile bănești ce se constituie și se administrează la dispoziția anumitor entități și care sunt destinate finanțării unor nevoi imprevizibile se încadrează în categoria:",
    "optiuni": [
      "A. Fondurilor (financiare) de înlocuire și dezvoltare",
      "B. Fondurilor (financiare) de rezervă",
      "C. Fondurilor (financiare) de consum",
      "D. Fondurilor (financiare) de asigurare"
    ],
    "raspuns_corect": ["b"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "În care din următoarele situații se reflectă ipostaza de pârghie financiară a cheltuielilor publice:",
    "optiuni": [
      "A. Diminuarea cheltuielilor publice în faza de boom a economiei, pentru a atenua ritmul prea ridicat de creștere economică",
      "B. Acordarea de ajutoare băneşti tuturor membrilor societății",
      "C. Subvenţionarea produselor sau activităților de o deosebită importanță pentru consumul populației sau pentru economia națională",
      "D. Majorarea cheltuielilor publice în faza de recesiune a economiei, pentru a stimula relansarea economiei"
    ],
    "raspuns_corect": ["a", "c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "În care din următoarele situații se reflectă ipostaza de pârghie financiară a impozitelor:",
    "optiuni": [
      "A. Reducerea impozitului pentru partea din profit destinată reinvestirii",
      "B. Restituirea taxelor vamale de import aferente materiilor prime incorporate în producția destinată exportului",
      "C. Reducerea cotelor de impozitare sau renunțarea la practicarea unor impozite în fazele de recesiune ale economiei",
      "D. Instituirea de accize (taxe speciale de consumaţie) pentru produsele din alcool"
    ],
    "raspuns_corect": ["a", "b", "c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "În care din următoarele instrumente financiare de conducere și reglare sunt reflectate resursele financiare totale, publice și private ale ţării:",
    "optiuni": [
      "A. Balanța financiară a economiei naţionale",
      "B. Bugetul economic (al economiei naţionale)",
      "C. Bugetul program",
      "D. Balanța de plăți externe"
    ],
    "raspuns_corect": ["a"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Bugetele (publice) funcționale:",
    "optiuni": [
      "A. Se întocmesc, de regulă, pentru o perioadă de un an (bugetar)",
      "B. Cuprind toate cheltuielile legate de realizarea unor obiective pe termen mediu şi lung",
      "C. Sunt similare cu bugetele instituțiilor publice",
      "D. Se mai numesc și bugete de obiective"
    ],
    "raspuns_corect": ["b", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Spre deosebire de finanțarea economiei pe pietele de capital, finantarea prin indatorare:",
    "optiuni": [
      "a) presupune finantarea directa a agentilor economici deficitari de catre agentii excedentari",
      "b) atribuie un rol sporit autoritatilor publice",
      "c) creste riscurile aparitiei inflatiei",
      "d) are la baza creditul bancar"
    ],
    "raspuns_corect": ["c", "d"]
  },
  {
    "materie": "Finanțe",
    "intrebare": "Finanţarea pe piața de capital:",
    "optiuni": [
      "a) presupune emisiunea de titluri financiare, în special acţiuni și obligațiuni",
      "b) se realizează prin intermediul unei burse de valori, ca expresie a pieței primare",
      "c) crește riscurile apariţiei inflaţiei",
      "d) investitorii, prin procurarea de acţiuni de la societățile ce se finanțează pe piața de capital, sunt îndreptățiți la o parte din profitul net al companiei"
    ],
    "raspuns_corect": ["a", "d"]
  }
];

/* ============================================================
   LOGICA APLICAȚIEI (Selecție multiplă + Confirmare)
   ============================================================ */

const $ = (id) => document.getElementById(id);

const el = {
  menu: $('screen-menu'),
  quiz: $('screen-quiz'),
  subject: $('quiz-subject'),
  current: $('quiz-current'),
  total: $('quiz-total'),
  round: $('quiz-round'),
  progress: $('quiz-progress'),
  progressBar: $('quiz-progress').parentElement,
  question: $('quiz-question'),
  options: $('quiz-options'),
  next: $('btn-next'),
  back: $('btn-back'),
};

const state = {
  subject: null,
  pool: [],
  queue: [],
  index: 0,
  round: 1,
  answered: false,
  selected: [],
};

const OPTION_BASE = 'option-btn flex w-full items-start gap-4 rounded-2xl border-2 px-4 py-4 text-left transition-colors';
const OPTION_IDLE = 'border-line bg-white';
const OPTION_OK = 'border-green-600 bg-green-100';
const OPTION_BAD = 'border-red-600 bg-red-100';
const BADGE_BASE = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-lg font-bold';
const BADGE_IDLE = 'bg-paper';
const BADGE_OK = 'bg-green-600 text-white';
const BADGE_BAD = 'bg-red-600 text-white';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function parseOption(raw, i) {
  const m = raw.match(/^\s*([a-hA-H])\)\s*([\s\S]*)$/);
  return m
    ? { letter: m[1].toLowerCase(), text: m[2] }
    : { letter: String.fromCharCode(97 + i), text: raw };
}

function renderMath() {
  if (typeof window.renderMathInElement === 'function') {
    const cfg = { delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false };
    window.renderMathInElement(el.question, cfg);
    window.renderMathInElement(el.options, cfg);
  }
}

function showScreen(name) {
  const isQuiz = name === 'quiz';
  el.menu.classList.toggle('hidden', isQuiz);
  el.quiz.classList.toggle('hidden', !isQuiz);
  el.quiz.classList.toggle('flex', isQuiz);
  window.scrollTo(0, 0);
}

function startQuiz(subject) {
  const pool = INTREBARI.filter((q) => q.materie === subject);
  if (pool.length === 0) {
    alert('Nu există întrebări pentru materia „' + subject + '".');
    return;
  }
  state.subject = subject;
  state.pool = pool;
  state.queue = pool.slice();
  state.index = 0;
  state.round = 1;
  el.subject.textContent = subject;
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = state.queue[state.index];
  const total = state.queue.length;
  state.answered = false;
  state.selected = [];

  el.current.textContent = state.index + 1;
  el.total.textContent = total;
  el.round.textContent = state.round;
  setProgress(state.index, total);

  el.question.textContent = q.intrebare;
  el.options.innerHTML = '';

  const correct = q.raspuns_corect.map((l) => l.toLowerCase());
  const isMultiple = correct.length > 1;

  q.optiuni.forEach((raw, i) => {
    const opt = parseOption(raw, i);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.letter = opt.letter;
    btn.className = OPTION_BASE + ' ' + OPTION_IDLE;

    const badge = document.createElement('span');
    badge.className = BADGE_BASE + ' ' + BADGE_IDLE;
    badge.textContent = opt.letter.toUpperCase();

    const label = document.createElement('span');
    label.className = 'pt-1 text-base';
    label.textContent = opt.text;

    btn.append(badge, label);
    
    btn.addEventListener('click', () => {
      if (state.answered) return;
      
      if (isMultiple) {
        const idx = state.selected.indexOf(opt.letter);
        if (idx > -1) {
          state.selected.splice(idx, 1);
          btn.classList.remove('border-blue-600', 'bg-blue-50');
          btn.classList.add('border-line', 'bg-white');
        } else {
          state.selected.push(opt.letter);
          btn.classList.remove('border-line', 'bg-white');
          btn.classList.add('border-blue-600', 'bg-blue-50');
        }
        el.next.disabled = state.selected.length === 0;
      } else {
        state.selected = [opt.letter];
        onConfirmAnswer(correct);
      }
    });

    el.options.appendChild(btn);
  });

  if (isMultiple) {
    el.next.disabled = true;
    el.next.textContent = 'Confirmă răspunsul';
  } else {
    el.next.disabled = true;
    el.next.textContent = 'Următoarea întrebare';
  }

  renderMath();
  window.scrollTo(0, 0);
}

function onConfirmAnswer(correct) {
  if (state.answered) return;
  state.answered = true;

  const buttons = Array.from(el.options.querySelectorAll('.option-btn'));

  buttons.forEach((b) => {
    b.disabled = true;
    b.classList.add('cursor-default');
    const letter = b.dataset.letter;
    const isPicked = state.selected.includes(letter);
    const isCorrect = correct.includes(letter);

    if (isCorrect) {
      markOption(b, true);
    } else if (isPicked && !isCorrect) {
      markOption(b, false);
    }
  });

  setProgress(state.index + 1, state.queue.length);
  el.next.disabled = false;
  el.next.textContent = isLastQuestion() ? 'Rundă nouă (amestecat)' : 'Următoarea întrebare';
  el.next.focus({ preventScroll: true });
}

function isLastQuestion() {
  return state.index === state.queue.length - 1;
}

function setProgress(done, total) {
  const pct = Math.round((done / total) * 100);
  el.progress.style.width = pct + '%';
  el.progressBar.setAttribute('aria-valuenow', String(pct));
}

function markOption(btn, ok) {
  btn.classList.remove('border-line', 'bg-white', 'border-blue-600', 'bg-blue-50');
  btn.classList.add(...(ok ? OPTION_OK : OPTION_BAD).split(' '));
  const badge = btn.firstElementChild;
  badge.classList.remove('bg-paper');
  badge.classList.add(...(ok ? BADGE_OK : BADGE_BAD).split(' '));
  badge.textContent = ok ? '✓' : '✕';
}

function nextQuestion() {
  const q = state.queue[state.index];
  const correct = q.raspuns_corect.map((l) => l.toLowerCase());
  const isMultiple = correct.length > 1;

  if (isMultiple && !state.answered) {
    onConfirmAnswer(correct);
    return;
  }

  if (!state.answered) return;

  if (!isLastQuestion()) {
    state.index++;
  } else {
    const lastShown = state.queue[state.queue.length - 1];
    let reshuffled = shuffle(state.pool);
    if (reshuffled.length > 1 && reshuffled[0] === lastShown) {
      const swap = 1 + Math.floor(Math.random() * (reshuffled.length - 1));
      [reshuffled[0], reshuffled[swap]] = [reshuffled[swap], reshuffled[0]];
    }
    state.queue = reshuffled;
    state.index = 0;
    state.round++;
  }
  renderQuestion();
}

function fillCounts() {
  document.querySelectorAll('.subject-btn').forEach((btn) => {
    const n = INTREBARI.filter((q) => q.materie === btn.dataset.subject).length;
    const target = btn.querySelector('.count');
    if (target) target.textContent = n + (n === 1 ? ' întrebare' : ' întrebări');
  });
}

document.querySelectorAll('.subject-btn').forEach((btn) => {
  btn.addEventListener('click', () => startQuiz(btn.dataset.subject));
});
el.next.addEventListener('click', nextQuestion);
el.back.addEventListener('click', () => showScreen('menu'));

document.addEventListener('keydown', (e) => {
  if (el.quiz.classList.contains('hidden')) return;
  const key = e.key.toLowerCase();
  if ((key === 'enter' || key === 'arrowright') && state.answered) {
    e.preventDefault();
    nextQuestion();
  } else if (/^[a-f]$/.test(key) && !state.answered) {
    const btn = el.options.querySelector('[data-letter="' + key + '"]');
    if (btn) btn.click();
  }
});

fillCounts();