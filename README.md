# Film Collection

## Spis treści

- [Opis projektu](#Opis-projektu)
- [Struktura projektu](#Struktura-projektu)
- [Funkcje](#funkcje)
- [Technologie](#technologie)
- [Instalacja](#instalacja)
- [Uruchomienie aplikacji](#uruchomienie-aplikacji)

##Opis projektu
– Katalog kolekcji filmów
Projekt polega na utworzeniu aplikacji, która umożliwi użytkownikom przeglądanie i zarządzanie 
kolekcją swoich ulubionych filmów. Użytkownicy mogą dodawać nowe filmy, oznaczać je jako 
obejrzane oraz dodawać recenzje.

##Struktura projektu
- Model (models): definicja modelu filmu (np. tytuł, reżyser, ocena),
- Kontroler (controllers): obsługa żądań http, interakcja z modelem i przekazywanie danych do 
widoku,
- Widok: (views): widok listy filmów, formularz dodawania nowego filmu, formularz edycji informacji 
o filmie

## Funkcje

- **Przeglądanie listy filmów:** Wyświetla listę wszystkich filmów w kolekcji.
- **Dodawanie nowych filmów:** Pozwala na dodanie nowego filmu do kolekcji.
- **Edytowanie istniejących filmów:** Umożliwia edytowanie informacji o istniejących filmach.
- **Oznaczanie filmów jako obejrzane:** Możliwość oznaczenia filmu jako obejrzany.
- **Dodawanie recenzji do filmów:** Pozwala na dodanie recenzji do filmów.
- **Usuwanie filmów z kolekcji:** Umożliwia usunięcie filmów z kolekcji.

## Technologie

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- HTML
- CSS

- ## Instalacja

1. Sklonuj repozytorium na swój lokalny komputer:

```sh
git clone https://github.com/DenysHalytskyi/Project_MVC.git
```
## Uruchomienie aplikacji
```sh
node app.js
```
