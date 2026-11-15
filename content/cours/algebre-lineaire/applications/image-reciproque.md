---
title: Image réciproque
order: 3
---
Soit $f : E \to F$ une [[application|application]] et $B \subset F$.
> [!definition] Définition
> L'**image réciproque** de $B$ par $f$ est :  
> $f^{-1}(B) = \{x \in E \mid f(x) \in B\} \subset E$.

> [!property] Propriété
> - $f^{-1}(B) = \displaystyle\bigcup_{y \in B} f^{-1}(\{y\})$.
> - $f^{-1}(B \cup C) = f^{-1}(B) \cup f^{-1}(C)$ et $f^{-1}(B \cap C) = f^{-1}(B) \cap f^{-1}(C)$.
> - $f^{-1}(\complement_F B) = \complement_E f^{-1}(B)$.
> - $f(f^{-1}(B)) = B \cap f(E)$.
> - $A \subset f^{-1}(f(A))$ pour tout $A \subset E$, sans égalité en général.

> [!warning] Notation
> La notation $f^{-1}(B)$ existe **même si $f$ n'est pas bijective** : ce n'est pas l'application réciproque, qui n'existe que pour une bijection.

### Exemples
- Avec $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ et $A=\{\alpha,\beta,\delta\}$, $f^{-1}(A)=\{\beta,\gamma,\delta\}$ est VRAI car $\gamma \in f^{-1}(A)$ alors que $\gamma \notin A$.
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $f^{-1}([-4,-1]) = \varnothing$ est VRAI car un carré n'est jamais négatif.
- Pour $f(x)=x^2$ sur $\mathbb{R}$, $f^{-1}(\{4\}) = \{-2, 2\}$ est VRAI car l'image réciproque d'un singleton peut avoir deux éléments.
- Pour $f(x)=x^2$, $f(f^{-1}([-1,4])) = [0,4]$ est identique à $[-1,4] \cap f(\mathbb{R})$ car $f(f^{-1}(B)) = B \cap f(E)$.
- Si $f(1)=f(2)=a$, $f(3)=b$, $f(4)=c$ de $\{1,2,3,4\}$ dans $\{a,b,c\}$ et $B=\{a\}$, alors $f^{-1}(\complement_F B)=\{3,4\}$ est identique à $\complement_E f^{-1}(B)$ car $f^{-1}(B)=\{1,2\}$.
- Pour $f(\alpha)=\gamma$, $f(\beta)=\alpha$, $f(\gamma)=\delta$, $f(\delta)=\alpha$ et $A=\{\alpha,\beta\}$, $f^{-1}(f(A)) = \{\alpha,\beta,\delta\} \neq A$ est VRAI car $\delta$ a la même image que $\beta$.
