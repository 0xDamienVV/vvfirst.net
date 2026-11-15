---
title: Portée des variables
order: 4
---
> [!definition] Définition
> Une [[variable]] créée **dans** une [[fonction]] (paramètres compris) est **locale** : elle n'existe que pendant l'appel et n'affecte pas une variable de même nom définie à l'extérieur.
> Une variable définie à l'extérieur est **globale** : une fonction peut la **lire**, mais ne peut la **modifier** que si elle la déclare avec `global x`.

### Exemple
```python
def f():
    x = "une variable locale"
    print("dans f, x =", x)

x = 2
f()
print("dehors, x =", x)   # 2
```
La variable `x` de `f` est distincte du `x` extérieur car l'affectation dans `f` crée une variable locale.
- Avec `x = 10`, `def jaune(): return x + 2` retourne `12` car `x` est lue dans l'espace global.
- `def bleu(): x = 5; return x + 2` retourne `7` mais laisse le `x` global à `10`.
- `def rouge(): global x; x = 5; return x + 2` retourne `7` **et** modifie le `x` global, qui vaut ensuite `5` : après `rouge()`, `jaune()` retourne `7`.
- Lire une variable locale hors de sa fonction provoque une `NameError`.