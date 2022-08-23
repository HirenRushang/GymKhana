import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { excerciseOptions, fetchData, YouOptions } from "../utlis/fetchData";
const Detail = React.lazy(() => import("../components/detail/Detail"));
const ExcerciseVideo = React.lazy(() => import("../components/ExcerciseVideo/ExcerciseVideo"));




const ExcerciseDetail = () => {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExcerciseData = async () => {
      const excerciseDburl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const excerciseDetailData = await fetchData(
        `${excerciseDburl}/exercises/exercise/${id}`,
        excerciseOptions
      );
      
      setExcerciseDetail(excerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${excerciseDetailData.name} exercise`,
        YouOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExcerciseData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Suspense fallback={<div>Loading.....</div>}>
        <Detail excerciseDetail={excerciseDetail} />
      </Suspense>
      <Suspense fallback={<div>Loading.....</div>}>
        <ExcerciseVideo
          exerciseVideos={exerciseVideos}
          name={excerciseDetail.name}
        />
      </Suspense>
    </div>
  );
};

export default ExcerciseDetail;
