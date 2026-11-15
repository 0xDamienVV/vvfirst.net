---
title: Tuple
order: 2
---
> [!definition] Définition
> Un **tuple** est une suite ordonnée d'éléments **non modifiable**, notée `t = (a, b, c)`. On accède à ses éléments par leur **indice**, qui commence à `0` : `t[0]`, `t[1]`, ... `len(t)` donne sa taille et `x in t` teste l'appartenance.

> [!property] Dépaquetage
> `a, b = t` affecte les éléments d'un tuple de deux éléments à `a` et `b` (voir [[variable]]). Un tuple permet aussi de grouper plusieurs valeurs, par exemple `(i, j)`, et `x[1]` est le deuxième élément du tuple `x`.

> [!warning] Attention
> Un tuple d'un élément s'écrit avec une virgule : `("salut",)` est un tuple, alors que `("salut")` est une simple chaîne.

### Exemples
- Avec `t = (13, 2, 64, -30)` : `t[2]` vaut `64`, `len(t)` vaut `4` et `10 in t` vaut `False`.
- Pour `t = ((1, 2), (3, 4))`, la somme des seconds éléments, `s = 0` puis `for x in t: s += x[1]`, vaut `6`.
- `tuple("salut")` vaut `('s', 'a', 'l', 'u', 't')`.
