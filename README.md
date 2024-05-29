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

- **Przeglądanie listy filmów.
- **Dodawanie nowych filmów.
- **Edytowanie istniejących filmów.
- **Oznaczanie filmów jako obejrzane.
- **Dodawanie recenzji do filmów.
- **Usuwanie filmów z kolekcji.

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
