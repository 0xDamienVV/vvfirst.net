---
title: Tangente et cotangente
order: 2
---

# Définition
Soit $\alpha \in \mathbb{R}$.
> [!definition] Définition
> La **tangente** est $\tan\alpha = \dfrac{\sin\alpha}{\cos\alpha}$ si $\alpha \neq \dfrac{\pi}{2} + k\pi$.  
> La **cotangente** est $\cot\alpha = \dfrac{\cos\alpha}{\sin\alpha}$ si $\alpha \neq k\pi$, avec $k \in \mathbb{Z}$.

### Exemple
- $\tan\dfrac{\pi}{4} = 1$ et $\cot\dfrac{\pi}{4} = 1$ car $\sin\dfrac{\pi}{4} = \cos\dfrac{\pi}{4}$.

# Interprétation géométrique
Soit $\alpha \neq \dfrac{\pi}{2} + k\pi$.
> [!property] Propriété
> La demi-droite $[OP(\alpha))$ (ou son prolongement) coupe la droite verticale $x = 1$, tangente au cercle en $(1, 0)$, au point $(1, \tan\alpha)$.

### Exemple
- Pour $\alpha = \dfrac{\pi}{4}$ et $\beta = -\dfrac{\pi}{4}$, les points de la tangente sont à la hauteur $1$ et $-1$, donc leur distance est $2$ car ce sont les ordonnées $\tan\alpha$ et $\tan\beta$.

# Périodicité
Soit $\alpha$ dans le domaine de définition et $k \in \mathbb{Z}$.
> [!property] Propriété
> $\tan(\alpha + k\pi) = \tan\alpha$  
> $\cot(\alpha + k\pi) = \cot\alpha$

La période est $\pi$ (et non $2\pi$ comme pour [[sinus-et-cosinus|sinus et cosinus]]).

### Exemples
- $\tan\dfrac{163\pi}{4} = \tan\dfrac{3\pi}{4} = -1$ car $\dfrac{163\pi}{4} = 40\pi + \dfrac{3\pi}{4}$.
- $\cot\left(-\dfrac{67\pi}{3}\right) = \cot\dfrac{5\pi}{3} = -\dfrac{\sqrt{3}}{3}$ car $-\dfrac{67\pi}{3} + 24\pi = \dfrac{5\pi}{3}$.
