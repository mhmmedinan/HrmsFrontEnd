import React,{ useState,useEffect} from 'react'
import { Card } from 'semantic-ui-react'
import JobAdvertService from '../../services/JobAdvertService';
export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
      },[])
    return (
        <div>
            <Card.Group>
                {jobAdverts.map((jobAdvert) => (
            <Card fluid color="purple" key={jobAdvert.id}> 
                <Card.Content >
                <Card.Header textAlign="left">{jobAdvert.title}</Card.Header>
                <Card.Meta textAlign="left">{jobAdvert.companyName}</Card.Meta>
                <Card.Description textAlign="left" content={jobAdvert.workTime}/>
                <Card.Description textAlign="left" content={jobAdvert.city}/>
                <Card.Description textAlign="right" content={jobAdvert.createDate}/>
                </Card.Content>
            </Card>
            ))}
            </Card.Group>
        </div>
    )
}
