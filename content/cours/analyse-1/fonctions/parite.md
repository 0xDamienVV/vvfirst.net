---
title: Parité
order: 2
---

# Fonction paire et impaire
Soit $f$ une [[fonction-reelle|fonction réelle]] définie sur un domaine $D$ **symétrique** par rapport à $0$.
> [!definition] Définition
> - $f$ est **paire** si $f(-x) = f(x)$ pour tout $x \in D$ : son graphe est symétrique par rapport à l'axe des ordonnées.
> - $f$ est **impaire** si $f(-x) = -f(x)$ pour tout $x \in D$ : son graphe est symétrique par rapport à l'origine.

### Exemples
- $x \mapsto x|x|$ (voir [[valeur-absolue|valeur absolue]]) est impaire car $(-x)|-x| = -x|x|$.
- $x \mapsto |\sin x| + \cos(\sqrt{2}x)$ est paire car chaque terme est pair.
- $x \mapsto x(x^2 + px + q)$ est impaire si $p = 0$ et ni paire ni impaire si $p \neq 0$ car le terme $px^2$ est pair.
- $x \mapsto E(\sin x)$ (partie entière, voir [[fonction-reelle|fonction réelle]]) n'est ni paire ni impaire car, pour $\sin x = \tfrac{1}{2}$, $E(\sin x) = 0$ mais $E(\sin(-x)) = E(-\tfrac{1}{2}) = -1$.
- $x \mapsto \tan^2\left(\dfrac{2}{x} + x\sqrt{|x|}\right)$ est paire car l'argument est impair et $\tan^2$ est paire.

# Décomposition
Soit $f$ définie sur un domaine symétrique par rapport à $0$.
> [!property] Propriété
> $f = p + i$ avec $p(x) = \dfrac{f(x) + f(-x)}{2}$ paire et $i(x) = \dfrac{f(x) - f(-x)}{2}$ impaire.

### Exemple
- Pour $f(x) = x^2 + x$ : $p(x) = x^2$ et $i(x) = x$ car on isole les puissances paires et impaires.
