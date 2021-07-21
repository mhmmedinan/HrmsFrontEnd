import React, { useEffect, useState } from "react";
import FavoriteJobAdvertService from "../../services/FavoriteJobAdvertService";
import { Card, Grid,Container,Button} from "semantic-ui-react";
import { toast } from "react-toastify";

export default function FavoriteJobAdvert() {
  const [favoriteJobAdverts, setFavoriteJobAdverts] = useState([]);
  let favoriteJobAdvertService = new FavoriteJobAdvertService();
  useEffect(() => {
    
    favoriteJobAdvertService
      .getByCandidateId(34)
      .then((result) => setFavoriteJobAdverts(result.data.data));
  },[]);

  const handleRemoveFavorite= (favoriteId) => {
    favoriteJobAdvertService.removeFavorite(favoriteId).then((result)=>{
        setFavoriteJobAdverts(favoriteJobAdverts.filter((favorite)=>favorite.id!==favoriteId))
        toast.success("Favorilerden kaldırıldı")
    }).catch((result)=>{
        toast.error("Kaldırılamadı")
    })
  }
  return (
  <div>
    <Container>
        <Card style={{ width: "690px",marginLeft:"200px" }} fluid color="purple">
            <Card.Content header="Favori İş İlanları"></Card.Content>
        </Card>
        <div style={{ marginLeft: "200px" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Card.Group>
              {favoriteJobAdverts?.map((favoriteJobAdvert) => (
                <Card fluid color="purple" key={favoriteJobAdvert.id}>
                  <Card.Content>
                    <Card.Header textAlign="left">
                      {favoriteJobAdvert.jobAdvert.jobTitle.title}
                    </Card.Header>
                    <Card.Meta textAlign="left">
                      {favoriteJobAdvert.jobAdvert.employer.companyName}
                    </Card.Meta>
                    <Card.Description
                      textAlign="left"
                      content={favoriteJobAdvert.jobAdvert.ofWorking.workTime}
                    />
                    <Card.Description
                      textAlign="left"
                      content={favoriteJobAdvert.jobAdvert.city.name}
                    />
                    <Card.Description
                      textAlign="right"
                      content={favoriteJobAdvert.jobAdvert.createDate}
                    />
                     <Card.Description
                      textAlign="left"
                    ><Button color="red" onClick={()=>handleRemoveFavorite(favoriteJobAdvert.id)}>Favorilerden Kaldır</Button></Card.Description>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
      </Container>
   
    </div>
  );
}
