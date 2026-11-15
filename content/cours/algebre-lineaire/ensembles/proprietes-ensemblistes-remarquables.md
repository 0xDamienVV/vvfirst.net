---
title: Propriétés Ensemblistes Remarquables
order: 6
---

Les propriétés ci-dessous sont très similaires aux [[proprietes-logiques-remarquables|propriétés logiques remarquables]].

# Double complémentaire
Soient $E$ un [[definition-ensemble|ensemble]] et $A \subset E$.

> [!property] Propriété
> $\complement_E(\complement_E(A)) = A$

### Exemple
- $\complement_E(\complement_E(A))$ est identique à $A$ car le double [[operations-ensemblistes#complémentaire|complémentaire]] annule le complémentaire.

# Commutativité
Soient $A$ et $B$ des [[definition-ensemble|ensembles]] quelconques.

> [!property] Propriété
> $A \cap B = B \cap A$
> $A \cup B = B \cup A$

### Exemple
- $A \cap B$ est identique à $B \cap A$ car l'ordre des ensembles ne change pas leurs éléments communs.

# Associativité
Soient $A$, $B$ et $C$ des [[definition-ensemble|ensembles]] quelconques.

> [!property] Propriété
> $(A \cap B) \cap C = A \cap (B \cap C)$
> $(A \cup B) \cup C = A \cup (B \cup C)$

### Exemple
- $(A \cap B) \cap C$ est identique à $A \cap (B \cap C)$ car le regroupement ne change pas l'opération.

# Distributivité
Soient $A$, $B$ et $C$ des [[definition-ensemble|ensembles]] quelconques.

> [!property] Propriété
> $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
> $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$

### Exemple
- $A \cap (B \cup C)$ est identique à $(A \cap B) \cup (A \cap C)$ car l'[[operations-ensemblistes#intersection|intersection]] se distribue sur la [[operations-ensemblistes#réunion|réunion]].
- La seconde identité est le cas non intuitif : la [[operations-ensemblistes#réunion|réunion]] se distribue aussi sur l'[[operations-ensemblistes#intersection|intersection]], ce qui n'a aucun équivalent avec $+$ et $\times$ sur les nombres.

# Idempotence
Soit $A$ un [[definition-ensemble|ensemble]] quelconque.

> [!property] Propriété
> $A \cap A = A$
> $A \cup A = A$

### Exemple
- $A \cup A$ est identique à $A$ car répéter le même [[definition-ensemble|ensemble]] n'ajoute aucun élément.

# Éléments neutres
Soient $E$ un [[definition-ensemble|ensemble]] et $A \subset E$.

> [!property] Propriété
> $A \cap E = A$
> $A \cup \varnothing = A$

### Exemple
- $A \cap E$ est identique à $A$ car l'[[operations-ensemblistes#intersection|intersection]] avec l'ensemble de tous les éléments laisse $A$ inchangé.

# Éléments absorbants
Soient $E$ un [[definition-ensemble|ensemble]] et $A \subset E$.

> [!property] Propriété
> $A \cap \varnothing = \varnothing$
> $A \cup E = E$

### Exemple
- $A \cup E$ est identique à $E$ car la [[operations-ensemblistes#réunion|réunion]] avec l'ensemble de tous les éléments donne cet ensemble.

# Absorption
Soient $A$ et $B$ des [[definition-ensemble|ensembles]] quelconques.

> [!property] Propriété
> $A \cup (A \cap B) = A$
> $A \cap (A \cup B) = A$

### Exemple
- $A \cup (A \cap B)$ est identique à $A$ car tout élément de $A \cap B$ appartient déjà à $A$.

# Loi de complémentarité
Soient $E$ un [[definition-ensemble|ensemble]] et $A \subset E$.

> [!property] Propriété
> $A \cup \complement_E(A) = E$
> $A \cap \complement_E(A) = \varnothing$

### Exemple
- $A \cup \complement_E(A)$ est identique à $E$ car tout élément de $E$ est soit dans $A$, soit dans son [[operations-ensemblistes#complémentaire|complémentaire]].

# Lois de De Morgan
Soient $E$ un [[definition-ensemble|ensemble]] ainsi que $A, B \subset E$.

> [!property] Propriété
> $\complement_E(A \cap B) = \complement_E(A) \cup \complement_E(B)$
> $\complement_E(A \cup B) = \complement_E(A) \cap \complement_E(B)$

Ces lois découlent des [[proprietes-logiques-remarquables#lois-de-de-morgan|lois de De Morgan logiques]].

### Exemple
- $\complement_E(A \cap B)$ est identique à $\complement_E(A) \cup \complement_E(B)$ car un élément n'est pas dans l'[[operations-ensemblistes#intersection|intersection]] dès qu'il manque dans l'un des deux ensembles.
