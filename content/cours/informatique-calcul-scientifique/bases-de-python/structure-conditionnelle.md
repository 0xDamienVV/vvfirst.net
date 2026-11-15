---
title: Structure conditionnelle
order: 4
---
> [!definition] Définition
> Une **structure conditionnelle** `if condition:` exécute son bloc (indenté) seulement si la condition est vraie. Les branches `elif` et `else` sont des **branches** testées dans l'ordre, et **une seule** branche s'exécute.

```python
if x < 0:
    print("négatif")
elif x > 0:
    print("positif")
else:
    print("nul")
```

> [!property] Remarque
> - Un `if` peut contenir d'autres `if` (imbriqués) : l'**indentation** détermine le bloc.
> - `elif` remplace un `else` suivi d'un `if` : le test suivant n'est évalué que si les précédents sont faux.
> - Python accepte les comparaisons chaînées : `0 <= x < 50`.

### Exemples
- Sans `elif` :
  ```python
  if age <= 2:
      print("bébé")
  else:
      if age <= 12:
          print("enfant")
      else:
          print("adulte")
  ```
  est équivalent à `if ... elif ... else` car chaque `else` contient exactement le `if` suivant.
- Le maximum de trois nombres `x`, `y`, `z` se trouve en imbriquant : on compare `x` et `y`, puis le plus grand avec `z`.
