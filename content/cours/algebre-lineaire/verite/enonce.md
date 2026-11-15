---
title: Énoncés
order: 1
---

> [!definition] Définition
> Un **énoncé** est une phrase en langage naturel ou symbolique qui a un sens précis et affirme quelque chose.

# Propositions
> [!definition] Définition
> Un **énoncé propositionnel**, ou **proposition**, est un énoncé dont on peut dire sans ambiguïté qu'il est strictement soit **VRAI**, soit **FAUX**.
> Les [[operateurs-logiques|opérateurs logiques]] permettent de construire de nouvelles [[enonce#propositions|propositions]] à partir de propositions existantes.

### Exemples
- « $2+2=4$ » est VRAI car $2+2$ vaut bien $4$.
- « $4=5$ » est FAUX car $4$ est différent de $5$.
- « J'ai chaud » n'est pas une proposition car la sensation dépend d'un ressenti subjectif.
- « Il fait chaud » n'est pas une proposition car le seuil définissant « chaud » n'est pas précisé : la phrase est vraie à $35$ °C et fausse à $5$ °C.
- « Il fait $37$ °C » n'est pas une proposition car ni le lieu ni la date ne sont précisés.
- « Il a fait $37$ °C à Shenzhen le 21 juin 2002 » est une proposition car le contexte est fixé, même si sa valeur de vérité nous est inconnue.

## Nommer une proposition
Nommer une proposition permet de la réutiliser : on note $T : 4=4$, et on peut alors dire que $T$ est VRAIE car $4$ est égal à $4$.

> [!warning] Auto-référence
> Un énoncé qui parle de lui-même ne définit pas nécessairement une proposition.
> L'énoncé $T$ : « $T$ est FAUX » ne peut recevoir de valeur de vérité cohérente : si $T$ est VRAI alors $T$ est FAUX, et si $T$ est FAUX alors $T$ est VRAI. Ce n'est donc pas une proposition.

# Prédicats
> [!definition] Définition
> Un **prédicat** est un énoncé contenant des variables indéterminées, qui devient une [[enonce#propositions|proposition]] quand on fixe ces variables ou qu'on les [[quantificateurs|quantifie]].

### Exemples
- « $x=3$ » est un prédicat car la variable $x$ n'est ni fixée ni [[quantificateurs|quantifiée]].
- « $x=3$ » donne deux propositions différentes selon la valeur de $x$ : VRAI pour $x=3$, FAUX pour $x=0$.
- « $x^2 \geq 0$ » est un prédicat : il ne devient la proposition VRAIE « $3^2 \geq 0$ » qu'une fois $x$ fixé à $3$.

## Nommer un prédicat
Comme les propositions, les prédicats peuvent être nommés : on note $T(x) : x < 3$, si bien que $T(1)$ est VRAI tandis que $T(5)$ est FAUX.
