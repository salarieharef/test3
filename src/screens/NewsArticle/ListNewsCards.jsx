import React from "react";
import { useNavigate } from "react-router-dom";
import { NewsCard } from "./NewsCard";
import NewsListSkeleton from "./NewsListSkeleton";
import DBError from "../../components/common/DataBaseErrors/DbError";

const ListNewsCards = ({ data, isLoading, status }) => {
  const navigate = useNavigate();
  if (isLoading) {
    <NewsListSkeleton />;
  }

  // console.log("props in ListNewsCards", data);

  return (
    <div className="container mx-auto justify-center flex flex-wrap  gap-6 p-3 lg:flex-row lg:flex-wrap">
      {status === "error" ? (
        <DBError />
      ) : status === "loading" ? (
        <NewsListSkeleton />
      ) : (data?.map((card, index) => {
        return (
          <NewsCard
            key={index}
            id={card.id}
            title={card.title}
            view={card.currentView}
            nameWriter={card.addUserFullName}
            description={card.miniDescribe}
            pic={card.currentImageAddressTumb ? card.currentImageAddressTumb : card.addUserProfileImage}
            isLiked={card.currentUserIsLike}
            isDisLiked={card.currentUserIsDissLike}
            onClick={() => navigate("/NewsArticle/menudetail/" + card.id)}
          />
        );
      }))}
    </div>
  );
  return (
    <div className="container mx-auto justify-center flex flex-wrap  gap-6 p-3 lg:flex-row lg:flex-wrap">
      {status === "error" ? (
        <DBError />
      ) : status === "loading" ? (
        <NewsListSkeleton />
      ) : (
        data?.pages?.map((page, index) => {
          <React.Fragment key={index}>
            {page?.map((card, index) => {
              return (
                <NewsCard
                  key={index}
                  id={card.id}
                  title={card.title}
                  view={card.currentView}
                  nameWriter={card.addUserFullName}
                  description={card.miniDescribe}
                  pic={card.currentImageAddressTumb}
                  isLiked={card.currentUserIsLike}
                  onClick={() => navigate("/NewsArticle/menudetail/" + card.id)}
                />
              );
            })}
            {console.log("dakhele react fragment", page, "status:", status)}
          </React.Fragment>;
        })
      )}
    </div>
  );
};

export { ListNewsCards };
