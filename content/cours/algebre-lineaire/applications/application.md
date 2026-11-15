---
title: Application
order: 1
---
Soient $E$ et $F$ deux [[definition-ensemble|ensembles]].
> [!definition] Définition
> Une **application**, notée $f : E \to F$, associe à **chaque** élément $x \in E$ **un unique** élément $f(x) \in F$.  
> $E$ est l'ensemble de **départ**, $F$ l'ensemble d'**arrivée**.

> [!property] Propriété
> Deux applications $f, g : E \to F$ sont **égales** si elles ont les mêmes ensembles de départ et d'arrivée et si $f(x) = g(x)$ pour tout $x \in E$.

> [!warning] Application bien définie
> Pour qu'une relation définisse une application, tout élément de $E$ doit avoir une image, cette image doit être unique et elle doit appartenir à $F$.

### Exemples
- $f : \mathbb{R} \to \mathbb{R}$, $x \mapsto \sqrt{x}$ n'est PAS une application car $\sqrt{-1}$ n'existe pas dans $\mathbb{R}$.
- $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto \sqrt{x}$ est une application car changer l'ensemble de départ suffit.
- $f : \mathbb{R} \to \mathbb{R}$, $x \mapsto x^2$ et $g : \mathbb{R} \to \mathbb{R}_+$, $x \mapsto x^2$ ne sont PAS égales car leurs ensembles d'arrivée diffèrent.
- Une relation où $\alpha$ est associé à la fois à $\beta$ et à $\gamma$ n'est PAS une application car l'image de $\alpha$ n'est pas unique.
- $f : \mathbb{R} \to \mathbb{R}^2$, $x \mapsto (x^2, x-1)$ est une application car chaque réel $x$ a pour image un unique couple de $\mathbb{R}^2$.
