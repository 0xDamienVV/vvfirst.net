---
title: Tableau
order: 1
---
> [!definition] Définition
> Un **tableau** à deux dimensions est une [[liste]] de listes de même longueur : `T[i][j]` est l'élément de la **ligne** `i` et de la **colonne** `j`. Il représente une **matrice**.

> [!warning] Attention
> `[[0] * 2] * 2` répète la **même** ligne (voir [[mutabilite|mutabilité]]) : `L1[0].append(2)` modifie aussi `L1[1]`. Pour des lignes indépendantes, on construit chaque ligne séparément.

### Exemples
Avec `L = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]` :
- `L[1]` est la ligne `[4, 5, 6]` et la colonne d'indice `1` est formée des `L[i][1]` pour `i` de `0` à `2`, soit `[2, 5, 8]`.
- La diagonale est `L[i][i]` et l'autre diagonale `L[i][2 - i]`.
- La somme de deux matrices de mêmes dimensions s'obtient en construisant ligne par ligne :
  ```python
  def somme_mat(A, B):
      C = []
      for i in range(len(A)):
          ligne = []
          for j in range(len(A[0])):
              ligne.append(A[i][j] + B[i][j])
          C.append(ligne)
      return C
  ```
- `T = [[1, 2, 3], [4, 5, 6]]` : `n = len(T)` est le nombre de lignes et `m = len(T[0])` le nombre de colonnes.
- Un tableau se remplit avec la ligne courante et l'accès à la ligne précédente. Pour le triangle de Pascal étendu (voir [[triangle-de-pascal]]) :
  ```python
  def mystere(n):
      matrice = []
      for i in range(n):
          ligne = []
          for j in range(n):
              if i == 0 or j == 0:
                  valeur = 1
              else:
                  valeur = ligne[j - 1] + matrice[i - 1][j]
              ligne.append(valeur)
          matrice.append(ligne)
      return matrice
  ```
  `mystere(5)` donne les lignes `[1, 1, 1, 1, 1]`, `[1, 2, 3, 4, 5]`, `[1, 3, 6, 10, 15]`, ... et `mystere(n)[i][j]` vaut $\binom{i+j}{i}$.
- Pour afficher une ligne `k` à l'envers sans `reverse` : `for i in range(len(T[k]) - 1, -1, -1): print(T[k][i], end = " ")`.