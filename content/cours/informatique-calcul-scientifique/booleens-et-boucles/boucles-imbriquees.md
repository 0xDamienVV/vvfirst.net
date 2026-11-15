---
title: Boucles imbriquées
order: 5
---
> [!definition] Définition
> Dans deux boucles **imbriquées**, la boucle intérieure s'exécute en entier à chaque tour de la boucle extérieure.  
> Pour un affichage, l'`print()` vide placé après la boucle intérieure ajoute un retour à la ligne.

### Exemples
```python
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)
    print()
```
affiche les paires `(i, j)` avec `i` fixé dans chaque bloc.
- `for j in range(i + 1)` à l'intérieur produit un **triangle** : le bloc de `i` contient `i + 1` lignes.
- `for j in range(i, 5)` produit des blocs de plus en plus courts.
- `for c1 in "BC": for c2 in "01": print(c1 + c2)` affiche `B0 B1 C0 C1`, mais en inversant les boucles on obtient `B0 C0 B1 C1`.
