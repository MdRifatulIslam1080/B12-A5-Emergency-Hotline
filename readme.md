Q.1:What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-1:

# getElementById → finds one element by its id.

# getElementsByClassName → finds many elements by their class name (and updates if DOM changes).

# querySelector → finds the first element that matches a CSS selector.

# querySelectorAll → finds all elements that match a CSS selector (but does not update if DOM changes).

Q.2:How do you create and insert a new element into the DOM?

Ans-2:

# To add a new element, I first create it with createElement(), then put some text inside it, and finally attach it to the page using appendChild() or similar.

Q.3:What is Event Bubbling and how does it work?

Ans-3:

# Event bubbling means when I click on an element, the event first happens on that element, then it automatically goes up to its parent, then grandparent, and so on until the top (document).

Q.4:What is Event Delegation in JavaScript? Why is it useful?

Ans-4:

# Event Delegation is when we put one event on the parent, and it handles the events of its child elements.

# It’s useful because we write less code, it works even if new child elements are added, and it’s faster than adding events to each child.

Q.5:What is the difference between preventDefault() and stopPropagation() methods?

Ans-5:

# preventDefault() → stops the browser’s default action (like a link opening or a form submitting).

# stopPropagation() → stops the event from going up the DOM (so it won’t bubble to parent elements).
