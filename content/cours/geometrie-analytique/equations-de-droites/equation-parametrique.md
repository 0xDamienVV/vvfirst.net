---
title: Équation paramétrique
order: 1
---
Dans un repère de $\mathbb{R}^2$, soient $A(x_0, y_0)$ et $\vec{u}\begin{pmatrix} a \\ b \end{pmatrix} \neq \vec{0}$.
> [!definition] Définition
> Des **équations paramétriques** de la droite $d$ passant par $A$ de vecteur directeur $\vec{u}$ sont :
> $\begin{cases} x = x_0 + t\,a \\ y = y_0 + t\,b \end{cases}, \quad t \in \mathbb{R}$
>
> C'est l'[[equation-vectorielle-de-droite|équation vectorielle]] $\overrightarrow{AM} = t\,\vec{u}$ écrite en coordonnées.

>[!property] Remarque
> Un point $P$ appartient à $d$ si et seulement si un **même** $t$ convient pour $x$ et pour $y$.

### Exemple
Avec $g : \begin{cases} x = 2 + t \\ y = -1 - t \end{cases}$ :
- $A(0,3) \notin g$ car $x = 0$ donne $t = -2$, mais alors $y = 1 \neq 3$.
- Le vecteur directeur est $\begin{pmatrix}1 \\ -1\end{pmatrix}$, donc la parallèle à $g$ passant par $A$ est $\begin{cases} x = t \\ y = 3 - t \end{cases}$.
