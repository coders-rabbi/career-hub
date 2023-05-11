import React from 'react';

const Blog = () => {
    return (
        <div className='text-left divide-y mt-10'>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-3'>When should you use context API?</h1>
                <p className='text-xl text-secondary'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-3'>What is a custom hook?</h1>
                <p className='text-xl text-secondary'>A custom hook is a JavaScript function that starts with the prefix "use" and allows you to encapsulate and reuse stateful logic in your React components. Custom hooks allow you to extract common logic from your components and reuse it across different parts of your application, making your code more reusable and maintainable.

                    Custom hooks can be used to abstract away complex stateful logic such as fetching data from APIs, handling form input, or setting up subscriptions to data sources. By encapsulating this logic in a custom hook, you can reuse it across multiple components without having to duplicate code.

                    To create a custom hook, you can use the existing React hooks such as useState, useEffect, useContext, etc., and combine them with your custom logic. For example, a custom hook for fetching data from an API could use the useState and useEffect hooks to manage the loading state and data fetching logic, respectively.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-3'>What is useRef?</h1>
                <p className='text-xl text-secondary'>In React, useRef is a hook that provides a way to create a mutable reference to a DOM element or a value that persists across component renders. useRef returns an object with a single property current, which initially is set to the provided argument, but can be changed throughout the component's lifecycle.

                    While useRef is commonly used for accessing DOM nodes and managing focus, it can also be used to store any mutable value, such as a counter or a flag.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-3'>What is useMemo?</h1>
                <p className='text-xl text-secondary'>In React, useMemo is a hook that can be used to memoize the result of a function, preventing unnecessary re-computations on subsequent renders. useMemo returns a memoized value, which is re-computed only when one of its dependencies changes.

                    Memoization is a technique for optimizing expensive computations by caching the result of a function based on its input arguments. If the same function is called with the same input arguments again, the cached result can be returned instead of re-computing the function.

                    useMemo takes two arguments: a function that returns a value, and an array of dependencies. The memoized value is recalculated whenever any of the dependencies change. If none of the dependencies have changed since the last render, the memoized value is returned from cache.</p>
            </div>
        </div>
    );
};

export default Blog;