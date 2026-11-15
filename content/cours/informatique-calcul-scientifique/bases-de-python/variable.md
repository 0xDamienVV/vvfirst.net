---
title: Variable
order: 1
---
> [!definition] Définition
> Une **variable** est un nom associé à une valeur. L'**affectation** `x = valeur` évalue d'abord le membre de droite, puis associe le résultat au nom `x`.

> [!warning] Attention
> `=` n'est **pas** une égalité mathématique : c'est une affectation. Le test d'égalité s'écrit `==`.

### Exemples
```python
x = 1
y = x       # y reçoit la valeur de x
x += 1      # équivaut à x = x + 1
print(x, y) # 2 1
```
- `x, y = 10, 11` puis `print(y, x)` affiche `11 10` car l'affectation multiple associe les deux valeurs simultanément.
- `t = 10`, `v = t / 2`, `t = 1`, `print(t + v)` affiche `6.0` car changer `t` ne modifie pas `v`.
- `x, y = 5` produit une erreur (`TypeError`) car `5` n'est pas une séquence à deux éléments.
