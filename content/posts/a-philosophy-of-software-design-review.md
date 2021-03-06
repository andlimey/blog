---
title: "Book Review: A Philosophy of Software Design"
date: 2021-05-28T11:40:00+08:00
draft: false
tags: [book review]
---

I have tried reading several books on software engineering - Clean Code, The Pragmatic Programmer, Design Patterns, etc. However, I could never finish any of the books.

They were either:

-   Too lengthy or
-   Mostly taught you how to write better code, instead of how to think about writing better code.

This is not to say that those books are terrible. It's just that, they felt more like the second or third book you pick up after reading some first book. "A Philosophy of Software Design" was that first book for me.

The first half of the book imparts principles you can adopt when thinking about how to write better code, while the second half delves deeper into some of these principles, and is a little more opinionated.

---

## Here are some of my key takeaways from the book

### The Nature of Complexity

According to John, complexity is anything about the software that makes it difficult to modify and understand. It isn't caused by a single error. Instead, it accumulates in many small chunks.

I'm sure this is something that we have experienced in our projects. Due to tight deadlines, we rush out hacky fixes. Weeks later, in order to circumvent an issue caused by the hacky fix, we implement another hacky solution on top of it. The codebase eventually becomes a patchwork of hacky fixes. You're afraid that an unforeseen scenario will break everything, but so far the minimal test cases you've written passes...

He then goes on to elaborate on 3 intuitive symptoms of complexity:
Change Amplification

-   A seemingly simple change requires code modifications in many different places.

High Cognitive Load

-   A developer needs to spend a lot of time understanding the required information before he can make a change.

Unknown unknowns

-   It is not obvious which pieces of code need to be modified to complete the task.
-   This is possibly the worst symptom since there is something the developer needs to know but has no way of finding out.

After which, he explains the causes of complexity:
Complex Dependencies

-   Dependencies are a fundamental part of any software, and they can't really be eliminated. However, the problem is when the dependencies are complicated and non-obvious.

High Obscurity

-   This causes the unknown unknowns symptoms. Information that is pertinent is not immediately obvious to the developer.

### Strategic vs Tactical Programming

"Build fast, fail fast" is not uncommon in agile teams. However, John asserts that it is simply not enough to program tactically. i.e. Get features working asap.

As mentioned earlier, complexity is incremental. Tactical programming is a short-sighted approach that slowly contributes to the overall complexity of the system. John compares this to a logarithmic graph, it initially takes little time to get features out, but will eventually take a longer time, as the increasingly complex system makes it difficult to complete new features coming in.

Instead, he posits that programmers should program strategically. i.e. Invest time to produce clean designs. Working code isn't enough. The most important thing is the long-term structure of the system. While this may be more time-consuming at the start, it will pay off eventually as it would (theoretically) be easier to implement new features on a supposedly less complex system.

### Modules Should be Deep

John breaks down a module into 2 parts:

-   Interface
-   Implementation

He notes that modules with simple interfaces that abstract away complex functionalities help reduce the complexity of the system. He compares and contrasts the simple and powerful file I/O mechanism in Unix with the shallow and complex Java file system. This was something that didn't really occur to me, but it made me recall the problems I faced when I implemented shallow modules in some of my projects. This chapter was quite an eye-opener for me.

### Designing Things Twice

John explains that designing software is hard, and it is unlikely that our first design is the best.

New requirements may come in, or existing requirements may change. It is therefore imperative that we relook at our design:

-   Do our initial assumptions about the design hold true?
-   Do the new requirements affect the efficiency and complexity of the system?

---

## Concluding Thoughts

I have only gleaned the surface of what was written in the book. I highly recommend this book to engineers starting out in their careers. Even though it doesn't delve deeply into how to write better code, it does a good job of teaching you how to think about writing better code.
