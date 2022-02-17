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

export const getStaticProps = async() => {
  const filters = await axios({
    method: "GET",
    url: 'http://localhost:3000/api/filters',
})

const jobs = await axios({
  method: "GET",
  url: 'http://localhost:3000/api/jobs',
})

return {props: {filters: filters.data, jobs: jobs.data}}
}

export default Index
