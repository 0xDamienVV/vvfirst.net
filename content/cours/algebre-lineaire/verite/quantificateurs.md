---
title: Quantificateurs
order: 5
---
>[!definition] Définition
>Un **quantificateur** est un symbole qui permet de quantifier les variables indéterminées d'un [[enonce#prédicats|prédicat]] pour le transformer en [[enonce#propositions|proposition]].

# Quantificateur universel
> [!definition] Définition
> Le **quantificateur universel** se note $\forall$.  
> $\forall x \in E,\ P(x)$ se lit « pour tout $x$ dans $E$, $P(x)$ » et est VRAIE si tous les éléments de l'ensembe $E$ rendent $P(x)$ vraie.

### Exemples
- $\forall x\in\mathbb{R},\ x^2\geq 0$ est VRAI car le carré de tout réel est positif ou nul.
- $\forall x\in\mathbb{R},\ x>0$ est FAUX car $x=0$ est un contre-exemple.

# Quantificateur existentiel
> [!definition] Définition
> Le **quantificateur existentiel** se note $\exists$.  
> $\exists x \in E,\ P(x)$ se lit « il existe un $x$ dans $E$ tel que $P(x)$ » et est VRAIE si au moins un élément de l'ensembe $E$ rend $P(x)$ vraie.

### Exemples
- $\exists x\in\mathbb{R},\ x^2=4$ est VRAI car $x=2$ satisfait l'égalité.
- $\exists x\in\mathbb{R},\ x^2=-1$ est FAUX car le carré d'un réel ne peut pas être négatif.

## Négation des quantificateurs
Pour tout [[enonce#prédicats|prédicat]] $P(x)$ défini sur un ensemble $E$ : 
> [!property] Propriété
> $\neg(\forall x \in E,\ P(x)) \equiv \exists x \in E,\ \neg P(x)$  
> $\neg(\exists x \in E,\ P(x)) \equiv \forall x \in E,\ \neg P(x)$

### Exemples
- « Tous les réels sont positifs » est FAUX car $-2$ n'est pas positif; sa négation est « il existe un réel qui n'est pas positif ».
- « Il existe un entier dont le carré vaut $2$ » est FAUX car aucun entier n'a pour carré $2$; sa négation est « tout entier a un carré différent de $2$ ».

Les lois [[proprietes-logiques-remarquables#lois-de-de-morgan|lois de De Morgan]] suivent le même principe.

> [!warning] Quantification sur l'ensemble vide
> Si $E$ est vide, $\forall x \in E,\ P(x)$ est VRAIE par vacuité, tandis que $\exists x \in E,\ P(x)$ est FAUSSE.  
> Cette vérité par vacuité est le même principe que celui de l'[[operateurs-logiques#implication|implication]] dont l'hypothèse est fausse.
