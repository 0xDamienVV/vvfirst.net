---
title: Liste
order: 1
---
> [!definition] Définition
> Une **liste** est une suite ordonnée d'éléments **modifiable**, notée `L = [a, b, c]`. Comme pour un [[tuple]], on y accède par indice (`L[i]`), avec `len(L)` pour sa taille et `x in L` pour tester l'appartenance.

# Opérations
> [!property] Opérations principales
> - `L.append(x)` ajoute `x` à la fin et `L.pop()` retire et retourne le dernier élément.
> - `L.insert(i, x)` insère `x` à l'indice `i`, `L.pop(i)` retire l'élément d'indice `i`, `L.remove(x)` retire la première occurrence de `x`.
> - `L.count(x)` compte les occurrences de `x`, `L.index(x)` donne l'indice de la première.
> - `L.sort()` trie la liste et `L.reverse()` l'inverse ; `max(L)` et `min(L)` donnent les extrêmes.

> [!warning] Attention
> Les chaînes se trient par **code** de caractère : `'é' > 'o'`, donc `"vélo"` est le maximum de `["voiture", "train", "vélo"]`.

### Exemples
```python
L = [1, 2, 3, 4]
L.append(5)      # [1, 2, 3, 4, 5]
L.remove(2)      # [1, 3, 4, 5]
L.insert(3, -1)  # [1, 3, 4, -1, 5]
L.pop()          # retourne 5 ; L = [1, 3, 4, -1]
```
- `L = [10, 20, 30, 20, 10]` : `L.count(10)` vaut `2` et `L.index(20)` vaut `1`.
- `list(range(2, 10, 3)) + list("haha")` vaut `[2, 5, 8, 'h', 'a', 'h', 'a']`.
