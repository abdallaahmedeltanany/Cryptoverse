import React from "react";
import { Select, Row, Col, Typography, Avatar, Card } from "antd";
import moment from "moment/moment";
import { useGetCryptoNewsQuery } from "../Services/cryptoNewsApi";
import Loader from "./Loader";

const News = ({ simplified }) => {
  const {
    data: cryptoNews,
    isFetching,
    error,
  } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });
  return (
    <>
      <Loader />
    </>
  );
};

export default News;
