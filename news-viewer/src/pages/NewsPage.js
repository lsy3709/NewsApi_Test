import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
  const params = useParams();
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = params.category || 'all';

  // useEffect( () => {
  //     const titleElement = document.getElementsByTagName("title")[0];
  //     titleElement.innerHTML=`뉴스 -${params.category}`;
  //   },[params.category ] );

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
