---
title: Norme
order: 3
---

# Définition
Soit $\vec{u}$ un [[vecteur]] quelconque.
> [!definition] Définition
> La **norme** de $\vec{u}$ est $\|\vec{u}\| = \sqrt{\vec{u} \cdot \vec{u}}$ (voir [[definition-produit-scalaire#carré-scalaire|carré scalaire]]).

### Exemple
- $\|\overrightarrow{AB}\| = AB$ car $\overrightarrow{AB}\cdot\overrightarrow{AB} = AB^2$.

# Carré d'une somme
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] quelconques.
> [!property] Propriété
> $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$

### Exemple
- Avec $\|\vec{u}\| = 3$, $\|\vec{v}\| = 5$ et $\vec{u}\cdot\vec{v} = \tfrac{15}{2}$ : $\|2\vec{u}+\vec{v}\|^2 = 4\cdot 9 + 4\cdot\tfrac{15}{2} + 25 = 91$ car on développe par [[definition-produit-scalaire#bilinéarité|bilinéarité]], donc $\|2\vec{u}+\vec{v}\| = \sqrt{91}$.

# Carré d'une différence
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] quelconques.
> [!property] Propriété
> $\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$

### Exemple
- $BC^2 = AB^2 + AC^2 - 2\,\overrightarrow{AB}\cdot\overrightarrow{AC}$ car $\overrightarrow{CB} = \overrightarrow{AB} - \overrightarrow{AC}$.

# Identité du parallélogramme
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] quelconques.
> [!property] Propriété
> $\|\vec{u}+\vec{v}\|^2 + \|\vec{u}-\vec{v}\|^2 = 2\|\vec{u}\|^2 + 2\|\vec{v}\|^2$

### Exemple
- Dans un [[parallelogramme|parallélogramme]] $ABCD$ avec $AB = 6$, $AD = \sqrt{13}$ et $AC = 5$ : $AC^2 + BD^2 = 2(36 + 13) = 98$ car les diagonales sont $\overrightarrow{AB}+\overrightarrow{AD}$ et $\overrightarrow{AB}-\overrightarrow{AD}$, donc $BD = \sqrt{73}$.

# Inégalité triangulaire
Soient $\vec{u}$ et $\vec{v}$ deux [[vecteur|vecteurs]] quelconques.
> [!property] Propriété
> $\|\vec{u}+\vec{v}\| \leq \|\vec{u}\| + \|\vec{v}\|$

> [!warning] Attention
> L'égalité n'a lieu que si $\vec{u}$ et $\vec{v}$ sont [[colinearite|colinéaires]] de même sens.

### Exemple
- $AC \leq AB + BC$ car $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$ : le chemin direct est le plus court.
