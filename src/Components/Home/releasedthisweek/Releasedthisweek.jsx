import { Carousel, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '../../../services/notifications';
import getnewreleases from '../homeApi';
import extractDataFromRequest, { carouselProps } from './helper';

function Releasedthisweek() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  async function getNewReleases() {
    let data = await getnewreleases({ limit: '20' });
    if (data.hasOwnProperty('error')) {
      notifications.error('Failed!', data?.error?.message);
      navigate("/panel/login");
    }
    else prepareData(data);
  }

  function prepareData(data = {}) {
    let modifiedRows = extractDataFromRequest(data);
    setData(modifiedRows);
  }


  useEffect(() => {
    getNewReleases();
  }, [])

  function renderBody() {
    return <Carousel {...carouselProps} >
      {
        data.map((element, index) => {
          return <div key={index}>
            <img src={element['images'][0]['url']} alt={element['name']} width={100} height={100} style={{ boxShadow: '0 0 5px black', borderRadius: '2%' }} />
            <div title={element['name']} style={{ wordBreak: 'break-all', maxWidth: '60px', }}><p>{element['name'].length > 20 ? element['name'].substring(0, 21) + '...' : element['name']}</p></div>
          </div>
        })
      }
    </Carousel>
  }

  // function renderBody() {
  //   return <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between', flexWrap: 'wrap', fontWeight: '5px' }}>{
  //     data.map((element, index) => {
  //       return <div>
  //         <img src={element['images'][0]['url']} alt={element['name']} width={100} height={100} style={{ boxShadow: '0 0 5px black', borderRadius: '2%' }} />
  //         <div style={{ wordBreak: 'break-all', maxWidth: '60px', }}><p>{element['name']}</p></div>
  //       </div>
  //     })
  //   }
  //   </div>
  // }

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Releasedthisweek