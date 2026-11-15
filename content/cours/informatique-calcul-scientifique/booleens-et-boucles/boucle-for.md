---
title: Boucle for
order: 3
---
> [!definition] Définition
> Une **boucle** `for x in sequence:` exécute son bloc une fois pour chaque élément de la **séquence** (`str`, [[tuple]], liste, `range`, ...).  
> `range(a, b, pas)` produit les entiers `a, a+pas, ...` **strictement avant** `b` ; `range(b)` commence à `0` et le pas vaut `1` par défaut.

### Exemples
- `range(3, 6)` donne `3, 4, 5`, `range(7, 3)` est vide, `range(10, 50, 10)` donne `10, 20, 30, 40` et `range(5, -11, -4)` donne `5, 1, -3, -7`.
- Afficher un tuple à l'envers :
  ```python
  for i in range(len(t) - 1, -1, -1):
      print(t[i])
  ```
- Somme des entiers pairs de `0` à `n` :
  ```python
  s = 0
  for i in range(0, n + 1, 2):
      s += i
  ```
- Pour parcourir une liste de listes : `for ligne in M: print(ligne)` affiche chaque ligne de `M`.
- Pour `n` négatif, `range(n, 0)` parcourt `n, n+1, ..., -1`.
