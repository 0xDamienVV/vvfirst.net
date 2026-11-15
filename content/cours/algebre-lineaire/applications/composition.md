---
title: Composition
order: 8
---
Soit $f : E \to F$ et $g : F \to G$ deux [[application|applications]].
> [!definition] Définition
> La **composée** de $f$ par $g$ est l'application $g \circ f : E \to G$ définie par :
> $(g \circ f)(x) = g(f(x))$ pour tout $x \in E$.

>[!property] Remarque
> - Si $f$ et $g$ sont [[injectivite|injectives]], $g \circ f$ est injective.
> - Si $f$ et $g$ sont [[surjectivite|surjectives]], $g \circ f$ est surjective.
> - Si $g \circ f$ est injective, alors $f$ est injective.
> - Si $g \circ f$ est surjective, alors $g$ est surjective.
> - La composition est **associative** mais pas commutative en général.

> [!tip] Méthode : étudier une composée
> 1. Vérifier que l'image de $f$ est incluse dans l'ensemble de départ de $g$.
> 2. Calculer $g(f(x))$ en appliquant **d'abord $f$, puis $g$**.
> 3. Pour l'injectivité ou la surjectivité de $g \circ f$, utiliser les règles ci-dessus.
> 4. Sur des ensembles finis, dresser le tableau des images de $x$, puis $f(x)$, puis $g(f(x))$.

### Exemples
- Avec $f(x)=x+1$ et $g(x)=x^2$ sur $\mathbb{R}$, $g \circ f(x) = (x+1)^2$ mais $f \circ g(x) = x^2+1$ : la composition n'est PAS commutative, VRAI.
- $g \circ f$ peut être injective sans que $g$ le soit : avec $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto x$ et $g(x)=x^2$ sur $\mathbb{R}$, $g \circ f$ est injective alors que $g$ ne l'est pas : VRAI.
- $g \circ f$ peut être surjective sans que $f$ le soit : avec $f : \mathbb{R}_+ \to \mathbb{R}$, $x \mapsto x$ et $g(x)=x^2$ de $\mathbb{R}$ dans $\mathbb{R}_+$, $g \circ f$ est surjective alors que $f$ ne l'est pas : VRAI.

> [!warning] Attention
> $g \circ f$ se lit « $g$ rond $f$ » et applique **$f$ en premier**.
