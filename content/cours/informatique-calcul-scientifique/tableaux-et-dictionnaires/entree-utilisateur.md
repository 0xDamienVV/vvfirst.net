---
title: Entrée utilisateur
order: 5
---
> [!definition] Définition
> L'**entrée utilisateur** `input("message")` affiche le message, attend une saisie de l'utilisateur et la retourne **toujours sous forme de `str`**.

> [!warning] Attention
> Pour calculer avec la saisie, on la convertit : `int(input(...))`.

### Exemples
```python
def somme_input():
    x = input("le premier nombre: ")
    y = input("le deuxième nombre: ")
    print("la somme vaut", int(x) + int(y))
```
- `"2" + "3"` vaut `"23"` alors que `int("2") + int("3")` vaut `5`.
- Jeu du nombre secret en trois essais :
  ```python
  from random import randint

  def nombre_secret():
      secret = randint(1, 20)
      essai = 1
      while essai <= 3:
          n = int(input("devinez le nombre secret! "))
          if n == secret:
              print("bravo!")
              return True
          print("plus haut!" if n < secret else "plus bas!")
          essai += 1
      print("pas de chance! le nombre secret était", secret)
      return False
  ```
- Pour qu'un joueur donne des coordonnées valides sur un plateau `P`, on redemande tant qu'elles sont hors du plateau ou sur une case occupée : `while not (i in range(n) and j in range(n) and not P[i][j]):`.
- Lire des entiers jusqu'à un doublon, puis afficher le minimum sans `min` ([[boucle-while|boucle while]]) :
  ```python
  L = []
  n = int(input("Entrez un entier : "))
  mon_min = n
  while n not in L:
      L.append(n)
      if n < mon_min:
          mon_min = n
      n = int(input("Entrez un entier : "))
  print("le minimum est", mon_min)
  ```
  On lit **avant** la boucle pour que la condition ait une valeur à tester.
- Redemander tant que la saisie est invalide : `n = int(input(...))` puis `while n < 0 or n > 2: print("On avait dit 0, 1 ou 2 !"); n = int(input(...))`.
- Décomposer $N = 2^p + r$ avec $2^p \le N < 2^{p+1}$ :
  ```python
  def decomposition(N):
      p, x = 0, N // 2
      while x >= 1:
          p += 1
          x //= 2
      return p, N - 2 ** p
  ```