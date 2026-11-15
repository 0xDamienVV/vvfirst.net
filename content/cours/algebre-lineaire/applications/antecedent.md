---
title: Antécédent
order: 4
---
Soit $f : E \to F$ une [[application|application]] et $y \in F$.
> [!definition] Définition
> Un **antécédent** de $y$ par $f$ est un élément $x \in E$ tel que $f(x) = y$.  
> L'ensemble des antécédents de $y$ est $f^{-1}(\{y\})$ (voir [[image-reciproque|image réciproque]]).

> [!property] Propriété
> - Un élément $y \in F$ peut avoir **zéro, un ou plusieurs** antécédents, alors que $x \in E$ a **toujours exactement une** image.
> - Pour tout $x \in E$, $x \in f^{-1}(\{f(x)\})$.
> - $x' \in f^{-1}(\{f(x)\}) \Leftrightarrow f(x') = f(x)$ : on résout cette équation d'inconnue $x'$, en factorisant par $(x'-x)$, puis on discute selon la valeur de $x$.

### Exemples
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $y=4$ a deux antécédents ($-2$ et $2$), $y=0$ en a un seul et $y=-1$ n'en a aucun car $x^2=y$ n'a pas de solution réelle si $y<0$.
- Pour $f(x)=x^2+6x+7$ sur $\mathbb{R}$, $y$ a deux antécédents si $y>-2$, un seul si $y=-2$, aucun si $y<-2$ car $f(x)=y \iff (x+3)^2 = y+2$.
- Pour $f(x)=x^2$ sur $\mathbb{R}_+$, $y=4$ n'a qu'un antécédent car $-2 \notin \mathbb{R}_+$.
- Pour $f(x)=\dfrac{x}{x^2+1+x}$ sur $\mathbb{R}$, $f^{-1}(\{f(x)\})=\{x, \tfrac{1}{x}\}$ si $x \neq 0, \pm 1$ est VRAI car $f(x')=f(x) \iff (x'-x)(xx'-1)=0$.
- Pour $f(x)=(2x,\ 4x^2+1)$ sur $\mathbb{R}$, $f^{-1}(\{(u,v)\})=\{u/2\}$ si $v=u^2+1$ et $\varnothing$ sinon car $f(x)=(u,v) \iff x=u/2$ et $u^2+1=v$.
- Pour $f(x)=x^2$, $f^{-1}(\{f(x)\})=\{x,-x\}$ est identique à $\{x\}$ si $x=0$ car $0=-0$.
