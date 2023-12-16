import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export default function InfoPanel() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="info" className="w-full">
        <AccordionTrigger>Informacje</AccordionTrigger>
        <AccordionContent className="text-left px-2">
          <h2 className="font-bold text-lg">Przeznaczenie</h2>
          <p className="text-justify">
            Aplikacja służy do ćwiczenia podstawowej arytmetyki.
          </p>
          <h2 className="font-bold text-lg">Sposób użycia</h2>
          <p className="text-justify">
            Należy wpisać wynik wyświetlonego działania w pole tekstowe. Prawy
            przycisk sprawdza wynik. Jeśli wynik jest poprawny, obwódka
            podświetla się na zielono, a jeśli jest błędny, na czerwono. Każdy
            wynik można sprawdzić tylko raz. Lewy przycisk generuje nowe
            działanie. Pod przyciskami znajdują się liczniki poprawnych i
            błędnych odpowiedzi. Przycisk Enter sprawdza aktualną odpowiedź lub
            przechodzi do kolejnego przykładu.
          </p>
          <h2 className="font-bold text-lg">Ustawienia</h2>
          <p className="text-justify">
            W ustawieniach istnieje możliwość wyboru działania. Możliwe jest
            także ustawienie maksymalnej liczby. W przypadku dodawania i
            mnożenia oznacza ona maksymalny wynik. W przypadku odejmowania i
            dzielenia oznacza maksymalny argument. Dodatkowo, w przypadku
            mnożenia czynniki nie przekraczają pierwiastka z podanej liczby.
            Przycisk "Wyczyść wyniki" zeruje liczniki poprawnych i błędnych
            odpowiedzi.
          </p>
          <h2 className="font-bold text-lg">Zasady</h2>
          <p className="text-justify">
            Wyniki odejmowania i dzielenia są zawsze liczbą naturalną.
          </p>
          <h2 className="font-bold text-lg">Informacje prawne</h2>
          <p className="text-justify">
            Copyright © 2023 Igor Trujnara. Udostępniono na zasadach{" "}
            <a href="https://opensource.org/license/mit/">licencji MIT</a>.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
