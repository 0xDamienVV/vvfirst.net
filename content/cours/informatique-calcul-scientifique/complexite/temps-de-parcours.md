---
title: Temps de parcours
order: 4
---
> [!definition] Définition
> Le **temps de parcours** d'un algorithme est le nombre d'instructions élémentaires exécutées, en fonction de la **taille $n$ de l'entrée**. Chaque instruction élémentaire (affectation, comparaison, `print`, accès `L[i]`, `len`, `append`, `pop()`) est comptée comme un temps **constant**.  
> On l'exprime avec la [[notation-asymptotique|notation $\Theta$]].

> [!property] Calcul du temps
> Pour une boucle, on multiplie le nombre de tours par le coût d'un tour ; pour des boucles imbriquées, on somme sur les tours de la boucle extérieure (voir [[boucles-imbriquees|boucles imbriquées]]).

### Exemples
```python
def carre(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            print("*", end = " ")
        print()
```
- `carre(n)` affiche $n^2$ étoiles : le `print` intérieur s'exécute $n^2$ fois et `print()` $n$ fois, donc le temps est $\Theta(n^2)$.
- Remplacer la boucle intérieure par `print("* " * n)` ne l'améliore pas car créer et afficher une chaîne de $2n$ caractères coûte au moins un temps linéaire.
- `triangle(n)`, avec `for j in range(1, i + 1)`, affiche $1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$ étoiles, donc son temps est aussi $\Theta(n^2)$.
- On mesure un temps réel avec `time()` :
  ```python
  from time import time
  t0 = time()
  resultat = f(L)
  print(time() - t0, "secondes")
  ```
