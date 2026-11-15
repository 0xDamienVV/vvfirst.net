---
title: Trinôme du second degré
order: 1
---
Soit $P(x) = ax^2 + bx + c$ avec $a \neq 0$ et $\Delta = b^2 - 4ac$.

# Forme canonique
> [!property] Propriété
> $P(x) = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$

### Exemple
- $x^2 + 6x = (x + 3)^2 - 9$ car on complète le carré (voir [[comparaison-de-deux-expressions|comparaison de deux expressions]]).

# Racines
> [!property] Propriété
> - Si $\Delta > 0$ : deux racines $x_\pm = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ et $P(x) = a(x - x_+)(x - x_-)$.
> - Si $\Delta = 0$ : une racine double $-\dfrac{b}{2a}$ et $P(x) = a\left(x + \dfrac{b}{2a}\right)^2$.
> - Si $\Delta < 0$ : aucune racine réelle.

### Exemple
- $x^2 + x - 2$ a pour $\Delta = 9$ et pour racines $1$ et $-2$ car $\dfrac{-1 \pm 3}{2}$ vaut $1$ ou $-2$.

# Signe
> [!property] Propriété
> - Si $\Delta > 0$ : $P$ a le signe de $a$ **à l'extérieur** des racines et le signe de $-a$ entre elles.
> - Si $\Delta \leq 0$ : $P$ a le signe de $a$ partout (et s'annule en la racine double si $\Delta = 0$).

### Exemple
- $x^2 + x - 2 < 0 \iff x \in ]-2, 1[$ car $a > 0$ et le trinôme est négatif entre ses racines.

# Forme factorisée avec paramètre
> [!property] Propriété
> $A^2 - B^2 = (A - B)(A + B)$ permet de factoriser un trinôme écrit comme une différence de carrés, et le signe de $a$ peut dépendre d'un paramètre.

### Exemple
- $p(x) = m(x-1)^2 - m(m-1)^2 = m(x - m)(x - (2 - m))$ a pour racines $m$ et $2 - m$ car $(x-1)^2 - (m-1)^2 = (x - m)(x + m - 2)$. Si $m > 0$, $p \geq 0$ sur $]-\infty, \min(m, 2-m)] \cup [\max(m, 2-m), +\infty[$ ; si $m < 0$, le signe est inversé, donc $p(x) \geq 0$ sur $[m, 2-m]$.

# Sommet
> [!property] Propriété
> Le graphe de $P$ est une **parabole** de sommet d'abscisse $x_S = -\dfrac{b}{2a}$.  
> $P$ y atteint un **minimum** si $a > 0$ et un **maximum** si $a < 0$.

### Exemple
- Un domaine formé d'un rectangle $ABCE$ de côtés $a$ et $b$ et d'un triangle isocèle rectangle $ECD$ de base $EC = a$ a pour périmètre $a + 2b + \sqrt{2}\,a = 10$, donc $b = \dfrac{10 - (\sqrt{2}+1)a}{2}$, et pour aire $\mathcal{A}(a) = ab + \dfrac{a^2}{4} = 5a - \dfrac{2\sqrt{2}+1}{4}a^2$. Cette parabole est maximale en $a = \dfrac{10}{2\sqrt{2}+1}$, qui est bien dans l'ensemble admissible $\left]0, \dfrac{10}{1 + \sqrt{2}}\right[$ (condition $b > 0$).
