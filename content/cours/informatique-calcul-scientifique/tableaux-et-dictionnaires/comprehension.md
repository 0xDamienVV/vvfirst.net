---
title: Compréhension
order: 3
---

# Compréhension de liste
> [!definition] Définition
> Une **compréhension** de [[liste]] `[expression for x in sequence if condition]` construit la liste des valeurs de `expression` pour chaque `x` de la séquence qui vérifie la condition (optionnelle).

### Exemples
- `[x for x in range(11) if x % 3 == 0]` vaut `[0, 3, 6, 9]`.
- `[y / 2 for y in range(4)]` vaut `[0.0, 0.5, 1.0, 1.5]`.
- `[x * 2 for x in "hello"]` vaut `['hh', 'ee', 'll', 'll', 'oo']` et `[x for x in "hello" if x > "g"]` vaut `['h', 'l', 'l', 'o']`.
- `[x + y for x in "ab" for y in "12"]` vaut `['a1', 'a2', 'b1', 'b2']` : les `for` s'imbriquent dans l'ordre d'écriture.
- Les éléments pairs de `L` : `[x for x in L if x % 2 == 0]` et l'intersection de `L1` et `L2` : `[x for x in L1 if x in L2]`.

# Compréhension de dictionnaire
> [!definition] Définition
> Une **compréhension de dictionnaire** `{cle: valeur for x in sequence if condition}` construit un [[dictionnaire]] de la même façon.

### Exemples
- `{x**2: x for x in range(-1, -10, -2)}` vaut `{1: -1, 9: -3, 25: -5, 49: -7, 81: -9}`.
- `{x: y for x in "hi" for y in "ha"}` vaut `{'h': 'a', 'i': 'a'}` car une clé déjà présente est **écrasée** par la dernière valeur.
- `L = []` puis `{i: L for i in range(3)}` partage la **même** liste entre toutes les clés (voir [[mutabilite|mutabilité]]) alors que `{i: [] for i in range(3)}` crée une liste par clé.
