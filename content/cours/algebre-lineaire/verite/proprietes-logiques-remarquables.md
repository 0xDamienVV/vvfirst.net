---
title: Propriétés Logiques Remarquables
order: 3
---

# Formes identiques
> [!definition] Définition
> Deux [[enonce#propositions|propositions]] $P$ et $Q$ sont dites **identiques**, notées $P \equiv Q$, si elles ont la même valeur quelle que soit la valeur de leurs variables.

> [!warning] $\equiv$ et $\Leftrightarrow$
> $P \equiv Q$ affirme une identité logique, tandis que $P \Leftrightarrow Q$ est une [[enonce#propositions|proposition]] qui affirme que $P$ et $Q$ ont la même valeur de vérité.
> Les deux notations sont liées, mais ne s'emploient pas au même niveau : sur cette page, $\equiv$ est utilisé partout.

# Double négation
Soit $P$ une [[enonce#propositions|proposition]] quelconque.

> [!property] Propriété
> $\neg(\neg P) \equiv P$

### Exemple
- $\neg(\neg P)$ est identique à $P$ car la double [[operateurs-logiques#négation|négation]] annule la négation.

# Commutativité
Soient $P$ et $Q$ des [[enonce#propositions|propositions]] quelconques.

> [!property] Propriété
> $P \land Q \equiv Q \land P$
> $P \lor Q \equiv Q \lor P$

### Exemple
- $P \land Q$ est identique à $Q \land P$ car l'ordre des termes ne change pas leur valeur.

# Associativité
Soient $P$, $Q$ et $R$ des [[enonce#propositions|propositions]] quelconques.

> [!property] Propriété
> $(P \land Q) \land R \equiv P \land (Q \land R)$
> $(P \lor Q) \lor R \equiv P \lor (Q \lor R)$

### Exemple
- $(P \land Q) \land R$ est identique à $P \land (Q \land R)$ car le regroupement ne change pas l'opération.

# Distributivité
Soient $P$, $Q$ et $R$ des [[enonce#propositions|propositions]] quelconques.

> [!property] Propriété
> $P \land (Q \lor R) \equiv (P \land Q) \lor (P \land R)$
> $P \lor (Q \land R) \equiv (P \lor Q) \land (P \lor R)$

### Exemple
- $P \land (Q \lor R)$ est identique à $(P \land Q) \lor (P \land R)$ car la [[operateurs-logiques#conjonction|conjonction]] se distribue sur la [[operateurs-logiques#disjonction|disjonction]].
- La seconde identité est l'analogue avec $\lor$ devant : la [[operateurs-logiques#disjonction|disjonction]] se distribue aussi sur la [[operateurs-logiques#conjonction|conjonction]], ce qui n'a pas d'équivalent intuitif avec $+$ et $\times$.

# Idempotence
Soit $P$ une [[enonce#propositions|proposition]] quelconque.

> [!property] Propriété
> $P \land P \equiv P$
> $P \lor P \equiv P$

### Exemple
- $P \lor P$ est identique à $P$ car répéter la même [[enonce#propositions|proposition]] ne change pas sa valeur.

# Éléments neutres
Soit $P$ une [[enonce#propositions|proposition]] quelconque, ainsi que $\top$ la proposition toujours **VRAIE** et $\bot$ la proposition toujours **FAUSSE**.

> [!property] Propriété
> $P \land \top \equiv P$
> $P \lor \bot \equiv P$

### Exemple
- $P \land \top$ est identique à $P$ car la [[operateurs-logiques#conjonction|conjonction]] avec une proposition toujours VRAIE laisse $P$ inchangée.

# Éléments absorbants
Soit $P$ une [[enonce#propositions|proposition]] quelconque, ainsi que $\top$ la proposition toujours **VRAIE** et $\bot$ la proposition toujours **FAUSSE**.

> [!property] Propriété
> $P \land \bot \equiv \bot$
> $P \lor \top \equiv \top$

### Exemple
- $P \lor \top$ est identique à $\top$ : même quand $P$ est FAUSSE, la [[operateurs-logiques#disjonction|disjonction]] avec une proposition toujours VRAIE reste VRAIE.

# Absorption
Soient $P$ et $Q$ des [[enonce#propositions|propositions]] quelconques.

> [!property] Propriété
> $P \lor (P \land Q) \equiv P$
> $P \land (P \lor Q) \equiv P$

### Exemple
- $P \lor (P \land Q)$ est identique à $P$ car si $P$ est FAUSSE, la [[operateurs-logiques#conjonction|conjonction]] est également FAUSSE et la [[operateurs-logiques#disjonction|disjonction]] aussi.

# Lois de De Morgan
> [!property] Propriété
> $\neg(P \land Q) \equiv (\neg P) \lor (\neg Q)$
> $\neg(P \lor Q) \equiv (\neg P) \land (\neg Q)$

Ces lois sont également à l'origine de la [[quantificateurs#négation-des-quantificateurs|négation des quantificateurs]] et des [[proprietes-ensemblistes-remarquables#lois-de-de-morgan|lois de De Morgan ensemblistes]].

### Exemple
- $\neg(P \land Q)$ est identique à $(\neg P) \lor (\neg Q)$ car la [[operateurs-logiques#conjonction|conjonction]] est FAUSSE dès qu'un terme est FAUX : nier une conjonction revient à nier au moins un des deux termes, et non les deux.
