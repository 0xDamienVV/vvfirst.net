---
title: Familles d'angles
order: 3
---

# Famille d'angles
Soient $\alpha_0 \in \mathbb{R}$ et $\theta > 0$.
> [!definition] Définition
> Une **famille d'angles** est un ensemble $A = \{\alpha_0 + k\theta \mid k \in \mathbb{Z}\}$ (voir [[ensembles-de-nombres|ensembles de nombres]]).

> [!property] Propriété
> Si $\theta = \dfrac{2\pi}{n}$ avec $n \in \mathbb{N}^*$, les points $P(\alpha)$ pour $\alpha \in A$ sont les $n$ sommets d'un **polygone régulier** inscrit dans le cercle trigonométrique.

### Exemples
- $\dfrac{\pi}{4} + k\dfrac{\pi}{2}$ donne $4$ points car $\dfrac{\pi}{2} = \dfrac{2\pi}{4}$ : les sommets d'un carré.
- $k\dfrac{\pi}{3}$ donne $6$ points car $\dfrac{\pi}{3} = \dfrac{2\pi}{6}$ : les sommets d'un hexagone régulier.
- $-\dfrac{23\pi}{6} + k\dfrac{2\pi}{3}$ donne $3$ points car $\dfrac{2\pi}{3} = \dfrac{2\pi}{n}$ avec $n = 3$ : les sommets d'un triangle équilatéral.

# Intersection avec un intervalle
Soit $A = \{\alpha_0 + k\theta \mid k \in \mathbb{Z}\}$ et un [[intervalles|intervalle]] $[a, b]$.
> [!property] Propriété
> $A \cap [a, b]$ est formé des $\alpha_0 + k\theta$ dont l'indice $k$ vérifie $\dfrac{a - \alpha_0}{\theta} \leq k \leq \dfrac{b - \alpha_0}{\theta}$ (voir [[operations-ensemblistes#intersection|intersection]]).

### Exemples
Avec $A = \left\{\dfrac{\pi}{6} + k\pi \mid k \in \mathbb{Z}\right\}$ :
- $A \cap [0, 2\pi] = \left\{\dfrac{\pi}{6}, \dfrac{7\pi}{6}\right\}$ car seuls $k = 0$ et $k = 1$ conviennent.
- $A \cap [-\pi, 0] = \left\{-\dfrac{5\pi}{6}\right\}$ car seul $k = -1$ convient.
- $A \cap [-\pi, 2\pi] = \left\{-\dfrac{5\pi}{6}, \dfrac{\pi}{6}, \dfrac{7\pi}{6}\right\}$ car $k = -1, 0, 1$ conviennent.

# Rencontre de deux mobiles
> [!property] Propriété
> Deux mobiles de positions angulaires $\alpha_1(t)$ et $\alpha_2(t)$ sont au même point lorsque $\alpha_1(t) - \alpha_2(t) \in 2\pi\mathbb{Z}$ (voir [[cercle-trigonometrique#périodicité|périodicité]]).

### Exemples
- Deux coureurs partent de $A$ en sens inverses, l'un en $60$ s par tour, l'autre en $250$ s : $\dfrac{2\pi t}{60} + \dfrac{2\pi t}{250} = 2\pi n$, donc $t_n = n \cdot \dfrac{1500}{31}$ s. Ils sont ensemble en $A$ quand $t$ est multiple de $60$ et de $250$, donc au bout de $1500$ s $= 25$ min.
- Les aiguilles des heures et des minutes d'une montre sont superposées à midi : $\dfrac{2\pi t}{3600} - \dfrac{2\pi t}{43200} = 2\pi k$, donc $t = k \cdot \dfrac{43200}{11}$ s $\approx k \cdot (1\text{ h }5'\,27'')$.

> [!property] Mobiles opposés
> Deux mobiles sont aux points **diamétralement opposés** lorsque $\alpha_1(t) - \alpha_2(t) \in \pi + 2\pi\mathbb{Z}$.  
> L'angle géométrique entre deux demi-droites est l'unique valeur de $[0, \pi]$ égale à $\pm(\alpha_1 - \alpha_2)$ modulo $2\pi$.

### Exemples
- Deux coureurs de même sens sur une piste de $200$ m, le plus rapide courant deux fois plus vite et le plus lent partant avec un demi-tour d'avance : le plus rapide rattrape le plus lent quand $2\theta - (\pi + \theta) \in 2\pi\mathbb{Z}$, où $\theta$ est l'angle parcouru par le plus lent, donc $\theta = \pi + 2k\pi$. À la quatrième rencontre ($k = 3$), le plus lent a parcouru $\dfrac{7\pi}{2\pi} \cdot 200 = 700$ m.
- Pour une horloge, l'angle de l'aiguille des minutes est $2\pi t$ et celui des heures $\dfrac{2\pi t}{12}$ (en heures depuis midi). Elles sont opposées quand $\dfrac{11}{12} \cdot 2\pi t = \pi + 2k\pi$, soit $11t = 6 + 12k$. À $12$ h $15$, $t = \dfrac{1}{4}$ et l'angle vaut $\dfrac{11}{12} \cdot 90^\circ = 82{,}5^\circ$.