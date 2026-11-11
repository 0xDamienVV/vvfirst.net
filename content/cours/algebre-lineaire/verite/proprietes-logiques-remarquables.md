---
title: Propiétés Logiques Remarquables
order: 3
---

>[!definition]
>Deux [[enonce#propositions|propositions]] $P$ et $Q$ sont **logiquement équivalentes**, noté $P \equiv Q$, si elles ont la même valeur quelle que soit la valeur de leurs variables.  
>Les propriétés ci-dessous sont des équivalences toujours **VRAIES** qui permettent de transformer et simplifier des [[enonce|énoncés]].

Soit $P$, $Q$ et $R$ des [[enonce#propositions|propositions]] quelconques ainsi que $\top$ la [[enonce#propositions|proposition]] toujours **VRAIE** et $\bot$ la [[enonce#propositions|proposition]] toujours **FAUSSE**.

# Double Négation
>[!definition]
>$\neg(\neg P) \equiv P$

> [!note]- Démonstration
> | $P$ | $\neg P$ | $\neg(\neg P)$ |
> |:---:|:---:|:---:|
> | VRAI | FAUX | VRAI |
> | FAUX | VRAI | FAUX |
>
> Les colonnes $P$ et $\neg(\neg P)$ coïncident.

# Commutativité
>[!definition]
>$P \land Q \equiv Q \land P$  
>$P \lor Q \equiv Q \lor P$

> [!note]- Démonstration
> | $P$ | $Q$ | $P \land Q$ | $Q \land P$ | $P \lor Q$ | $Q \lor P$ |
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI |
> | VRAI | FAUX | FAUX | FAUX | VRAI | VRAI |
> | FAUX | VRAI | FAUX | FAUX | VRAI | VRAI |
> | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX |
>
> Les colonnes $P \land Q$ et $Q \land P$ sont identiques, ainsi que les colonnes $P \lor Q$ et $Q \lor P$.

# Associativité
>[!definition]
>$(P \land Q) \land R \equiv P \land (Q \land R)$  
>$(P \lor Q) \lor R \equiv P \lor (Q \lor R)$

> [!note]- Démonstration
> | $P$ | $Q$ | $R$ | $(P \land Q) \land R$ | $P \land (Q \land R)$ | $(P \lor Q) \lor R$ | $P \lor (Q \lor R)$ |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI |
> | VRAI | VRAI | FAUX | FAUX | FAUX | VRAI | VRAI |
> | VRAI | FAUX | VRAI | FAUX | FAUX | VRAI | VRAI |
> | VRAI | FAUX | FAUX | FAUX | FAUX | VRAI | VRAI |
> | FAUX | VRAI | VRAI | FAUX | FAUX | VRAI | VRAI |
> | FAUX | VRAI | FAUX | FAUX | FAUX | VRAI | VRAI |
> | FAUX | FAUX | VRAI | FAUX | FAUX | VRAI | VRAI |
> | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX |
>
> Les colonnes $(P \land Q) \land R$ et $P \land (Q \land R)$ sont identiques, ainsi que les colonnes $(P \lor Q) \lor R$ et $P \lor (Q \lor R)$.

# Distributivité
>[!definition]
>$P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$  
>$P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$  

> [!note]- Démonstration (première égalité)
> | $P$ | $Q$ | $R$ | $Q \lor R$ | $P \land (Q \lor R)$ | $P \land Q$ | $P \land R$ | $(P \land Q) \lor (P \land R)$ |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI |
> | VRAI | VRAI | FAUX | VRAI | VRAI | VRAI | FAUX | VRAI |
> | VRAI | FAUX | VRAI | VRAI | VRAI | FAUX | VRAI | VRAI |
> | VRAI | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX |
> | FAUX | VRAI | VRAI | VRAI | FAUX | FAUX | FAUX | FAUX |
> | FAUX | VRAI | FAUX | VRAI | FAUX | FAUX | FAUX | FAUX |
> | FAUX | FAUX | VRAI | VRAI | FAUX | FAUX | FAUX | FAUX |
> | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX |
>
> Les colonnes $P \land (Q \lor R)$ et $(P \land Q) \lor (P \land R)$ sont identiques.

# Idempotence
>[!definition]
>$P \land P \equiv P$  
>$P \lor P \equiv P$

> [!note]- Démonstration
> | $P$ | $P \land P$ | $P \lor P$ |
> |:---:|:---:|:---:|
> | VRAI | VRAI | VRAI |
> | FAUX | FAUX | FAUX |
>
> Toutes les colonnes sont identiques.

# Éléments neutres
>[!definition]
>$P \land \top \equiv P$  
>$P \lor \bot \equiv P$

> [!note]- Démonstration
> | $P$ | $\top$ | $\bot$ | $P \land \top$ | $P \lor \bot$ |
> |:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | FAUX | VRAI | VRAI |
> | FAUX | VRAI | FAUX | FAUX | FAUX |
>
> Les colonnes $P \land \top$ et $P \lor \bot$ sont identiques à la colonne $P$.

# Éléments absorbants
>[!definition]
>$P \land \bot \equiv \bot$  
>$P \lor \top \equiv \top$

> [!note]- Démonstration
> | $P$ | $\top$ | $\bot$ | $P \land \bot$ | $P \lor \top$ |
> |:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | FAUX | FAUX | VRAI |
> | FAUX | VRAI | FAUX | FAUX | VRAI |
>
> La colonne $P \land \bot$ est identique à la colonne $\bot$ et la colonne $P \lor \top$ à la colonne $\top$.

# Absorption
>[!definition]
>$P \lor (P \land Q) \equiv P$  
>$P \land (P \lor Q) \equiv P$

> [!note]- Démonstration
> | $P$ | $Q$ | $P \land Q$ | $P \lor (P \land Q)$ | $P \lor Q$ | $P \land (P \lor Q)$ |
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | VRAI | VRAI | VRAI |
> | VRAI | FAUX | FAUX | VRAI | VRAI | VRAI |
> | FAUX | VRAI | FAUX | FAUX | VRAI | FAUX |
> | FAUX | FAUX | FAUX | FAUX | FAUX | FAUX |
>
> Les colonnes $P \lor (P \land Q)$ et $P \land (P \lor Q)$ sont identiques à la colonne $P$.

# Lois de De Morgan
>[!definition]
>$\neg(P \land Q) \equiv (\neg P) \lor (\neg Q)$  
>$\neg(P \lor Q) \equiv (\neg P) \land (\neg Q)$

> [!note]- Démonstration
> | $P$ | $Q$ | $P \land Q$ | $\neg(P \land Q)$ | $\neg P \lor \neg Q$ |
> |:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | FAUX | FAUX |
> | VRAI | FAUX | FAUX | VRAI | VRAI |
> | FAUX | VRAI | FAUX | VRAI | VRAI |
> | FAUX | FAUX | FAUX | VRAI | VRAI |
>
> Les colonnes $\neg(P \land Q)$ et $\neg P \lor \neg Q$ sont identiques.
>
> | $P$ | $Q$ | $P \lor Q$ | $\neg(P \lor Q)$ | $\neg P \land \neg Q$ |
> |:---:|:---:|:---:|:---:|:---:|
> | VRAI | VRAI | VRAI | FAUX | FAUX |
> | VRAI | FAUX | VRAI | FAUX | FAUX |
> | FAUX | VRAI | VRAI | FAUX | FAUX |
> | FAUX | FAUX | FAUX | VRAI | VRAI |
>
> Les colonnes $\neg(P \lor Q)$ et $\neg P \land \neg Q$ sont identiques.
