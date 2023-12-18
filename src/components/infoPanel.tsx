export default function InfoPanel() {
  return (
    <div className="flex flex-col gap-4 items-start justify-center text-justify">
      <h2 className="font-bold text-lg">Przeznaczenie</h2>
      <p className="text-justify">
        Aplikacja służy do ćwiczenia podstawowej arytmetyki.
      </p>
      <h2 className="font-bold text-lg">Zasady ogólne</h2>
      <p>
        Istnieje możliwość wyboru konkretnego działania, lub rozwiązywania
        mieszanych przykładów. Maksymalna liczba oznacza najwyższą liczbę, która
        pojawi się w zadaniach, zarówno jako wynik, jak i argument. W przypadku
        mnożenia i dzielenia odpowiednio czynniki i dzielnik nie przekraczają
        pierwiastka z tej liczby.
      </p>
      <p>Wyniki odejmowania i dzielenia są zawsze liczbą naturalną.</p>
      <h2 className="font-bold text-lg">Tryb treningu</h2>
      <p>
        Tryb treningu służy do rozwiązywania przykładów bez limitu czasu. Zmiana
        ustawień jest zawsze możliwa.
      </p>
      <p>
        Należy wpisać wynik wyświetlonego działania w pole tekstowe. Prawy
        przycisk sprawdza wynik. Jeśli wynik jest poprawny, obwódka podświetla
        się na zielono, a jeśli jest błędny, na czerwono. Każdy wynik można
        sprawdzić tylko raz. Lewy przycisk generuje nowe działanie, umożliwia
        także pominięcie aktualnego działania. Klawisz Enter sprawdza aktualną
        odpowiedź lub przechodzi do kolejnego przykładu.
      </p>
      <p>
        Pod przyciskami znajdują się liczniki poprawnych i błędnych odpowiedzi.
        Liczniki zapisują wyniki do czasu kolejnej wizyty na stronie.
      </p>
      <p>
        W zakładce "Ustawienia" zawsze istnieje możliwość wyboru działania.
        Możliwe jest także ustawienie maksymalnej liczby. Przycisk "Wyczyść
        wyniki" zeruje liczniki poprawnych i błędnych odpowiedzi.
      </p>
      <h2 className="font-bold text-lg">Tryb wyzwania</h2>
      <p>
        Tryb wyzwania polega na (poprawnym) rozwiązaniu jak największej liczby
        przykładów w ograniczonym czasie.
      </p>
      <p>
        Pierwszym etapem jest ustawienie zasad wyzwania. Należy wybrać
        działanie, maksymalną liczbę i limit czasu. Następnie można rozpocząć
        wyzwanie.
      </p>
      <p>
        Podczas wyzwania należy wpisać rozwiązanie zadania w polu tekstowym.
        Odpowiedź można zatwierdzić przyciskiem lub klawiszem Enter. Po
        zatwierdzeniu system automatycznie sprawdza odpowiedź i przechodzi do
        kolejnego przykładu. Nad aktualnym przykładem znajduje się licznik
        poprawnych i błędnych odpowiedzi oraz pozostały czas.
      </p>
      <p>
        Po upływie czasu pojawiają się wyniki wyzwania. Podana jest liczba
        poprawnych i błędnych odpowiedzi, a także dokładność w procentach oraz
        tempo (średni czas odpowiedzi). Przyciski umożliwiają powtórzenie tego
        samego wyzwania bądź utworzenie nowego.
      </p>
      <h2 className="font-bold text-lg">Tryb wyścigu</h2>
      <p>
        Tryb wyścigu polega na rozwiązaniu jak najszybszym poprawnym rozwiązaniu
        ustalonej liczby przykładów.
      </p>
      <p>
        Pierwszym etapem jest ustawienie zasad wyścigu. Należy wybrać działanie,
        maksymalną liczbę i cel wyścigu (liczbę przykładów). Następnie można
        rozpocząć wyścig.
      </p>
      <p>
        Podczas wyścigu należy wpisać rozwiązanie zadania w polu tekstowym.
        Odpowiedź można zatwierdzić przyciskiem lub klawiszem Enter. Po
        zatwierdzeniu system automatycznie sprawdza odpowiedź i przechodzi do
        kolejnego przykładu. Nad aktualnym przykładem znajduje się licznik
        poprawnych odpowiedzi oraz czas wyścigu.
      </p>
      <p>
        Po upływie czasu pojawiają się wyniki wyścigu. Podana jest liczba
        poprawnych odpowiedzi, a także dokładność w procentach. Przyciski
        umożliwiają powtórzenie tego samego wyścigu bądź utworzenie nowego.
      </p>
      <h2 className="font-bold text-lg">Informacje prawne</h2>
      <p>
        Copyright © 2023 Igor Trujnara. Udostępniono na zasadach{" "}
        <a href="https://opensource.org/license/mit/">licencji MIT</a>.
        Korzystanie z aplikacji jest całkowicie bezpłatne, jednak jeśli chcesz
        wesprzeć otwarte oprogramowanie lub podziękować, skorzystaj z przycisku
        poniżej.
      </p>
      <a href="https://www.buymeacoffee.com/itrujnara" className="mx-auto my-2">
        <img src="https://img.buymeacoffee.com/button-api/?text=Podaruj kawę&emoji=&slug=itrujnara&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" />
      </a>
    </div>
  )
}
