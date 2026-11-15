---
title: Types et opérations
order: 2
---

# Types de base
> [!definition] Définition
> - Un **type** décrit la nature d'une valeur : `int` (entier), `float` (nombre à virgule), `str` (chaîne de caractères), `bool` (booléen).
> - `type(x)` donne le type de `x`. `int(x)`, `float(x)`, `str(x)` **convertissent** une valeur.

### Exemple
- `int(10/2)` vaut `5` car `10/2` vaut `5.0` (le résultat de `/` est toujours un `float`).

# Opérateurs numériques
> [!definition] Définition
> Les **opérateurs numériques** sont `+`, `-`, `*`, `/` (division réelle), `//` (quotient entier), `%` (reste) et `**` (puissance). Les opérateurs **d'affectation** `+=`, `-=`, `*=`, `/=` modifient une [[variable]].

### Exemples
- `x = 5; x += 3; x /= 2; x -= 10; x *= 4` donne `-24.0` car `5 → 8 → 4.0 → -6.0 → -24.0`.
- `print(11 / 2, int(11 / 2))` affiche `5.5 5`.

# Opérateurs sur les chaînes
> [!definition] Définition
> `+` **concatène** deux `str` et `*` **répète** une `str` un nombre entier de fois.

> [!warning] Attention
> `"123" * 2` vaut `"123123"` alors que `123 * 2` vaut `246` : le type décide de l'opération.

### Exemples
- `a = "ha"; b = a * 2` donne `b = "haha"`, et `a + b` vaut `"hahaha"`.
- `x = "abc"; x += str(1); x *= 2` donne `"abc1abc1"` car on convertit `1` en `str` avant de concaténer.
- `a = "123"; b = a; a *= 2` donne `a = "123123"` et `b = "123"` car une `str` n'est pas modifiable : `a *= 2` crée une nouvelle chaîne.
