---
title: Opérateurs Logiques
order: 2
---

> [!definition] Définition
> Un **opérateur logique** est une opération qui agit sur une ou plusieurs [[enonce#propositions|propositions]] pour construire une nouvelle [[enonce#propositions|proposition]].
> Sa valeur de vérité dépend uniquement des valeurs de vérité des [[enonce#propositions|propositions]] de départ.

# Négation
Soit $P$ une [[enonce#propositions|proposition]] quelconque.

> [!definition] Définition
> Notée $\neg P$ ou « non $P$ », la **négation** est un opérateur logique qui renvoie la [[enonce#propositions|proposition]] opposée.
> $\neg P$ est **VRAIE** exactement quand $P$ est **FAUSSE**.

| $P$ | $\neg P$ |
|:---:|:---:|
| VRAI | FAUX |
| FAUX | VRAI |

### Exemples
- $\neg(3=5)$ est VRAI car $3=5$ est FAUX.
- $\neg(3<5)$ est FAUX car $3<5$ est VRAI : la [[operateurs-logiques#négation|négation]] échange les deux valeurs de vérité.

# Conjonction
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.

> [!definition] Définition
> Notée $P \land Q$ ou « $P$ et $Q$ », la **conjonction** est un opérateur logique.
> Elle est **VRAIE** exactement quand $P$ et $Q$ sont toutes deux **VRAIES**.

| $P$ | $Q$ | $P \land Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | FAUX |

### Exemples
- $(3=5) \land (4=4)$ est FAUX car le premier terme est FAUX, même si le second est VRAI.
- $(2=3) \land (3=5)$ est FAUX car les deux termes sont FAUX.

# Disjonction
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.

> [!definition] Définition
> Notée $P \lor Q$ ou « $P$ ou $Q$ », la **disjonction** est un opérateur logique.
> Elle est **VRAIE** exactement quand au moins l'une des deux [[enonce#propositions|propositions]] est **VRAIE**.

| $P$ | $Q$ | $P \lor Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | VRAI |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | FAUX |

### Exemples
- $(2=2) \lor (2>1)$ est VRAI car les deux [[enonce#propositions|propositions]] sont VRAIES.
- $(3=5) \lor (2>1)$ est VRAI car il suffit d'une seule proposition VRAIE, contrairement à la [[operateurs-logiques#conjonction|conjonction]].

> [!warning] Le « ou » mathématique est inclusif
> $(2=2) \lor (2>1)$ est VRAI alors que les deux [[enonce#propositions|propositions]] sont vraies en même temps.
> En langage naturel, le « ou » est souvent exclusif pour communiquer l'idée d'un choix, contrairement au « ou » mathématique.

# Implication
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.

> [!definition] Définition
> Notée $P \Rightarrow Q$ ou « si $P$ alors $Q$ », l'**implication** est un opérateur logique.
> Elle est **FAUSSE** dans le seul cas où $P$ est **VRAIE** et $Q$ **FAUSSE**.
> Elle est [[proprietes-logiques-remarquables|logiquement équivalente]] à $(\neg P) \lor Q$.

Dans $P \Rightarrow Q$, $P$ est l'**hypothèse** et $Q$ la **conclusion**. Voir aussi la [[implications-remarquables#réciproque|réciproque]] et la [[implications-remarquables#contraposée|contraposée]].

| $P$ | $Q$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | VRAI |

### Exemples
- $(3<5) \Rightarrow (2=3)$ est FAUX car l'hypothèse est VRAIE et la conclusion FAUSSE.
- $(2=3) \Rightarrow (3<5)$ est VRAI car une implication à hypothèse FAUSSE est vraie par vacuité.
- $(2=3) \Rightarrow (2 \neq 3)$ est VRAI, alors que l'hypothèse et la conclusion se contredisent : c'est le cas le plus contre-intuitif de la vacuité.

# Équivalence
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.

> [!definition] Définition
> Notée $P \Leftrightarrow Q$ ou « $P$ si et seulement si $Q$ », l'**équivalence** est un opérateur logique.
> Elle est **VRAIE** quand $P$ et $Q$ ont la même valeur de vérité.
> Elle est [[proprietes-logiques-remarquables|logiquement équivalente]] à $(P \Rightarrow Q) \land (Q \Rightarrow P)$.

| $P$ | $Q$ | $P \Leftrightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | VRAI |

### Exemples
- $(3<5) \Leftrightarrow (2=3)$ est FAUX car les deux [[enonce#propositions|propositions]] ont des valeurs différentes.
- $(2=3) \Leftrightarrow (3>5)$ est VRAI car les deux [[enonce#propositions|propositions]] sont FAUSSES : deux propositions fausses sont équivalentes.
