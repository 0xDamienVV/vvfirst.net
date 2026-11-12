---
title: Implications Remarquables
order: 4
---

Soit $P \Rightarrow Q$ une [[operateurs-logiques#implication|implication]] quelconque:

# Réciproque
>[!definition]
>On définit la **réciproque** d'une [[operateurs-logiques#implication|implication]] comme: $Q \Rightarrow P$

### Exemple
>Pour $x=2$:  
>$x=2 \Rightarrow x^2=4$ est VRAI, mais sa réciproque, $x^2=4 \Rightarrow x=2$ est FAUSSE.  
>Cela s'explique car $x=-2$ vérifie $x^2=4$ sans vérifier $x=2$.

>[!warning]
>Une [[operateurs-logiques#implication|implication]] et sa **réciproque** ne sont pas équivalentes en général: $(P \Rightarrow Q) \not\equiv (Q \Rightarrow P)$.   
>Il s'agit cependant d'une forme intéressante notamment pour prouver une [[operateurs-logiques#equivalence|équivalence]] car en effet: $P \Leftrightarrow Q \equiv (P \Rightarrow Q) \land (Q \Rightarrow P)$

# Contraposée
>[!definition]
>On définit la **contraposée** d'une [[operateurs-logiques#implication|implication]] comme: $\neg Q \Rightarrow \neg P$

Une [[operateurs-logiques#implication|implication]] et sa **contraposée** sont [[proprietes-logiques-remarquables|logiquement équivalentes]]: $P \Rightarrow Q \equiv \neg Q \Rightarrow \neg P$  
C'est une forme pratique pour prouver une implication lorsque les [[enonce#propositions|propositions]] [[operateurs-logiques#négation|négations]] sont plus simples à travailler.
