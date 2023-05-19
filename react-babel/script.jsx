const rootEle = document.getElementById('root');

const root = ReactDOM.createRoot(rootEle);

const App = ({children}) => { 
    return <main className="main">
        <h1>This is the main app</h1>
        {children}
    </main>
 };

 function List() {
    return (
        <ul>
            <li>PHP</li>
            <li>Javascript</li>
            <li>HTML</li>
        </ul>
    );
 }


root.render(
    <>
        <App>
            <h2>My learning path</h2>
            <List />
        </App>
    </>
)
