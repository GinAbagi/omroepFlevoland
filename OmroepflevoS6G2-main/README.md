# OmroepflevoS6G2
Welkom bij de ReadMe van Groep 2 Semmester 6. We lichten hieronder de functies van de code toe. Het project is gebaseerd op het Vue-framework.

## index.js
Dit is het document voor de Vue-router. Deze handelt navigatie in de website af en zorgt ervoor dat hier geen reloads nodig zijn.

## Views
Vue werkt met Views waar de router naartoe linkt. 

## SubContentViews
We maken gebruik van sub-navigatie: een navigatiebalk binnen een View. De Views hiervoor tref je in deze map.

## StoryView
Dit is de View waar alles betreffende story's zich huisvest. Hier tref je een navigatiebalk en een routerview waar de verschillende pagina's binnen deze view worden weergegeven.

## NewStoryView
Dit is de View waar je een nieuwe story aan kunt maken. Hier tref je in de HTML de invoervelden, die we afvangen met de consoleLog-methode. Deze data wordt verzonden naar de Firebase-database, waarna de velden geleegd worden. De gebruiker krijgt na het verzenden een melding in beeld. Ook wordt gecontroleerd of de titel lang genoeg is. 

## StoriesView
Dit is de View waar de gebruiker de aangemaakte story's treft. Dit gebeurt real time. In de Created-hook van Vue wordt de data uit de database op het moment dat de website aangemaakt is, opgehaald en in een lokale array weggeschreven. De functies die de Created()-functie aanroept, zijn Firebase-functies, verversen wanneer de database wordt aangepast. In deze zelfde functie wordt de timestamp geïntialiseerd. Ook checkt deze functie of er items verwijderd zijn en haalt de verwijderde items uit de lokale array.

De zoekbalk werkt door de uitVoerZoekOpdracht-functie, die aan de Computed-hook vastzit. Deze luistert naar wijzigingen van de DOM, en wordt dan uitgevoerd.

De data uit de locale array wordt gekoppeld aan het SingleStory-component. In dat component zit een methode om een story te verwijderen. Dit wordt gedaan door de ID mee te geven aan de doc.delete-functie van Firebase. Het editen wordt afgehandeld in een v-dialog-component van Vuetify. Deze heeft een aantal invoervelden waarin de data uit de lokale array wordt geladen. Op het moment dat men op 'opslaan' klikt, pakt een functie de data uit de velden en geeft deze op basis van het ID mee aan de update-functie van Firebase.

