import React, { FC, useEffect, useState } from 'react';
import { api } from '../../modal/utility';
import style from './article.module.scss';
import { Button } from '@mui/material';

export const Articles: FC = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getFetchArticles = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error('not ok');
      }
      const data = await response.json();
      setArticles(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFetchArticles();
  }, []);

  return (
    <>
      <Button variant="contained" onClick={getFetchArticles}>
        RELOAD
      </Button>
      {loading && <p>Loading....</p>}
      <div className={style.articles}>
        {!loading &&
          articles.map((el) => (
            <div className={style.item} key={el.id}>
              <img className={style.img} src={el.imageUrl} alt="icon" />
              <a href={el.url} target="_blank" rel="noreferrer">
                {el.newsSite}
              </a>
              <p>{el.title}</p>
            </div>
          ))}
      </div>
      {error && <p className={style.error}>{error}</p>}
    </>
  );
};
