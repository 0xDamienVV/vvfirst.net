---
title: Récursif et itératif
order: 2
---
> [!definition] Définition
> Une version **itérative** d'une fonction utilise des boucles (voir [[boucle-for]]) et aucun appel récursif. Toute [[fonction-recursive|fonction récursive]] de ce chapitre a une version itérative équivalente.

### Exemples
- Factorielle :
  ```python
  def fact_iter(n):
      fact = 1
      for i in range(1, n + 1):
          fact *= i
      return fact
  ```
- Nombre de Fibonacci : on retient les deux derniers nombres calculés.
  ```python
  def fib_iter(n):
      fib_old, fib_new = 0, 1
      for i in range(n):
          fib_old, fib_new = fib_new, fib_old + fib_new
      return fib_old
  ```
  Après $k$ tours, `fib_old` est le $k$-ième nombre de Fibonacci.
- Renverser une chaîne :
  ```python
  def reverse_rec(s):
      if s == "":
          return ""
      return s[len(s) - 1] + reverse_rec(s[:len(s) - 1])
  ```
  car le renversé de `s` commence par son dernier caractère, suivi du renversé du reste ; la version itérative construit `s1 += s[i]` pour `i` de `len(s) - 1` à `0`.
- `countdown_iter(n)` utilise `for i in range(n, -1, -1): print(i)`.
