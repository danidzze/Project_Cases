# Project_Cases

### Nagłówek (Header)
- [x] Logo, kliknięcie przenosi na stronę główną
- [ ] Menu „Cases": strona z listą skrzynek
- [ ] Menu „Contest": strona z konkursami
- [ ] Menu „Bonus": codzienny bonus monet
- [ ] „Balance": wyświetlanie salda monet, aktualizowane po otwarciu skrzynki
- [ ] „Profile": profil, statystyki, wylogowanie

### Panel boczny (Sidebar)
- [ ] Lista przedmiotów / ostatnich losowań
- [ ] Kolor ramki przedmiotu zależny od rzadkości
- [ ] Przewijanie listy

### Taśma losowania (Ribbon)
- [ ] Pozioma taśma z kartami przedmiotów
- [ ] Pionowa linia-wskaźnik na środku
- [ ] Animacja przewijania z wyhamowaniem (4-6 sekund)
- [ ] Zatrzymanie na przedmiocie wybranym przez serwer
- [ ] Wyświetlenie wylosowanego przedmiotu po zatrzymaniu

### Przyciski otwierania
- [ ] Wybór liczby skrzynek: 1X, 2X, 3X, 5X
- [ ] Przycisk „OPEN"
- [ ] Sprawdzenie, czy użytkownik ma wystarczająco monet
- [ ] Blokada przycisków w trakcie animacji
- [ ] Pobranie ceny z salda użytkownika

### Stopka (Footer)
- [ ] Informacje o projekcie, link do GitHuba
- [ ] Regulamin i informacja, że monety są wirtualne

### Backend (API + baza danych)
- [ ] Rejestracja i logowanie
- [ ] Endpoint otwierania skrzynki (losowanie ważone szansami)
- [ ] Przechowywanie ekwipunku użytkownika
- [ ] Historia otwarć
- [ ] Tabele: users, items, cases, case_items, inventory, history

## Założenia
- Monety są wirtualne, prawdziwe pieniądze nie są używane.
- Wynik losowania określa serwer, a nie frontend.
- Przy 2X, 3X i 5X otwiera się kilka skrzynek naraz, a cena jest mnożona.
- Nowy użytkownik dostaje startowe saldo monet.
- Szanse wypadnięcia przedmiotów są przechowywane w bazie danych.
- Przedmioty są fikcyjne i nie pochodzą z prawdziwych gier.
- Użytkownik nie może otworzyć drugiej skrzynki w trakcie animacji.

## Plany na przyszłość
- [ ] Sprzedaż przedmiotów z ekwipunku
- [ ] Konkursy (Contest) z nagrodami
- [ ] Statystyki wypadnięć w profilu
