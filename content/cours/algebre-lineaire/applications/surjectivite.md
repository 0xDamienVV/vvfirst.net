---
title: Surjectivité
order: 6
---
Soit $f : E \to F$ une [[application|application]].
> [!definition] Définition
> $f$ est **surjective** si tout élément de $F$ a au moins un antécédent :  
> $\forall y \in F,\ \exists x \in E,\ f(x) = y$.

> [!property] Propriété
> - $f$ est surjective $\Leftrightarrow f(E) = F$ (voir [[image-directe|image directe]]) $\Leftrightarrow$ tout $y \in F$ a **au moins un** [[antecedent|antécédent]].
> - $f$ n'est pas surjective $\Leftrightarrow \exists y \in F,\ \forall x \in E,\ f(x) \neq y$ (voir [[cours/algebre-lineaire/verite/quantificateurs#négation-des-quantificateurs|négation des quantificateurs]]).
> - Si $E$ et $F$ sont finis et $f$ surjective, alors $|E| \geq |F|$ (voir [[cardinal|cardinal]]).

Pour prouver la surjectivité, on fixe $y \in F$ et on résout $f(x)=y$ avec $x \in E$ ; pour la réfuter, il suffit d'un $y$ sans antécédent.  
On rend une application surjective en remplaçant l'ensemble d'arrivée par $f(E)$.

### Exemples
- $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}$ n'est PAS surjective car $-1$ n'a pas d'antécédent, mais $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}_+$ l'est.
- $x \mapsto \sin(x)$ de $\mathbb{R}$ dans $[-1, 1]$ est surjective sans être injective.
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ de $E=\{\alpha,\beta,\gamma,\delta\}$ dans $E$, $f$ n'est PAS surjective car $\beta$ n'a pas d'antécédent.
- $(x,y) \mapsto xy^2+1$ de $\mathbb{N}^2$ dans $\mathbb{N}$ n'est PAS surjective car la valeur est toujours $\geq 1$, donc $0$ n'a pas d'antécédent ; son image est $\mathbb{N}^*$ car $f(n-1,1)=n$ pour tout $n \geq 1$.
- $x \mapsto (x^2,\ \frac{x-1}{x^2+1})$ de $\mathbb{R}$ dans $\mathbb{R}^2$ n'est PAS surjective car la première coordonnée est toujours positive : $(-1,0)$ n'est pas atteint.
- $g : \mathbb{R}^2 \to \mathbb{R}$, $(u,v) \mapsto (u+1)v$ est surjective car pour tout $y \in \mathbb{R}$, $g(0,y)=y$.
- $x \mapsto \dfrac{x^2-1}{x-2}$ de $\mathbb{R}\setminus\{2\}$ dans $\mathbb{R}$ n'est PAS surjective car $y \in \operatorname{Im}(f)$ équivaut à l'existence d'une solution de $x^2-yx+2y-1=0$, soit à $y^2-8y+4 \geq 0$ (discriminant), et $y=4$ ne vérifie pas cette condition.
