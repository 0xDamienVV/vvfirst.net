---
title: Algorithmes sur les dictionnaires
order: 4
---
> [!definition] Principe
> On parcourt un [[dictionnaire]] avec `for c, v in d.items()` pour calculer une valeur de travail, ou on construit un nouveau dictionnaire entrée par entrée.

### Exemples
- Clé de valeur maximale, sans `max`, avec `-inf` (un nombre plus petit que tous les autres) :
  ```python
  def dict_max(d):
      v_max, cle_max = float("-inf"), None
      for k, v in d.items():
          if v > v_max:
              v_max, cle_max = v, k
      return cle_max
  ```
- Somme des valeurs : `s = 0` puis `s += d[x]` pour chaque clé `x`.
- Inverser un dictionnaire à valeurs uniques (voir [[comprehension|compréhension]]) : `{v: k for k, v in d.items()}`.
- Inverser un dictionnaire à valeurs répétées, en regroupant les clés dans des listes :
  ```python
  def dict_inverse_list(d):
      d1 = {v: [] for v in d.values()}
      for k, v in d.items():
          d1[v].append(k)
      return d1
  ```
  `{1: "a", 2: "b", 3: "a", 4: "c"}` donne `{"a": [1, 3], "b": [2], "c": [4]}`.
- Compter les occurrences de chaque élément d'une liste :
  ```python
  d = {x: 0 for x in L}
  for x in L:
      d[x] += 1
  ```
  Cette version est plus rapide que `{x: L.count(x) for x in L}` car elle ne parcourt `L` qu'une fois.
- Indices de chaque élément d'une liste :
  ```python
  def list_to_dict(L):
      d = {}
      for i in range(len(L)):
          if L[i] not in d:
              d[L[i]] = [i]
          else:
              d[L[i]].append(i)
      return d
  ```
  `[10, 20, 10, 30]` donne `{10: [0, 2], 20: [1], 30: [3]}`.
- Regrouper des éléments selon une **clé calculée**, ici un [[tuple]] de restes :
  ```python
  def grouper_paires(paires):
      groupes = {}
      for paire in paires:
          a, b = paire
          cle = (a % 3, b % 5)
          if cle not in groupes:
              groupes[cle] = []
          groupes[cle].append(paire)
      return groupes
  ```
  Un tuple peut servir de clé car il est non modifiable.
- Compter, pour chaque ligne `k` d'une matrice, ses éléments pairs : `d[k] = nb` après une boucle intérieure `for x in L[k]`.