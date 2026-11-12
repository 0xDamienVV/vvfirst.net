---
title: Opérateurs Logiques
order: 2
---

> [!definition] Définition
> Un **opérateur logique** est une opération qui agit sur une ou plusieurs [[enonce#propositions|propositions]] déjà existantes pour construire une nouvelle [[enonce#propositions|proposition]].  
> La valeur de vérité de la [[enonce#propositions|proposition]] obtenue dépend alors **uniquement** des valeurs de vérité des [[enonce#propositions|propositions]] de départ.

Soient $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques:

# Négation

>[!definition]
>Notée $\neg P$ ou « non $P$ », la **négation** est un **opérateur logique** qui renvoie la [[enonce#propositions|proposition]] opposée.  
>$\neg P$ est vrai exactement quand $P$ est FAUX.

| $P$ | $\neg P$ |
|:---:|:---:|
| VRAI | FAUX |
| FAUX | VRAI |

### Exemple
- $\neg (3 = 5)$ est VRAI

# Conjonction

>[!definition]
>Notée $P \land Q$ ou « $P$ et $Q$ », la **conjonction** est un **opérateur logique** qui renvoie une [[enonce#propositions|proposition]] de la nature suivante:  
>$P \land Q$ est VRAI exactement quand $P$ et $Q$ sont tous les deux VRAI.

| $P$ | $Q$ | $P \land Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | FAUX |

### Exemple
- $(3=5) \land (4=4)$ est FAUX

# Disjonction
>[!definition]
>Notée $P \lor Q$ ou « $P$ ou $Q$ », la **disjonction** est un **opérateur logique** qui renvoie une [[enonce#propositions|proposition]] de la nature suivante:  
>$P \lor Q$ est VRAI exactement quand au moins l'un des deux est VRAI.

| $P$ | $Q$ | $P \lor Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | VRAI |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | FAUX |

### Exemple
- $(2 = 2) \lor (2 > 1)$ est VRAI

> [!warning] Le « ou » mathématique est inclusif
> $P \lor Q$ est aussi vrai quand $P$ et $Q$ sont vrais en même temps.  
> En langage naturel, le « ou » est souvent exclusif, de sorte à communiquer l'idée d'un choix, ce qui n'est pas le cas en mathématiques.

# Implication
>[!definition]
>Notée $P \Rightarrow Q$ ou « si $P$ alors $Q$ », l'**implication** est un **opérateur logique** qui renvoie une [[enonce#propositions|proposition]] de la nature suivante:  
>$P \Rightarrow Q$ n'est FAUX que dans un seul cas : $P$ VRAI et $Q$ FAUX.  
>Cette proposition est logiquement équivalente à $(\neg P) \lor Q$.

Dans $P \Rightarrow Q$, $P$ est l'**hypothèse** et $Q$ la **conclusion**.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | VRAI |
| FAUX | FAUX | VRAI |

### Exemples
- $(3 < 5) \Rightarrow (2 = 3)$ est FAUX
- $(2 = 3) \Rightarrow (3 < 5)$ est VRAI

> [!warning] Le faux implique tout
> Si $P$ est faux, alors $P \Rightarrow Q$ est vrai, quel que soit $Q$ : c'est une vérité par vacuité.  
> L'implication ne dit rien de $Q$ quand l'hypothèse n'est pas remplie. Elle affirme seulement qu'on ne peut pas avoir $P$ vrai et $Q$ faux.

# Équivalence
On note $P$ et $Q$ deux [[enonce#propositions|propositions]] quelconques.

>[!definition]
>Notée $P \Leftrightarrow Q$ ou « $P$ si et seulement si $Q$ », l'**équivalence** est un opérateur logique qui renvoie une [[enonce#propositions|proposition]] de la nature suivante:  
>$P \Leftrightarrow Q$ est VRAI quand $P$ et $Q$ ont **la même** valeur de vérité.  
>Cette proposition est logiquement équivalente à $(P \Rightarrow Q) \land (Q \Rightarrow P)$.

| $P$ | $Q$ | $P \Leftrightarrow Q$ |
|:---:|:---:|:---:|
| VRAI | VRAI | VRAI |
| VRAI | FAUX | FAUX |
| FAUX | VRAI | FAUX |
| FAUX | FAUX | VRAI |

### Exemples
- $(3 < 5) \Leftrightarrow (2 = 3)$ est FAUX
- $(2 = 3) \Leftrightarrow (3 > 5)$ est VRAI
