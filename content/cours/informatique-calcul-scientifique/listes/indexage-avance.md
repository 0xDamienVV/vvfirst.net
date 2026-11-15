---
title: Indexage avancé
order: 2
---
> [!definition] Définition
> Pour une [[liste]] (ou une `str`) :
> - Un indice **négatif** compte depuis la fin : `L[-1]` est le dernier élément.
> - Le **slicing** `L[a:b:c]` extrait les éléments d'indices `a, a+c, ...` strictement avant `b`. Les valeurs omises valent `0`, `len(L)` et `1`.
> - Un slice crée une **nouvelle** liste.

### Exemples
Avec `L = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]` :
- `L[2:5]` vaut `[12, 13, 14]` et `L[2:100]` vaut `[12, ..., 20]` car un indice trop grand est ramené à la fin.
- `L[2:10:2]` vaut `[12, 14, 16, 18]` et `L[9:1:-2]` vaut `[19, 17, 15, 13]`.
- `L[::-1]` renverse la liste et `L[:]` en fait une copie, avec `id(L) != id(L[:])`.
- Pour `s = "ABCDE"`, `s[-1]` vaut `"E"` : on parcourt `s` à l'envers avec `range(-1, -len(s) - 1, -1)`.
