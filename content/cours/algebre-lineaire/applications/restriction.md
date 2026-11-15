---
title: Restriction
order: 9
---
Soit $f : E \to F$ une [[application|application]] et $A \subset E$.
> [!definition] Définition
> La **restriction** de $f$ à $A$, notée $f_{|A}$, est l'application $f_{|A} : A \to F$, $x \mapsto f(x)$.  
> La **corestriction** de $f$ à $B$, avec $f(E) \subset B \subset F$, est l'application $E \to B$, $x \mapsto f(x)$.

> [!property] Propriété
> - Si $f$ est [[injectivite|injective]], $f_{|A}$ l'est aussi ; la réciproque est fausse en général.
> - $f_{|A}$ est injective $\Leftrightarrow \forall x \in A,\ A \cap f^{-1}(\{f(x)\}) = \{x\}$ : aucun autre élément de $A$ n'a la même image.
> - $f_{|A} : A \to f(A)$ est toujours [[surjectivite|surjective]] ; elle est donc [[bijection|bijective]] si et seulement si $f_{|A}$ est injective.

Pour rendre une application bijective, on restreint le départ à $A$ pour l'injectivité, puis on remplace l'arrivée par $f(A)$ pour la surjectivité.

### Exemples
- $x \mapsto x^2$ restreinte à $\mathbb{R}_+$ est injective car $x^2=x'^2$ avec $x,x' \geq 0$ donne $x=x'$.
- $f(x)=\dfrac{x}{x^2+x+1}$ est non injective sur $\mathbb{R}$ mais $f_{|[1,+\infty[}$ est injective car $f^{-1}(\{f(x)\})=\{x,\tfrac1x\}$ et $\tfrac1x \in\, ]0,1]$ n'appartient à $[1,+\infty[$ que si $x=1$.
- $f(x)=(2x,\ 4x^2+1)$ de $[0,+\infty[$ dans $f([0,+\infty[)=\{(u,v) \mid u\geq 0,\ v=u^2+1\}$ est bijective de réciproque $(u,v) \mapsto u/2$ car $u/2$ est l'unique antécédent de $(u,v)$.
- Si $f(a)=f(b)=1$ et $f(c)=2$ sur $E=\{a,b,c\}$, alors $f_{|\{a,c\}}$ est injective mais $f_{|E}$ ne l'est pas car $f(a)=f(b)$ avec $a \neq b$.
