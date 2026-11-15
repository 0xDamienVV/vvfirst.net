---
title: Image directe
order: 2
---
Soit $f : E \to F$ une [[application|application]] et $A \subset E$.
> [!definition] Définition
> L'**image directe** de $A$ par $f$ est :  
> $f(A) = \{f(x) \mid x \in A\} \subset F$.  
> $f(E)$ s'appelle l'**image** de $f$, notée $\operatorname{Im}(f)$.

> [!property] Propriété
> - $y \in f(A) \Leftrightarrow \exists x \in A,\ f(x) = y$.
> - $f(A \cup B) = f(A) \cup f(B)$.
> - $f(A \cap B) \subset f(A) \cap f(B)$, sans égalité en général.
> - $|f(A)| \leq |A|$ si $A$ est fini.

### Exemples
- Si $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ et $A=\{\alpha,\beta,\delta\}$, alors $f(A)=\{\alpha,\gamma\}$ est VRAI car $\beta$ et $\delta$ ont la même image : $|f(A)| = 2 < 3 = |A|$ (voir [[cardinal|cardinal]]).
- $f([-2, 1]) = [0, 4]$ pour $f(x) = x^2$ est VRAI car le minimum $0$ est atteint à l'intérieur de l'intervalle et le maximum vient de $-2$.
- $f(\{-1\} \cap \{1\}) = \varnothing$ est différent de $f(\{-1\}) \cap f(\{1\}) = \{1\}$ pour $f(x) = x^2$ car l'inclusion peut être stricte.
- Pour $f : \mathbb{N} \to \mathbb{N}^*$, $n \mapsto n^2+1$, $f(A)=\{5,50,101\}$ donne $A=\{2,7,10\}$ car $f(2)=5$, $f(7)=50$, $f(10)=101$ et $n \mapsto n^2+1$ est strictement croissante sur $\mathbb{N}$, donc chaque valeur n'a qu'un seul antécédent.
- Pour $f(x) = (2x,\ 4x^2+1)$, $f(\mathbb{R}) = \{(u,v) \in \mathbb{R}^2 \mid v = u^2+1\}$ est VRAI car $(u,v) \in f(\mathbb{R})$ équivaut à l'existence d'une solution de $2x=u$ et $4x^2+1=v$, soit $x=u/2$ et $v=u^2+1$.
