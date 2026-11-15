---
title: Transformations de Bioche
order: 1
---
> [!definition] Définition
> Les trois **transformations de Bioche** remplacent $x$ par $-x$, par $\pi - x$ ou par $\pi + x$.  
> Une équation est **invariante** par une transformation si, après le remplacement, l'équation obtenue est identique à l'équation de départ (même expression, sans changement de signe).

> [!property] Effet sur les fonctions trigonométriques
> | remplacement | $\sin$ | $\cos$ | $\tan$ et $\cot$ |
> |---|---|---|---|
> | $x \to -x$ | $-\sin x$ | $\cos x$ | $-\tan x$ |
> | $x \to \pi - x$ | $\sin x$ | $-\cos x$ | $-\tan x$ |
> | $x \to \pi + x$ | $-\sin x$ | $-\cos x$ | $\tan x$ |
>
> Ces valeurs découlent des [[angles-associes|angles associés]]. Les puissances paires ($\sin^2$, $\cos^2$) et les produits de deux facteurs qui changent de signe ne changent pas.

> [!warning] Attention
> Un changement de signe de l'expression entière ne suffit pas : $\sin x + \tan x = 0$ devient $-\sin x - \tan x = 0$ par $x \to -x$, ce qui est équivalent mais pas identique. Les tests de Bioche exigent l'invariance stricte.

### Exemples
- $4\tan^2 x - 3\cos x + 2\tan x \sin x = 26$ est invariante par $x \to -x$ est VRAI car $\tan^2 x$ et $\cos x$ ne changent pas, et $\tan x \sin x \to (-\tan x)(-\sin x) = \tan x \sin x$.
- Cette même équation est invariante par $x \to \pi + x$ est FAUX car $\cos x \to -\cos x$ change le terme $-3\cos x$.
- $\dfrac{1}{\cos^2 x} = 4\tan x$ est invariante par $x \to \pi + x$ est VRAI car $\cos^2 x$ et $\tan x$ ne changent pas.
- $\dfrac{\sin 3x}{\cos^2 x - \sin^2 x} + 2\cos x \cot x - \dfrac{1}{\cos^2 x} = 0$ est invariante par $x \to \pi - x$ est VRAI car $\sin(3\pi - 3x) = \sin 3x$, $\cos^2 x - \sin^2 x$ et $\dfrac{1}{\cos^2 x}$ ne changent pas, et $\cos x \cot x \to (-\cos x)(-\cot x) = \cos x \cot x$.
- Cette même équation est invariante par $x \to \pi + x$ est FAUX car $\sin(3\pi + 3x) = -\sin 3x$ change le signe du premier terme sans changer son dénominateur.
- Cette même équation est invariante par $x \to -x$ est FAUX car $\sin 3x \to -\sin 3x$ alors que le dénominateur ne change pas.
