---
title: Recherche avec drapeau
order: 6
---
> [!definition] Définition
> Un **drapeau** est une variable [[booleen|booléenne]] qui retient, à la sortie d'une boucle, si un événement s'est produit pendant le parcours.

```python
trouve = False
for y in t:
    if x == y:
        trouve = True
if trouve:
    print("Je l'ai trouvé!")
else:
    print("Je ne l'ai pas trouvé :(")
```
Ce code simule `x in t`.

> [!warning] Attention
> Afficher un message **dans** la boucle l'affiche à chaque occurrence : le drapeau permet de ne conclure qu'**après** le parcours.

### Exemple
- `N` est premier si aucun `d` entre `2` et `N - 1` ne divise `N` :
  ```python
  premier = True
  for d in range(2, N):
      if N % d == 0:
          premier = False
  ```
  puis `N` est premier si `premier` est vrai et `N != 1`.
- Variante avec **retour anticipé** : une fonction qui teste si une liste ne contient que des `1` quitte dès qu'un `0` apparaît.
  ```python
  def tous_des_uns(L):
      for x in L:
          if x == 0:
              return False
      return True
  ```
  Le `return True` est **après** la boucle : placé dans la boucle, il serait exécuté dès le premier élément.
