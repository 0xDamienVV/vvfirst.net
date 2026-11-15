---
title: Lieux et produit scalaire
order: 6
---
Soient $A$ et $B$ deux points à distance $\delta > 0$, et $I$ le [[milieu]] de $[AB]$.
> [!definition] Relation de la médiane
> La **relation de la médiane** s'écrit, pour tout point $M$ :
> $\overrightarrow{MA}\cdot\overrightarrow{MB} = MI^2 - \tfrac{1}{4}\delta^2$  
> $MA^2 + MB^2 = 2\,MI^2 + \tfrac{1}{2}\delta^2$
>
> *Preuve* : $\overrightarrow{MA} = \overrightarrow{MI} + \overrightarrow{IA}$ et $\overrightarrow{MB} = \overrightarrow{MI} - \overrightarrow{IA}$, donc $\overrightarrow{MA}\cdot\overrightarrow{MB} = MI^2 - IA^2$ avec $IA = \tfrac{\delta}{2}$.

>[!property] Conséquences
> - $\overrightarrow{MA}\cdot\overrightarrow{MB} \geq -\tfrac{1}{4}\delta^2$ et $MA^2 + MB^2 \geq \tfrac{1}{2}\delta^2$, avec égalité si et seulement si $M = I$.
> - $\overrightarrow{MA}\cdot\overrightarrow{MB} = 0$ décrit le **cercle de diamètre $[AB]$**.
> - $\overrightarrow{MA}\cdot\overrightarrow{MB} = c$ décrit un cercle de centre $I$ et de rayon $\sqrt{c + \tfrac{\delta^2}{4}}$ si $c > -\tfrac{\delta^2}{4}$, le point $I$ si $c = -\tfrac{\delta^2}{4}$, l'ensemble vide sinon.
> - $\overrightarrow{AC}\cdot\overrightarrow{CM} = 0$ décrit la **perpendiculaire** à $(AC)$ passant par $C$ (un plan dans $\mathbb{R}^3$).

### Exemple
- Dans un [[parallelogramme|parallélogramme]] avec $AB = 6$, $AD = \sqrt{13}$, $AC = 5$ : $\overrightarrow{AB}\cdot\overrightarrow{AD} = \tfrac{1}{2}(25 - 36 - 13) = -12$, donc $\overrightarrow{DA}\cdot\overrightarrow{DB} = 13 + 12 = 25$.  
  Alors $\overrightarrow{DB}\cdot\overrightarrow{DM} = 25$ décrit la perpendiculaire à $(DB)$ passant par $A$.
