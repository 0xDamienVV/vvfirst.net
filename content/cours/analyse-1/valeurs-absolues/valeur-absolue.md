---
title: Valeur absolue
order: 1
---

# Définition
Soit $x \in \mathbb{R}$.
> [!definition] Définition
> $|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$  
> C'est la **distance** entre $x$ et $0$ sur la droite réelle.

### Exemple
- $|-3| = 3$ et $|x - 2|$ est la distance entre $x$ et $2$.

# Positivité
Soit $x \in \mathbb{R}$.
> [!property] Propriété
> $|x| \geq 0$ et $|x| = 0 \iff x = 0$

### Exemple
- $|x - 1| = 0 \iff x = 1$ car seule la distance nulle donne $0$.

# Produit et quotient
Soient $a, b \in \mathbb{R}$.
> [!property] Propriété
> $|ab| = |a|\,|b|$  
> $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$ si $b \neq 0$

### Exemple
- $|-2x| = 2|x|$ car $|-2| = 2$.

# Inégalité triangulaire
Soient $a, b \in \mathbb{R}$.
> [!property] Propriété
> $|a + b| \leq |a| + |b|$

### Exemple
- $|3 + (-5)| = 2 \leq 3 + 5 = 8$ car les deux termes sont de signes opposés.

# Carré
Soit $x \in \mathbb{R}$.
> [!property] Propriété
> $|x|^2 = x^2$

### Exemple
- $|x| < |y| \iff x^2 < y^2$ car la fonction $t \mapsto t^2$ est strictement croissante sur $\mathbb{R}_+$.

# Graphe de $|f|$
> [!property] Propriété
> Le graphe de $|f|$ s'obtient à partir de celui de $f$ en **symétrisant par rapport à l'axe des abscisses** les parties où $f < 0$.

### Exemple
- Pour $f(x) = \dfrac{1}{2}x - 2$, le graphe de $|f|$ est celui de $f$ pour $x \geq 4$ et son symétrique pour $x < 4$, avec un « pic » en $(4, 0)$.
