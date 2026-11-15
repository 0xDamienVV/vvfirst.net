---
title: Injectivité
order: 5
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **injective** si deux éléments distincts de $E$ ont des images distinctes :  
> $\forall x, x' \in E,\ f(x) = f(x') \Rightarrow x = x'$

> [!property] Propriété
> - Par [[cours/algebre-lineaire/verite/implications-remarquables#contraposée|contraposée]], $f$ est injective $\Leftrightarrow \forall x, x' \in E,\ x \neq x' \Rightarrow f(x) \neq f(x')$.
> - $f$ est injective $\Leftrightarrow$ tout $y \in F$ a **au plus un** [[antecedent|antécédent]] $\Leftrightarrow \forall x \in E,\ f^{-1}(\{f(x)\}) = \{x\}$.
> - $f$ n'est pas injective $\Leftrightarrow \exists x, x' \in E,\ x \neq x' \land f(x) = f(x')$ (voir [[cours/algebre-lineaire/verite/quantificateurs#négation-des-quantificateurs|négation des quantificateurs]]).
> - Si $E$ et $F$ sont finis et $f$ injective, alors $|E| \leq |F|$ et $|f(A)| = |A|$ pour tout $A \subset E$.

Pour prouver l'injectivité, on part de $f(x)=f(x')$ et on conclut $x=x'$ ; pour la réfuter, un contre-exemple suffit.  
Pour un couple $(f_1(x), f_2(x))$, l'égalité de deux couples équivaut à l'égalité des deux coordonnées.

### Exemples
- $x \mapsto x^2$ n'est PAS injective sur $\mathbb{R}$ car $f(-1) = f(1) = 1$, mais elle EST injective sur $\mathbb{R}_+$.
- $x \mapsto x^2+6x+7$ n'est PAS injective sur $\mathbb{R}$ car $f(-4) = f(-2) = 3$ (symétrie autour de $-3$).
- $x \mapsto \sin(x)$ n'est PAS injective sur $\mathbb{R}$ car $\sin(0) = \sin(2\pi)$ (périodicité).
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$, $f$ n'est PAS injective car $f(\beta)=f(\delta)$.
- $x \mapsto (2x+1,\ 2x+1)$ de $\mathbb{R}$ dans $\mathbb{R}^2$ est injective car l'égalité des couples donne $2x+1=2x'+1$, donc $x=x'$.
- $x \mapsto (x^2,\ 2x^2+1)$ de $\mathbb{R}$ dans $\mathbb{R}^2$ n'est PAS injective car $x$ et $-x$ ont la même image.
- $g : \mathbb{R}^2 \to \mathbb{R}$, $(u,v) \mapsto (u+1)v$ n'est PAS injective car $g(1,1)=g(0,2)=2$.
- $f(x)=\dfrac{x^2-1}{x-2}$ n'est PAS injective car $f(1)=f(-1)=0$.
- $f(x)=x^3-12x$ n'est PAS injective car $f(4)=f(-2)=16$.
