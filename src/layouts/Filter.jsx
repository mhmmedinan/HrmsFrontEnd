import React,{ useState,useEffect} from "react";
import { Segment, Checkbox} from "semantic-ui-react";
import CityService from "../services/CityService";

export default function Filter() {
    const [cities, setCities] = useState([]);

    useEffect(()=>{
        let cityService = new CityService()
        cityService.getCities().then(result=>setCities(result.data.data))
      },[])

  return (
    <div >
      <Segment as="h3">Şehir</Segment>
     
      <Segment.Group>
     
        <Segment>
       
       <select style={{width:"200px",height:"30px"}}>
       {cities.map((city)=>(
        <option key={city.id}>
            {city.name}
        </option>
        ))}
       </select>  
         
        </Segment>
       
      </Segment.Group>

      <div class="myBox">
        <Segment as="h3">Çalışma Şekli</Segment>
        <Segment.Group as="h3" attached="top">
          <Segment textAlign="left">
            <Checkbox label="Sürekli/Tam Zamanlı" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Yarı Zamanlı/Part Time" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Stajyer" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Serbest Zamanlı" />
          </Segment>
        </Segment.Group>
      </div>

      <div class="myBox">
        <Segment as="h3">Pozisyon</Segment>
        <Segment.Group as="h3" attached="top">
          <Segment textAlign="left">
            <Checkbox label="Yazılım Geliştirici" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Yazılım Uzmanı" />
          </Segment>
        </Segment.Group>
      </div>

      <Segment as="h3">Eğitim Seviyesi</Segment>
      <div class="myBox">
        <Segment.Group as="h3">
          <Segment textAlign="left">
            <Checkbox label="Doktora" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Yüksek Lisans" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Lisans" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Önlisans" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="Lise" />
          </Segment>
          <Segment textAlign="left">
            <Checkbox label="İlköğretim" />
          </Segment>
        </Segment.Group>
      </div>
    </div>
  );
}
