---
title: Implications Remarquables
order: 4
---

Cette page traite des deux transformations usuelles d'une [[operateurs-logiques#implication|implication]].

# Réciproque
Soit $P \Rightarrow Q$ une [[operateurs-logiques#implication|implication]] quelconque.

> [!definition] Définition
> La **réciproque** de l'[[operateurs-logiques#implication|implication]] $P \Rightarrow Q$ est l'implication $Q \Rightarrow P$.

Pour établir une [[operateurs-logiques#équivalence|équivalence]], il faut prouver une implication et sa réciproque :
$$P \Leftrightarrow Q \equiv (P \Rightarrow Q) \land (Q \Rightarrow P)$$

### Exemple
Pour $x=2$, « $x=2 \Rightarrow x^2=4$ » est VRAI car $2^2=4$.
En revanche, la réciproque n'est pas vraie pour tout réel : $x=-2$ vérifie $x^2=4$ sans vérifier $x=2$. L'[[enonce|énoncé]] quantifié $\forall x\in\mathbb{R},\ x^2=4 \Rightarrow x=2$ est donc FAUX.

> [!warning] La réciproque n'est pas équivalente en général
> Une [[operateurs-logiques#implication|implication]] et sa réciproque ne sont pas [[proprietes-logiques-remarquables#formes-identiques|identiques]] en général : $(P \Rightarrow Q) \not\equiv (Q \Rightarrow P)$.

# Contraposée
Soit $P \Rightarrow Q$ une [[operateurs-logiques#implication|implication]] quelconque.

> [!definition] Définition
> La **contraposée** de l'[[operateurs-logiques#implication|implication]] $P \Rightarrow Q$ est l'implication $\neg Q \Rightarrow \neg P$.

Une implication et sa contraposée sont [[proprietes-logiques-remarquables#formes-identiques|identiques]] :
$$P \Rightarrow Q \equiv \neg Q \Rightarrow \neg P$$

C'est une forme pratique pour prouver une [[operateurs-logiques#implication|implication]] lorsque les [[operateurs-logiques#négation|négations]] sont plus simples à travailler.

### Exemple
« Si $n$ est un entier divisible par $4$, alors $n$ est pair » est VRAI car $n=4k$ implique $n=2(2k)$.
Sa contraposée, « si $n$ n'est pas pair, alors $n$ n'est pas divisible par $4$ », est VRAIE car tout entier divisible par $4$ est pair.
