---
title: Quantificateurs
order: 4
---

> [!definition] Définition
> Un **quantificateur** est un symbole qui permet de quantifier les variables indéterminées d'un [[enonce#prédicats|prédicat]] pour le transformer en [[enonce#propositions|proposition]].

# Quantificateur universel
> [!definition] Définition
> Le **quantificateur universel** se note $\forall$.  
> $\forall x \in E,\ P(x)$ se lit « pour tout $x$ dans $E$, $P(x)$ » et est VRAIE si tous les éléments de $E$ rendent $P(x)$ vraie.

### Exemples
- $\forall x\in\mathbb{R},\ x^2\geq 0$ est VRAI car le carré de tout réel est positif ou nul.
- $\forall x\in\mathbb{R},\ x>0$ est FAUX car $x=0$ est un **contre-exemple**.

> [!warning] Contre-exemple
> Un **contre-exemple** est une valeur de $x$ qui rend $P(x)$ fausse : un seul suffit pour réfuter un énoncé en $\forall$.  
> À l'inverse, un exemple ne suffit jamais pour prouver un énoncé en $\forall$.

# Quantificateur existentiel
> [!definition] Définition
> Le **quantificateur existentiel** se note $\exists$.  
> $\exists x \in E,\ P(x)$ se lit « il existe un $x$ dans $E$ tel que $P(x)$ » et est VRAIE si au moins un élément de $E$ rend $P(x)$ vraie.

### Exemples
- $\exists x\in\mathbb{R},\ x^2=4$ est VRAI car $x=2$ satisfait l'égalité.
- $\exists x\in\mathbb{R},\ x^2=-1$ est FAUX car le carré d'un réel ne peut pas être négatif.

# Négation des quantificateurs
Pour tout [[enonce#prédicats|prédicat]] $P(x)$ défini sur un ensemble $E$ :
> [!property] Propriété
> $\neg(\forall x \in E,\ P(x)) \equiv \exists x \in E,\ \neg P(x)$  
> $\neg(\exists x \in E,\ P(x)) \equiv \forall x \in E,\ \neg P(x)$

Ces règles prolongent les [[proprietes-logiques-remarquables#lois-de-de-morgan|lois de De Morgan]].

### Exemples
- « Tous les réels sont positifs » est FAUX car $-2$ n'est pas positif ; sa [[operateurs-logiques#négation|négation]] est « il existe un réel qui n'est pas positif ».
- « Il existe un entier dont le carré vaut $2$ » est FAUX car aucun entier n'a pour carré $2$ ; sa négation est « tout entier a un carré différent de $2$ ».

# Plusieurs quantificateurs
> [!property] Propriété
> - Pour nier un énoncé à plusieurs quantificateurs, on échange chaque $\forall$ et $\exists$ de gauche à droite, puis on nie le prédicat final.
> - Deux quantificateurs **de même nature** peuvent être permutés ; deux quantificateurs **de natures différentes** ne le peuvent pas.

### Exemples
- $\forall x\in\mathbb{R},\ \exists y\in\mathbb{R},\ y>x$ est VRAI car on peut choisir $y=x+1$ pour chaque $x$.
- $\exists y\in\mathbb{R},\ \forall x\in\mathbb{R},\ y>x$ est FAUX car aucun réel $y$ n'est supérieur à tous les réels, alors que l'ordre des quantificateurs est la seule différence avec l'exemple précédent.
- La négation de $\exists y,\ \forall x,\ f(x)\neq y$ est $\forall y,\ \exists x,\ f(x)=y$ car chaque quantificateur est échangé et $\neg(f(x)\neq y)$ s'écrit $f(x)=y$.

> [!warning] Les quantificateurs ne commutent pas
> Dans $\forall x,\ \exists y,\ P(x,y)$, le $y$ peut dépendre de $x$ ; dans $\exists y,\ \forall x,\ P(x,y)$, le $y$ est unique et le même pour tout $x$.
