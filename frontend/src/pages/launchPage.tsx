import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { LaunchType } from "../types/launch.type";
import Launch from "../components/launch";
import { GET_ONE_LAUNCH } from "../gql/query_launches";

const LaunchPage = () => {
  const { launchId } = useParams<{ launchId: string }>();
  const { loading, error, data } = useQuery<{ getOneLaunch: LaunchType }>(
    GET_ONE_LAUNCH,
    {
      variables: { launchId },
    }
  );

  if (loading) {
    return <p>Loading... 🚀🚀🚀</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const launch = data?.getOneLaunch;

  if (!launch) {
    return <p>No data found for this launch</p>;
  }

  return <Launch launch={launch} />;
};

export default LaunchPage;
