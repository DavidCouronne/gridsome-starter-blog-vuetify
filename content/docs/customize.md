---
title: Customize
author: David Couronné
description: Customize gridsome starter blog vuetify
date: 2020-02-23
---

# Customize

## Working with TikZ or PsTricks

In `sample-tikz.tex`:

```latex
\documentclass{article}
\usepackage{tikz}
\begin{document}
  \begin{tikzpicture}
  \draw[thick,rounded corners=8pt] (0,0) -- (0,2) -- (1,3.25)
   -- (2,2) -- (2,0) -- (0,2) -- (2,2) -- (0,0) -- (2,0);
  \end{tikzpicture}
\end{document}
```

will produce `sample-tikz.md` and `sample-tikz-0.jpg`
