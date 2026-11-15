---
title: Algorithmes sur les listes
order: 4
---
> [!definition] Principe
> La plupart des calculs sur une [[liste]] se font par un **parcours** avec `for x in L` (voir [[boucle-for]]), en retenant une valeur de travail (maximum courant, compteur, somme, drapeau).

### Exemples
```python
def my_max(L):
    if len(L) == 0:
        return None
    m = L[0]
    for x in L:
        if x > m:
            m = x
    return m

def my_count(L, x):
    count = 0
    for z in L:
        if z == x:
            count += 1
    return count

def my_index(L, x):
    for i in range(len(L)):
        if L[i] == x:
            return i       # None si x n'est pas dans L
```
- `my_max` simule `max`, `my_count` simule `L.count` et `my_index` simule `L.index`.
- `my_index` renvoie tôt, comme dans la [[recherche-avec-drapeau|recherche avec drapeau]] mais sans drapeau.
- Pour la somme, `s = 0` puis `s += x` à chaque tour : une liste vide donne `0`.
- Pour les éléments pairs : `L1.append(x)` si `x % 2 == 0`.
- Pour l'intersection de deux listes à éléments distincts : `for x in L1: if x in L2: L.append(x)`.
- Pour renverser `L` en la vidant, `for i in range(len(L)): L1.append(L.pop())`, ce qui modifie `L`.
