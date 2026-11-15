---
title: Définition du produit scalaire
order: 2
---

# Définition
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] de $\mathbb{R}^2$ ou $\mathbb{R}^3$, et $\theta$ l'[[angle-entre-deux-vecteurs|angle]] qu'ils forment.
> [!definition] Définition
> Le **produit scalaire** de $\vec{u}$ et $\vec{v}$ est le **réel** :
> $\vec{u} \cdot \vec{v} = \|\vec{u}\| \, \|\vec{v}\| \cos\theta$
>
> Si $\vec{u} = \vec{0}$ ou $\vec{v} = \vec{0}$, alors $\vec{u} \cdot \vec{v} = 0$.

> [!warning] Attention
> Le produit scalaire de deux vecteurs est un **réel**, pas un vecteur.  
> De plus $\vec{u} \cdot \vec{v} = \vec{u} \cdot \vec{w}$ n'implique PAS $\vec{v} = \vec{w}$.

### Exemple
- Avec $\|\vec{u}\| = 3$, $\|\vec{v}\| = 5$ et $\theta = 60^\circ$ : $\vec{u} \cdot \vec{v} = 3 \cdot 5 \cdot \tfrac{1}{2} = \tfrac{15}{2}$ car $\cos 60^\circ = \tfrac{1}{2}$.

# Calcul d'un angle
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] non nuls.
> [!property] Propriété
> $\cos\theta = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|}$

### Exemple
- Avec $\|\vec{u}\| = \sqrt{2}$, $\|\vec{v}\| = \sqrt{5}$ et $\vec{u}\cdot\vec{v} = 3$ : $\cos\theta = \tfrac{3}{\sqrt{10}}$ car on isole $\cos\theta$ dans la définition, donc $\theta \approx 18{,}4^\circ$.

# Symétrie
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] quelconques.
> [!property] Propriété
> $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$

### Exemple
- $\overrightarrow{AB}\cdot\overrightarrow{AC}$ est identique à $\overrightarrow{AC}\cdot\overrightarrow{AB}$ car l'angle et les normes ne dépendent pas de l'ordre.

# Bilinéarité
Soient $\vec{u}$, $\vec{v}$ et $\vec{w}$ trois [[vecteur|vecteurs]] quelconques ainsi que $\alpha, \beta \in \mathbb{R}$.
> [!property] Propriété
> $(\alpha\vec{u} + \beta\vec{v}) \cdot \vec{w} = \alpha\,\vec{u} \cdot \vec{w} + \beta\,\vec{v} \cdot \vec{w}$

Par [[definition-produit-scalaire#symétrie|symétrie]], cela vaut aussi pour le second vecteur : on peut développer le produit scalaire de [[combinaison-lineaire|combinaisons linéaires]].

### Exemple
- Avec $\|\vec{u}\|^2 = 2$, $\|\vec{v}\|^2 = 5$ et $(2\vec{u}+\vec{v}) \cdot (11\vec{u}-7\vec{v}) = 0$ : $22 \cdot 2 - 14\,\vec{u}\cdot\vec{v} + 11\,\vec{u}\cdot\vec{v} - 7 \cdot 5 = 0$ car on développe terme à terme, donc $\vec{u} \cdot \vec{v} = 3$.

# Carré scalaire
Soit $\vec{u}$ un [[vecteur]] quelconque.
> [!property] Propriété
> $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$

### Exemple
- $\overrightarrow{AB}\cdot\overrightarrow{AB}$ est identique à $AB^2$ car l'angle d'un vecteur avec lui-même est nul et $\cos 0 = 1$.

# Signe
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] non nuls et $\theta$ leur angle.
> [!property] Propriété
> $\vec{u} \cdot \vec{v} > 0$ si $\theta < 90^\circ$  
> $\vec{u} \cdot \vec{v} < 0$ si $\theta > 90^\circ$  
> $\vec{u} \cdot \vec{v} = 0$ si $\theta = 90^\circ$

### Exemple
- $\overrightarrow{AB}\cdot\overrightarrow{BA}$ est négatif car l'angle vaut $180^\circ$ et $\cos 180^\circ = -1$.
