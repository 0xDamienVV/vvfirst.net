---
title: Application
order: 1
---
Soit $E$ et $F$ deux [[definition-ensemble|ensembles]].
> [!definition] Définition
> Une **application** $f : E \to F$ associe à **chaque** élément $x \in E$ **un unique** élément $f(x) \in F$.
> $E$ est l'ensemble de **départ**, $F$ l'ensemble d'**arrivée**.

>[!property] Remarque
> Deux applications $f, g : E \to F$ sont **égales** si elles ont les mêmes ensembles de départ et d'arrivée et si $f(x) = g(x)$ pour tout $x \in E$.
> Le **graphe** de $f$ est $\{(x, f(x)) \mid x \in E\} \subset E \times F$ (voir [[produit-cartesien|produit cartésien]]).

> [!tip] Méthode : vérifier qu'une relation définit une application
> 1. Vérifier que **tout** élément de $E$ a une image (aucun élément sans flèche).
> 2. Vérifier que cette image est **unique** (aucun élément avec deux flèches).
> 3. Vérifier que l'image appartient bien à $F$.

### Exemples
- $f : \mathbb{R} \to \mathbb{R}$, $x \mapsto \sqrt{x}$ n'est PAS une application car $\sqrt{-1}$ n'existe pas dans $\mathbb{R}$ (voir [[ensembles-de-nombres|ensembles de nombres]]).
- $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto \sqrt{x}$ est VRAIMENT une application : changer l'ensemble de départ suffit.
- $f : \mathbb{R} \to \mathbb{R}$, $x \mapsto x^2$ et $g : \mathbb{R} \to \mathbb{R}_+$, $x \mapsto x^2$ ne sont PAS égales car leurs ensembles d'arrivée diffèrent.
- Une relation où $\alpha$ est associé à la fois à $\beta$ et à $\gamma$ n'est PAS une application car l'image de $\alpha$ n'est pas unique.

> [!warning] Attention
> Une application n'est pas seulement une formule : l'ensemble de départ et l'ensemble d'arrivée font partie de sa définition.
