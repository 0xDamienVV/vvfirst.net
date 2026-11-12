---
title: Propriétés Logiques Remarquables
order: 3
---

>[!definition]
>Deux [[enonce#propositions|propositions]] $P$ et $Q$ sont **logiquement équivalentes**, notées $P \equiv Q$, si elles ont la même valeur quelle que soit la valeur de leurs variables.  
>Les propriétés ci-dessous sont des équivalences toujours **VRAIES** qui permettent de transformer et simplifier des [[enonce|énoncés]].

Soient $P$, $Q$ et $R$ des [[enonce#propositions|propositions]] quelconques ainsi que $\top$ la [[enonce#propositions|proposition]] toujours **VRAIE** et $\bot$ la [[enonce#propositions|proposition]] toujours **FAUSSE**:

# Double Négation
>[!definition]
>$\neg(\neg P) \equiv P$

# Commutativité
>[!definition]
>$P \land Q \equiv Q \land P$  
>$P \lor Q \equiv Q \lor P$

# Associativité
>[!definition]
>$(P \land Q) \land R \equiv P \land (Q \land R)$  
>$(P \lor Q) \lor R \equiv P \lor (Q \lor R)$

# Distributivité
>[!definition]
>$P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$  
>$P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$

# Idempotence
>[!definition]
>$P \land P \equiv P$  
>$P \lor P \equiv P$

# Éléments neutres
>[!definition]
>$P \land \top \equiv P$  
>$P \lor \bot \equiv P$

# Éléments absorbants
>[!definition]
>$P \land \bot \equiv \bot$  
>$P \lor \top \equiv \top$

# Absorption
>[!definition]
>$P \lor (P \land Q) \equiv P$  
>$P \land (P \lor Q) \equiv P$

# Lois de De Morgan
>[!definition]
>$\neg(P \land Q) \equiv (\neg P) \lor (\neg Q)$  
>$\neg(P \lor Q) \equiv (\neg P) \land (\neg Q)$
