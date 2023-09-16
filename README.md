# Course Registration

<h2>Features of this project:</h2>
<ol>
<li>User can select course by clicking select button</li>
<li>User can add multiple course whose total duration will be less than equal to 20</li>
<li>User cannot add same course more than one time</li>
<li>User can choose course by seeing the price and credit hours </li>
</ol>

<h2>How I manage state in this project</h2>
<li>Here while we fetching data using API, we put the data into a state to hold/store data for our future operation.</li>
<li>State in React is immutable. You should never directly modify the state; always use the provided functions (e.g., setState in class components or the setter function from useState in functional components).</li>
<li>When updating state based on the previous state, use the function form of setState to ensure correct updates, especially when dealing with asynchronous state updates.</li>
<li>In functional components, you can use multiple useState calls to manage multiple state variables.</li>
<li>For simpler projects, the useState hook is often sufficient, while more complex applications may benefit from using Redux or similar solutions.</li>
