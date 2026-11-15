---
title: Fonction récursive
order: 1
---
> [!definition] Définition
> Une [[fonction]] est **récursive** si elle s'appelle elle-même. Elle comporte :
> - un **cas de base**, traité sans appel récursif,
> - un ou plusieurs **appels récursifs** sur une entrée plus petite.

> [!warning] Attention
> Sans cas de base atteint, les appels ne s'arrêtent pas : Python interrompt la chaîne avec une `RecursionError` après un nombre limité d'appels.

> [!property] Remarque
> Le raisonnement est le même que celui d'une [[recurrence|récurrence]] : on suppose le résultat connu pour une entrée plus petite et on en déduit le résultat pour l'entrée donnée.

### Exemples
```python
def countdown(n):
    if n >= 0:
        print(n)
        countdown(n - 1)
```
- `countdown(3)` affiche `3, 2, 1, 0`. Le cas de base est implicite : `countdown(-1)` ne fait rien.
- Maximum d'une liste non vide :
  ```python
  def max_rec(L):
      if len(L) == 1:
          return L[0]
      m = max_rec(L[1:])
      return L[0] if L[0] > m else m
  ```
  Avec une liste vide, `len(L) == 1` n'est jamais vrai et on obtient une `RecursionError`.
- `f(s)` qui affiche `s[0]` puis appelle `f(s[1:])` affiche tous les caractères de `s`, avec le cas de base `len(s) == 0`.
