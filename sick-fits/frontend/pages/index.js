
const Home = props => (
    <div>
        <p>HEYYY THIS IS THE INDEX.JS PAGE</p>
    </div>
);

export default Home;

// THIS IS THE TRADITIONAL WAY OF DOING IT 
// BUT WE DONT NEED TO IMPORT REACT BECAUSE NEXT.JS DOES THAT
// AND WE DON"T NEED TO EXTEND IT TBH, NOT NEEDED FOR THIS
// import React from 'react';

// class Home extends React.Component {

//     render() {
//         return <p>Testing</p>
//     }
// }

// Nextjs does a lot of fancy stuff, whatever components
// you save in the pages folder it goes ahead and adds routing to it
// so without doing much you could go to /sell or /index without setting it up
// If you use the Link method from the next library you could navigate to the page
// without reloading, because it will use push state.
// Next.js also wraps all of the pages/components in their own APP component
// that's how you would be able to pass state from one component to the other 