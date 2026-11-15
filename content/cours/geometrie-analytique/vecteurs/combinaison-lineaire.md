---
title: Combinaison Linéaire
order: 6
---
Soient $\vec{u}_1, \dots, \vec{u}_n$ des [[vecteur|vecteurs]].
> [!definition] Définition
> Une **combinaison linéaire** de $\vec{u}_1, \dots, \vec{u}_n$ est un vecteur de la forme :
> $\alpha_1 \vec{u}_1 + \dots + \alpha_n \vec{u}_n$ avec $\alpha_1, \dots, \alpha_n \in \mathbb{R}$.
>
> Les $\alpha_i$ sont les **coefficients** de la combinaison.

>[!property] Remarque
> Dans $\mathbb{R}^2$, si $\vec{u}$ et $\vec{v}$ sont **non [[colinearite|colinéaires]]**, tout vecteur s'écrit de manière **unique** $\alpha\vec{u} + \beta\vec{v}$.  
> On peut donc **identifier les coefficients** : $\alpha\vec{u} + \beta\vec{v} = \alpha'\vec{u} + \beta'\vec{v}$ implique $\alpha = \alpha'$ et $\beta = \beta'$.

### Exemples
Dans un [[parallelogramme|parallélogramme]] $ABCD$ :
- $\overrightarrow{AB} = \overrightarrow{AC} - \overrightarrow{AD}$ car $\overrightarrow{CB} = \overrightarrow{DA}$.
- $\overrightarrow{AB} = -\tfrac{1}{2}\overrightarrow{CA} - \tfrac{1}{2}\overrightarrow{BD}$ car $\overrightarrow{CA} + \overrightarrow{BD} = -2\overrightarrow{AB}$.
- Avec $E$ tel que $\overrightarrow{CE} = \overrightarrow{AD}$ : $\overrightarrow{AE} = \overrightarrow{AB} + 2\overrightarrow{AD}$.

Pour un point $I$ défini par une relation vectorielle, on réécrit tout depuis un même point par [[addition-de-vecteurs|Chasles]] :
- $2\overrightarrow{AI} + \overrightarrow{AB} = 4\overrightarrow{CI}$ est identique à $\overrightarrow{AI} = \tfrac{1}{2}\overrightarrow{AB} + 2\overrightarrow{AC}$ car $\overrightarrow{CI} = \overrightarrow{CA} + \overrightarrow{AI}$ donne $2\overrightarrow{AI} = \overrightarrow{AB} + 4\overrightarrow{AC}$.
- $\overrightarrow{AI} = 2\overrightarrow{IC} + \overrightarrow{AB}$ est identique à $\overrightarrow{AI} = \tfrac{2}{3}\overrightarrow{AC} + \tfrac{1}{3}\overrightarrow{AB}$ car $\overrightarrow{IC} = \overrightarrow{IA} + \overrightarrow{AC}$ donne $3\overrightarrow{AI} = 2\overrightarrow{AC} + \overrightarrow{AB}$ : $I$ est donc sur $(BC)$ si les coefficients ont pour somme $1$.
