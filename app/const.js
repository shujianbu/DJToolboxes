'use strict';

const TOPICS = [
  { value: '0',  label: '所有类别',        ch: '所有类别' },
  { value: '1',  label: 'Scraping',      ch: '网页爬虫' },
  { value: '2',  label: 'Charts',        ch: '图表组件' },
  { value: '3',  label: 'Data Analysis', ch: '数据处理' },
  { value: '4',  label: 'Rendering',     ch: '渲染引擎' }
];

const ORGS = [
  { value: '0',  label: '所有媒体',         en:'all',                     ch: '所有媒体' },
  { value: '1',  label: 'nytimes',         en:'The New York Times',          ch: '纽约时报' },
  { value: '2',  label: 'guardian',        en:'The Guardian',                ch: '英国卫报' },
  { value: '3',  label: 'nprapps',         en:'NPR',                         ch: '国家公共电台' },
  { value: '4',  label: 'propublica',      en:'ProPublica',                  ch: '' },
  { value: '5',  label: 'WSJ',             en:'The Wall Street Journal',     ch: '华尔街日报' },
  { value: '6',  label: 'washingtonpost',  en:'The Washington Post',         ch: '华盛顿邮报' },
  { value: '7',  label: 'BloombergMedia',  en:'Bloomberg Media',             ch: '彭博社' },
  { value: '8',  label: 'FiveThirtyEight', en:'Five Thirty Eight',           ch: '538' },
  { value: '9',  label: 'thomsonreuters',  en:'Thomson Reuters',             ch: '路透社' },
  { value: '10', label: 'TimeMagazine',    en:'Time Magazine',               ch: '时代' },
  { value: '11', label: 'newsapps',        en:'Chicago Tribune',             ch: '芝加哥论坛报' },
  { value: '12', label: 'huffpostdata',    en:'The Huffington Post',         ch: '赫芬顿邮报' },
  { value: '13', label: 'wnyc',            en:'WNYC',                        ch: '纽约公共广播电台' },
  { value: '14', label: 'datadesk',        en:'Los Angeles Times Data Desk', ch: '洛杉矶时报' },
  { value: '15', label: 'BuzzFeedNews',    en:'Buzz Feed',                   ch: '' },
  { value: '16', label: 'ajam',            en:'Al Jazeera America',          ch: '半岛电台美国' },
  { value: '17', label: 'voxmedia',        en:'Vox Media',                   ch: '' },
  { value: '18', label: 'censusreporter',  en:'Census Reporter',             ch: '' },
  { value: '19', label: 'dukechronicle',   en:'The Duke Chronicle',          ch: '' }
];

const TYPES = [
  { value: '0',  label: '编程语言' },
  { value: '1',  label: 'Java' },
  { value: '2',  label: 'Python' },
  { value: '3',  label: 'JavaScript' },
  { value: '4',  label: 'Ruby' },
  { value: '5',  label: 'C++' },
  { value: '6',  label: 'C#' }
];

export {TOPICS, ORGS, TYPES};