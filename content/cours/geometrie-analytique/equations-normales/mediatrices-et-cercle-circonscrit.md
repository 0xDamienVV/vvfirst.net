---
title: Médiatrices et cercle circonscrit
order: 4
---
Soient $A$ et $B$ deux points distincts.
> [!definition] Définition
> La **médiatrice** de $[AB]$ est la perpendiculaire à $(AB)$ passant par le [[milieu]] $I$ de $[AB]$ : $\overrightarrow{IM}\cdot\overrightarrow{AB} = 0$.  
> Vue depuis $A$ : $\overrightarrow{AM}\cdot\overrightarrow{AB} = \tfrac{1}{2}\|\overrightarrow{AB}\|^2$.
>
> Les trois médiatrices d'un triangle $ABC$ se coupent en un point $O$, le centre du **cercle circonscrit**.

>[!property] Preuve de la concourance
> Soit $O$ l'intersection des médiatrices de $[AB]$ et $[AC]$. Alors $\overrightarrow{AO}\cdot\overrightarrow{BC} = \overrightarrow{AO}\cdot\overrightarrow{AC} - \overrightarrow{AO}\cdot\overrightarrow{AB} = \tfrac{1}{2}(AC^2 - AB^2)$, ce qui est l'équation de la médiatrice de $[BC]$ vue depuis $A$.

### Exemples
- Avec $AB = 3$, $AC = 4\sqrt{2}$ : la médiatrice de $[BC]$ est $\overrightarrow{AM}\cdot\overrightarrow{BC} = \tfrac{1}{2}(32 - 9) = \tfrac{23}{2}$.
- Avec $AB = c$, $AC = b$, $\widehat{BAC} = \theta$ et $\overrightarrow{AO} = x\overrightarrow{AB} + y\overrightarrow{AC}$ : $c^2x + bc\cos\theta\,y = \tfrac{c^2}{2}$ et $bc\cos\theta\,x + b^2y = \tfrac{b^2}{2}$, d'où $\overrightarrow{AO} = \dfrac{c - b\cos\theta}{2c\sin^2\theta}\overrightarrow{AB} + \dfrac{b - c\cos\theta}{2b\sin^2\theta}\overrightarrow{AC}$.
