---
title: Opérateurs Logiques
order: 2
---
>[!definition]
>Un **opérateur logique** est une opération qui agit sur une ou plusieurs [[enonce#propositions|propositions]] pour construire une nouvelle [[enonce#propositions|proposition]].  
>Sa valeur de vérité dépend uniquement des valeurs de vérité des [[enonce#propositions|propositions]] de départ.

# Négation
Soit $P$ une [[enonce#propositions|proposition]] quelconque.
> [!definition] Définition
> Notée $\neg P$ ou « non $P$ », la **négation** est un [[operateurs-logiques|opérateur logique]] qui renvoie la [[enonce#propositions|proposition]] opposée.  
> $\neg P$ est **VRAIE** exactement quand $P$ est **FAUSSE**.

| $P$ | $\neg P$ |
|:---:|:---:|
| VRAI | FAUX |
| FAUX | VRAI |

### Exemple
- $\neg(3=5)$ est VRAI car $3=5$ est FAUX.

# Conjonction
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.
> [!definition] Définition
> Notée $P \land Q$ ou « $P$ et $Q$ », la **conjonction** est un [[operateurs-logiques|opérateur logique]].  
> Elle est **VRAIE** exactement quand $P$ et $Q$ sont toutes deux **VRAIES**.

| $P$ | $Q$ | $P \land Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | FAUX |

### Exemple
- $(3=5) \land (4=4)$ est FAUX car le premier terme est FAUX.

# Disjonction
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.
> [!definition] Définition
> Notée $P \lor Q$ ou « $P$ ou $Q$ », la **disjonction** est un [[operateurs-logiques|opérateur logique]].  
> Elle est **VRAIE** exactement quand au moins l'une des deux [[enonce#propositions|propositions]] est **VRAIE**.

| $P$ | $Q$ | $P \lor Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | VRAI |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | FAUX |

### Exemple
- $(2=2) \lor (2>1)$ est VRAI car les deux propositions sont VRAIES.

> [!warning] Le « ou » mathématique est inclusif
> $P \lor Q$ est vrai lorsque $P$ et $Q$ sont vrais en même temps.  
> En langage naturel, le « ou » est souvent exclusif pour communiquer l'idée d'un choix, contrairement au « ou » mathématique.

# Implication
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.
> [!definition] Définition
> Notée $P \Rightarrow Q$ ou « si $P$ alors $Q$ », l'**implication** est un [[operateurs-logiques|opérateur logique]].  
> Elle est **FAUSSE** dans le seul cas où $P$ est **VRAIE** et $Q$ **FAUSSE**.  
> Elle est [[proprietes-logiques-remarquables|logiquement équivalente]] à $(\neg P) \lor Q$.

Dans $P \Rightarrow Q$, $P$ est l'**hypothèse** et $Q$ la **conclusion**. Voir aussi la [[implications-remarquables|réciproque et la contraposée]].

| $P$ | $Q$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | VRAI |

### Exemples
- $(3<5) \Rightarrow (2=3)$ est FAUX car l'hypothèse est vraie et la conclusion est fausse.
- $(2=3) \Rightarrow (3<5)$ est VRAI car une implication à hypothèse fausse est vraie par vacuité.

> [!warning] Le faux implique tout
> Si $P$ est fausse, alors $P \Rightarrow Q$ est vraie, quel que soit $Q$ : c'est une vérité par vacuité.  
> Cette règle est reliée au cas de l'ensemble vide : aucun élément ne peut constituer un contre-exemple.

# Équivalence
Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.
> [!definition] Définition
> Notée $P \Leftrightarrow Q$ ou « $P$ si et seulement si $Q$ », l'**équivalence** est un [[operateurs-logiques|opérateur logique]].  
> Elle est **VRAIE** quand $P$ et $Q$ ont la même valeur de vérité.  
> Elle est [[proprietes-logiques-remarquables|logiquement équivalente]] à $(P \Rightarrow Q) \land (Q \Rightarrow P)$.

| $P$ | $Q$ | $P \Leftrightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | VRAI |

### Exemples
- $(3<5) \Leftrightarrow (2=3)$ est FAUX car les deux propositions ont des valeurs différentes.
- $(2=3) \Leftrightarrow (3>5)$ est VRAI car les deux propositions sont FAUSSES.
