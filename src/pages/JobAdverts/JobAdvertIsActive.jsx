import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FavoriteJobAdvertService from "../../services/FavoriteJobAdvertService";
import JobAdvertService from "../../services/JobAdvertService";
import { Grid, Pagination, Card, Rating } from "semantic-ui-react";
import Filter from "../../layouts/Home/Filter";
import moment from "moment";

export default function JobAdvertIsActive() {
  const [jobAdverts, setJobAdverts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageSize] = useState(4);
  const [totalPageSize, setTotalPageSize] = useState(0);
  const [filterOption, setFilterOption] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getFilterAndPage(activePage, pageSize, filterOption)
      .then((result) => {
        setJobAdverts(result.data.data);
        setTotalPageSize(parseInt(result.data.message));
      });
  }, [filterOption, activePage, pageSize]);

  const handleFilterClick = (filterOption) => {
    if (filterOption.cityId.length === 0) {
      filterOption.cityId = null;
    }
    if (filterOption.jobTitleId.length === 0) {
      filterOption.jobTitleId = null;
    }
    if (filterOption.workTypeId.length === 0) {
      filterOption.workTypeId = null;
    }
    if (filterOption.workTimeId.length === 0) {
      filterOption.workTimeId = null;
    }

    setFilterOption(filterOption);
    setActivePage(1);
  };

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };

  let favoriteJobAdvertService = new FavoriteJobAdvertService();
  const handleAddFavorite = (jobAdvertId) => {
    favoriteJobAdvertService
      .addFavorite(34, jobAdvertId)
      .then((result) => {
        toast.success("Favorilere eklendi");
      })
      .catch((result) => {
        toast.error("Favorilerde var zaten");
      });
    }
    return (
      <div style={{ margin: "20px" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Filter clickEvent={handleFilterClick}></Filter>
            </Grid.Column>
            
            <Grid.Column width={9}>
            {jobAdverts.length>0?
              <Card.Group>
                
                {jobAdverts?.map((jobAdvert) => (
                  <Card fluid color="purple" key={jobAdvert.id}>
                    <Card.Content>
                      <Card.Header textAlign="left">
                        {jobAdvert.jobTitle.title}
                      </Card.Header>
                      <Card.Meta textAlign="left">
                        {jobAdvert.employer.companyName}
                      </Card.Meta>
                      <Card.Description
                        textAlign="left"
                        content={jobAdvert.ofWorking.workTime}
                      />
                      <Card.Description
                        textAlign="left"
                        content={jobAdvert.city.name}
                      />
                      <Card.Description
                        textAlign="right"
                        content={moment(jobAdvert.createDate).format("DD-MM-YYYY")}
                      />
                      <Card.Description textAlign="left">
                        <Rating
                          icon="star"
                          onRate={() => handleAddFavorite(jobAdvert.id)}
                        />
                      </Card.Description>
                    </Card.Content>
                  </Card>
                ))}
                <Pagination
                firstItem={null}
                lastItem={null}
                activePage={activePage}
                onPageChange={handlePageChange}
                totalPages={Math.ceil(totalPageSize / pageSize)}
                pointing
                secondary
              />
              </Card.Group>
              
              : <Card style={{ width: "690px",marginLeft:"100px" }} fluid color="purple">
              <Card.Content header="İş İlanı bulunamadı"></Card.Content>
          </Card>}
              
            
            </Grid.Column>
              
          </Grid.Row>
        </Grid>
      </div>
    );
  };

