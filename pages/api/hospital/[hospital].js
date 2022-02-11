import jobs from '../../../data/jobs.json'


export default async (req, res)=>{
    const detail = jobs.filter(job => job.name === req.query.hospital)
    res.statusCode = 200
    res.json({method:req.method, detalle:detail})
}