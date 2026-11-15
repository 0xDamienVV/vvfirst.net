---
title: Composition
order: 8
---
Soient $f : E \to F$ et $g : F \to G$ deux [[application|applications]].
> [!definition] Définition
> La **composée** de $f$ par $g$, notée $g \circ f$ (« $g$ rond $f$ »), est l'application $g \circ f : E \to G$ définie par :  
> $(g \circ f)(x) = g(f(x))$ pour tout $x \in E$.

> [!property] Propriété
> - Si $f$ et $g$ sont [[injectivite|injectives]], $g \circ f$ est injective.
> - Si $f$ et $g$ sont [[surjectivite|surjectives]], $g \circ f$ est surjective.
> - Si $g \circ f$ est injective, alors $f$ est injective.
> - Si $g \circ f$ est surjective, alors $g$ est surjective.
> - $\operatorname{Im}(g \circ f) = g(f(E)) \subset \operatorname{Im}(g)$.
> - $(g \circ f)^{-1}(B) = f^{-1}(g^{-1}(B))$ pour tout $B \subset G$.
> - La composition est **associative** mais pas commutative en général.

Pour calculer $g(f(x))$, on applique **d'abord $f$, puis $g$**, après avoir vérifié que $f(E)$ est inclus dans l'ensemble de départ de $g$.

### Exemples
- $g \circ f(x) = (x+1)^2$ est différent de $f \circ g(x) = x^2+1$ pour $f(x)=x+1$ et $g(x)=x^2$ car la composition n'est PAS commutative.
- $g \circ f$ est injective sans que $g$ le soit pour $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto x$ et $g(x)=x^2$ sur $\mathbb{R}$ car $g$ est injective sur $f(\mathbb{R}_+) = \mathbb{R}_+$.
- $g \circ f$ est surjective sans que $f$ le soit pour $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto x$ et $g(x)=x^2$ de $\mathbb{R}$ dans $\mathbb{R}_+$ car tout $y \geq 0$ vaut $g(\sqrt{y})$ avec $\sqrt{y} \in \mathbb{R}_+$.
- Pour $f(n)=n^2+1$ de $\mathbb{N}$ dans $\mathbb{N}^*$, $26$ a un unique antécédent par $f \circ f$ car $26=f(5)$ et $5=f(2)$, avec $(f\circ f)^{-1}(\{26\})=f^{-1}(f^{-1}(\{26\}))=f^{-1}(\{5\})=\{2\}$.
- Avec $f(x)=(x^2,\ \frac{x-1}{x^2+1})$ et $g(u,v)=(u+1)v$, $(g \circ f)(x)=x-1$ est VRAI car $(x^2+1)\cdot\frac{x-1}{x^2+1}=x-1$ ; $g \circ f$ est donc bijective de $\mathbb{R}$ dans $\mathbb{R}$, de réciproque $y \mapsto y+1$, alors que $g$ n'est pas injective.
- Si $f(\alpha)=s$ et $f(\beta)=u$ avec $f : E \to F$, alors $g : F \to E$ définie par $g(r)=\alpha$ et $g(y)=\beta$ pour $y \neq r$ vérifie $\operatorname{Im}(f \circ g)=\{s,u\}$ car $f(g(F))=\{f(\alpha),f(\beta)\}$.
