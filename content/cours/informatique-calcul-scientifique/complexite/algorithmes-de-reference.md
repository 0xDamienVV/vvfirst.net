---
title: Algorithmes de référence
order: 6
---

# Somme maximale de deux éléments
> [!definition] Définition
> Le problème de la **somme maximale** : on cherche la plus grande somme de deux éléments (aux indices distincts) d'une liste `L` de taille $n$.

```python
def max_somme(L):                    # essaie toutes les paires
    max_s = L[0] + L[1]
    for i in range(len(L)):
        for j in range(i + 1, len(L)):
            if L[i] + L[j] > max_s:
                max_s = L[i] + L[j]
    return max_s

def max_somme_lin(L):                # modifie L
    max_1 = max(L)
    L.remove(max_1)
    return max_1 + max(L)
```
### Exemples
- `max_somme` est $\Theta(n^2)$ ([[notation-asymptotique|notation $\Theta$]], [[boucles-imbriquees|boucles imbriquées]]) car le test s'exécute $\dfrac{n(n-1)}{2}$ fois.
- `max_somme_lin` est $\Theta(n)$ car `max` et `remove` sont linéaires, mais elle modifie `L`.
- En un seul passage, sans modifier `L`, on retient les deux plus grandes valeurs :
  ```python
  def max_somme_lin_sans_modif(L):
      max_1, max_2 = L[0], L[1]
      if max_2 > max_1:
          max_1, max_2 = max_2, max_1
      for i in range(2, len(L)):
          x = L[i]
          if x > max_1:
              max_2 = max_1
              max_1 = x
          elif x > max_2:
              max_2 = x
      return max_1 + max_2
  ```
  La boucle fait $n - 2$ tours à temps constant, donc $\Theta(n)$, sans copie de `L`.

# Somme maximale de trois éléments
```python
def max_somme_3(L):
    max_s = L[0] + L[1] + L[2]
    for i in range(len(L)):
        for j in range(i + 1, len(L)):
            for k in range(j + 1, len(L)):
                if L[i] + L[j] + L[k] > max_s:
                    max_s = L[i] + L[j] + L[k]
    return max_s
```
### Exemples
- Le test s'exécute $\sum_{k=2}^{n}\dfrac{(k-1)(k-2)}{2} = \Theta(n^3)$ fois (avec $\sum k = \dfrac{n(n+1)}{2}$ et $\sum k^2 = \dfrac{n(n+1)(2n+1)}{6}$).
- La version qui appelle trois fois `max` et deux fois `remove` est $\Theta(n)$.
- Sur une liste de taille $1000$, `max_somme_3` met environ $17$ s et $154$ s pour $2000$, alors que la version linéaire traite $10^6$ éléments en environ $0{,}03$ s.

# Produit de matrices
```python
def mult_matrices(A, B):
    n = len(A[0])
    C = []
    for i in range(n):
        C.append([])
        for j in range(n):
            s = 0
            for k in range(n):
                s += A[i][k] * B[k][j]
            C[i].append(s)
    return C
```
### Exemples
- L'entrée contient $2n^2$ éléments, soit une taille $\Theta(n^2)$, et le temps est $\Theta(n^3)$ car il y a trois boucles imbriquées.
- Un algorithme naïf n'est en général pas le plus efficace : l'algorithme de Strassen (1969) est $\mathcal{O}(n^{2,81})$, et le meilleur algorithme connu est $\mathcal{O}(n^{2,37})$, mais sans usage pratique.
- Savoir s'il existe un algorithme en $\Theta(n^2)$ est un problème ouvert.
