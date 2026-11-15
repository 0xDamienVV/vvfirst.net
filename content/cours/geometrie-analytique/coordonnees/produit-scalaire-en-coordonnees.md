---
title: Produit scalaire en coordonnées
order: 5
---
Soient $\vec{u}\begin{pmatrix} x \\ y \end{pmatrix}$ et $\vec{v}\begin{pmatrix} x' \\ y' \end{pmatrix}$ dans un repère $(O, \vec{i}, \vec{j})$ de $\mathbb{R}^2$.
> [!definition] Repère orthonormé
> Dans un repère orthonormé, le **produit scalaire** vaut $\vec{u}\cdot\vec{v} = xx' + yy'$ et la **norme** vaut $\|\vec{u}\| = \sqrt{x^2 + y^2}$.

>[!property] Repère quelconque
> Par [[definition-produit-scalaire#bilinéarité|bilinéarité]] :  
> $\vec{u}\cdot\vec{v} = xx'\,\|\vec{i}\|^2 + yy'\,\|\vec{j}\|^2 + (xy' + x'y)\,\vec{i}\cdot\vec{j}$

> [!warning] Attention
> La formule $xx' + yy'$ est **fausse** dans un repère non orthonormé.

### Exemples
Avec $\|\vec{i}\| = 1$, $\|\vec{j}\| = \sqrt{2}$ et $\vec{i}\cdot\vec{j} = 1$ :
- $\vec{u}\cdot\vec{v} = xx' + 2yy' + xy' + x'y$ et $\|\vec{u}\|^2 = x^2 + 2y^2 + 2xy$.
- Pour $A(5,-3)$, $B(12,-2)$, $C(2,4)$ : $\overrightarrow{AB}\begin{pmatrix}7 \\ 1\end{pmatrix}$ et $\overrightarrow{AC}\begin{pmatrix}-3 \\ 7\end{pmatrix}$ ont pour carrés de norme $65$ et $65$, donc $ABC$ est isocèle en $A$. De plus $\overrightarrow{AB}\cdot\overrightarrow{AC} = 39$, donc $\cos\widehat{BAC} = \tfrac{3}{5}$ et $\widehat{BAC} \approx 53{,}1^\circ$.
- $(O, \vec{i}, \vec{j} - \vec{i})$ est orthonormé car $\|\vec{j} - \vec{i}\|^2 = 2 - 2 + 1 = 1$ et $\vec{i}\cdot(\vec{j}-\vec{i}) = 0$ ; $\vec{u}$ y a pour coordonnées $\begin{pmatrix} x+y \\ y\end{pmatrix}$.
