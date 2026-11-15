---
title: Fonction
order: 1
---
> [!definition] Définition
> Une **fonction** se définit avec `def nom(parametres):` suivi d'un bloc indenté. L'instruction `return valeur` **quitte** la fonction et retourne la valeur.  
> Une fonction sans `return` (ou avec `return` seul) retourne `None`.

> [!warning] Attention
> Tout ce qui est écrit après un `return` exécuté n'est jamais atteint.

### Exemples
```python
def f(x):
    print(2 * x)
    return x + 1

print(f(3))   # affiche 6, puis 4
```
- `def f(x, y): print("je suis f"); return 2*x + 3*y; print("encore")` n'affiche jamais « encore » car `return` quitte la fonction.
- `def g(t): return f(t, t); print("je suis g")` n'affiche jamais « je suis g ».
- `print(type(f(3)))` pour une fonction `f` sans `return` affiche `<class 'NoneType'>`, car `f` retourne `None`.
- `return a, b` retourne un [[tuple]] : `p, r = decomposition(7)` récupère les deux valeurs.
- Une fonction qui retourne l'aire d'un cercle et affiche son périmètre :
  ```python
  def perim_aire(r):
      print("Le périmètre du cercle de rayon", r, "est", 2 * 3.14 * r)
      return 3.14 * r**2
  ```
