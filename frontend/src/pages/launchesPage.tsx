import { useQuery } from "@apollo/client";
import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { LaunchesDTO } from "../types/launchesDTO.type";
import { useNavigate } from "react-router-dom";
import { GET_ALL_LAUNCHES } from "../gql/query_launches";
import { LaunchType } from "../types/launch.type";

const LaunchesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState<number>();
  const [firstLoading, setFirstLoading] = useState(true);
  const [dataLaunches, setDataLaunches] = useState<LaunchesDTO>();
  const { loading, error, data } = useQuery<{ getAllLaunches: LaunchesDTO }>(
    GET_ALL_LAUNCHES,
    {
      variables: {
        page: currentPage,
        limit: 10,
      },
    }
  );
  const navigate = useNavigate();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setFirstLoading(false);
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data && data?.getAllLaunches !== dataLaunches) {
      setDataLaunches(data?.getAllLaunches);
      setCount(data?.getAllLaunches?.totalPages);
    }
  }, [data]);

  if (loading && firstLoading) {
    return <p>Loading... 🚀🚀🚀</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Typography variant="h4">🚀 SpaceX Project 🚀</Typography>
      <Container maxWidth="md">
        <Grid item xs={12} mt={2} lg={6} justifyContent="center">
          <Card variant="outlined">
            <List>
              <ListItem>
                <ListItem key={0}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ textDecoration: "underline" }}
                  >
                    <Grid item xs={4}>
                      <Typography>Name</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography>Flight number</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography>Date UTC</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </ListItem>
              {dataLaunches?.docs.map((launch: LaunchType) => (
                <ListItem key={launch.id}>
                  <ListItemButton
                    onClick={(_e) => {
                      navigate(`/launch/${launch.id}`);
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography>{launch.name}</Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <Typography>{launch.flight_number}</Typography>
                      </Grid>

                      <Grid item xs={4}>
                        <Typography>{launch.date_utc}</Typography>
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Grid container spacing={3} justifyContent="center" mt={4} mb={4}>
              <Pagination
                count={count}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </Grid>
          </Card>
        </Grid>
      </Container>
    </>
  );
};

export default LaunchesPage;
