---
title: Division euclidienne
order: 3
---
Soient $n \geq 0$ et $d > 0$ deux entiers.
> [!definition] Définition
> La **division euclidienne** de $n$ par $d$ est l'unique couple d'entiers $(q, r)$ avec $0 \leq r < d$ tel que $n = d \cdot q + r$ : $q$ est le **quotient** et $r$ le **reste**.  
> En Python, `n // d` donne $q$ et `n % d` donne $r$.

> [!warning] Attention
> Le reste doit être **strictement inférieur** à $d$ : $29 = 10 \cdot 2 + 9$ est la division par $10$, mais $29 = 2 \cdot 14 + 1$ pour la division par $2$.

### Exemples
```python
n, d = 13, 4
q, r = n // d, n % d
print(n, "=", d, "*", q, "+", r)   # 13 = 4 * 3 + 1
```
- `13 // 3` vaut `4` et `13 % 3` vaut `1` car $13 = 3 \cdot 4 + 1$.
- `7 // 33` vaut `0` et `7 % 33` vaut `7` car $7 = 33 \cdot 0 + 7$.
- `x % 2 == 0` teste si `x` est pair.
