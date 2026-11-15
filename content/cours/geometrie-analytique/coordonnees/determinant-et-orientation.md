---
title: Déterminant et orientation
order: 6
---
Soient $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère orthonormé de $\mathbb{R}^2$.
> [!definition] Définition
> Le repère est **direct** si l'angle orienté de $\vec{i}$ vers $\vec{j}$ vaut $+\tfrac{\pi}{2}$.  
> L'**angle orienté** $\theta$ de $\vec{u}$ vers $\vec{v}$, dans un repère orthonormé direct, vérifie :
> $\cos\theta = \dfrac{\vec{u}\cdot\vec{v}}{\|\vec{u}\|\,\|\vec{v}\|}$ et $\sin\theta = \dfrac{\det(\vec{u}, \vec{v})}{\|\vec{u}\|\,\|\vec{v}\|}$

>[!property] Remarque
> - $\det(\vec{u}, \vec{v}) > 0$ : $(\vec{u}, \vec{v})$ est **direct** ; $< 0$ : **indirect**.
> - $\text{Aire}(ABC) = \tfrac{1}{2}\,|\det(\overrightarrow{AB}, \overrightarrow{AC})|$, et $ABC$ est orienté directement si ce déterminant est positif.
> - Si $\vec{u}\begin{pmatrix}a \\ b\end{pmatrix}$, les vecteurs orthogonaux à $\vec{u}$ de même norme sont $\pm\begin{pmatrix}-b \\ a\end{pmatrix}$.

### Exemple
Avec $A(5,2)$, $B(-1,4)$, $C(1,6)$ : $\overrightarrow{AB}\begin{pmatrix}-6 \\ 2\end{pmatrix}$ et $\overrightarrow{AC}\begin{pmatrix}-4 \\ 4\end{pmatrix}$.
- $\det(\overrightarrow{AB}, \overrightarrow{AC}) = -16$ : l'aire vaut $8$ et le triangle est orienté **indirectement**.
- $\cos\theta = \tfrac{2}{\sqrt{5}}$ et $\sin\theta = -\tfrac{1}{\sqrt{5}}$ : $\theta \approx -26{,}6^\circ$.
- Si $M \in d : \overrightarrow{AM} = t\,\vec{u}$, alors $\text{Aire}(ABM) = \tfrac{1}{2}|\det(\overrightarrow{AB}, \overrightarrow{AM})|$ est une fonction affine de $t$ : imposer l'aire donne une équation en $t$ (deux solutions avec la valeur absolue).
- Un vecteur orthogonal à $\overrightarrow{AB}$ et de même norme $2\sqrt{10}$ est $\begin{pmatrix}2 \\ 6\end{pmatrix}$.
