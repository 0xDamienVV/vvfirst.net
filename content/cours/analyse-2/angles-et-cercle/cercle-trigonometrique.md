---
title: Cercle trigonométrique
order: 2
---

# Point associé
> [!definition] Définition
> Le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$ dans un repère orthonormé.  
> Le **point associé** $P(\alpha)$ à l'angle $\alpha \in \mathbb{R}$ est obtenu en parcourant, depuis $P(0) = (1, 0)$, un arc de longueur $|\alpha|$ :
> - dans le sens **trigonométrique** (anti-horaire) si $\alpha > 0$,
> - dans le sens **horaire** si $\alpha < 0$.

### Exemple
- $P\left(\dfrac{\pi}{2}\right) = (0, 1)$ car un quart de tour anti-horaire depuis $P(0)$ amène en haut du cercle.

# Périodicité
Soient $\alpha, \beta \in \mathbb{R}$.
> [!property] Propriété
> $P(\alpha) = P(\beta) \iff \alpha - \beta \in 2\pi\mathbb{Z}$

Un même point est donc associé à une **infinité** d'angles.

### Exemples
- $P(15\pi) = P(\pi)$ car $15\pi - \pi = 14\pi = 7 \cdot 2\pi$.
- $P(-6\pi) = P(0)$ car $-6\pi = -3 \cdot 2\pi$.
- $P\left(-\dfrac{11\pi}{2}\right) = P\left(\dfrac{\pi}{2}\right)$ car $-\dfrac{11\pi}{2} + 6\pi = \dfrac{\pi}{2}$.

# Angle dans un intervalle
Soient $P$ un point du cercle trigonométrique et un intervalle $[a, a + 2\pi[$.
> [!property] Propriété
> Il existe **un seul** angle $\alpha \in [a, a + 2\pi[$ tel que $P = P(\alpha)$.  
> On l'obtient en ajoutant ou retirant un multiple de $2\pi$.

### Exemples
- $P\left(\dfrac{\pi}{3}\right) = P\left(-\dfrac{5\pi}{3}\right)$ avec $-\dfrac{5\pi}{3} \in [-2\pi, 0]$ car $\dfrac{\pi}{3} - 2\pi = -\dfrac{5\pi}{3}$.
- $P\left(\dfrac{11\pi}{4}\right) = P\left(\dfrac{3\pi}{4}\right)$ avec $\dfrac{3\pi}{4} \in [0, 2\pi]$ car $\dfrac{11\pi}{4} - 2\pi = \dfrac{3\pi}{4}$.
- $P\left(-\dfrac{17\pi}{6}\right) = P\left(\dfrac{19\pi}{6}\right)$ avec $\dfrac{19\pi}{6} \in [2\pi, 4\pi]$ car $-\dfrac{17\pi}{6} + 6\pi = \dfrac{19\pi}{6}$.

# Arc $[a, b]$
Soient $a \leq b$ deux réels.
> [!property] Propriété
> $\{P(\alpha) \mid \alpha \in [a, b]\}$ est l'**arc** parcouru dans le sens trigonométrique de $P(a)$ à $P(b)$.  
> Si $b - a \geq 2\pi$, c'est le cercle entier.

### Exemples
- $\{P(\alpha) \mid \alpha \in [0, \tfrac{\pi}{2}]\}$ est le quart de cercle du premier quadrant car on va de $P(0)$ à $P\left(\tfrac{\pi}{2}\right)$.
- $\{P(\alpha) \mid \alpha \in [\tfrac{\pi}{2}, \tfrac{5\pi}{2}]\}$ est le cercle entier car $\tfrac{5\pi}{2} - \tfrac{\pi}{2} = 2\pi$.
