---
title: Implications Remarquables
order: 5
---

# Réciproque
Soit $P \Rightarrow Q$ une [[operateurs-logiques#implication|implication]] quelconque.
> [!definition] Définition
> La **réciproque** de l'[[operateurs-logiques#implication|implication]] $P \Rightarrow Q$ est l'implication $Q \Rightarrow P$.

Pour établir une [[operateurs-logiques#équivalence|équivalence]], il faut prouver une implication et sa réciproque.  
On écrit alors $P \Leftrightarrow Q \equiv (P \Rightarrow Q) \land (Q \Rightarrow P)$.

### Exemple
- « $x=2 \Rightarrow x^2=4$ » est VRAI pour $x=2$ car $2^2=4$.
- $\forall x\in\mathbb{R},\ x^2=4 \Rightarrow x=2$ est FAUX car $x=-2$ est un [[quantificateurs#quantificateur-universel|contre-exemple]] : $(-2)^2=4$ mais $-2\neq 2$.

> [!warning] La réciproque n'est pas équivalente en général
> Une [[operateurs-logiques#implication|implication]] et sa réciproque ne sont pas [[proprietes-logiques-remarquables#formes-identiques|identiques]] en général : $(P \Rightarrow Q) \not\equiv (Q \Rightarrow P)$.  
> L'une peut être vraie sans que l'autre le soit.

# Contraposée
Soit $P \Rightarrow Q$ une [[operateurs-logiques#implication|implication]] quelconque.
> [!definition] Définition
> La **contraposée** de l'[[operateurs-logiques#implication|implication]] $P \Rightarrow Q$ est l'implication $\neg Q \Rightarrow \neg P$.

> [!property] Propriété
> $P \Rightarrow Q \equiv \neg Q \Rightarrow \neg P$

C'est une forme pratique pour prouver une implication lorsque les [[operateurs-logiques#négation|négations]] sont plus simples à travailler.

### Exemples
- $P \Rightarrow Q$ est identique à $\neg Q \Rightarrow \neg P$ car chacune n'est fausse que lorsque $P$ est vraie et $Q$ fausse.
- « Si $n$ est divisible par $4$, alors $n$ est pair » est identique à « si $n$ n'est pas pair, alors $n$ n'est pas divisible par $4$ » car $n=4k$ implique $n=2(2k)$.

# Énoncés quantifiés
Soient $P(x)$ et $Q(x)$ des [[enonce#prédicats|prédicats]].
> [!property] Propriété
> Pour l'énoncé $T : \forall x \in E,\ P(x) \Rightarrow Q(x)$ :
> - sa **réciproque** est $\forall x \in E,\ Q(x) \Rightarrow P(x)$ ;
> - sa **contraposée** est $\forall x \in E,\ \neg Q(x) \Rightarrow \neg P(x)$, identique à $T$ ;
> - sa **négation** est $\exists x \in E,\ P(x) \land \neg Q(x)$ (voir [[proprietes-logiques-remarquables#négation-dune-implication|négation d'une implication]] et [[quantificateurs#négation-des-quantificateurs|négation des quantificateurs]]).

### Exemples
- La contraposée de $\forall x\in\mathbb{R},\ x^2\neq 1 \Rightarrow x\neq 1$ est identique à $\forall x\in\mathbb{R},\ x=1 \Rightarrow x^2=1$ car $\neg(x\neq 1)$ s'écrit $x=1$.
- La négation de $\forall x\in\mathbb{R},\ x>1 \Rightarrow x^2>x$ est $\exists x\in\mathbb{R},\ x>1 \land x^2\leq x$.
- Si une contraposée est FAUSSE, l'énoncé de départ l'est aussi car ils sont identiques ; la réciproque, elle, doit être étudiée séparément.
