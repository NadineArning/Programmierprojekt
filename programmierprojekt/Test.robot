language:de
*** Einstellungen ***
Library    Browser

*** Variablen ***
${BROWSER}    chromium
${HEADLESS}     False
${url}    https://google.com

*** Testf�lle ***
�ffne Browser
    [Dokumentation]    Erster Testfall
    �ffne OR-Webseite
    

*** Schl�sselw�rter ***
�ffne OR-Webseite
    [Dokumentation]     �ffnet die OR-Webseite 
    New Browser    ${BROWSER}    ${HEADLESS}
    New Page    ${url}
    Sleep    3s
    Close Browser
    
