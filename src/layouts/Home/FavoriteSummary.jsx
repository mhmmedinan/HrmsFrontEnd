import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown,Button } from "semantic-ui-react";
import FavoriteJobAdvertService from '../../services/FavoriteJobAdvertService';

export default function FavoriteSummary() {
    const [favoriteJobAdverts,setFavoriteJobAdverts]=useState([]);

    useEffect(()=>{
        let favoriteJobAdvertService = new FavoriteJobAdvertService();
        favoriteJobAdvertService.getByCandidateId(34).then(result=>setFavoriteJobAdverts(result.data.data))
    },[])

    return (
        <div>{favoriteJobAdverts.length>0&&
            <Dropdown item text="Favori İlanlar">
              <Dropdown.Menu>
                {
                  favoriteJobAdverts.map((favoriteJobAdvert)=>(
                    <Dropdown.Item key={favoriteJobAdvert.id}>
                      {favoriteJobAdvert.jobAdvert.jobTitle.title}
                    </Dropdown.Item>
                  ))
                }
                <Dropdown.Divider/>
                <Button color="purple" as={Link} to="/home/favoriteJobAdvert" >Favori İlanlara Git</Button>
              </Dropdown.Menu>
            </Dropdown>
            }
        </div>
    )
}
