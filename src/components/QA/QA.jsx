import React from 'react';
import './QA.css';
const QA = () => {
    return (
        <div className='p-5 lg:px-16  ques-ans'>
            <h3 className='text-center text-2xl'>Question & Answer</h3>
            <div className='p-2 rounded m-2'>
                <h2 className='text-2xl font-semibold'>Props vs State</h2>
                <p>1. While props can be accessed from child components, states cannot be accessed by other components.</p>
                <p>2. States can change, props cannot (read only)</p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>How does useState work..?</h2>
                <p className='mt-3'>
                In this illustration, a state variable called count and a callback function called setCount are both created using the useState hook and may be used to change the state. The count variable's initial value is 0. When the button is pressed, setCount is called and the new count value is passed in. React updates the component's rendering to reflect the updated state value as a result.
                </p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>Purpose of useEffect()</h2>
                <p>After rendering our component, it enables us to run some code, for example, changing the DOM or obtaining data from an API.</p>
            </div>
            <div className='p-2  rounded m-2'>
                <h2 className='text-2xl font-semibold'>How does react works ?</h2>
                <p>By disassembling the UI into manageable, reusable components, React makes the process of creating user interfaces more straightforward. By only re-rendering components that have changed, React employs a virtual DOM to refresh the UI in an effective manner, providing a quick and responsive user experience.</p>
            </div>
        </div>
    );
}

export default QA;
