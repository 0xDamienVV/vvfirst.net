---
title: Récursivité sur les chaînes
order: 3
---
> [!definition] Principe
> La **récursivité sur les chaînes** suit la [[fonction-recursive|fonction récursive]] : pour une chaîne `s` non vide, on suppose connu le résultat pour `s[1:]`, et on le complète avec le premier caractère `s[0]`.

### Exemple : toutes les sous-chaînes
Une **sous-chaîne** de `s` est formée de certains caractères de `s`, dans le même ordre. Chaque sous-chaîne **exclut** ou **inclut** `s[0]` :
```python
def sous_chaines(s):
    if len(s) == 0:
        return [s]               # cas de base : seulement la chaîne vide
    L = sous_chaines(s[1:])
    L1 = [s[0] + x for x in L]   # les sous-chaînes qui contiennent s[0]
    L.extend(L1)
    return L
```
- La liste `L1` est une [[comprehension|compréhension]] de liste.
- `sous_chaines("abc")` retourne `['', 'c', 'b', 'bc', 'a', 'ac', 'ab', 'abc']`.
- `sous_chaines("aa")` retourne `['', 'a', 'a', 'aa']` car les répétitions sont conservées.
- Une chaîne de longueur $n$ a $2^n$ sous-chaînes car chaque caractère est inclus ou exclu.
