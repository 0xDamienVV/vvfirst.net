---
title: Boucle while
order: 4
---
> [!definition] Définition
> Une **boucle** `while condition:` répète son bloc **tant que** la condition est vraie. La condition est testée avant chaque tour (contrairement à la [[boucle-for]], le nombre de tours n'est pas connu d'avance).
> `break` **quitte immédiatement** la boucle la plus intérieure qui le contient.

> [!warning] Boucle infinie
> Si la condition reste toujours vraie (par exemple `while i >= 0:` avec `i` qui ne fait qu'augmenter), la boucle ne s'arrête jamais.

### Exemples
- `i = 0; while i < 5: print(i); i += 1` affiche `0` à `4`, alors qu'en plaçant `i += 1` avant `print(i)` on affiche `1` à `5`.
- `while j:` s'arrête dès que `j` vaut `0` (un entier non nul est considéré vrai).
- `i = 2; while i < 10: if i % 2 == 0: print(i); if i == 6: break` ne modifie jamais `i` : la boucle est infinie et affiche `2` sans fin (le `break` n'est jamais atteint).
- Avec `x = 0`, `while x < 10: x += 2; if x == 6: break; print(x)` affiche `2 4` puis s'arrête dès que `x` vaut `6`, avant le `print`.
- Somme des entiers pairs de `0` à `n` :
  ```python
  s, i = 0, 0
  while i <= n:
      s += i
      i += 2
  ```
