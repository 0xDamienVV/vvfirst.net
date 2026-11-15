---
title: Suite
order: 1
---
> [!definition] Définition
> Une **suite réelle** est une [[application|application]] $\mathbb{N}^* \to \mathbb{R}$, $n \mapsto a_n$ (voir [[ensembles-de-nombres|ensembles de nombres]]).  
> Elle se note $(a_n)$ et $a_n$ est son **terme général**.  
> Elle peut être donnée par une **formule** ($a_n = f(n)$) ou par **récurrence** ($a_{n+1}$ en fonction de $a_n$, avec $a_1$ donné).

> [!property] Remarque
> Pour trouver le terme général à partir des premiers termes, on cherche le motif en $n$ : numérateur, dénominateur et signe séparément.

### Exemples
- $\dfrac{n+2}{n} = 1 + \dfrac{2}{n}$ est le terme général de $3, 2, \dfrac{5}{3}, \dots$.
- $4, \dfrac{7}{3}, 2, \dfrac{13}{7}, \dots$ a pour terme général $\dfrac{3n+1}{2n-1}$ car numérateur et dénominateur sont des suites arithmétiques.
- $\dfrac{1}{2}, \dfrac{4}{5}, \dfrac{7}{10}, \dfrac{10}{17}, \dots$ a pour terme général $\dfrac{3n-2}{n^2+1}$.
- $\dfrac{2}{3}, 0, \dfrac{4}{15}, 0, \dots$ a pour terme général $\dfrac{1 - (-1)^n}{2} \cdot \dfrac{n+1}{n^2+2n}$ car le premier facteur vaut $1$ pour $n$ impair et $0$ pour $n$ pair.
- $5, \dfrac{5}{3}, \dfrac{5}{7}, \dfrac{1}{3}, \dots$ a pour terme général $\dfrac{5}{2^n - 1}$.
