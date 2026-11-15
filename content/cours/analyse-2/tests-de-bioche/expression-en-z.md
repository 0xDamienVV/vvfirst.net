---
title: Équation en z
order: 3
---
> [!definition] Définition
> Après le choix de $z$, on exprime chaque fonction trigonométrique de l'équation en fonction de $z$ :
> | variable | expressions |
> |---|---|
> | $z = \cos x$ | $\sin^2 x = 1 - z^2$, $\ \tan^2 x = \dfrac{1 - z^2}{z^2}$ |
> | $z = \sin x$ | $\cos^2 x = 1 - z^2$, $\ \tan^2 x = \dfrac{z^2}{1 - z^2}$ |
> | $z = \tan x$ | $\cos^2 x = \dfrac{1}{1 + z^2}$, $\ \sin^2 x = \dfrac{z^2}{1 + z^2}$, $\ \sin x\cos x = \dfrac{z}{1 + z^2}$ |
> | $z = \tan\dfrac{x}{2}$ | $\sin x = \dfrac{2z}{1 + z^2}$, $\ \cos x = \dfrac{1 - z^2}{1 + z^2}$, $\ \tan x = \dfrac{2z}{1 - z^2}$ |
>
> Ces expressions découlent des [[identites-fondamentales|identités fondamentales]].

> [!warning] Attention
> Chaque expression ne vaut que pour la variable choisie. On ramène d'abord tout à $\sin^2$, $\cos^2$ ou $\tan^2$ (par exemple $\tan x \sin x = \dfrac{\sin^2 x}{\cos x}$), avant de remplacer.

### Exemples
- $\sin x \tan x = 1$ s'écrit $\dfrac{1 - z^2}{z} = 1$ avec $z = \cos x$ est VRAI car $\sin x \tan x = \dfrac{\sin^2 x}{\cos x}$, donc $z^2 + z - 1 = 0$.
- $\dfrac{1}{\cos^2 x} = 4\tan x$ s'écrit $1 + z^2 = 4z$ avec $z = \tan x$ est VRAI car $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$.
- $2\cos^2 x + 3\sin x = 3$ s'écrit $2z^2 - 3z + 1 = 0$ avec $z = \sin x$ est VRAI car $2(1 - z^2) + 3z - 3 = -2z^2 + 3z - 1$.
- $\cos x + \sin x + \tan x = 1$ s'écrit $z^4 - z^2 + 2z = 0$ avec $z = \tan\dfrac{x}{2}$ est VRAI car, en réduisant au même dénominateur $(1 + z^2)(1 - z^2)$, on obtient $(1 - z^2)^2 + 2z(1 - z^2) + 2z(1 + z^2) = 1 - z^4$, donc $2z^4 - 2z^2 + 4z = 0$.
- La même équation s'écrit $z^4 - z^3 + 2z = 0$ est FAUX car le terme en $z^3$ s'annule : $-2z^3 + 2z^3 = 0$.
