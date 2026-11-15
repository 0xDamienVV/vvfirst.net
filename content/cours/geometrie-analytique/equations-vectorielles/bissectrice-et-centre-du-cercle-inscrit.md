---
title: Bissectrice et centre du cercle inscrit
order: 5
---
Soit $ABC$ un triangle avec $a = BC$, $b = CA$, $c = AB$.
> [!definition] Définition
> La **bissectrice** en $A$ partage l'angle $\widehat{BAC}$ en deux angles égaux. Un vecteur directeur est la **somme des vecteurs unitaires** des deux côtés :
> $\dfrac{\overrightarrow{AB}}{\|\overrightarrow{AB}\|} + \dfrac{\overrightarrow{AC}}{\|\overrightarrow{AC}\|} = \dfrac{\overrightarrow{AB}}{c} + \dfrac{\overrightarrow{AC}}{b}$
>
> Les trois bissectrices se coupent en un point $I$, le centre du **cercle inscrit**, tel que :
> $\overrightarrow{AI} = \dfrac{b\,\overrightarrow{AB} + c\,\overrightarrow{AC}}{a + b + c}$ et $a\,\overrightarrow{IA} + b\,\overrightarrow{IB} + c\,\overrightarrow{IC} = \vec{0}$

>[!property] Remarque
> Deux vecteurs de même norme forment un losange : leur somme porte donc la bissectrice, d'où la normalisation.

### Exemple
Avec $\|\overrightarrow{AB}\| = 6$ et $\|\overrightarrow{AC}\| = 3$ :
- La bissectrice en $A$ est $d : \overrightarrow{AM} = t(\overrightarrow{AB} + 2\overrightarrow{AC})$ car $\tfrac{1}{6}\overrightarrow{AB} + \tfrac{1}{3}\overrightarrow{AC}$ est proportionnel à $\overrightarrow{AB} + 2\overrightarrow{AC}$.
- Soit $P$ le point de $[AB]$ tel que $\overrightarrow{AP} = \tfrac{2}{3}\overrightarrow{AB}$. Alors $(CP) : \overrightarrow{AM} = \tfrac{2s}{3}\overrightarrow{AB} + (1-s)\overrightarrow{AC}$ et l'intersection avec $d$ donne $s = \tfrac{3}{7}$, $t = \tfrac{2}{7}$, soit $\overrightarrow{AJ} = \tfrac{2}{7}\overrightarrow{AB} + \tfrac{4}{7}\overrightarrow{AC}$.
