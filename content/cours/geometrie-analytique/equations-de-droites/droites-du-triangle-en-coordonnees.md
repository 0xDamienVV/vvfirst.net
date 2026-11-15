---
title: Droites du triangle en coordonnées
order: 5
---
Dans un repère **orthonormé direct** de $\mathbb{R}^2$, soit $ABC$ un triangle avec $b = CA$ et $c = AB$.
> [!definition] Équations
> - **Hauteur** issue de $A$ : $\overrightarrow{BC}$ est un vecteur normal et la droite passe par $A$.
> - **Médiatrice** de $[BC]$ : $\overrightarrow{BC}$ est un vecteur normal et la droite passe par le [[milieu]] de $[BC]$.
> - **Médiane** issue de $A$ : la droite passe par $A$ et par le milieu de $[BC]$.
> - **Bissectrice** en $A$ : le vecteur $\dfrac{\overrightarrow{AB}}{c} + \dfrac{\overrightarrow{AC}}{b}$ est directeur (voir [[bissectrice-et-centre-du-cercle-inscrit|bissectrice]]).
>
> On en déduit une [[equation-cartesienne|équation cartésienne]] : un vecteur normal $\begin{pmatrix}p \\ q\end{pmatrix}$ donne $px + qy = c'$, et un vecteur directeur $\begin{pmatrix}p \\ q\end{pmatrix}$ donne le vecteur normal $\begin{pmatrix}q \\ -p\end{pmatrix}$.

>[!property] Remarque
> - Un point de l'une de ces droites s'obtient en résolvant le système avec une autre droite (voir [[positions-relatives-de-droites|positions relatives]]).
> - Le symétrique de $B$ par rapport à une droite $m$ est le point $C$ tel que le pied $H$ de la perpendiculaire à $m$ issue de $B$ est le milieu de $[BC]$ : $C = 2H - B$.

### Exemples
Avec $A(7,4)$, $B(8,5)$, $C(6,11)$ :
- $x + y = 17$ est la hauteur issue de $C$ car elle est normale à $\overrightarrow{AB}\begin{pmatrix}1 \\ 1\end{pmatrix}$ et passe par $C$ ($6 + 11 = 17$).
- La médiane issue de $B$ est $5x + 3y = 55$ car elle passe par $B$ et par le milieu $\left(\tfrac{13}{2}, \tfrac{15}{2}\right)$ de $[AC]$.
- La bissectrice en $A$ est $3x - y = 17$ car $\|\overrightarrow{AC}\| = 5\|\overrightarrow{AB}\|$, donc $5\overrightarrow{AB} + \overrightarrow{AC}\begin{pmatrix}4 \\ 12\end{pmatrix}$ est directeur.

Avec $B(8,-4)$ et $m : 3x - 2y + 7 = 0$ médiatrice de $[BC]$ :
- $(BC) : 2x + 3y = 4$ car $\begin{pmatrix}3 \\ -2\end{pmatrix}$ est normal à $m$ ; elle coupe $m$ en $H(-1,2)$, donc $C = 2H - B = (-10, 8)$.
