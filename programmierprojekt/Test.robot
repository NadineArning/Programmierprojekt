language:de
*** Einstellungen ***
Library    Browser  headless=True

*** Variablen ***
${BROWSER}    chromium
# ${HEADLESS}     False
${url}    https://google.com

*** Testfälle ***
Öffne Browser
    [Dokumentation]    Erster Testfall
    Öffne OR-Webseite
    

*** Schlüsselwörter ***
Öffne OR-Webseite
    [Dokumentation]     Öffnet die OR-Webseite 
    New Browser    ${BROWSER}    ${HEADLESS}
    New Page    ${url}
    Sleep    3s
    Close Browser
    
