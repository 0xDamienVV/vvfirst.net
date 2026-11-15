---
title: Décalage des éléments
order: 5
---
> [!definition] Principe
> Pour garder les éléments d'une [[liste]] **contigus**, une suppression à l'indice `i` **décale vers la gauche** les éléments suivants, et une insertion les décale **vers la droite**.  
> Seules `len`, `L[i]`, `L.append(x)` et `L.pop()` sont utilisées : ce sont les opérations de base à temps constant.

### Exemples
```python
def my_pop(L, i):
    x = L[i]
    for j in range(i + 1, len(L)):
        L[j - 1] = L[j]
    L.pop()           # enlève le doublon final
    return x

def my_remove(L, x):
    for i in range(len(L)):
        if L[i] == x:
            my_pop(L, i)
            return

def my_insert(L, i, x):
    if len(L) == 0:
        L.append(x)
        return
    n = len(L)
    L.append(L[n - 1])
    for j in range(n - 1, i, -1):
        L[j] = L[j - 1]
    L[i] = x
```
- `my_insert` décale en partant de la **fin** car sinon on écraserait des valeurs encore à copier.
- `L.pop(i)` simulée par `my_pop` coûte un temps proportionnel au nombre d'éléments déplacés.
