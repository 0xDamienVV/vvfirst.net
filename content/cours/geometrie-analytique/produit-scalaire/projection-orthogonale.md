---
title: Projection orthogonale
order: 5
---
Soient $\vec{u}$ un [[vecteur]] et $\vec{v} \neq \vec{0}$.
> [!definition] Définition
> Le **projeté orthogonal** de $\vec{u}$ sur $\vec{v}$ est le vecteur $p_{\vec{v}}(\vec{u})$ [[colinearite|colinéaire]] à $\vec{v}$ tel que $\vec{u} - p_{\vec{v}}(\vec{u})$ soit [[orthogonalite|orthogonal]] à $\vec{v}$ :
> $p_{\vec{v}}(\vec{u}) = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{v}\|^2}\,\vec{v}$

>[!property] Remarque
> - $\|p_{\vec{v}}(\vec{u})\| = \dfrac{|\vec{u} \cdot \vec{v}|}{\|\vec{v}\|}$.
> - $\vec{u} \cdot \vec{v} = p_{\vec{v}}(\vec{u}) \cdot \vec{v}$ : le produit scalaire ne dépend que de la projection.

### Exemples
- Avec $\|\vec{v}\| = 5$ et $\vec{u}\cdot\vec{v} = \tfrac{15}{2}$ : $p_{\vec{v}}(\vec{u}) = \tfrac{15/2}{25}\,\vec{v} = \tfrac{3}{10}\vec{v}$.
- Avec $\|\vec{u}\|^2 = 2$ et $\vec{u}\cdot\vec{v} = 3$ : $\|p_{\vec{u}}(\vec{u}+\alpha\vec{v})\| = \tfrac{|2+3\alpha|}{\sqrt{2}}$, qui vaut $2$ si $\alpha = \tfrac{-2 \pm 2\sqrt{2}}{3}$.
- $\vec{v}\cdot\vec{w} = \vec{u}\cdot\vec{v}$ équivaut à $p_{\vec{v}}(\vec{w}) = p_{\vec{v}}(\vec{u})$ : les extrémités des $\vec{w}$ forment la perpendiculaire à $\vec{v}$ passant par l'extrémité de $p_{\vec{v}}(\vec{u})$.
