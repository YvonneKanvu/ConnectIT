const API_URL = 'http://localhost:3003';

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/data`);
  const data = await response.json();
  return data;
};
function App() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        const result = await fetchData();
        setData(result);
      };
  
      getData();
    }, []);
  
    return (
      <div className="App">
        <h1>Frontend-Backend Integration</h1>
        {data ? <p>{data.message}</p> : <p>Loading...</p>}
      </div>
    );
  }
  
  export default App;