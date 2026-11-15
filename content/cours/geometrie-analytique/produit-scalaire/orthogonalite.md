---
title: Orthogonalité
order: 4
---
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]].
> [!definition] Définition
> $\vec{u}$ et $\vec{v}$ sont **orthogonaux** si $\vec{u} \cdot \vec{v} = 0$ (voir [[definition-produit-scalaire|produit scalaire]]).  
> Le vecteur nul est orthogonal à tout vecteur. Pour deux vecteurs non nuls, cela revient à $\theta = 90^\circ$.

>[!property] Remarque
> - Dans $\mathbb{R}^2$, les vecteurs $\vec{w}$ tels que $\vec{u} \cdot \vec{w} = 0$ forment une **direction de droite** ; dans $\mathbb{R}^3$, une **direction de plan**.
> - $\vec{a}\cdot\vec{w} = \vec{b}\cdot\vec{w}$ équivaut à $(\vec{a} - \vec{b}) \cdot \vec{w} = 0$.

### Exemples
- Avec $\|\vec{u}\| = 3$, $\|\vec{v}\| = 5$ et $\vec{u}\cdot\vec{v} = \tfrac{15}{2}$, $\vec{u}+\alpha\vec{v}$ est orthogonal à $\vec{u}$ si $9 + \tfrac{15}{2}\alpha = 0$, c'est-à-dire $\alpha = -\tfrac{6}{5}$.
- $(2\vec{u}+\vec{v})\cdot\vec{w} = 3\,\vec{u}\cdot\vec{w}$ équivaut à $(\vec{v} - \vec{u})\cdot\vec{w} = 0$ : les $\vec{w}$ forment la direction perpendiculaire à $\vec{v} - \vec{u}$.
- Dans un cube $ABCDEFGH$ de côté $2$, $\overrightarrow{AC}\cdot\overrightarrow{EB} = (\overrightarrow{AB} + \overrightarrow{AD})\cdot(\overrightarrow{AB} - \overrightarrow{AE}) = 4$ car $\overrightarrow{AB}$, $\overrightarrow{AD}$, $\overrightarrow{AE}$ sont deux à deux orthogonaux.
- Dans ce cube, $\overrightarrow{AC}$ est orthogonal à $(BDF)$, donc pour $M \in (BDF)$ : $\overrightarrow{AC}\cdot\overrightarrow{EM} = \overrightarrow{AC}\cdot\overrightarrow{EB} + \overrightarrow{AC}\cdot\overrightarrow{BM} = 4 + 0 = 4$.
