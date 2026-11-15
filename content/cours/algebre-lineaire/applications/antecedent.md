---
title: Antécédent
order: 4
---
Soit $f : E \to F$ une [[application|application]] et $y \in F$.
> [!definition] Définition
> Un **antécédent** de $y$ par $f$ est un élément $x \in E$ tel que $f(x) = y$.
> L'ensemble des antécédents de $y$ est $f^{-1}(\{y\})$ (voir [[image-reciproque|image réciproque]]).

>[!property] Remarque
> Un élément $y \in F$ peut avoir **zéro, un ou plusieurs** antécédents, alors que $x \in E$ a **toujours exactement une** image.

> [!tip] Méthode : trouver les antécédents de $y$
> 1. Poser l'équation $f(x) = y$ d'inconnue $x \in E$.
> 2. La résoudre (pour un trinôme : discriminant $\Delta = b^2 - 4ac$).
> 3. **Discuter selon $y$** : le nombre de solutions peut dépendre de $y$.
> 4. Ne garder que les solutions qui appartiennent à $E$.

### Exemples
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $y=4$ a deux antécédents ($-2$ et $2$), $y=0$ en a un seul et $y=-1$ n'en a aucun : VRAI.
- Pour $f(x)=x^2+6x+7$ sur $\mathbb{R}$, $f(x)=y \iff (x+3)^2 = y+2$, donc:  
$y$ a deux antécédents si $y>-2$, un seul si $y=-2$, aucun si $y<-2$ : VRAI.
- Pour $f(x)=x^2$ sur $\mathbb{R}_+$, $y=4$ n'a qu'un antécédent car $-2 \notin \mathbb{R}_+$.