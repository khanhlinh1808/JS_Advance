import _ from 'lodash';
import '../scss/style.scss';
import getDataApi from './getDataApi';
import dataLoader from './dataLoader';
import detailDataLoader from './detailDataLoader';


const URL = 'https://mocki.io/v1/ba3a5fe3-a4a9-4548-81d4-901726a1e0a9'
const LOADING_TIME = 1000;

getDataApi(URL, {}, LOADING_TIME)
    .then(dataLoader)
    .then(detailDataLoader)