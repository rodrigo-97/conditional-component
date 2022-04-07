# Getting Started with If Else React component

This project it's a simple if else component for React

## Examples

instead you using conditions like this.

```jsx
    {
        1 === 1 ? <Component /> : <Component />
    }
```

or

```javascript
    {
        1 === 1 && <Component />
    }
```

you could use like this

```javascript
    <Conditional
        condition={1 === 1}
        ifTrueComponent={<p>Hi! I'm content for true value</p>}
        elseComponent={<p>Hello! I'm content for false value</p>} // this component is optional
    />
```

```javascript
    <Conditional
        condition={1 === 1}
        ifTrueComponent={<Component />}
    />
```

It's very simple and clean. I hope that you like 😉