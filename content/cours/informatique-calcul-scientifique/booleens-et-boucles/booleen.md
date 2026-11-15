---
title: Booléen
order: 1
---
> [!definition] Définition
> Un **booléen** vaut `True` ou `False`. Les comparaisons `==`, `!=`, `<`, `<=`, `>`, `>=` retournent un booléen, qui se combine avec `and`, `or`, `not` (voir [[operateurs-logiques|opérateurs logiques]]).

> [!property] Priorités
> `not` est évalué avant `and`, lui-même évalué avant `or`.

> [!warning] Attention
> Les `str` se comparent caractère par caractère par leur **code** : les majuscules viennent avant les minuscules (`"Banane" < "ane"` est vrai).

### Exemples
- Avec `x = 3` et `y = 4` : `x % 2 == 0` vaut `False`, `x > 3 and y > 3` vaut `False`, `x > 3 or y > 3` vaut `True`, `not x > 3` vaut `True`.
- Avec `x = 1`, `y = 2`, `z = 3` : `(x < y) or (x < z) and (y > z)` vaut `True` car `and` passe avant `or`, alors que `((x < y) or (x < z)) and (y > z)` vaut `False`.
- `"baobab" > "banane"` est vrai car `'o' > 'n'` à la troisième lettre.
- `"izz" in "pizza"` est vrai : `in` teste si une sous-chaîne apparaît, et `x not in L` est équivalent à `not (x in L)`.
