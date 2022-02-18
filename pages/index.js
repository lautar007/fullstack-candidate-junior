import JobPage from "./components/JobPage";
import NavBar from "./components/NavBar";
import axios from "axios";
import Footer from "./components/Footer";

const Index = ({filters, jobs}) => (
  <div>
    <NavBar/>
    <JobPage
    filters = {filters}
    jobs = {jobs}
    />
    <Footer/>
  </div>
)

Index.getInitialProps = async() => {
  const filters = await axios({
    method: "GET",
    url: 'http://fullstack-candidate-junior.vercel.app/api/filters',
})

const jobs = await axios({
  method: "GET",
  url: 'http://fullstack-candidate-junior.vercel.app/api/jobs',
})

return {filters: filters.data, jobs: jobs.data}
}

export default Index
