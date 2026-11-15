---
title: Nombres aléatoires
order: 5
---
> [!definition] Définition
> Un **module** est une bibliothèque que l'on charge avec `import`. `from random import randint` permet d'écrire `randint(a, b)`, qui retourne un entier **aléatoire** entre `a` et `b` **inclus**.
> `import random as ra` donne un **alias** : on écrit alors `ra.randint(a, b)`. De même `import math` donne `math.sqrt(x)`.

> [!warning] Attention
> Pour tester tous les cas d'un programme qui utilise des valeurs aléatoires, on remplace temporairement `randint` par des valeurs choisies à la main.

### Exemple
```python
from random import randint
n = randint(-100, 100)
if n < 0:
    print(n, "est négatif")
elif n > 0:
    print(n, "est positif")
else:
    print(n, "est nul")
```
