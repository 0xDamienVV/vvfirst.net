---
title: Quantificateurs
order: 5
---

> [!definition] Définition
>Un **quantificateur** est un symbole qui permet de **quantifier** les variables indéterminées d'un [[enonce#prédicats|prédicat]] pour le transformer en [[enonce#propositions|proposition]].

# Quantificateur universel
>[!definition]
>Le **quantificateur universel** se note: $\forall$
>Il s'utilise sous la forme: $\forall x \in E,\ P(x)$ et se dit « Pour tout $x$ dans $E$, $P(x)$ ».
>Cette proposition est **VRAIE** si et seulement si tous les éléments de **l'ensemble** $E$ rendent la [[enonce#propositions|proposition]] $P(x)$ **VRAIE**.

# Quantificateur existentiel
>[!definition]
>Le **quantificateur existentiel** se note: $\exists$
>Il s'utilise sous la forme: $\exists x \in E,\ P(x)$ et se dit « Il existe un $x$ dans $E$ tel que $P(x)$ ».
>Cette proposition est **VRAIE** si et seulement si au moins un des éléments de **l'ensemble** $E$ rend la [[enonce#propositions|proposition]] $P(x)$ **VRAIE**.

# Négation des quantificateurs
Pour tout prédicat $P(x)$ défini sur un ensemble $E$:

- $\neg(\forall x \in E,\ P(x)) \equiv \exists x \in E,\ \neg P(x)$
- $\neg(\exists x \in E,\ P(x)) \equiv \forall x \in E,\ \neg P(x)$

Si $E$ est vide, $\forall x \in E,\ P(x)$ est vraie par vacuité, tandis que $\exists x \in E,\ P(x)$ est fausse.
