---
title: Vecteurs de l'espace
order: 8
---
Les vecteurs de $\mathbb{R}^3$ suivent les mêmes règles que ceux de $\mathbb{R}^2$.
> [!definition] Définition
> Trois vecteurs $\vec{u}$, $\vec{v}$, $\vec{w}$ sont **coplanaires** si l'un est [[combinaison-lineaire|combinaison linéaire]] des deux autres.

>[!property] Remarque
> - Si $\vec{u}$, $\vec{v}$, $\vec{w}$ ne sont **pas coplanaires**, tout vecteur de $\mathbb{R}^3$ s'écrit de manière unique $\alpha\vec{u} + \beta\vec{v} + \gamma\vec{w}$.
> - Dans un **parallélépipède** $ABCDEFGH$ (base $ABCD$, $E$ au-dessus de $A$), $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AE}$ servent de référence.
> - Les arêtes parallèles donnent des vecteurs égaux : $\overrightarrow{DH} = \overrightarrow{AE} = \overrightarrow{BF} = \overrightarrow{CG}$ et $\overrightarrow{HG} = \overrightarrow{EF} = \overrightarrow{DC} = \overrightarrow{AB}$.

### Exemples
Avec $I$ milieu de $[HG]$ et $J$ centre de $ABCD$ :
- $\overrightarrow{AI} = \overrightarrow{AD} + \overrightarrow{DH} + \overrightarrow{HI} = \tfrac{1}{2}\overrightarrow{AB} + \overrightarrow{AD} + \overrightarrow{AE}$.
- $\overrightarrow{EJ} = \overrightarrow{EA} + \tfrac{1}{2}\overrightarrow{AC} = \tfrac{1}{2}\overrightarrow{AB} + \tfrac{1}{2}\overrightarrow{AD} - \overrightarrow{AE}$.
- Si $\overrightarrow{JK} = \tfrac{1}{2}\overrightarrow{AB} + \overrightarrow{AE}$, alors $\overrightarrow{EK} = \overrightarrow{EJ} + \overrightarrow{JK} = \overrightarrow{EF} + \tfrac{1}{2}\overrightarrow{FG}$ : $K$ est le milieu de $[FG]$.
