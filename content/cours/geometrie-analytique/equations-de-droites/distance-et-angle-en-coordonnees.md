---
title: Distance et angle en coordonnées
order: 4
---
Dans un repère **orthonormé direct** de $\mathbb{R}^2$, soient $d : ax + by = c$ et $P(x_P, y_P)$.
> [!definition] Formules
> - **Distance** de $P$ à $d$ : $\text{dist}(P, d) = \dfrac{|ax_P + by_P - c|}{\sqrt{a^2 + b^2}}$ (voir [[distance-d-un-point-a-une-droite|distance d'un point à une droite]]).
> - **Côté** : le signe de $ax_P + by_P - c$ indique de quel côté de $d$ se trouve $P$.
> - **Angle avec l'axe des abscisses** : l'angle orienté de $\vec{i}$ vers le vecteur directeur $\begin{pmatrix}-b \\ a\end{pmatrix}$ (voir [[determinant-et-orientation|angle orienté]]), défini modulo $\pi$.

### Exemples
Avec $A(1,-2)$, $B(5,7)$ et $d : x + 3y = 5$ :
- $\text{dist}(A, d) = \dfrac{|1 - 6 - 5|}{\sqrt{10}} = \sqrt{10}$.
- $A$ et $B$ ne sont PAS du même côté de $d$ car $1 - 6 - 5 = -10$ et $5 + 21 - 5 = 21$ sont de signes opposés.
- Les points de $d' : x - y = 2$ à distance $\sqrt{2}$ de $d : x + y = 1$ vérifient $|x + y - 1| = 2$ car $\|\vec{n}\| = \sqrt{2}$ ; avec $x - y = 2$ on obtient $(3,1)$ et $(1,-1)$.
- L'angle de $d$ avec l'axe des abscisses vaut $\arctan\left(-\tfrac{1}{3}\right) \approx -18{,}4^\circ$ car un vecteur directeur est $\begin{pmatrix}3 \\ -1\end{pmatrix}$.
