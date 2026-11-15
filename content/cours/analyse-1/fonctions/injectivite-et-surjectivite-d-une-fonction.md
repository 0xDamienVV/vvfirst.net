---
title: Injectivité et surjectivité d'une fonction
order: 5
---
Soit $f : D \to B$ une fonction réelle.
> [!definition] Rappel
> $f$ est **injective** (voir [[injectivite|injectivité]]) si deux éléments distincts ont des images distinctes, **surjective** (voir [[surjectivite|surjectivité]]) si tout élément de $B$ a un [[antecedent|antécédent]], et **bijective** (voir [[bijection|bijection]]) si elle est les deux.

> [!property] Rendre une fonction injective ou surjective
> - **Rendre $f$ surjective** : remplacer l'ensemble d'arrivée par $\operatorname{Im} f$.
> - **Rendre $f$ injective** : restreindre $D$ à un intervalle où $f$ est **strictement monotone** (voir [[suite-monotone|suite monotone]]), c'est-à-dire strictement croissante ou strictement décroissante.

### Exemples
- $f(x) = \dfrac{x^2 + 10x + 1}{x^2 + 1}$ n'est pas surjective de $\mathbb{R}$ dans $\mathbb{R}$ car $f(x) = y$ s'écrit $(y-1)x^2 - 10x + (y-1) = 0$, qui a une solution si et seulement si $100 - 4(y-1)^2 \geq 0$, soit $y \in [-4, 6]$ : elle devient surjective de $\mathbb{R}$ dans $[-4, 6]$.
- $a(x) = \dfrac{1}{1 - x^2}$ sur $]-1, 1[$ est paire et strictement décroissante sur $]-1, 0]$ : le plus grand intervalle contenant $x_0 = -\dfrac{2}{3}$ sur lequel elle est injective est $]-1, 0]$.
- $b(x) = \sin x$ est strictement croissante ou décroissante sur chaque intervalle $\left[\dfrac{\pi}{2} + k\pi, \dfrac{3\pi}{2} + k\pi\right]$ : le plus grand intervalle contenant $9$ est $\left[\dfrac{5\pi}{2}, \dfrac{7\pi}{2}\right]$ car $\dfrac{5\pi}{2} \approx 7{,}85 < 9 < \dfrac{7\pi}{2} \approx 10{,}99$.
