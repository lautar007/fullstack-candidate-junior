import JobPage from "./components/JobPage";
import NavBar from "./components/NavBar";
import axios from "axios";

const Index = ({empresa}) => (
  <div>
    <NavBar/>
    <JobPage
    empresa = {empresa}
    />
    <h1>
      Hello, Clipboard health!
    </h1>
  </div>
)

Index.getInitialProps = async() => {
  const data = await axios({
    method: "GET",
    url: 'http://localhost:3000/api/filters',
})

return {empresa: data.data}
}

export default Index
