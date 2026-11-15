---
title: Racines
order: 2
---

# Définition
Soient $n \in \mathbb{N}^*$ et $x \in \mathbb{R}$ (voir [[puissances|puissances]]).
> [!definition] Définition
> - Si $n$ est **impair**, $\sqrt[n]{x}$ est l'unique réel $y$ tel que $y^n = x$.
> - Si $n$ est **pair** et $x \geq 0$, $\sqrt[n]{x}$ est l'unique réel **positif ou nul** $y$ tel que $y^n = x$.
>
> On pose aussi $x^{1/n} = \sqrt[n]{x}$ pour $x \geq 0$.

### Exemples
- $\sqrt[3]{-8} = -2$ car $(-2)^3 = -8$.
- $\sqrt{-1}$ n'existe pas dans $\mathbb{R}$ car un carré est positif.

# Racine d'une puissance
Soit $x \in \mathbb{R}$ (voir [[valeur-absolue|valeur absolue]]).
> [!property] Propriété
> $\sqrt[n]{x^n} = x$ si $n$ est impair  
> $\sqrt[n]{x^n} = |x|$ si $n$ est pair

### Exemple
- $\sqrt{(-3)^2} = |-3| = 3$ et non $-3$.

# Puissance d'une racine
Soit $x \geq 0$ (ou $x \in \mathbb{R}$ si $n$ est impair).
> [!property] Propriété
> $\left(\sqrt[n]{x}\right)^n = x$

### Exemple
- $\left(\sqrt{x+2}\right)^2$ est identique à $x + 2$ pour $x \geq -2$ car la racine est définie pour $x + 2 \geq 0$, alors que $\sqrt{(x+2)^2} = |x+2|$ est identique à $x + 2$ seulement pour $x \geq -2$ car $|u| = u \iff u \geq 0$.

# Produit et quotient
Soient $a, b \geq 0$.
> [!property] Propriété
> $\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}$  
> $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$ si $b > 0$

### Exemple
- $\sqrt{18} = \sqrt{9}\,\sqrt{2} = 3\sqrt{2}$ car on factorise le plus grand carré.

# Égalité d'expressions
> [!property] Propriété
> Pour comparer deux expressions avec racines, on fait apparaître $|x|$ (racine d'un carré) et on distingue $x > 0$ et $x < 0$ : l'égalité peut n'être vraie que sur une partie de $\mathbb{R}^*$.

### Exemples
- $\dfrac{1}{x}\sqrt{x^2 + x + 1}$ et $\sqrt{1 + \dfrac{1}{x} + \dfrac{1}{x^2}}$ sont égales pour $x > 0$ seulement car $\dfrac{1}{x}\sqrt{x^2+x+1} = \dfrac{|x|}{x}\sqrt{1 + \tfrac{1}{x} + \tfrac{1}{x^2}}$.
- $\operatorname{sgn}(x)\sqrt{x^6 + 1} = x^3\sqrt{1 + \dfrac{1}{x^6}}$ pour tout $x \neq 0$ car $x^3 = \operatorname{sgn}(x)\,|x|^3$ et $|x|^3\sqrt{1 + 1/x^6} = \sqrt{x^6 + 1}$.
- $\sqrt[3]{x^4 + x^3} = x\sqrt[3]{x + 1}$ pour tout $x$ car la racine cubique d'un produit se factorise pour tout réel.
- $\sqrt[3]{x + \dfrac{1}{x}} = \sqrt[3]{x}\,\sqrt[3]{1 + \dfrac{1}{x^2}}$ pour tout $x \neq 0$ car $x + \dfrac{1}{x} = x\left(1 + \dfrac{1}{x^2}\right)$ et la racine cubique n'a pas besoin de valeur absolue.
- $\left|\sqrt{x+2}\right|$ est identique à $\sqrt{|x+2|}$ pour $x \geq -2$ car les deux valent $\sqrt{x+2}$.
- $\sqrt{x^6} = x^2|x|$ pour tout $x$ car $\sqrt{x^6} = |x^3| = |x|^3$.
- $\sqrt[4]{x^2} = \sqrt{|x|}$ n'est égal à $\sqrt{x}$ que pour $x > 0$ car $\sqrt[4]{x^2} = \sqrt{\sqrt{x^2}} = \sqrt{|x|}$.
